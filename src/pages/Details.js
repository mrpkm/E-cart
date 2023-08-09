/* eslint-disable eqeqeq */
import React from 'react';
import '../Assets/details.css'
import { useParams, Link } from 'react-router-dom';
import { useValue } from '../ContextApi';

function Details({ id, title, price }) {

    const { data, handleAdd, total, handleDec } = useValue();
    const { itemId } = useParams();
    console.log(itemId);

    const items = data.find((item) => item.id == itemId);
    console.log(items);

    if (!items) {
        return <div>Item not found.</div>;
    }


    return (
        <div className="details">
            <h1>Product Details</h1>
            <hr className='hr' />
            <div className="detailsItem">
                <div className="left">
                    <div className="image">
                        <img src={items.image} alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="title">
                        <h2>{items.title}</h2>
                        <p>{items.description}</p>
                        <h4>{items.rating.rate}</h4>
                        <div className="button">
                            <button onClick={() => handleDec()}>-</button>
                            <button>{total}</button>
                            <button onClick={() => handleAdd({ id, title, price })}>+</button>
                        </div>
                        <div className="lest-btn">
                            <button onClick={() => handleAdd({ id, title, price })}>add to Cart</button>
                            <button><Link to={`/detail/${items.id}`}>buy now</Link></button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}

export default Details;
