import { createContext, useEffect, useState } from "react";
import { fetchDataApi } from "../Utils/api";


export const Context = createContext();

export const AppContext=(props)=>{

    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectCategory, setSelectCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectCategory)
    },[selectCategory])

    const fetchSelectedCategoryData=(query)=>{
        setLoading(true)
        fetchDataApi(`search/?q=${query}`).then((res) => {
            console.log(res.contents)
             setSearchResults(res.contents)
            setLoading(false)
        })

    }
    
    return (
        <Context.Provider  value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectCategory,
            setSelectCategory,
            mobileMenu,
            setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
    )

}