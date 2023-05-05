import { Routes, Route } from "react-router-dom";
import { createContext, Fragment, useEffect, useState } from "react";

import {  publicRoutes } from "./routes/routes";
import { LayoutSideBar } from "./layout/layout";
import axios from "axios";
import { urlDB } from "./webServices";

export const cartContext = createContext();

function App() {
  const [dataDrink, setDataDrink] = useState([]); 
  const [cart, setCart] = useState([]);
  const [money, setMoney] = useState([]);

  const getDataDrink = () => {
    axios
      .get(`${urlDB}api/dataDrink.php`)
      .then((res) => setDataDrink(res.data));
  };

  useEffect(() => {
    getDataDrink();
  }, []);

  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = LayoutSideBar;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <cartContext.Provider value={{ cart, setCart, dataDrink, money, setMoney}}>
                  <Layout>
                    <Page />
                  </Layout>
                </cartContext.Provider>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
