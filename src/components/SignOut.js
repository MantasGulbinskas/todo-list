import {UserAuth} from "../context/AuthContext";
import{useNavigate} from 'react-router-dom'
export const SignOut = () => {
    const {logout} = UserAuth()
    const navigate = useNavigate()
const LogOut = async () => {
try {
   await logout()
    navigate('/')
}catch (e) {
    console.log(e)
}
}
    return (
        <div>
            <button onClick={LogOut}>Log Out</button>
        </div>
    )
}