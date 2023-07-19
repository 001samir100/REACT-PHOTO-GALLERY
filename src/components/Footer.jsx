import { Footer } from "flowbite-react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagramSquare, FaTwitter, FaDiscord } from "react-icons/fa";
const AppFooter = () => {
	return (
		<Footer container>
			<div className="w-full text-center">
				<div className="w-full flex flex-col items-center justify-center">
					<Footer.Brand
						alt="Photo-Gallery-App"
						href="https://flowbite.com"
						name="Photo-Gallery-App"
						src="vite.svg"
					/>
					<Footer.LinkGroup className="gap-4">
						<Footer.Link href="https://www.fb.com" target="_blank">
							<p className="flex flex-row items-center">
								<BiLogoFacebookSquare /> Facebook
							</p>
						</Footer.Link>
						<Footer.Link href="https://www.instagram.com" target="_blank">
							<p className="flex flex-row items-center">
								<FaInstagramSquare /> Instagram
							</p>
						</Footer.Link>
						<Footer.Link href="https://www.twitter.com" target="_blank">
							<p className="flex flex-row items-center">
								<FaTwitter /> Twitter
							</p>
						</Footer.Link>
						<Footer.Link href="https://www.discord.com" target="_blank">
							<p className="flex flex-row items-center">
								<FaDiscord /> Discord
							</p>
						</Footer.Link>
					</Footer.LinkGroup>
				</div>
				<Footer.Divider />
				<Footer.Copyright by="Photo-Gallery-App" href="#" year={2023} />
			</div>
		</Footer>
	);
};

export default AppFooter;
