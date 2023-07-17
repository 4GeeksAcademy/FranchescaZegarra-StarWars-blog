import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { seePlanetDetail } from "../store/Slice/planetDetailSlice";

const PlanetCard =({id}) => {

    const dispatch = useDispatch();
    useEffect( () => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
        .then(response => { return response.json();})
        .then(data => dispatch(seePlanetDetail(data.result)))
        .catch(error => console.log(error));
    }, [])

    const planetDetail = useSelector( store => store.planetDetails.value );

    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt="planet 1" />
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