import { useContext } from 'react'
import { StoreContext } from '../../Context/Index'
import { XMarkIcon } from '@heroicons/react/24/outline'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(StoreContext)

    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed bg-white right-0 border border-black rounded-lg` }
        >
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <XMarkIcon onClick={() => context.closeProductDetail()} className='h-6 w-6 cursor-pointer'/>
            </div>
            <figure className='px-6 h-60'>
                <img
                    className='h-full w-full rounded-lg object-cover'
                    src={context.productToShow.image}
                    alt={context.productToShow.title}
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail