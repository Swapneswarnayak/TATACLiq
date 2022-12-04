import './App.css';
import Home from "./Home/Home/Home.js";
import NavBar from './navbar/navbar';
import AllRoutes from './routes/Routes';

function App() {
  return (
    <div className="App">
        <NavBar />
        <AllRoutes />
    </div>
  );
}

export default App;
