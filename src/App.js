import './App.css'
import {Route, Routes} from "react-router-dom";
import {SingIn} from "./components/SignIn";
import {Home} from "./pages/Home";
import {SignUp} from "./components/SignUp";
import {Dashboard} from "./pages/Dashboard";
import {AuthContextProvider} from "./context/AuthContext";
import {ProtectedRoute} from "./components/ProtectedRoute";
import {Forbidden} from "./components/Error/Forbidden";
import {List} from "./pages/list/List";

function App() {


    return (
        <div>
            <AuthContextProvider>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/sign-up' element={<SignUp/>}/>
                    <Route path='/log-in' element={<SingIn/>}/>
                    <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
                    <Route path='/forbidden' element={<Forbidden/>}/>
                    <Route path='tasks'>
                        <Route index element={<List/>}/>
                        {/*<Route path='/tasks' element={<ProtectedRoute><Tasks/></ProtectedRoute>}/>*/}
                    </Route>
                </Routes>
            </AuthContextProvider>

        </div>
    );
}

export default App;
