import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import NavbarHeader from "./components/Navbar/Navbar";
import ResponsiveBody from "./components/body/ResponsiveBody";
import PexelsApi from "./apis/PexelApi";
import ImageCard from "./components/body/ImageCard";
import ImageSkeleton from "./components/skeleton/ImageSkeleton";
import { MyContext } from "./hooks/context/MyContext";
import AppFooter from "./components/Footer";

function App() {
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(false);

	const fetchData = async (term) => {
		setLoading((prev) => !prev);
		const response = await PexelsApi.get("v1/search", {
			params: { query: term, per_page: 50, page: 1 },
		});
		console.log("🚀 ~ file: App.jsx:15 ~ fetchData ~ response: ", response);

		const { photos } = response.data;
		setData(photos);

		setLoading((prev) => !prev);
	};

	useEffect(() => {
		fetchData("famous");
	}, []);

	return (
		<>
			<MyContext.Provider value={fetchData}>
				<NavbarHeader />
			</MyContext.Provider>

			{isLoading ? (
				<div className="flex w-full mt-10 justify-center items-center">
					<Spinner
						// className="w-full"
						aria-label="Extra large spinner example"
						size="xl"
					/>
					<span className="text-2xl font-bold text-black">Loading...</span>
				</div>
			) : (
				<ResponsiveBody data={data} />
			)}
			<AppFooter />
		</>
	);
}

export default App;
