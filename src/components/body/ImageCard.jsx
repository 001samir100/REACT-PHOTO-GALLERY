import PropTypes from "prop-types"; // ES6
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BiSolidUserCircle } from "react-icons/bi";
import { PiHeart } from "react-icons/pi";

const ImageCard = ({ details }) => {
	return (
		<div
			className="hover:cursor-pointer"
			onClick={() => {
				window.open(`${details.src.original}`, "_blank");
			}}
		>
			{/* <Suspense fallback={<ImageSkeleton />}> */}
			<PiHeart className="ml-3 absolute mt-3 text-white text-1xl font-bold"></PiHeart>
			<LazyLoadImage
				className="w-full block object-fill rounded-2xl"
				src={details.src.original}
				alt={details.alt}
				effect="black-and-white"
			></LazyLoadImage>
			{/* {!isLoaded && <ImageSkeleton />} */}
			<span className="font-bold">{details.alt}</span>
			<span className="flex items-center">
				<BiSolidUserCircle /> {details.photographer}
			</span>
			{/* </Suspense> */}
		</div>
	);
};

ImageCard.propTypes = {
	details: PropTypes.object,
};

export default ImageCard;
