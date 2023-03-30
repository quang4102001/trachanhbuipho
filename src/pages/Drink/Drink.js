import { useEffect, useState } from "react";
import axios from "axios";

function Drink() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/trachanhbuipho/src/api/dataDrink.php")
      .then((res) => setDrinks(res.data));
  }, []);

  return <div>{drinks.map((drinks, index) => <p key={index}>{drinks.name}</p>)}</div>;
}

export default Drink;
