import axios from "axios";

export default axios.create({
	baseURL: `https://api.pexels.com`,
	headers: { Authorization: import.meta.env.VITE_APP_PEXELS_API_KEY },
});
