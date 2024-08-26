import React, { useContext, useEffect, useState } from 'react'

const RelatedProducts = ({category, subCategory}) => {

    const {products} = useContext(ShopContext);
    cosnt [related, setRelated] = useState([]);

    useEffect(()=>{

        if (products.length > 0) {

            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item)=>category === item.category);
            productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory);

            console.log(productsCopy.slice(0,5));
        }

    },[products])

  return (
    <div>
      
    </div>
  )
}

export default RelatedProducts
