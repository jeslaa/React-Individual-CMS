import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPrdct } from '../store/features/products/productSlice'
import Card from '../components/ProductCard/Card'
import Edit from './Edit'
import { Navigate } from 'react-router-dom'

const Home = () => {

  const {user} = useSelector(state => state.auth)

  //Redirects the user to login page if the user isnt logged in
  if(!user) return <Navigate to="/login"/>

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPrdct())
  }, [])

  const { products, error} = useSelector(state => state.listProduct)


  return (
    <div>

      { error && <p>{error}</p>}
      <div className="row row-cols-lg-3">
      {
        products.map(product => <Card key={product.id} product={product}/>)
      }
      </div>
      <Edit />
    </div>
  )
}

export default Home