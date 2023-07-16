import { Suspense, useState } from "react";
import PropTypes from "prop-types"; // ES6
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageSkeleton from "../skeleton/ImageSkeleton";

const ImageCard = ({ details }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	const handleImageLoad = () => {
		setIsLoaded(true);
	};

	return (
		<Suspense fallback={<ImageSkeleton />}>
			<div className="">
				<LazyLoadImage
					className="w-full block object-fill rounded-2xl"
					src={details.src.original}
					alt={details.alt}
					afterLoad={handleImageLoad}
				/>
				{/* {!isLoaded && <ImageSkeleton />} */}
			</div>
		</Suspense>
	);
};

ImageCard.propTypes = {
	details: PropTypes.object,
};

export default ImageCard;
