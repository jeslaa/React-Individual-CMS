import React from 'react'
import useDocument from '../Hooks/useDocument'
import { useParams } from 'react-router-dom'

const ProductPage = () => {

    const { id } = useParams()
    const { data : product, error, loading } = useDocument('products', id )

    if (!product) return (
        <div>
            Hejsan hoppsan lillebror
        </div>
    )
    return (
        <div className="product-container">
            <section className='text-center'>
                <h2>{product.productName}</h2>
                <div className="row">
                    <div className="product">
                        <img src={product.imgUrl} alt={product.productName} className='img-fluid' />
                    </div>
                    <div className="product">
                        <div className="text-center">
                            {product.description}
                        </div>
                        <div className="product-price">
                            <p className="h3">{product.price}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductPage