import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

export function Store() {
  const [oneView, setOneView] = useState(0);
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/listProducts")
      .then((response) => response.json())
      .then((myProducts) => setMyProducts(myProducts));
  }, []);

  function View1() {
    //create
    return (
        <h1>this is view 1</h1>
    )
  }

  function View2() {
    //Read
    return (
      <div className="container mt-3">
        <div className="row">
          {myProducts.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            >
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ objectFit: "cover", height: "auto" }} //This fits cards to same size
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-price">${product.price}</p>
                  <p classname="card-rating">Rating: {product.rating.rate}/5 - ({product.rating.count} reviews)</p>
                  <p className="card-category">Category: {product.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <input type="search" id="showProductId" placeholder="Id"></input>
        <button onclick={showOneProduct()}>show one product by id</button>
      </div>

      
    );
  }

  function View3() {
    //Update
    return (
      <div>
        <h1>This is View 3</h1>
        <img
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          width={200}
          alt="view3"
        />
      </div>
    );
  }

  function View4() {
    //Delete
    return (
      <div>
        <h1>This is View 4</h1>
        <img
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          width={200}
          alt="view4"
        />
      </div>
    );
  }

  function View5() {
    //About Us
    return (
      <div>
        <h1>This is View 5</h1>
        <img
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          width={200}
          alt="view5"
        />
      </div>
    );
  }

  function showOneProduct() {
    //fetch
    let id = document.getElementById("showProductId").value;
    console.log(id);
  
    fetch(`http://localhost:8081/${id}`)
      .then((response) => response.json())
      .then((myFavoriteProduct) => {
        loadOneProduct(myFavoriteProduct);
      });
  
    function loadOneProduct(myFavoriteProduct) {
      var CardMovie = document.getElementById("col2");
  
      //read every movie from the array
      let id = myFavoriteProduct.id;
      let name = myFavoriteProduct.name;
      let price = myFavoriteProduct.price;
      let description = myFavoriteProduct.description;
      let url = myFavoriteProduct.imageUrl;
  
      //create a new html div
      let AddCardMovie = document.createElement("div");
      AddCardMovie.classList.add("col2");
  
      AddCardMovie.innerHTML = `
              <div id=card class="card shadow-sm">
                  <img src=${url} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                      <p class="card-text">${id} <strong>${name}</strong>, ${price}</p>
                      <div class="d-flex justify-content-between align-items-center">
                          <div>
                              ${description}
                          <div>
                      </div>
                  </div>
              </div>
          `;
      CardMovie.appendChild(AddCardMovie);
    }
  }
  

  const setViewOne = () => {
    if (oneView === 0) {
      setOneView(1);
    } else if (oneView === 1) {
      setOneView(2);
    } else if (oneView === 2) {
      setOneView(3);
    } else if (oneView === 3) {
      setOneView(4);
    } else {
      setOneView(0);
    }
  };

  return (
    <div>
      <button onClick={setViewOne}>One</button>

      {oneView === 0 && <View1 />}
      {oneView === 1 && <View2 />}
      {oneView === 2 && <View3 />}
      {oneView === 3 && <View4 />}
      {oneView === 4 && <View5 />}
    </div>
  );
}

export default Store;
