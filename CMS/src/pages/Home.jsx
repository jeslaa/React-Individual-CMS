import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPrdct } from '../store/features/products/productSlice'
import Card from '../components/ProductCard/Card'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPrdct())
  }, [])

  const { products, loading, error} = useSelector(state => state.listProduct)


  return (
    <div>

      { loading }
      { error && <p>{error}</p>}
      <div className="row row-cols-lg-3">
      {
        products.map(product => <Card key={product.id} product={product}/>)
      }
      </div>
    </div>
  )
}

export default Home