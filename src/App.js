import { Routes, Route } from "react-router-dom";
import { createContext, Fragment, useEffect, useState } from "react";

import { publicNavigation } from "./routes/routes";
import { LayoutSideBar } from "./layout/layout";
import axios from "axios";

export const cartContext = createContext();

function App() {
  const [dataDrink, setDataDrink] = useState([]);
  const [cart, setCart] = useState([]);
  
  const getDataDrink = () => {
    axios.get('http://localhost/buiphotea/src/api/dataDrink.php').then(res => setDataDrink(res.data))
  }

  useEffect(() => {
    getDataDrink()
  }, [])

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      <Routes>
        {publicNavigation.map((route, index) => {
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
                <cartContext.Provider value={{ cart, setCart, dataDrink }}>
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
