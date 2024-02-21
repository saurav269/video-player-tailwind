import React, { useContext } from 'react'
import { categories } from './../Utils/constants';
import LeftNavMenuItem from './LeftNavMenuItem';
import { Context } from '../Context/contextApi';
import { useNavigate } from 'react-router-dom';

const LeftNav = () => {
  const {selectCategory, setSelectCategory, mobileMenu} = useContext(Context)

  const navigate = useNavigate()

  //For active class
  const clickHandler=(name,type)=>{
    switch(type) {
      case "category":
        return setSelectCategory(name)

        case "home":
        return setSelectCategory(name)

        case "menu":
        return false;

      default: 
      break;
    }

  }
  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[240px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0":""}`}>
      <div className="flex px-5 flex-col">
        {categories?.map((ele) => (
          <>
          <LeftNavMenuItem 
          text={ele.type === "home" ? "Home" : ele.name}
          icon={ele.icon}
          action={() => {
            clickHandler(ele.name, ele.type);
            navigate("/")
          }}
          className={`${selectCategory === ele.name ? "bg-white/[0.15]" : ""}`}
          />
          {ele.divider && (
            <hr className='my-5 border-white/[0.2]' />
          )}
          </>
        ))}
        <hr className='my-5 border-white/[0.2]' />
        <div className='my-5 border-white/[0.2]'>
          <div className='text-white/[0.5] text-[12px]'>
            Saurav Mallik
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftNav
