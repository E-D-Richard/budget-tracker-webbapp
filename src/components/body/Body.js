import Budgets from "../../features/budgets/Budgets";
import TransRecord from "../../features/transRecord/TransRecord";
import { useSelector } from "react-redux";
import { selectNewTransactionOffsetHeight } from './../../features/newTransaction/newTransactionSlice';

const Body = () => {
  const newTransactionOffsetHeight = useSelector(selectNewTransactionOffsetHeight);
  return (
    <main style={{"marginBottom": `calc(${newTransactionOffsetHeight}px + 2rem)`}}>
      <Budgets />
      <TransRecord />
    </main>
  );
};

export default Body;
