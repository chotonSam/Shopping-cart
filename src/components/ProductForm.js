import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/product/actions";

const ProductForm = () => {
  const [fromValue, setFromValue] = useState({
    productName: "",
    catagory: "",
    image: "",
    price: "",
    quantity: "",
  });
 
  const dispatch = useDispatch();

  const handleValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    setFromValue({
      ...fromValue,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(fromValue));
    setFromValue({
      productName: "",
      catagory: "",
      image: "",
      price: "",
      quantity: "",
    });

    console.log(fromValue);
  };

  return (
    <div>
      {/* <!-- Product Input Form --> */}
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
         autoComplete="off"
          onSubmit={submitHandler}
          className="space-y-4 text-[#534F4F]"
          id="addProductForm"
        >
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label htmlFor="inputName">Product Name</label>
            <input
           
              value={fromValue.productName}
              onChange={handleValue}
              name="productName"
              className="addProductInput"
              id="inputName"
              type="text"
              required
            />
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label htmlFor="inputCategory">Category</label>
            <input
              value={fromValue.catagory}
              onChange={handleValue}
              name="catagory"
              className="addProductInput"
              id="inputCategory"
              type="text"
              required
            />
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label htmlFor="inputImage">Image Url</label>
            <input
              value={fromValue.image}
              onChange={handleValue}
              name="image"
              className="addProductInput"
              id="inputImage"
              type="text"
              required
            />
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                value={fromValue.price}
                onChange={handleValue}
                name="price"
                className="addProductInput"
                type="number"
                id="inputPrice"
                required
              />
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label htmlFor="inputQuantity">Quantity</label>
              <input
                value={fromValue.quantity}
                onChange={handleValue}
                name="quantity"
                className="addProductInput"
                type="number"
                id="inputQuantity"
                required
              />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
      {/* <!-- Product Input Form Ends --> */}
    </div>
  );
};

export default ProductForm;
