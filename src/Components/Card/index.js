import React from 'react';
import './card.css';


const Card = (props) => { 
    
    let { title } = props.data;

    return(
        <div className="item--card">
            <div className="wrap--img">
                <picture>
                    <source media="(max-width: 799px)" srcset={props.img} />
                    <source media="(min-width: 800px)" srcset={props.img} />
                    <img src={ props.img } alt={title} />
                </picture>
            </div>
            <div className="wrap--title">
                <div>
                    <img src={ props.photo } alt={ title }/>
                </div>
                <div>
                    <h3>{ title }</h3>
                </div>
            </div>
            <div className="btn--post">
                <p>ver post</p>
            </div>
        </div>
    )
}

export default Card;