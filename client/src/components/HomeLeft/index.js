import imgTwitterBird from "./twitter-bird.png";
import HomeInfoBox from "../HomeInfoBox";

export default function Left() {
  const bgImgProps = {
    backgroundImage: `url(${imgTwitterBird})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
  };

  return (
    <div style={bgImgProps} className={"w-1/2 flex justify-center items-center bg-blue-twitter"}>
      <HomeInfoBox />
    </div>
  );
}