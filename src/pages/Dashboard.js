import {useLocalStorage} from "../hooks/UseLocalStorage";
import {Loading} from "../components/loading/Loading";
import {Layout} from "./Layout";
import GetUsersHooks from "../hooks/GetUsersHooks";

export const Dashboard = () => {
    const [dataStorage] = useLocalStorage()
    const [data, loading] = GetUsersHooks(dataStorage.uid)
    return (
        <>
            <Layout>
                {loading ? <Loading/> : <div>
                    <h1>Hello {data.isAdmin && data.isAdmin ? 'Admin' : ''}!</h1>
                    <p>{data.username}</p>
                </div>}
            </Layout>

        </>
    )


}