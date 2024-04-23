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
    //Create
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
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                  style={{ objectFit: "cover", height: "200px" }} //This fits cards to same size
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
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
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                  style={{ objectFit: "cover", height: "200px" }} //This fits cards to same size
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
