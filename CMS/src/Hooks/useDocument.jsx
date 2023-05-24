import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { dataBase } from '../firebase/config'

const useDocument = (collection, id) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getDocAsync = async () => {

            setLoading(true)
            const docRef = doc(dataBase, collection, id)
            const documentSnapShot = await getDoc(docRef)

            //Checks if the data exists and if not, gives an error message
            if(!documentSnapShot.exists()) {
                setLoading(false)
                setError('Could not find the required document')
            }

            //Sends the data back
            setData({ id: documentSnapShot.id, ...documentSnapShot.data() })
            setLoading(false)
        }

        getDocAsync()
    }, [])

  return { data, error, loading }
}

export default useDocument