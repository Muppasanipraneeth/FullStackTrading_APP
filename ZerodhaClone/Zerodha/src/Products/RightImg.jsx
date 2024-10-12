import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";

const RightImg = ({ imageSrc, title, description, exploreLink }) => {
  return (
    <>
      <div className="flex w-full h-screen">
        

        <div className="w-1/2 flex flex-col justify-center ml-14">
          <h1 className="text-4xl font-bold mb-5">{title}</h1>
          <p className="text-xl mb-8">{description}</p>

          <div className="m-5 flex">
            <a
              href={exploreLink}
              className="text-blue-600 text-xl hover:text-black flex items-center"
            >
              {exploreLink} <FaArrowRightLong className="ml-2" />
            </a>
        
          </div>
          </div>

        <div className="w-1/2 flex justify-center items-center">
          <img src={imageSrc} className="w-[570px]" alt={title} />
        </div>
       
      </div>
    </>
  );
};

// Prop validation with PropTypes
RightImg.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  exploreLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
};

export default RightImg;
