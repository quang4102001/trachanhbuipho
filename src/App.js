import { Routes, Route } from "react-router-dom";
import { createContext, Fragment, useEffect, useState } from "react";

import { publicNavigation } from "./routes/routes";
import { LayoutSideBar } from "./layout/layout";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

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
                <cartContext.Provider value={{ cart, setCart }}>
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
