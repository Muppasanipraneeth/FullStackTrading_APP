import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
import Appstore from "../assets/appstoreBadge.svg"
import PlayStore from "../assets/googlePlayBadge.svg";
const LeftImg = ({ imageSrc, title, description, exploreLink, demoLink }) => {
  return (
    <>
      <div className="flex w-full h-screen">
        {/* Left Section - Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img src={imageSrc} className="w-[570px]" alt={title} />
        </div>

        {/* Right Section - Text */}
        <div className="w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-5">{title}</h1>
          <p className="text-xl mb-8">{description}</p>

          <div className="m-5 flex">
            <a
              href={exploreLink}
              className="text-blue-600 text-xl hover:text-black flex items-center"
            >
              Explore our Products <FaArrowRightLong className="ml-2" />
            </a>
            <a
              href={demoLink}
              className="text-blue-600 text-xl ml-10 hover:text-black flex items-center"
            >
              Try Kite Demo <FaArrowRightLong className="ml-2" />
            </a>
          </div>
          <div className="flex">
            <img src={PlayStore} className="w-[150px] m-5"></img>
            <img src={Appstore} className="w-[150px] m-5"></img>

          </div>
        </div>
      </div>
    </>
  );
};

// Prop validation with PropTypes
LeftImg.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  exploreLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
};

export default LeftImg;
