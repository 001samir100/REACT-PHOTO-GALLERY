import { TextInput } from "flowbite-react";
import { useContext, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { MyContext } from "../../hooks/context/MyContext";
import PropTypes from "prop-types"; // ES6
const SearchBox = ({ handleSearchKeyHit }) => {
	const searchKey = useRef();

	const fetchImages = useContext(MyContext);

	const checkIsEmpty = () => {
		if (searchKey.current.value === "" || searchKey.current.value === null) {
			return true;
		} else {
			return false;
		}
	};

	const handleKeyPressed = (e) => {
		if (e.key === "Enter") {
			if (!checkIsEmpty()) {
				//perform task here
				handleSearchKeyHit();
				fetchImages(searchKey.current.value);
			}
		}
	};

	return (
		<TextInput
			type="search"
			icon={FaSearch}
			placeholder="Search Image"
			className="w-auto left tablet:w-[25%] m-2"
			ref={searchKey}
			onKeyUp={handleKeyPressed}
		/>
	);
};
SearchBox.propTypes = {
	handleSearchKeyHit: PropTypes.func,
};

export default SearchBox;
