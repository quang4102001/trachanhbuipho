import { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";
import clsx from "clsx";

import styles from "./ShowDrink.module.scss";
import HeaderPage from "./../HeaderPage/HeaderPage";
import DrinkItem from "./../DrinkItem/DrinkItem";
import { cartContext } from "./../../App";

export const addtoCartFunction = createContext();

function ShowDrink({ api, headerText }) {
  const [drinkList, setDrinkList] = useState([]);
  const { setCart } = useContext(cartContext);

  const addToCart = (drink, number) => {
    setCart((preState) =>
      preState.some((item) => item.id === drink.id)
        ? preState.map((item) =>
            item.id === drink.id
              ? { ...item, number: item.number + number }
              : item
          )
        : [...preState, { ...drink, number: number }]
    );
  };

  useEffect(() => {
    axios.get(api).then((res) => setDrinkList(res.data));
  }, [api]);

  return (
    <div className={clsx(styles["drink-container"], "py-3")}>
      <HeaderPage headerText={headerText} />
      <addtoCartFunction.Provider value={{addToCart}}>
        <div className={clsx(styles["drink-list"], "px-3")}>
          {drinkList.map((drink, index) => (
            <DrinkItem drink={drink} key={index} />
          ))}
        </div>
      </addtoCartFunction.Provider>
    </div>
  );
}

export default ShowDrink;
