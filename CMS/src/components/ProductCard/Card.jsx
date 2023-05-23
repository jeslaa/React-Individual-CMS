import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ product }) => {
    return (
        <div className="col">
            <div className="card mb-5">
                <Link to={`/products/${product.id}`}>
                    <img src={product.imgUrl} className="card-img-top mb-5" alt={product.productName} />
                    <div className="card-body">
                        <h5 className="card-title">{product.productName}</h5>
                        <p className="card-text">{product.description.slice(0, 50)}...</p>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Card