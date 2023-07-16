import { TextInput } from "flowbite-react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
const SearchBox = () => {
	const searchKey = useRef();

	const checkIsEmpty = () => {
		if (searchKey.current.value === "" || searchKey.current.value === null) {
			return true;
		} else {
			return false;
		}
	};

	const handleKeyPressed = (e) => {
		if (e.key === "Enter") {
			console.log(`You pressed enter! Ref value is:` + searchKey.current.value);
			if (checkIsEmpty()) {
				console.log("yes is empty");
			} else {
				console.log("NOoooo is empty");
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
