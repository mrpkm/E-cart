import React from "react";
import styles from "../Assets/Item.module.css";
// import item from '../Api/Data.json';
import { Link } from 'react-router-dom'
import { useValue } from "../ContextApi";

function Item({ id, title, price }) {
  // const [total, setTotal] = useState(0);
  const { data, handleAdd } = useValue()

  // const handleAdd = () => {
  //   setTotal(total + 1);
  // };

  if (!data) {
    return <div>Loading...</div>; // You can replace this with a loading indicator or message
  }
  console.log("Data:", data);
  return (
    <div className={styles.itemCart}>
      {data.map((item, i) => (
        <div key={i}>
          <div className={styles.cart}>

            <div className={styles.image}>
              <img src={item.image} alt="images" />
            </div>
            <div>{item.title}</div>
            <div price>Rs: {item.price}</div>
            <div className="buy">
              <button><Link to={`/item/${item.id}`}>Buy</Link></button>
              <button className={styles.addCart} onClick={() => handleAdd({ id, title, price })}>
                <i class="fa-solid fa-cart-shopping"></i> cart
              </button>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Item;
