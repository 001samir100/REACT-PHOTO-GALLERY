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
<<<<<<< HEAD
=======

/* <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				<p>Noteworthy technology acquisitions 2021</p>
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				<p>
					Here are the biggest enterprise technology acquisitions of 2021 so
					far, in reverse chronological order.
				</p>
			</p> */

// <Card className="min-w-[20%] max-w-sm flex flex-row flex-auto" href="#">
// 	<img src="https://images.pexels.com/photos/17490386/pexels-photo-17490386/free-photo-of-a-portrait-of-a-woman-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
// </Card>
>>>>>>> Responsive_Body_Layout
