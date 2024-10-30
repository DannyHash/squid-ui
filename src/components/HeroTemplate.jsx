import logo from "../assets/logo.svg";
import gradientVector from "../assets/gradientVector.svg";

const HeroTemplate = () => {
  return (
    <div className="relative flex flex-col items-center mt-16 lg:mt-24">
      <img
        src={gradientVector}
        alt="gradient-vector"
        className="translate-y-[70%]"
      />
    </div>
  );
};

export default HeroTemplate;
