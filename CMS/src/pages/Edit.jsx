import React, { useState } from 'react'
import { dataBase } from '../firebase/config'
import { doc, updateDoc } from 'firebase/firestore'

const Edit = () => {

    const [formData, setFormData] = useState({
        productName: '',
        price: '',
        imgUrl: '',
        description: ''
      })
      const [id, setId ] = useState('')

      const submitForm = e => {
        const { id, value } = e.target
        setFormData(form => {
          return {
            ...form,
            [id]: value
          }
        })
      }
      
      //Update function 
      const handleSubmit = e => {
        e.preventDefault()
        if(formData === '' || id=== ''){
            return
        }
        const docRef = doc(dataBase, 'products', id)
        updateDoc(docRef, {productName: productName.value, imgUrl: imgUrl.value, price: price.value, description: description.value}).then(response => {
            console.log(response)
        }).catch(error => console.log(error.message))
      }

  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <h3>Update product information</h3>
            <label htmlFor="id">Product ID:</label>
            <input className='form-control' type="text" id='id' value={id} onChange={e => setId(e.target.value)}/>
            
            <label htmlFor="id">Product Name:</label>
            <input className='form-control' type="text" id='productName' value={formData.productName} onChange={submitForm}/>

            <label htmlFor="id">Price:</label>
            <input className='form-control' type="text" id='price' value={formData.price} onChange={submitForm}/>

            <label htmlFor="id">Image URL:</label>
            <input className='form-control' type="text" id='imgUrl' value={formData.imgUrl} onChange={submitForm}/>

            <label htmlFor="id">Description:</label>
            <input className='form-control' type="text" id='description' value={formData.description} onChange={submitForm}/>
            <button className='updateBtn mt-3 mb-5'>Update product</button>
        </form>
    </div>
  )
}

export default Edit