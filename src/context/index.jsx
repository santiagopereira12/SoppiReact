import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    //Shopping Cart - increment quantity
    const [count, setCount] = useState(0)

    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Product Detail - Show product
    const [productToShow, setProductToShow] = useState({})
    //Shopping Cart - add products to cart
    const [cartProducts, setCartProducts] = useState([])
    //Shopping Cart - Order
    const [order, setOrder] = useState([])

    //Get Products
    const [items, setItems] = useState(null) //Importar API
    const [filteredItems, setFilteredItems] = useState(null)

    //Get Products By Title
    const [searchByTitle, setSearchByTitle] = useState(null)

    //Get Products By Category
    const [searchByCategory, setSearchByCategory] = useState(null)
    console.log('searchByCategory: ', searchByCategory)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products') //traer la información de la API
        .then(response => response.json()) //mostrar información que trae
        .then(data => setItems(data))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) =>{
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) =>{
        console.log('Items: ', items)
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE'){
            return filteredItemsByTitle(items, searchByTitle)
        }else if (searchType === 'BY_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory)
        }else if (searchType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory).filter(item =>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }else {
            return items
        }
    }

    useEffect(() => {
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])

    console.log('filteredItems: ', filteredItems)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}