import { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import OrderCard from "../../components/orderCard"
import Layout from "../../components/layout"

function MyOrder(){
    const context = useContext(ShoppingCartContext)

    return (
        <Layout>
            MyOrder
            <div className='flex flex-col w-8'>
                {
                    context.order?.slice(-1)[0].products.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}

export default MyOrder
