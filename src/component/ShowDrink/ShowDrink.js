import {
  useContext,
  useEffect,
  useState,
  createContext,
  useRef,
  useLayoutEffect,
} from "react";
import clsx from "clsx";

import styles from "./ShowDrink.module.scss";
import HeaderPage from "./../HeaderPage/HeaderPage";
import DrinkItem from "./../DrinkItem/DrinkItem";
import { cartContext } from "./../../App";
import { navContext } from "src/layout/LayoutSideBar/LayoutSideBar";

export const addtoCartFunction = createContext();

function ShowDrink({ type, headerText }) {
  const [drinkList, setDrinkList] = useState([]);
  const [gridTemplateColumn, setGridTemplateColumn] = useState("");

  const { setCart, dataDrink } = useContext(cartContext);
  const { showNav } = useContext(navContext);

  const drinkListRef = useRef(null);

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
    const timeoutId = setTimeout(() => {
      const element = drinkListRef.current;
      const width = element.offsetWidth;
      if (width <= 525) {
        setGridTemplateColumn("100%");
      }
      if (width > 525) {
        setGridTemplateColumn("50% 50%");
      }
      if (width > 770) {
        setGridTemplateColumn("33.333333% 33.333333% 33.333333%");
      }
      if (width > 1035) {
        setGridTemplateColumn("25% 25% 25% 25%");
      }
      if (width > 1290) {
        setGridTemplateColumn("20% 20% 20% 20% 20%");
      }
      if (width > 1530) {
        setGridTemplateColumn(
          "16.666666% 16.666666% 16.666666% 16.666666% 16.666666% 16.666666%"
        );
      }
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [showNav]);

  useEffect(() => {
    setDrinkList(dataDrink.filter((item) => item.type === type));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataDrink]);

  return (
    <div className={clsx(styles["drink-container"], "py-3")}>
      <HeaderPage headerText={headerText} />
      <addtoCartFunction.Provider value={{ addToCart }}>
        <div
          ref={drinkListRef}
          id="drink-list"
          style={{ gridTemplateColumns: gridTemplateColumn }}
          className={clsx(styles["drink-list"], "px-3")}
        >
          {drinkList.map((drink, index) => (
            <DrinkItem drink={drink} key={index} />
          ))}
        </div>
      </addtoCartFunction.Provider>
    </div>
  );
}

export default ShowDrink;
