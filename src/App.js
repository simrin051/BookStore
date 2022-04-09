
import {
  BrowserRouter as Router,
  Switch,
  Route, Routes,
  Link
} from "react-router-dom";
import './App.css';
import { SignIn } from './pages/auth/signin/SignIn';
import Mockman from "mockman-js";
import { SignUp } from './pages/auth/signup/SignUp';
import { ProductList } from './pages/products/ProductList';
import { Home } from './pages/home/home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<Mockman endPointsList={["/api/categories", "/api/products"]} />} />
      </Routes>
    </div>
  );
}

export default App;
