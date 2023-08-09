import React from 'react'
import { useValue } from '../ContextApi'

function CartModel() {
    const { cart } = useValue();
    console.log(cart)
    return (

        <div className="productList">
            <h1>cart</h1>

            {cart.map((item) => {
                return (
                    <div className='listItem' key={item.id}>
                        <ul>
                            <li>{item.title}</li>
                            <li>{item.qty}</li>
                            <li>{item.qty * item.price}</li>

                        </ul>
                    </div>
                );
            })}

        </div>
    )
}

export default CartModel