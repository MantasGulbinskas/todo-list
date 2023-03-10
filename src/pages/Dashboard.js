import {useLocalStorage} from "../hooks/UseLocalStorage";
import {useState} from "react";
import {Loading} from "../components/loading/Loading";
import {Layout} from "./Layout";

export const Dashboard = () => {

    const [dataStorage] = useLocalStorage()
    const [isLoaded, setIsLoaded] = useState(true)
    if (dataStorage) {
        setTimeout(() => {
            setIsLoaded(false)
        }, 2000)
    }
    if (isLoaded) {
        return <Loading/>
    }


    return (
        <>
       <Layout>
           <div>
               <h1>Hello!</h1>
               <img className='w-25' src={dataStorage.photoURL} alt="profile_photo"/>
               <p>{!dataStorage ? 'No name' : dataStorage.displayName}</p>
           </div>
       </Layout>

        </>
    )


}