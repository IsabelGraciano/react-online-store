import { useContext } from "react"
import { StoreContext } from "../../Context/Index"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'
import Layout from "../../Components/Layout/Index"
import OrderCard from "../../Components/OrderCard/Index"
import { product } from "../../Types/PropTypes"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"

function MyOrder() {
	const context = useContext(StoreContext)
    return (
      <Layout>
        <div className='flex w-80 justify-center items-center relative mb-6'>
          <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon onClick={() => context.closeCheckoutSideMenu()} className='h-6 w-6 cursor-pointer'/>
          </Link>
          <h1>My order</h1>
        </div>
        <div className='flex flex-col w-80'>
          {
            context.order?.slice(-1)[0].products.map((product: product) => (
              <OrderCard
                key={uuidv4()}
                id={product.id}
                title={product.title}
                imageURL={product.image}
                price={product.price}
                quantity={product.quantity}
              />
            ))
          }
        </div>
      </Layout>
    )
  }
  
  export default MyOrder
  