import React from 'react';

const Cards = (props) => {
    return (
        <div className={"card flex-center bg-secondary text-white " + props.class}>
            {
                props.logo ?
                    <div className="card-header flex-center w-100">
                        <img className="mx-auto d-block" style={{height: "10rem !important"}} src={props.logo} alt={props.title}/>
                    </div>
                    : null
            }
            <div className="card-body text-center p-0 flex-center">
                <div className="card-title m-0 w-100">{props.title}</div>
            </div>
        </div>
    );
}

export default Cards;
