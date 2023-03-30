import { clsx } from "clsx";
import { useContext, useState } from "react";

import styles from "./DrinkItem.module.scss";
import Button from "./../Button/Button";
import { SearchIcon, ShoppingIcon } from "../Icon/Icon";
import Layer from "./../Layer/Layer";
import { addtoCartFunction } from './../ShowDrink/ShowDrink';

function DrinkItem({ drink }) {
  const [openDialog, setOpenDialog] = useState(false);
  const {addToCart} = useContext(addtoCartFunction)

  return (
    <div className="p-3">
      <div
        className={clsx(
          styles["drink-item"],
          "h-100 d-flex flex-column text-center"
        )}
      >
        <div
          className={clsx(styles["drink-item__img-box"], "position-relative")}
        >
          <img
            className={clsx(styles["drink-item__img-img"], "w-100")}
            src={drink.image}
            alt={drink.name}
          />
          <Button
            className={clsx(
              styles["drink-item__img-btn-open"],
              "position-absolute"
            )}
            boxShadow
            leftIcon={<SearchIcon width="2rem" height="2rem" />}
            onClick={() => setOpenDialog(true)}
          ></Button>
          <div
            className={clsx(
              styles["drink-item__img-layer"],
              "position-absolute"
            )}
          ></div>
          <Button
            className={clsx(
              styles["drink-item__img-btn-add"],
              "position-absolute"
            )}
            primary
            leftIcon={<ShoppingIcon width="2rem" height="2rem" />}
            onClick={() => addToCart(drink, 1)}
          >
            Thêm vào giỏ hàng
          </Button>
        </div>
        <div className="d-flex flex-grow-1 flex-column justify-content-between">
          <p
            className={clsx(
              styles["drink-item__name"],
              "w-100 fw-bold mt-3 px-3"
            )}
          >
            {drink.name}
          </p>
          <p className={clsx(styles["drink-item__price"], "my-3")}>
            {drink.price} vnđ
          </p>
        </div>
        {openDialog && (
          <Layer
            openDialog={openDialog}
            drinkItem
            dataDrinkItem={drink}
            setOpenDialog={setOpenDialog}
          />
        )}
      </div>
    </div>
  );
}

export default DrinkItem;
