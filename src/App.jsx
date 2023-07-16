import { Button } from "flowbite-react";
import { useState } from "react";
import NavbarHeader from "./components/Navbar/Navbar";
import ResponsiveBody from "./components/body/ResponsiveBody";
import PexelsApi from "./apis/PexelApi";
import ImageCard from "./components/body/ImageCard";
import ImageSkeleton from "./components/skeleton/ImageSkeleton";
import { MyContext } from "./hooks/context/MyContext";

function App() {
	const [data, setData] = useState([]);

	const fetchData = async (term) => {
		const response = await PexelsApi.get("v1/search", {
			params: { query: term, per_page: 15, page: 1 },
		});
		console.log("🚀 ~ file: App.jsx:15 ~ fetchData ~ response: ", response);

		const { photos } = response.data;
		setData(photos);
	};

	return (
		<>
			<MyContext.Provider value={fetchData}>
				<NavbarHeader />
			</MyContext.Provider>
			{/* <Button onClick={() => fetchData("nature")}>Button</Button> */}
			{/* <Button onClick={() => showData()}>Show data</Button> */}

			<ResponsiveBody data={data} />
			{/* <div className="flex flex-row h-[100vh] w-[100wh]">
			</div> */}
			{/* <ImageSkeleton></ImageSkeleton> */}
		</>
	);
}

export default App;
