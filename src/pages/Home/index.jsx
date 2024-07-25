import { useState, useEffect } from "react" //Importante a la Hora de consumir API
import Layout from "../../components/layout"
import Card from "../../components/card"
import ProductDetail from '../../components/productDetail'

function Home(){
    const [items, setItems] = useState(null) //Importar API

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products') //traer la información de la API
        .then(response => response.json()) //mostrar información que trae
        .then(data => setItems(data))
    }, [])

    return (
        <Layout>
            Home
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
                items?.map(item=>( //Pinta Card por cada dato que recibe
                    <Card key={item.id} data={item} />
                ))
            }
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home
