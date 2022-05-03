
import {
  BrowserRouter as Router,
  Route, Routes,
} from "react-router-dom";
import './App.css';
import { SignIn } from './pages/auth/signin/SignIn';
import Mockman from "mockman-js";
import { SignUp } from './pages/auth/signup/SignUp';
import { ProductList } from './pages/products/ProductList';
import { Home } from './pages/home/home';
import { WishList } from './pages/wishlist/Wishlist';
import { CartList } from './pages/cart/CartList';
import { NavBar } from "./components/NavBar/NavBar";
import axios from 'axios';
import PrivateRoute from './pages/auth/PrivateRoute';

axios.defaults.headers.common["Authorization"] = localStorage.getItem("session") ? JSON.parse(localStorage.getItem("session")).token : null;

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/home" element={<Home />} />

        <PrivateRoute path="/wishlist" element={<WishList />} />
        <PrivateRoute path="/cartlist" element={<CartList />} />

        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<Mockman endPointsList={["/api/auth/signup", "/api/categories", "/api/products", "/api/user/wishlist"]} />} />
      </Routes>

    </div>
  );
}

export default App;
