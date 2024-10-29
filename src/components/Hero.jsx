import ellipse3 from "../assets/ellipse3.svg";
import ellipse13 from "../assets/ellipse13.svg";
import ellipse14 from "../assets/ellipse14.svg";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center mt-6 lg:mt-5">
      <img src={ellipse13} alt="ellipse" />
      <img
        src={ellipse14}
        alt="ellipse"
        className="absolute left-[-100px] translate-y-[150%]"
      />
      <img
        src={ellipse3}
        alt="ellipse"
        className="absolute right-[-100px] translate-y-[180%]"
      />
      <h1 className="text-4xl sm:text-6xl lg:text-5xl text-center tracking-wide font-bold">
        Beautiful Landing PageDesign for You
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        A good design is not only aesthetically pleasing, but also functional.
        It should be able to solve the problem{" "}
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className="download-gradient">
          Download Template
        </a>
      </div>
    </div>
  );
};

export default Hero;
