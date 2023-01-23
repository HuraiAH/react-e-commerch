import React from 'react';
import './product.css'
// import f1 from '../../images/f1.jpg';
// import f2 from '../../images/f2.jpg';
// import f3 from '../../images/f3.jpg';
// import f4 from '../../images/f4.jpg';
// import f5 from '../../images/f5.jpg';
// import f6 from '../../images/f6.jpg';
import flashSaleData from '../../data/flashSaleData';


const product= ()=> {
    return (
        <div className='baraz_product'>
          
            <div className="container">
              <div className="row">
              <h2 className='mt-5'>FlashSale</h2>

                {
                  flashSaleData.map(data=>
                    <div className="Baraz_card col-md-2 col-sm-4 mt-4 py-2  ">
                    <img src={data.image} alt="/" className='/' width= "100%" />
                    <p className='product_details mt-2'>{data.productDetails}</p>
                    <h6 className='present_price'>{data.presentPrice}</h6>
                    <span className='prev_price'>{data.prevPrice}</span>
                    <span className='discount m-3'>{data.discount}</span>
  
                    </div>
                    )
                }

                
             
              </div>
            </div>
            
        </div>
    );
}

export default product;