import { useEffect, useState } from 'react';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../config/Firebase_config'

 const GetUsersHooks = (userId) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                let query;
                if(userId) {
                const docRef = doc(db, "users_information", userId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    query = docSnap.data();
                    setData(query);
                } else {
                    console.log("No such document!");
                }
                }else {
                    const docSnap1 = collection(db, 'users_information')
                    const snapshot = await getDocs(docSnap1)
                    const userData = []
                    snapshot.forEach(doc => {
                    const data = doc.data();
                    userData.push({id: doc.id, ...data})
                });
                setData(userData)
                }
            } catch (error) {
                setError(error.code);
            } finally {
                setLoading(false);
            }
        }

        fetchUserData();
    }, [userId]);

    return [data, loading, error];
}

export default GetUsersHooks