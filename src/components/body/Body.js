import Budgets from "../../features/budgets/Budgets";
import TransRecords from "../../features/transRecords/TransRecords";
import { useSelector } from "react-redux";
import { selectNewTransactionOffsetHeight } from "../../assets/stylesSlice";

const Body = () => {
  const newTransactionOffsetHeight = useSelector(selectNewTransactionOffsetHeight);
  return (
    <main style={{"marginBottom": `calc(${newTransactionOffsetHeight}px + 5%)`}}>
      <Budgets />
      <TransRecords />
    </main>
  );
};

export default Body;
