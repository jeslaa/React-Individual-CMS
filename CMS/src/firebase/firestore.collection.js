import { collection } from "firebase/firestore";
import { dataBase } from "./config";

//Allows us to use the variable in all files without importing
export const productCollectionRef = collection(dataBase, 'products')