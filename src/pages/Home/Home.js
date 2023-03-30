import Slide from "./../../component/Slide/Slide";
import Banner from './../../component/Banner/Banner';
import Space from './../../component/Space/Space';
import Greeting from "./../../component/Greeting/Greeting";

function Home() {
  return (
    <>
      <Slide />
      <Space/>
      <Banner/>
      <Space/>
      <Greeting/>
    </>
  );
}

export default Home;
