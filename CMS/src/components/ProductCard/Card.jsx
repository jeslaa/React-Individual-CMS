import React from 'react'
import { Link } from 'react-router-dom'
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { dataBase } from '../../firebase/config'

const Card = ({ product }) => {


    //Delete function
    const deleteProduct = async (id) => {
        const productDoc = doc(dataBase, "products", id)
        await deleteDoc(productDoc)
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
                       

                    </div>
                </Link>
                <p>ID: {product.id}</p>
                <p>Image URL: {product.imgUrl}</p>
                <button className='deleteBtn product-btn btn btn-primary mt-3' onClick={ () => { deleteProduct(product.id) }}>Delete</button>
                

            </div>

        </div>
    )
}

export default Card