import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

export const Dashboard = () => {

    return (
        <div className="d-flex m-auto">
                <Sidebar/>
            <div style={{flex: 12}} >
            <Navbar/>
                <h1>Hello!</h1>
            </div>
        </div>
    )
}