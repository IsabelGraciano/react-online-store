import { useState, useEffect } from "react"
import axios from 'axios'
import Card from "../../Components/Card/Index"
import Layout from "../../Components/Layout/Index"
import ProductDetail from "../../Components/ProductDetail/Index"
import { product } from "../../Types/PropTypes"

function Home() {
  const [items, setItems] = useState<product[]>([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => setItems(response.data))
  }, [])

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map(item => (
            <Card data={item} key={item.id} />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
