import React from 'react'
import { Link } from 'react-router-dom'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import { dataBase } from '../../firebase/config'

const Card = ({ product }) => {

    const handleDelete = async () => {
        const docRef = doc(dataBase, "products", id)
        try{
          await deleteDoc(docRef)
        } catch (error){
          console.log(error)
        }
      }

    return (
        <div className="col mt-5">
            <div className="card mb-5">
                <Link to={`/products/${product.id}`}>
                    <img src={product.imgUrl} className="card-img-top" alt={product.productName} />
                    <div className="card-body">
                        <h5 className="card-title">{product.productName}</h5>
                        <p className="card-text">{product.description.slice(0, 50)}...</p>
                        <p className="card-price">{product.price}</p>
                        <p>Id: {product.id}</p>
                        
                    </div>
                </Link>
                <button className='deleteBtn product-btn btn btn-primary mt-3' onClick={handleDelete}>Delete</button>

            </div>
            
        </div>
    )
}

export default Card