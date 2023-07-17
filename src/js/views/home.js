import React from "react";
import "../../styles/home.css";
import NavHeader from "../component/NavHeader.jsx";
import CharacterCard from "../component/CharacterCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";
import ScrollBox from "../component/ScrollBox.jsx";
import { useSelector } from "react-redux";

export const Home = () => {

	const characters = useSelector(store => store.characters.value);
	const planets = useSelector(store => store.planets.value);
	console.log(planets);

	return (
		<div className="container">
			<NavHeader />
			<h2>Characters</h2>
			<ScrollBox>
				{ characters &&	characters.map((element,key) => { 
					return(
						<CharacterCard key={key} id={element.uid} />
						)	
					})
				}
				
			</ScrollBox>
			<br />
			<h2>Characters</h2>
			<ScrollBox>
				{ planets && planets.map((element,key) => {
					return (
						<PlanetCard key={key} id={element.uid} />
						)
					})
				}
			</ScrollBox>			
		</div>
	)
};
