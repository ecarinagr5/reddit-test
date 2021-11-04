import React from 'react';
import { Link } from "react-router-dom";
import './card.css';


const Card = (props) => { 

    let { title, id } = props.data;

    return(
        <div className="item--card">
            <picture>
                <source media="(max-width: 799px)" srcset={props.img} />
                <source media="(min-width: 800px)" srcset={props.img} />
                <img src={ props.img } alt={title} />
            </picture>
            <div className="wrap--title">
                <div>
                    <img src={ props.photo } alt={ title }/>
                </div>
                <div>
                    <h3>{ title }</h3>
                </div>
            </div>
            <div className="btn--post">
                <Link to={`post/${id}`}>
                    <p>ver post</p>
                </Link>
            </div>
        </div>
    )
}

export default Card;