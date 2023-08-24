import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="mail-container">
						<h1 className="skillsection">Skills & Tools</h1>
					</div>
					<div className="incontainer">
						<img className="imgs" src="html.png" height={80} width={80} alt="" />
						<img className="imgs" src="css.png" height={80} width={80} alt="" />
						<img className="imgs" src="js.png" height={80} width={80} alt="" />
						<img className="imgs" src="react.png" height={80} width={80} alt="" />
						<img className="imgs" src="java.png" height={80} width={80} alt="" />
						<img className="imgs" src="vscode.png" height={80} width={80} alt="" />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
