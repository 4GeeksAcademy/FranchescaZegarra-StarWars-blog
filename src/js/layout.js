import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Home } from "./views/home";
import { CharacterDetail } from "./views/characterDetails.jsx";
import { PlanetDetails}  from "./views/planetDetails.jsx";
import { seeCharacters } from "./store/Slice/charactersSlice.js";
import { seePlanets } from "./store/Slice/planetSlice";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const dispatch = useDispatch();

	useEffect(()=>{
		fetch('https://www.swapi.tech/api/people?page=2&limit=10')
		.then( response => {return response.json();})
		.then( data => {dispatch(seeCharacters(data.results));})
		.catch( error => console.log(error))

		fetch('https://www.swapi.tech/api/planets?page=2&limit=10')
		.then( response => {return response.json();})
		.then( data => {dispatch(seePlanets(data.results));})
		.catch( error => console.log(error))
	},[])

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/character-detail/:uid" element={<CharacterDetail />} />
					<Route path="/planet-detail" element={<PlanetDetails />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Layout
