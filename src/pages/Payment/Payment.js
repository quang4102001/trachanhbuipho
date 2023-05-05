/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Payment.module.scss";
import { MailIcon, PhoneIcon } from "src/component/Icon/Icon";
import { urlImg, urlMain } from "src/webServices";
import Button from "src/component/Button/Button";
import { cartContext } from "src/App";

function Payment() {
  const [inputOTP, setInputOTP] = useState(false);
  const [numberCard, setNumberCard] = useState("");
  const [dateCard, setDateCard] = useState("");
  const [nameCard, setNameCard] = useState("");
  const [OTPCard, setOTPCard] = useState("");
  const { money } = useContext(cartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputOTP) {
      if(OTPCard.trim() === "123456") {
        window.location.replace(urlMain);
      }else{
        alert("Sai!")
      }
    } else {
      if(numberCard.trim() === "9704250000000001" & dateCard.trim() === "01/13" & nameCard.trim() === "NGUYEN VAN A") {
        setInputOTP(true)
      }else{
        alert("Sai!")
      }
    }
  };

  return (
    <div className={clsx(styles["container"])}>
      <header className={clsx(styles["header"])}>
        <div className="d-flex justify-content-between align-items-center container">
          <img
            className={clsx(styles["logo"])}
            src={`${urlImg}ONEPAY-logo.png`}
            alt="logo ONEPAY"
          />
          <div className={clsx(styles["contact"])}>
            <p className="d-flex justify-content-end align-items-center">
              <PhoneIcon width="2rem" />
              <a className="mx-3" href="tel:1900633927">
                1900 633 927(8h30 - 18h00)
              </a>
            </p>
            <p className="d-flex justify-content-end align-items-center">
              <MailIcon width="2rem" />
              <a className="mx-3" href="mailto:support@onepay.vn">
                support@onepay.vn
              </a>
            </p>
            <p className="d-flex justify-content-end    align-items-center">
              <a className={clsx(styles["img"])} href="">
                <img src={`${urlImg}flag-england.svg`} alt="england" />
              </a>
              <a className={clsx(styles["img"])} href="">
                <img src={`${urlImg}flag-vietnam.webp`} alt="vietnam" />
              </a>
            </p>
          </div>
        </div>
      </header>
      <main className={clsx(styles["main"], "container")}>
        <div className={clsx(styles["form-box"])}>
          <header className={clsx(styles["header-box"])}>
            Nhập thông tin thẻ
          </header>
          {inputOTP ? (
            <form className={clsx(styles["form-group"])}>
            <div
              className={clsx(styles["input-group"], "d-flex flex-column")}
            >
              <label htmlFor="otp">Số thẻ*:</label>
              <input
                type="text"
                id="otp"
                value={OTPCard}
                onChange={(e) => setOTPCard(e.target.value)}
                placeholder="Nhập mã OTP..."
                required
              />
            </div>
            <div
              className={clsx(
                styles["btn-group"],
                "btn-group d-flex justify-content-end mt-4"
              )}
            >
              <Button blue borderRadius boxShadow onClick={handleSubmit}>
                Thanh toán
              </Button>
            </div>
          </form>
          ) : (
            <form className={clsx(styles["form-group"])}>
              <div
                className={clsx(styles["input-group"], "d-flex flex-column")}
              >
                <label htmlFor="number">Số thẻ*:</label>
                <input
                  type="text"
                  id="number"
                  value={numberCard}
                  onChange={(e) => setNumberCard(e.target.value)}
                  placeholder="Nhập số thẻ..."
                  required
                />
              </div>
              <div className="d-flex">
                <div
                  className={clsx(
                    styles["input-group"],
                    "d-flex flex-column w-50"
                  )}
                >
                  <label htmlFor="datetime">Tháng/năm phát hành*:</label>
                  <input
                    type="text"
                    id="datetime"
                    value={dateCard}
                    onChange={(e) => setDateCard(e.target.value)}
                    placeholder="Nhập số thẻ..."
                    required
                  />
                </div>
                <div
                  className={clsx(
                    styles["input-group"],
                    "d-flex flex-column w-50"
                  )}
                >
                  <label htmlFor="name">Tên chủ thẻ*:</label>
                  <input
                    type="text"
                    id="name"
                    value={nameCard}
                    onChange={(e) => setNameCard(e.target.value)}
                    placeholder="Nhập số thẻ..."
                    required
                  />
                </div>
              </div>
              <div
                className={clsx(
                  styles["btn-group"],
                  "btn-group d-flex justify-content-end mt-4"
                )}
              >
                <Button blue borderRadius boxShadow onClick={handleSubmit}>
                  Xác nhận
                </Button>
              </div>
            </form>
          )}
          <div className="d-flex justify-content-end">
            <Link to="/cart" className={clsx(styles["link-close"], "p-3")}>
              Hủy giao dịch
            </Link>
          </div>
        </div>
        <div className={clsx(styles["spacing-box"])}></div>
        <div className={clsx(styles["show-box"])}>
          <header className={clsx(styles["header-box"], "p-3")}>
            Thông tin đơn hàng
          </header>
          <div className={clsx(styles["form-group"])}>
            <div className={clsx(styles["text-box"])}>
              <p className={clsx(styles["label"], "text-secondary")}>
                Đơn vị chấp nhận thanh toán
              </p>
              <p className="text-dark">ONEPAY</p>
            </div>
            <div className={clsx(styles["text-box"])}>
              <p className={clsx(styles["label"], "text-secondary")}>
                Mã đơn hàng
              </p>
              <p className="text-dark">JSECURETEST01</p>
            </div>
            <hr />
            <div
              className={clsx(
                styles["text-box"],
                "d-flex justify-content-between align-items-center"
              )}
            >
              <p className={clsx(styles["label"], "text-secondary")}>
                Số tiền thanh toán
              </p>
              <p className={clsx(styles["text-money"], "text-primary fw-bold")}>
                {money} VND
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className="d-flex justify-content-center">
        <img
          src={`${urlImg}onepay-footer.png`}
          className={clsx(styles["img-footer"])}
          alt=""
        />
      </div>
      <footer
        className={clsx(
          styles["footer"],
          "d-flex flex-column align-items-center p-2"
        )}
      >
        <ul className="d-flex mb-0 fs-4">
          <li>Về OnePAY</li>
          <li>Hướng dẫn thanh toán</li>
          <li>Câu hỏi thường gặp</li>
          <li>Liên hệ</li>
        </ul>
        <p className="text-secondary fs-5">
          Copyright © 2006 - 2023 OnePAY. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Payment;
