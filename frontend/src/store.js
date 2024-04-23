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

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const [dataF, setDataF] = useState({});
    
  function View1() {
    const onSubmit = (data) => {
        setDataF(data);
        setViewThree();
      };
    //create
    return (
      <div className="card">
        <h2>Add a Product:</h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="container mt-5" id="infoForm">
            <div className="form-group"> {/*TODO - Add patterns*/}
                <input
                  {...register("id", {required: true})} 
                  placeholder="Id"
                  className="form-control"
                />
                {errors.id && (
                  <p className="text-danger">An id is required.</p>
                )}
                <input
                  {...register("title", {required: true})}
                  placeholder="Title"
                  className="form-control"
                />
                {errors.title && (
                  <p className="text-danger">A title is required.</p>
                )}
                <input
                  {...register("price", {required: true})}
                  placeholder="Price"
                  className="form-control"
                />
                {errors.price && (
                  <p className="text-danger">A price is required.</p>
                )}
                <input
                  {...register("description", {required: true})}
                  placeholder="Description"
                  className="form-control"
                />
                {errors.description && (
                  <p className="text-danger">A description is required.</p>
                )}
                <input
                  {...register("category", {required: true})}
                  placeholder="Category"
                  className="form-control"
                />
                {errors.category && (
                  <p className="text-danger">A category is required.</p>
                )}
                <input
                  {...register("image", {required: true})}
                  placeholder="Image Url"
                  className="form-control"
                />
                {errors.image && (
                  <p className="text-danger">An image is required.</p>
                )}

                <input
                  {...register("rating", {required: true})}
                  placeholder="Rating out of 5"
                  className="form-control"
                />
                {errors.rating && (
                  <p className="text-danger">The rating is required.</p>
                )}
                <input
                  {...register("ratingCount", {required: true})}
                  placeholder="Number of ratings"
                  className="form-control"
                />
                {errors.ratingCount && (
                  <p className="text-danger">The number of ratings is required.</p>
                )}

                
            </div>
          </form>
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
      </div>
      //get element by id

      
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
