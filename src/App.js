import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import store from "./redux/store";
function App() {
  const [open, setOpen] = useState(true);
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar setOpen={setOpen} />
        {open ? <Home /> : <ShoppingCart />}
      </div>
    </Provider>
  );
}

export default App;
