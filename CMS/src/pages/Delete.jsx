import React from 'react'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import { dataBase } from './firebase'

const Delete = () => {

    const handleDelete = async () => {
        const docRef = doc(dataBase, "products", id)
        try{
          await deleteDoc(docRef)
        } catch (error){
          console.log(error)
        }
      }

    
}

export default Delete