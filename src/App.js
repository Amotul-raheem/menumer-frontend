import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import LandingPage from "./components/LandingPage/LandingPage"
import HomePage from "./components/HomePage/HomePage"
import RecipePage from "./components/RecipePage/RecipePage"
import CreateRecipePage from "./components/CreateRecipePage/CreateRecipePage"
import SignUp from "./components/Authpage/SignUp";
import SignIn from "./components/Authpage/SignIn";
import ForgotPassword from "./components/Authpage/ForgotPassword";
import ResetPassword from "./components/Authpage/ResetPassword";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path={"/"} element={<LandingPage/>} />
                <Route exact path={"/home"} element={<HomePage/>} />
                <Route path={"/sign-up"} element={<SignUp/>}/>
                <Route path={"/sign-in"} element={<SignIn/>}/>
                <Route path={"/forgot-password"} element={<ForgotPassword/>}/>
                <Route path={"/reset-password"} element={<ResetPassword/>}/>
                <Route path={"/recipes"} element={<RecipePage/>}/>
                <Route path={"/create-recipe"} element={<CreateRecipePage/>}/>
            </Routes>
        </Router>

    );
}

export default App;
