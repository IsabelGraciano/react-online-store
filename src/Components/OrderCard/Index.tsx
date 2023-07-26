import { XMarkIcon } from '@heroicons/react/24/outline'
import { orderCardProps } from '../../Types/PropTypes'

const OrderCard = (props: orderCardProps) => {
    const {id, title, imageURL, price, quantity, handleDeleteProduct} = props

    let renderMarkIcon

    if (handleDeleteProduct) {
        renderMarkIcon = <XMarkIcon onClick={() => handleDeleteProduct(id)} className='h-6 w-6 cursor-pointer'/>
    }

    return (
        <div className='flex justify-between items-center mb-3'>
            {quantity}
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20 grow'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageURL} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>

            <div className='flex items-center'>
                <p className='text-lg font-medium'>${price}</p>
                {renderMarkIcon}
            </div>
        </div>
    )
}

export default OrderCard