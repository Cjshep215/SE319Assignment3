import React, { useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";

export function Store() {
  const [oneView, setOneView] = useState(0);
  const [myProducts, setMyProducts] = useState([]);
  const [showId, setShowId] = useState(0);

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
    // const onSubmit = (data) => {
    //     setDataF(data);
    //   };
    //create
    return (
      <div className="card">
        <h2>Add a Product:</h2>
        <div>
          <form onSubmit="" className="container mt-5" id="infoForm">
            <div className="form-group"> {/*TODO - Add patterns*/}
                <input
                  {...register("id", {required: true})} 
                  placeholder="Id"
                  className="form-control"
                  type="number"
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
                  // type="number"
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
                  // type="number"
                />
                {errors.rating && (
                  <p className="text-danger">The rating is required.</p>
                )}
                <input
                  {...register("ratingCount", {required: true})}
                  placeholder="Number of ratings"
                  className="form-control"
                  type="number"
                />
                {errors.ratingCount && (
                  <p className="text-danger">The number of ratings is required.</p>
                )}
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
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
        <form onSubmit={showOneProduct()}>
          <input type="search" id="showProductId" placeholder="Id" onSubmit={e => setShowId(e.target.value)}></input>
          <button type="submit">show one product by id</button>
        </form>
        <div id="col2">

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
        {/* The view should contain complete correct names, email, of every team member.
        Additionally, you should add the next information: course number, course name, date, professor name and a brief
        paragraph of two-three lines introducing your project. */}

<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 g-2 mb-2 mt-1">
      {/* <!-- Connors card --> */}
      <div class="col">
          <div class="card shadow-sm">
              <div class="card-body">
                  <h3>Connor Shepherd</h3>
                  <p class="card-text">I am majoring in Software Engineering at Iowa State. This year, I
                      am taking Computer Science 327, Software Engineering 319, CyberSecurity Engineering
                      230, and more.
                  </p>
                  <h6>Email: Cjshep@iastate.edu</h6>
              </div>
          </div>
      </div>
      {/* <!-- Lukes card --> */}
      <div class="col">
          <div class="card shadow-sm">
              <div class="card-body">
                  <h3>Luke Herbsleb</h3>
                  <p class="card-text">I am a second year student at Iowa State University. This spring
                      semester I am taking Coms 309, 319, 311 and more.
                  </p>
                  <h6>Email: lherb@iastate.edu</h6>
              </div>
          </div>
      </div>
  </div>
  <div class="row row-cols-1 g-2">
    <div class="col">
      <div class="card shadow-sm">
        <div class="card-body">
          <h5>course number: SE/Coms 319</h5>
          <h5>course name: Construction of User Interfaces</h5>
          <h5>date: 4/27/2024</h5>
          <h5>professor name: Dr. Abraham Aldaco</h5>
          <p>This is assignment 3 in SE/Coms 319. This project involves using MERN(Mongo, Express, React, Nodejs) to communicate between frontend and backend. We also use technologies such as bootstrap to enhance the visual apperance of the webpage.</p>
        </div>
      </div>
    </div>
  </div>
</div>
        
      </div>
    );
  }

  function showOneProduct() {
    //fetch
    let id = showId;
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
  

  // const setViewOne = () => {
  //   if (oneView === 0) {
  //     setOneView(1);
  //   } else if (oneView === 1) {
  //     setOneView(2);
  //   } else if (oneView === 2) {
  //     setOneView(3);
  //   } else if (oneView === 3) {
  //     setOneView(4);
  //   } else {
  //     setOneView(0);
  //   }
  // };

  const setViewOne = () => {
    setOneView(0);
  }
  const setViewTwo = () => {
    setOneView(1);
  }
  const setViewThree = () => {
    setOneView(2);
  }
  const setViewFour = () => {
    setOneView(3);
  }
  const setViewFive = () => {
    setOneView(4);
  }
  

  return (
    <div>
      {/* navbar */}
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
    <div class="container-fluid">
      <a class="navbar-brand">Fake Store</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" onClick = {setViewOne}>Add</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" onClick = {setViewTwo}>View</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" onClick = {setViewThree}>Update</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" onClick = {setViewFour}>Delete</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" onClick = {setViewFive}>Student Information</a>
          </li>

          
          
        </ul>
      </div>
    {/* can add a thing on the right here */}
    </div>
  </nav>

      {oneView === 0 && <View1 />}
      {oneView === 1 && <View2 />}
      {oneView === 2 && <View3 />}
      {oneView === 3 && <View4 />}
      {oneView === 4 && <View5 />}
    </div>
  );
}

export default Store;
