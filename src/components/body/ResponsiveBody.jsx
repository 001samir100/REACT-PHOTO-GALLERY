import ImageCard from "./ImageCard";
import PropTypes from "prop-types"; // ES6
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ResponsiveBody = ({ data }) => {
	console.log("response body: " + data);
	return (
		<ResponsiveMasonry
			className="m-6"
			columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
		>
			<Masonry gutter="20px" className="flex-auto justify-center">
				{data.length > 0
					? data.map((item) => <ImageCard key={item.id} details={item} />)
					: "No image found"}
			</Masonry>
		</ResponsiveMasonry>
	);
};

ResponsiveBody.propTypes = {
	data: PropTypes.array, // array of objects with id and url properties for each card in
};

export default ResponsiveBody;
