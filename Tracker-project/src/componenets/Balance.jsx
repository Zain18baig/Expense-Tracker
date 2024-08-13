import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
export const Balance = () => {

  const { transations } = useContext(GlobalContext);
  const amounts = transations.map((transation) => transation.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};
