import { useContext } from "react" //Importante a la Hora de consumir API
import Layout from "../../components/layout"
import Card from "../../components/card"
import ProductDetail from '../../components/productDetail'
import { ShoppingCartContext } from "../../context"

function Home() {

    const context = useContext(ShoppingCartContext)

    const renderView = () => {
        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map(item => (
                    <Card key={item.id} data={item} />
                ))
            )
        } else {
            return (
                <div>No results found</div>
            )
        }
    }

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input
                type="text"
                placeholder="Search Products"
                className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                onChange={(event) => context.setSearchByTitle(event.target.value)}
            />
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {renderView()}
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home
