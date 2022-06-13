import "./App.css";
import { FilterableProductTable } from "./components";
import { PRODUCTS } from "./api";

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS}/>
    </div>
  );
}

export default App;
