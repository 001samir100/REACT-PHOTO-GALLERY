import { BiSolidImage } from "react-icons/bi";
const ImageSkeleton = () => {
	return (
		<div className=" rounded-md w-[30%] h-[30%] ">
			<div className="animate-pulse w-full h-full">
				<BiSolidImage className="text-light_orange w-full h-full"></BiSolidImage>
			</div>
		</div>
	);
};

export default ImageSkeleton;
