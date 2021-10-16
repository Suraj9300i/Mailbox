import "./App.css";
import Login from "./login/Login";
import Home from "./home/Home";
import { useSelector } from "react-redux";

function App() {
  let user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="App">{user === null ? <Login></Login> : <Home></Home>}</div>
  );
}

export default App;
