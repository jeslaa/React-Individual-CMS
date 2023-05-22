import { Await } from "react-router-dom"
import { dataBase } from "../../../firebase/config"
import { addDoc, collection } from 'firebase/firestore'


//Create products
const newProducts = async (data) => {
    const collectionReference = collection(dataBase, 'products')
    const docRef = await addDoc(collectionReference, data)

    if(!docRef.id) throw new Error('Something is wrong I can feel it')

    return {id: docRef.id, ...data}
}


const productService = {
    newProducts
}


export default productService