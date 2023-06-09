import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPrdct } from '../store/features/products/productSlice'
import { Navigate } from 'react-router-dom'

const Add = () => {


  const {user} = useSelector(state => state.auth)

  if(!user) return <Navigate to="/login"/>

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    imgUrl: '',
    description: ''

  })

  //When form is submitted it saves the data
  const submitForm = e => {
    const { id, value } = e.target
    setFormData(form => {
      return {
        ...form,
        [id]: value
      }
    })
  }

  const handdleSubmit = e => {
    e.preventDefault()
    const data = {
      ...formData,
      price: +formData.price
    }

    dispatch(addPrdct(data))
  }
  
  return (
    <div>
      <h1 className='text-center my-5'>Add a product</h1>
      <form noValidate onSubmit={handdleSubmit}>
        <div className="mb-3">
          <label htmlFor="form" className='form-label'>Product name:</label>
          <input type="text" className='form-control' name='productName' id='productName' value={formData.productName} onChange={submitForm}/>

          <label htmlFor="price">Price:</label>
          <input className='form-control' name='price' id='price' type="text" value={formData.price} onChange={submitForm}/>

          <label htmlFor="imgUrl">IMG url:</label>
          <input className='form-control' name='imgUrl' id='imgUrl' type="text" value={formData.imgUrl} onChange={submitForm}/>

          <label htmlFor="description">Description:</label>
          <textarea className='form-control' name="description" id="description" rows="5" value={formData.description} onChange={submitForm}></textarea>

          <button className='product-btn btn btn-primary mt-3'>Add product</button>

        </div>
      </form>
    </div>
  )
}

export default Add