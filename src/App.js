import './App.css'
import {Routes, Route} from "react-router-dom";
import {SingIn} from "./components/SignIn";
import {Home} from "./pages/Home";
import {SignUp} from "./components/SignUp";
import {Dashboard} from "./pages/Dashboard";
import {AuthContextProvider} from "./context/AuthContext";
import {ProtectedRoute} from "./components/ProtectedRoute";

function App() {


  return (
        <div>
<AuthContextProvider>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/log-in' element={<SingIn />} />
        <Route path='/dashboard'  element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    </Routes>
</AuthContextProvider>
        </div>

  );
}

export default App;
