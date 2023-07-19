import ImageCard from "./ImageCard";
import PropTypes from "prop-types"; // ES6
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ResponsiveBody = ({ data }) => {
	return (
		<>
			<ResponsiveMasonry
				className="w-full flex flex-row p-6"
				columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
			>
				<Masonry
					gutter="20px"
					// className=" w-full flex-auto justify-center items-center"
				>
					{data.length > 0 ? (
						data.map((item) => <ImageCard key={item.id} details={item} />)
					) : (
						<div className="w-full text-1xl text-green-500 font-bold">
							Try using searchbar
						</div>
					)}
				</Masonry>
			</ResponsiveMasonry>
		</>
	);
};

ResponsiveBody.propTypes = {
	data: PropTypes.array, // array of objects with id and url properties for each card in
};

export default ResponsiveBody;
