import React, { useState } from 'react'

const Add = () => {

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    imgUrl: '',
    description: ''

  })

  //Submits the form with multiple values and saves the data
  const submitForm = e => {
    const { id, value } = e.target
    setFormData(form => {
      return {
        ...form,
        [id]: value
      }
    })
  }
  
  return (
    <div>
      <h1 className='text-center my-5'>Add a product</h1>
      <form noValidate>
        <div className="mb-3">
          <label htmlFor="form" className='form-label'>Product name:</label>
          <input type="text" name="productName" id="productName" className='form-control' value={formData.name} onChange={submitForm}/>

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