
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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mock" element={<Mockman endPointsList={["/api/categories", "/api/products"]} />} />
      </Routes>
    </div>
  );
}

export default App;
