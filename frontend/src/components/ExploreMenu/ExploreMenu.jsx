import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Explore a delicious and diverse menu! Explore starters like Crispy Calamari and Classic Bruschetta, main courses including Grilled Salmon and BBQ Ribs, and a variety of salads and sides. Satisfy your sweet tooth with desserts like Chocolate Lava Cake and Tiramisu. Refresh with drinks like Freshly Squeezed Orange Juice or a Classic Mojito. Customize your meal with extra toppings and perfect pairings for a personalized dining experience.</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
