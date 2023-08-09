import React from 'react'
import { useParams } from 'react-router-dom';
import { useValue } from '../ContextApi';
import '../Assets/payment.scss'
function Payment() {
    const { data, total } = useValue();
    const { itemId } = useParams();
    console.log(itemId);

    const items = data.find((item) => item.id == itemId);
    console.log(items)

    return (
        <>
            <div className='paymentAll'>
                <h1>payment page</h1>
                {/* <hr /> */}
                <div className="paymentPage">
                    <div className="address">
                        <form action="">
                            <div>
                                <label htmlFor="">name</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">email</label>
                                <input type="email" />
                            </div>
                            <div>
                                <label htmlFor="">address</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Zip code</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Mobile No</label>
                                <input type="number" />
                            </div>

                            {/* <hr className='hrs'/> */}
                            <div>
                                <label htmlFor="">card name</label>
                                <input type="number" />
                            </div>
                            <div>
                                <label htmlFor="">Credit card number</label>
                                <input type="number" />
                            </div>
                            <div>
                                <label htmlFor="">Expiration</label>
                                <input type="number" />
                            </div>
                            <div>
                                <label htmlFor="">CVV</label>
                                <input type="number" />
                            </div>

                        </form>
                    </div>


                    <div className="checkToCart">
                        <h1>Order Summery</h1>
                        <h2>product:({total}) :- <span>${Math.round(items.price)}</span></h2>
                        <h2>Shiping charge: <span>$30</span></h2>
                        <h1>total amount: <span>${Math.round(total * items.price + 30)}</span></h1>
                        <button className='checkOut'>check out</button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Payment