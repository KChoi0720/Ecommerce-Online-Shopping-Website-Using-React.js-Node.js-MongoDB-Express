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
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'}/>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap'>
        {realted.map((item, index)=>(
            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts




