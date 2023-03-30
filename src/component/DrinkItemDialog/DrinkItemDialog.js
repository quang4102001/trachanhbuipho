import { clsx } from "clsx";
import { useContext, useState } from "react";
import { useNavigate  } from "react-router-dom";

import styles from "./DrinkItemDialog.module.scss";
import Button from "./../Button/Button";
import Space from "./../Space/Space";
import { addtoCartFunction } from './../ShowDrink/ShowDrink';

function DrinkItemDialog({ dataDrinkItem, closeDialog }) {
  const [drinkNumber, setDrinkNumber] = useState(1);
  const navigate = useNavigate ();
  const {addToCart} = useContext(addtoCartFunction)

  const changeNumber = (e) => {
    setDrinkNumber(e.target.value);
  };

  const handleSubmitAdd = (e, dataDrinkItem) => {
    e.preventDefault();
    addToCart(dataDrinkItem, Number(drinkNumber));
    closeDialog();
  };

  const handleSubmitBuy = (e, dataDrinkItem) => {
    e.preventDefault();
    addToCart(dataDrinkItem, Number(drinkNumber));
    closeDialog();
    navigate("/cart");
  };

  return (
    <div className={clsx(styles["drink-wrap"], "d-flex")}>
      <div className={clsx(styles["drink__img-box"])}>
        <img
          className={clsx(styles["drink__img"])}
          src={dataDrinkItem.image}
          alt={dataDrinkItem.name}
        />
      </div>
      <div
        className={clsx(styles["drink__info"], "flex-grow-1 ms-4 text-start")}
      >
        <h2 className={clsx(styles["drink__info__name"], "pb-3")}>
          {dataDrinkItem.name}
        </h2>
        <p
          className={clsx(styles["drink__info__brand"], "pb-3 text-secondary")}
        >
          Hãng: Trà chanh bụi phố
        </p>
        <p className={clsx(styles["drink__info__price"], "ps-3 pb-3")}>
          {dataDrinkItem.price} vnđ
        </p>
        <p
          className={clsx(
            styles["drink__info__description"],
            "fst-italic fw-light pb-3"
          )}
        >
          Mô tả đang cập nhật
        </p>
        <hr className="pb-3" />
        <form>
          <div className={clsx(styles["form-group"], "mb-3")}>
            <label
              htmlFor="drink-number"
              className={clsx(styles["form-label"], "form-label")}
            >
              Số lượng:
            </label>
            <input
              type="number"
              name="drink-number"
              className={clsx(styles["form-control"], "form-control")}
              id="drink-number"
              value={drinkNumber}
              onChange={changeNumber}
            />
          </div>

          <Button onClick={(e) => handleSubmitAdd(e, dataDrinkItem)} primary>
            Thêm vào giỏ hàng
          </Button>
          <Space space="16px" noimg />
          <Button onClick={(e) => handleSubmitBuy(e, dataDrinkItem)} primary>
            Mua ngay
          </Button>
        </form>
      </div>
    </div>
  );
}

export default DrinkItemDialog;
