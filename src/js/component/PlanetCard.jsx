import React from "react";

const PlanetCard =({imgUrl}) => {
    return (
        <div className="card">
            <img src={imgUrl} className="card-img-top" alt="planet 1" />
            <div className="card-body mx-0">
                <h5 className="card-title">Alderaan</h5>
                <p className="card-text m-0">Population: </p>
                <p className="card-text">Terrain: </p>
                <button href="#" className="btn btn-outline-primary col-6"> Learn more</button>
                <button className="btn btn-outline-dark col offset-md-4"> <i className="bi bi-suit-heart-fill"></i> </button>
            </div>
        </div>               
    );
};

export default PlanetCard;