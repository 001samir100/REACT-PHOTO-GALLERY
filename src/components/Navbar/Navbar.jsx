import { Navbar } from "flowbite-react";
import { GoHomeFill } from "react-icons/go";
import { PiPlantFill } from "react-icons/pi";
import { FaCity, FaPaintBrush } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useContext, useState } from "react";
import SearchBox from "./SearchBox";
import { MyContext } from "../../hooks/context/MyContext";

const NavbarHeader = () => {
	const fetchImages = useContext(MyContext);
	const [Links, setLinks] = useState([
		{ name: "Home", link: "famous", icon: GoHomeFill, selected: true },
		{ name: "Nature", link: "nature", icon: PiPlantFill, selected: false },
		{ name: "City", link: "cities", icon: FaCity, selected: false },
		{ name: "Art", link: "arts", icon: FaPaintBrush, selected: false },
	]);
	const [open, setOpen] = useState(false);
	// const [searchKeyHit, setSearchKeyHit] = useState(false);

	const handleSelectedLink = (index) => {
		console.log("Index selected: " + index);
		const updatedLinks = Links.map((item, i) => {
			if (i === index) {
				fetchImages(item.link);
				return { ...item, selected: true };
			} else {
				return { ...item, selected: false };
			}
		});
		setLinks(updatedLinks);
	};

	const handleSearchKeyHit = () => {
		console.log("you press enter");
		const updatedLinks = Links.map((item) => {
			// fetchImages(item.link);
			return { ...item, selected: false };

			// return { ...item, selected: false };
		});
		setLinks(updatedLinks);
	};

	return (
		<nav className="sticky bg-white top-0 right-0 left-0 tablet:flex justify-between px-4 tablet:px-[1rem] laptop:px-[2rem] py-2 ">
			<div className="w-auto font-bold text-1xl cursor-pointer flex items-center ">
				<Navbar.Brand className="tablet:static w-auto text-2xl text-black">
					<img src="/vite.svg"></img> &nbsp;
					<h1>Gallery App</h1>
				</Navbar.Brand>
			</div>

			{/* Toggle */}
			<div
				onClick={() => setOpen(!open)}
				className="absolute right-5 top-5  flex items-center text-center text-1xl tablet:hidden"
			>
				{open ? <MdClose /> : <HiMenu />}
			</div>
			{/* Search box */}
			{/* {searchKeyHit ? handleSearchKeyHit : ""} */}
			<SearchBox handleSearchKeyHit={handleSearchKeyHit} />

			<ul
				className={`tablet:flex  tablet:static w-full tablet:w-auto transition-opacity opacity-100 duration-500 ease-in ${
					open ? "top-0" : "hidden"
				}`}
			>
				{Links.map((link, index) => (
					<li
						key={link.name}
						className="flex flex-row items-center tablet:items-center px-4 py-3 tablet:py-2 hover:cursor-pointer hover:font-bold hover:bg-light_orange hover:shadow-lg hover:rounded-full"
						style={{
							background: link.selected ? "#ffcb74" : "",
							borderRadius: link.selected ? "9999px" : "",
							fontWeight: link.selected ? "bold" : "",
						}}
						onClick={() => handleSelectedLink(index)}
					>
						<link.icon></link.icon> &nbsp;
						{link.name}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavbarHeader;
