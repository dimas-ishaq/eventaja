import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { supabase } from "@/utils/conections/supabase";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: {label : 'username', type: "text"},
                password: {label: "password",type : "password"},
            },
            async authorize(credentials,req) {

               console.log(credentials);
               if(credentials.username === "" || credentials.password === "") {
                   console.log('gagal');
                   return null;
               }

               const res = await supabase.from('tbl_user').select()
               .eq('username',credentials.username).single()
               
               console.log(res);
               let user = res.data

               if(!user) {
                   console.log('gagal temukan user');
                   return null;
               }

               console.log('user',user);

               //cek password valid
               if (user.password !== credentials.password) {
                    return null
               }
               user = {
                   name : user.fullname,
                   email : user.username,
                   image : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fuser-profile&psig=AOvVaw1J612v_XlSPTC8HIG6CpV2&ust=1717574842922000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCB0P--wYYDFQAAAAAdAAAAABAE',
                   role: user.role
               }
               return user;
            }
        })
    ],
    pages : {
        signIn : '/login'
    },
    session: {
        strategy : "jwt",
    },
    callbacks: {
       
        async session({ session, user, token }) {
          const {data : newUser} = await supabase.from('tbl_user').select().eq('username',token.email).single();
          session.user.id = newUser.id

          return session
        },
    },
    secret : process.env.NEXTAUTH_SECRET,
    debug : process.env.NODE_ENV === 'development'
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}