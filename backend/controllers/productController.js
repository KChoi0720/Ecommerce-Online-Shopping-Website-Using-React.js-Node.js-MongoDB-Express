// function for add product
const addProduct = async (req, res) => {
    try {
      const {
        name,
        description,
        price,
        category,
        subCategory,
        sizes,
        bestseller,
      } = req.body;
  
      const image1 = req.files.image1[0];
      const image2 = req.files.iamge2[0];
      const image3 = req.files.image3[0];
      const image4 = req.files.image4[0];
  
      console.log(
        name,
        description,
        price,
        category,
        subCategory,
        sizes,
        bestseller
      );
  
      console.log(image1, image2, image3, image4);
  
      res.json({})
  
    } catch (error) {
      console.log(error)
      res.json({success:false, message:error.message})
    }
  };
  
  // function for list product
  const listProducts = async (req, res) => {};
  
  // function for remove product
  const removeProduct = async (req, res) => {};
  
  // function for single product
  const singleProduct = async (req, res) => {};
  
  export { listProducts, addProduct, removeProduct, singleProduct };
  