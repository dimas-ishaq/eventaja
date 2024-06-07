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
                   image : user.avatar,
                   position: user.position
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
          session.user.name = newUser.name
          session.user.position = newUser.position

          return session
        },
    },
    secret : process.env.NEXTAUTH_SECRET,
    debug : process.env.NODE_ENV === 'development'
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}