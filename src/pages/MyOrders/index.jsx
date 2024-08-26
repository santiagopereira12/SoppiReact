import { useContext } from "react"
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Layout from "../../components/layout"
import { ShoppingCartContext } from "../../context"
import OrdersCard from '../../components/ordersCard'

function MyOrders(){
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length - 1

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-6'>
                <Link to='/' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
                </Link>
                <h1>MyOrders</h1>
            </div>
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/myOrders/${index}`}>
                        <OrdersCard 
                            totalPrice = {order.totalPrice}
                            totalPoducts = {order.totalPoducts}/>
                    </Link>
                ))
            }
        </Layout>
    )
}

export default MyOrders
