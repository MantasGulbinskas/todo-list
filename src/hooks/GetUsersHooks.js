import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/Firebase_config'

const GetUsersHooks = (userId) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const docRef = doc(db, "users_information", userId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    setData(userData);
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchUserData();
    }, [userId]);

    return [data, loading];
}

export default GetUsersHooks;