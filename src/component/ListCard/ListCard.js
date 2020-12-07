import React from 'react';
import Loading from "../Loading/Loading";
import Card from "../Card/Card";
import logo from "../../logo.svg"

const ListCard = (props) => {
    return(
        <div className="container-fluid">
            <div className="card-deck p-4">
                {
                    props.loading ?
                        <Loading/>
                        :
                        props.pokemons.map(data => {
                            return (
                                <div className="col-lg-4 p-0" style={{marginBottom : '1.875rem'}} key={data.name}>
                                    <Card class={props.class} logo={logo} title={data.name}/>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default ListCard;