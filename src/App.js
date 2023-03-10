import './App.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {SignIn} from './components/SignIn'
import {SignUp} from "./components/SignUp";
import {Dashboard} from "./pages/Dashboard";
import {AuthContextProvider} from "./context/AuthContext";
import {ProtectedRoute} from "./components/ProtectedRoute";
import {Forbidden} from "./components/Error/Forbidden";
import {List} from "./pages/list/List";
import {Profile} from "./pages/user_profile/Profile";

function App() {


    return (
        <div>
            <AuthContextProvider>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/sign-up' element={<SignUp/>}/>
                    <Route path='/log-in' element={<SignIn/>}/>
                    <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
                    <Route path='/forbidden' element={<Forbidden/>}/>
                        <Route path='/tasks' element={<ProtectedRoute><List/></ProtectedRoute>}/>

                    <Route path='profile'>
                        <Route index element={<Profile/>} />
                    </Route>
                </Routes>
            </AuthContextProvider>

        </div>
    );
}

export default App;
