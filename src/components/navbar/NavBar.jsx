import { LinkContainerStyled,
  LinksContainersStyled, 
  NavbarContainerStyled, 
  UserNavStyled, 
  UserContainerStyled, 
  SpanStyled, 
  MenuContainerStyled, 
  HomeContainerStyled,
  AboutMeStyled,
  AboutMeContainer,
  ProductsStyled,
  ProductContainer,


  
  
} from "./NavBarStyles"

import {FaUserAlt} from "react-icons/fa";
import {HiHome} from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

import { Link, Outlet } from "react-router-dom";



function NavBar() {
  return (
    <NavbarContainerStyled>
    <div>
        <a href="#"> 
          <img src="./src/data/imgProducts/LOGO.png" alt="Logo Auris"/>
        </a> 
    </div>

    <LinksContainersStyled>
      <HomeContainerStyled>
        <Link to="/">
          <LinkContainerStyled >
            <HiHome />
          </LinkContainerStyled>  
          Home
        </Link>
      </HomeContainerStyled>


      <UserNavStyled>
        <UserContainerStyled>
          <FaUserAlt/>
          <SpanStyled>
            <Link to="/about"> 
              About
            </Link>  
          </SpanStyled>
          
        </UserContainerStyled>
      </UserNavStyled>


      <MenuContainerStyled> //Menú Hamburguesa que está display none en desktop
        <AiOutlineMenu/>
      </MenuContainerStyled>

      

      <ProductContainer>
          <ProductsStyled>
            <Link to="/products">
              Productos 
            </Link>  
          </ProductsStyled>
      </ProductContainer>
      
    
    </LinksContainersStyled>

    

  </NavbarContainerStyled>

        
          
  )
}

export default NavBar





/*
          
        */