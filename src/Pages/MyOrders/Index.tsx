import { useContext } from "react"
import { Link } from "react-router-dom"
import { order } from "../../Types/PropTypes"
import { StoreContext } from "../../Context/Index"
import Layout from "../../Components/Layout/Index"
import OrdersCard from "../../Components/OrdersCard/Index"
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

function MyOrders() {
  const context = useContext(StoreContext)

    return (
      <Layout>
        <div className='flex w-80 justify-center items-center relative'>
          <h1>My orders</h1>
        </div>
        {
          context.order.map((order: order, index: number) => {
            <Link key={index} to={`/my-orders/${order.id}`}>
              <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
            </Link>
          })
        }
      </Layout>
    )
  }
  
  export default MyOrders
  