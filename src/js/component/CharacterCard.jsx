import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { seeCharacterDetails } from "../store/Slice/characterDetailSlice";
import { Link } from "react-router-dom";

const CharacterCard = ({id}) => {

    //hacer use efecto con: https://www.swapi.tech/api/people/${id} para optener propiedades del personaje en sí
    //For image can use https://starwars-visualguide.com/assets/img/characters/${id}.jpg were the number is the id see all image in starwars-visualguide.com
    // https://starwars-visualguide.com is not an API
    //useDispatch
    const dispatch = useDispatch();
    /*const asyncFunction = async () => {
		const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
		const data = await response.json()
		console.log(data)
	}*/
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people?page=2&limit=10/${id}`)
        .then(response => {return response.json();})
        .then(data => {
            dispatch(seeCharacterDetails(data.result));
        })
        .catch(error => console.log(error));
    },[])
    
    const characterDetails = useSelector( store => store.characterDetails.value);
    //console.log(characterDetails);
    //const properties = characterDetails.properties;
    //console.log(properties.gender);

    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt={`character ${id}`} />
            <div className="card-body mx-0">
                <h5 className="card-title">Tittle here</h5>
                <p className="card-text m-0">Gender: </p>
                <p className="card-text m-0">Hair: </p>
                <p className="card-text">Eye color: </p>
                <Link to={`/character-detail/${id}`}>
                    <button href="#" className="btn btn-outline-primary col-6"> Learn more</button>
                </Link>
                <button className="btn btn-outline-dark col offset-md-4"> <i className="bi bi-suit-heart-fill"></i> </button>
            </div>
        </div>               
    );
};
export default CharacterCard;