
import React from 'react'
import Navbar from './components/Navbar/navbar';
import Logo from './components/Navbar/logoSearchBar/logo';
import Carousel from './components/carousel/carousel';
import TopBanner from './components/topBanner/topBanner';
import Product from './components/product/product';
import BarazProduct from './components/barazMall/barazProduct';
import Footer from './components/footer/footer';
import CopyRight from './components/footer/copyRight';


const App= ()=>  {

    
  
      return(
        
       
        <>
           <Navbar/> 
           <Logo/>
           <Carousel/>
           <TopBanner/>
           <Product/>
           <BarazProduct/>
           <Footer/>
           <CopyRight/>
          
        </>
        
     );
 
    
       
}

export default App;





