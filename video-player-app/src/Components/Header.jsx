import React, { useContext, useState } from 'react'

import nLogo from '../assests/nlogo.png';
import {SlMenu} from 'react-icons/sl';
import {IoIosSearch} from 'react-icons/io';
import { RiVideoAddLine } from 'react-icons/ri';
import { FiBell } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import { Context } from '../Context/contextApi';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../shared/Loader';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const {loading, mobileMenu, setMobileMenu} = useContext(Context);

    const navigate = useNavigate();

    const {pathname} = useLocation()
    const pageName = pathname?.split("/")?.filter(Boolean)?.[0] //FOR TARGETING THE EXACT PAGE
     
    //FOR SEARCHING PURPOSE FUNCTION
    const searchQueryHandler=(e)=>{
        if((e?.key === "Enter" || e === "searchButton") && searchQuery?.length > 0){
            navigate(`/searchResult/${searchQuery}`)
        }
    }
    //Only for mobile screen purpose
    const mobileMenuToggle=()=>{
        setMobileMenu(!mobileMenu)
    }


  return (
    <div className='sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black'>
      {loading && <Loader />}
    </div>
  )
}

export default Header
