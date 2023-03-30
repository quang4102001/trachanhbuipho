import { clsx } from "clsx";
import { useState } from "react";

import styles from "./Layer.module.scss";
import FormLogin from "./../FormLogin/FormLogin";
import FormRegister from "./../FormRegister/FormRegister";
import FormUser from "./../FormUser/FormUser";
import DrinkItemDialog from './../DrinkItemDialog/DrinkItemDialog';

function Layer({ openDialog, setOpenDialog, login, register, drinkItem, user, dataDrinkItem }) {
  const [showLoginForm, setShowLoginForm] = useState(!!login);
  const [showRegisterForm, setShowRegisterForm] = useState(!!register);
  const [showUSerForm, setShowUserForm] = useState(!!user);
  const [showDrinkItem, setShowDrinkItem] = useState(!!drinkItem);

  const handleLoginFormToRegisterForm = (formData) => {
    setShowLoginForm(false);
    setShowUserForm(false);
    setShowDrinkItem(false);
    setShowRegisterForm(true);
  };

  const handleRegisterFormToLoginForm = (formData) => {
    setShowLoginForm(true);
    setShowUserForm(false);
    setShowDrinkItem(false);
    setShowRegisterForm(false);
  };

  const handleAfterSubmitSuccess = () => {
    setTimeout(() => {
      closeDialog();
    }, 1000);
  };

  const checkEmpty = (state, setHelpText, checkVar) => {
    if (state.length === 0) {
      setHelpText("Bắt buộc nhập.");
      checkVar = false;
    }
  };

  const addToStorage = (saveUserElement, user) => {
    if (saveUserElement.checked) {
      localStorage.setItem("User", user);
      sessionStorage.setItem("User", user);
    } else {
      localStorage.removeItem("User");
      sessionStorage.setItem("User", user);
    }
  };

  const closeDialog = (preState) => setOpenDialog(!openDialog);

  return (
    <div className={clsx(styles["layer"], "")}>
      <div
        className={clsx(styles["close-layer"])}
        onClick={() => closeDialog()}
      ></div>
      <div className={clsx(styles["layer-content"])}>
        {showLoginForm && (
          <FormLogin
            checkEmpty={checkEmpty}
            addToStorage={addToStorage}
            handleAfterSubmitSuccess={handleAfterSubmitSuccess}
            closeDialog={closeDialog}
            toRegister={handleLoginFormToRegisterForm}
          />
        )}
        {showRegisterForm && (
          <FormRegister
            checkEmpty={checkEmpty}
            addToStorage={addToStorage}
            handleAfterSubmitSuccess={handleAfterSubmitSuccess}
            closeDialog={closeDialog}
            toLogin={handleRegisterFormToLoginForm}
          />
        )}
        {showUSerForm && (
          <FormUser closeDialog={closeDialog} />
        )}
        {showDrinkItem && (<DrinkItemDialog dataDrinkItem={dataDrinkItem} closeDialog={closeDialog} />)}
      </div>
    </div>
  );
}

export default Layer;
