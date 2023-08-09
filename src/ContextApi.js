import { createContext, useState, useContext } from "react";
import data from '../src/Api/Data.json'

const itemContext = createContext();

function useValue() {
    const value = useContext(itemContext);
    return value;
}

function CostemItemContext({ children }) {
    const [total, setTotal] = useState(1);
    const [count, setCount]= useState(1);
    const [cart, setCart] = useState([]);


    // const handelAdd = () => {
    //     setTotal(total + 1)
    // }
    const handleAdd = (prod) => {
        // setTotal(total + price);
        // setItem(item + 1);
        const index = cart.findIndex((item) => item.id === prod.id)

        if (index === -1) {
            setCart([...cart, { ...prod, qty: 1 }]);
            console.log(cart)
            setTotal(total + prod.price)
        } else {
            cart[index].qty++;
            setCart(cart);
            console.log(cart);
            setTotal(total + cart[index].price)
        }
        setTotal(total + 1)
    };
    
    const handleDec = () => {
        if (total <= 0) {
            return;
        }
        setTotal(total - 1)
    }

    // const handleCart = (prod) => {
    //    const index = data.findIndex((item)=> item.id == prod.id);
    // //    if(index)
    // }


    return (
        <>
            <itemContext.Provider value={
                { handleAdd, total, setTotal, data, handleDec, count, cart }
            }>
                {children}
            </itemContext.Provider>

        </>
    )
}

export default CostemItemContext;

export { itemContext, useValue }