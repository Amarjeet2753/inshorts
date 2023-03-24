// import React from 'react'

import { AppBar, Toolbar, styled, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const StyleApp = styled(AppBar)`
  
  background : #fff;
  height : 70px;

`
const StyleMenuIcon = styled(MenuIcon)`
        color: #000;
`;


const Image =styled('img')`
    
    height: 55px;
    margin: auto;
    ${'' /* padding-right: 70px; */}
    
`



 const Header = () => {

  const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
  return (
    <StyleApp position="static">
       <Toolbar>
        <StyleMenuIcon/>
        <Image src={url} alt ="logo"/>
       </Toolbar>
    </StyleApp>
   
  )
}

export default Header