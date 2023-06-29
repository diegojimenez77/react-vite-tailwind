import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    //Shoping Cart - Increment Quantity
    const [count, setCount] = useState(0)

    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

      //Checkout Side Menu - Open/Close
      const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
      const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
      const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({})

        //Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([])

     //Shopping Cart - Order
    const [order, setOrder] = useState([])

    //Get produtcts
    const [items, setItems] = useState(null)
    
        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
        },[])

    //Get proucts by title
    const [searchByTitle, setSearchByTitle] = useState(null)
  
    const [filteredItems, setFilteredItems] = useState(null)

    const filterdItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    //      //Get proucts by Category
    //  const [searchByCategory, setSearchByCategory] = useState(null)
    //  console.log(searchByCategory)
  
    //  const [filteredItemsByCategory, setFilteredItemsByCategory] = useState(null)
 
    //  const filterdItemsByCategory = (items, searchByCategory) => {
    //     console.log('items: ', items)
    //      return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    //  }
     
    //  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    //     if (searchType === 'BY_TITLE'){
    //        return filterdItemsByTitle(items, searchByTitle)
    //     }

    //     if (searchType === 'BY_CATEGORY'){
    //         return filterdItemsByCategory(items, searchByCategory)
    //      }

    //      if (searchType === 'BY_TITLE_AND_CATEGORY'){
    //         return filterdItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    //      }

    //     if (!searchType) {
    //         return items
    //      }
    //  }

    //  useEffect(() => {
    //     if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    //     if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    //     if (searchByCategory && !searchByTitle) setFilteredItemsByCategory(filterBy('BY_CATEGORY', items, searchByCategory, searchByTitle))
    //     if (!searchByCategory && !searchByTitle) setFilteredItemsByCategory(filterBy(null, items, searchByCategory, searchByTitle))
    // }, [items, searchByTitle, searchByCategory])

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filterdItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])

    
    return(
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
            // searchByCategory,
            // setSearchByCategory,
            // filteredItemsByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}