import { XMarkIcon } from '@heroicons/react/24/outline'
import { ordersCardProps } from '../../Types/PropTypes'

const OrdersCard = (props: ordersCardProps) => {
    const {totalPrice, totalProducts} = props

    return (
        <div className='flex justify-between items-center mb-3 border border-black'>
            <p>
                <span>date comes heree</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}

export default OrdersCard