import { dataBase } from "../../../firebase/config"
import { addDoc, collection, getDocs } from 'firebase/firestore'


//Create products
const newProducts = async (data) => {
    const collectionReference = collection(dataBase, 'products')
    const docRef = await addDoc(collectionReference, data)

    if (!docRef.id) throw new Error('Something is wrong I can feel it')

    return { id: docRef.id, ...data }
}

//Fetches all products from the database
const getAllProducts = async (coll) => {
    const colRef = collection(dataBase, coll)
    const querySnap = await getDocs(colRef)

    const productsArray = []
    querySnap.forEach(doc => {
        productsArray.push({ id: doc.id, ...doc.data() })
    })

    return productsArray
}



const productService = {
    newProducts,
    getAllProducts
}


export default productService