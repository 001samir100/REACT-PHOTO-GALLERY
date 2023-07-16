import { TextInput } from "flowbite-react";
import { useContext, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { MyContext } from "../../hooks/context/MyContext";
const SearchBox = () => {
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
			if (checkIsEmpty()) {
				console.log("yes is empty");
			} else {
				//perform task here
				fetchImages(searchKey.current.value);
			}
		}
	};

	return (
		<TextInput
			type="search"
			icon={FaSearch}
			placeholder="Search Image"
			className="w-[90%] left tablet:w-[25%] m-2"
			ref={searchKey}
			onKeyUp={handleKeyPressed}
		/>
	);
};

export default SearchBox;
