import Jumbotron from '@/components/homepage/jumbotron';
import About from '@/components/homepage/about';
import Services from '@/components/homepage/services';
import HowTo from '@/components/homepage/howto';
import Testimoni from '@/components/homepage/testimoni';
import Blog from '@/components/homepage/Blog';
import Question from '@/components/homepage/question';
import Subscribetion from '@/components/homepage/subscribetion/Index';

export default function Home() {
  return (
    <>
      <Jumbotron />
      <About />
      <Services />
      <HowTo />
      <Testimoni />
      <Blog />
      <Question />
      <Subscribetion />
    </>
  );
}
