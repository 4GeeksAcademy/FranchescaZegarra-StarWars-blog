import React from "react";
import "../../styles/home.css";
import NavHeader from "../component/NavHeader.jsx";
import CharacterCard from "../component/CharacterCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";
import ScrollBox from "../component/ScrollBox.jsx";


//For image can use https://starwars-visualguide.com/assets/img/characters/1.jpg were the number is the id see all image in starwars-visualguide.com
// https://starwars-visualguide.com is not an API
export const Home = () => {
	return (
		<div className="container">
			<NavHeader />
			<h2>Characters</h2>
			<ScrollBox>
				<CharacterCard imgUrl="https://starwars-visualguide.com/assets/img/characters/1.jpg" imgAlt="img1" cardTitle="character1" cardDescription="Description" />
				<CharacterCard imgUrl="https://starwars-visualguide.com/assets/img/characters/1.jpg" imgAlt="img1" cardTitle="character1" cardDescription="Description" />
				<CharacterCard imgUrl="https://starwars-visualguide.com/assets/img/characters/1.jpg" imgAlt="img1" cardTitle="character1" cardDescription="Description" />
			</ScrollBox>
			<br />
			<h2>Characters</h2>
			<ScrollBox>
				<PlanetCard imgUrl="https://starwars-visualguide.com/assets/img/planets/1.jpg" />
				<PlanetCard imgUrl="https://starwars-visualguide.com/assets/img/planets/2.jpg" />
			</ScrollBox>			
		</div>
	)
};
