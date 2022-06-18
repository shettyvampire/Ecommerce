import React from 'react';
import MobileData from './Data'


const Product = (item) => {

   
        return (
            <div>
               
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Product</h1>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    </div>
                </div>
                {
                    MobileData.map((item)=>{
                    return(
                        <div key={item.id} className="card" style={{width : "18rem"}}>
                        <img src={item.img} className="card-img-top" alt={item.title}/>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="lead">{item.price}</p>
                            </div>
                        </div>  
                    )
                    })
                }
            </div>
        );
    }

export default Product;
