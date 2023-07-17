import React from "react";
import { useSelector } from "react-redux";

const CharacterCard = ({imgUrl, imgAlt, cardTitle, cardDescription,id}) => {

    //hacer use efecto con: https://www.swapi.tech/api/people/${id} para optener propiedades del personaje en sí

    return (
        <div className="card">
            <img src={imgUrl} className="card-img-top" alt={imgAlt} />
            <div className="card-body mx-0">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text m-0">Gender: </p>
                <p className="card-text m-0">Hair: </p>
                <p className="card-text">Eye color: </p>
                <button href="#" className="btn btn-outline-primary col-6"> Learn more</button>
                <button className="btn btn-outline-dark col offset-md-4"> <i className="bi bi-suit-heart-fill"></i> </button>
            </div>
        </div>               
    );
};
export default CharacterCard;