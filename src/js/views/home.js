import React from "react";
import "../../styles/home.css";
import NavHeader from "../component/NavHeader.jsx";
import InfoCard from "../component/InfoCard.jsx";
import ScrollBox from "../component/ScrollBox.jsx";


//For image can use https://starwars-visualguide.com/assets/img/characters/1.jpg were the number is the id see all image in starwars-visualguide.com
// https://starwars-visualguide.com is not an API
export const Home = () => {
	return (
		<div className="container">
			<NavHeader />
			<h2>Characters</h2>
			<ScrollBox>
				<InfoCard imgUrl="https://starwars-visualguide.com/assets/img/characters/1.jpg" imgAlt="img1" cardTitle="character1" cardDescription="Description" />
				<InfoCard imgUrl="https://starwars-visualguide.com/assets/img/characters/1.jpg" imgAlt="img1" cardTitle="character1" cardDescription="Description" />
				<InfoCard imgUrl="https://starwars-visualguide.com/assets/img/characters/1.jpg" imgAlt="img1" cardTitle="character1" cardDescription="Description" />
			</ScrollBox>
			<br />
			<h2>Characters</h2>
			<ScrollBox>
				<InfoCard imgUrl="https://starwars-visualguide.com/assets/img/characters/1.jpg" imgAlt="img1" cardTitle="character1" cardDescription="Description" />
			</ScrollBox>			
		</div>
	)
	};
