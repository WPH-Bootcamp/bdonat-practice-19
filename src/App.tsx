import CounterState from "./components/1-useReducer/CounterState";
import CounterReducer from "./components/1-useReducer/CounterReducer";
import ShoppingCart from "./components/1-useReducer/Studi-Kasus/ShoppingCart";
import Parent from "./components/2-useContext/PropDrilling/Parent";
import { UserProvider } from "./components/2-useContext/UserContext/provider/UserProvider";
import { ThemeProvider } from "./components/2-useContext/UserContext/provider/ThemeProvider";
import ThemeButton from "./components/2-useContext/UserContext/components/ThemeButton";

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <CounterState />
        <CounterReducer />
        <div>
          <h1>STUDI KASUS</h1>
          <ShoppingCart />
        </div>
        {/* Prop Drilling */}
        <Parent name="ucup" />
        <ThemeButton />
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
