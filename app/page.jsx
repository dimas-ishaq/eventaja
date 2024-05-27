import Jumbotron from '@/components/homepage/jumbotron';
import About from '@/components/homepage/about';
import Services from '@/components/homepage/services';
import HowTo from '@/components/homepage/howto';
import Testimoni from '@/components/homepage/testimoni';
import Blog from '@/components/homepage/Blog';
import Subscribetion from '@/components/homepage/subscribetion/Index';
import Faq from '@/components/faq';
import Container from '@/components/container';

export default function Home() {
  return (
    <>
      <Jumbotron />
      <About />
      <Services />
      <HowTo />
      <Testimoni />
      <Blog />
      <div className="flex w-full justify-center">
        <Container>
          <Faq />
        </Container>
      </div>
      <Subscribetion />
    </>
  );
}
