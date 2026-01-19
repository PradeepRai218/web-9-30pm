import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Loading from "../common/Loading";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";
import { Link } from "react-router";
import { myGlobalContext } from "../../context/MainContext";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function ProductAPIWork() {
  let [categoryData, setCategoryData] = useState([]);
  let [brandData, setBrandData] = useState([]);
  let [productData, setProductData] = useState([]);
  let [loading, setLoading] = useState(false);

  //Filter States
  //3
  let [sorting, setSorting] = useState(null);
  let [categories, setCategories] = useState([]);

  let [currentPage, setCurrentpage] = useState(1);
  let [totalPage, setTotalPages] = useState(0);

  let getCategory = async () => {
    let apiRes = await axios.get(
      `https://wscubetech.co/ecommerce-api/categories.php`
    );
    let finalData = await apiRes.data; //axios Response -> Fixed data  ->API DATA
    setCategoryData(finalData.data); //Array 24 Element
  };

  let getBrands = async () => {
    let apiRes = await axios.get(
      `https://wscubetech.co/ecommerce-api/brands.php`
    );
    let finalData = await apiRes.data;
    let { data } = finalData;
    setBrandData(data);
  };

  let getProducts = () => {
    setLoading(true);
    axios
      .get(`https://wscubetech.co/ecommerce-api/products.php`, {
        params: {
          page: currentPage,
          limit: 12,
          categories: categories.join(","),
          brands: null,
          price_from: null,
          price_to: null,
          discount_from: null,
          discount_to: null,
          rating: null,
          sorting, //sorting:3
        },
      })
      .then((res) => res.data)
      .then((finalRes) => {
        setProductData(finalRes.data);
        setTotalPages(finalRes.total_pages);
        setLoading(false);
        window.scrollTo({
          top: "0px",
          behavior: "smooth",
        });
      });
  };

  useEffect(() => {
    //Filter Ke  Work
    getProducts();
  }, [sorting, categories, currentPage]);

  //Single Time Call
  useEffect(() => {
    getCategory();

    getBrands();
  }, []);

  let getCheckedCategory = (e) => {
    if (e.target.checked) {
      //Check
      setCategories([...categories, e.target.value]);
    } else {
      //UnCheck
      // ["beauty","furniture"]
      let filterData = categories.filter((v) => v != e.target.value);
      setCategories(filterData); //["beauty"]
    }
  };

  return (
    <div>
      {/* {totalPage}   */}
      {currentPage}
      <ToastContainer />
      <h1 className="text-center py-10 font-bold text-4xl">Product Page</h1>
      <section className=" mx-5 gap-5 grid grid-cols-[20%_auto]">
        <aside>
          <div className=" p-3 flex justify-between">
            <b> FILTERS </b>
            <b>CLEAR ALL </b>
          </div>

          <div className="h-[250px] overflow-y-scroll border border-[#ccc] p-4">
            <h3 className="font-bold text-xl uppercase">categories</h3>
            <ul className="mt-4 flex flex-col gap-3 text-[18px]">
              {categoryData.map((obj, index) => {
                return (
                  <li key={index}>
                    <label htmlFor="">
                      <input
                        type="checkbox"
                        onChange={getCheckedCategory}
                        value={obj.slug}
                      />{" "}
                      {obj.name}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="h-[250px] overflow-y-scroll border border-[#ccc] p-4">
            <h3 className="font-bold text-xl uppercase">BRAND</h3>
            <ul className="mt-4 flex flex-col gap-3 text-[18px]">
              {brandData.map((obj, index) => {
                return (
                  <li key={index}>
                    <input type="checkbox" /> {obj.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" overflow-y-scroll border border-[#ccc] p-4">
            <h3 className="font-bold text-xl uppercase">Price</h3>
            <ul className="mt-4 flex flex-col gap-3 text-[18px]">
              <li>
                <input type="radio" /> Rs. 10 to Rs. 250
              </li>
              <li>
                <input type="radio" /> Rs. 250 to Rs. 500
              </li>
              <li>
                <input type="radio" /> Rs. 500 to Rs. 1000
              </li>
              <li>
                <input type="radio" /> Rs. 1000 to Above
              </li>
            </ul>
          </div>
        </aside>
        <article>
          <div className="flex justify-end">
            <select
              onChange={(e) => setSorting(e.target.value)}
              className="border-1 p-3"
            >
              <option value="">Sort by : Recommended</option>
              <option value="1">Name : A to Z</option>
              <option value="2">Name : Z to A</option>
              <option value="3">Price : Low to High</option>
              <option value="4">Price : High to Low</option>
            </select>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {productData.length >= 1 ? (
                productData.map((obj, index) => (
                  <ProductItems data={obj} key={index} />
                ))
              ) : (
                <div>No Data Found</div>
              )}
            </div>
          )}

          <ResponsivePagination
            current={currentPage}
            total={totalPage}
            onPageChange={setCurrentpage}
          />
        </article>
      </section>
    </div>
  );
}

function ProductItems({ data }) {
  let { name, description, price, image, id } = data;
  let { cart, setCart } = useContext(myGlobalContext);
  let addtoCart = () => {
    let cartObj = {
      id,
      name,
      image,
      price,
      qty: 1,
    };
    setCart([...cart, cartObj]);
    Swal.fire({
      title: "Cart Added!",
      text: "Data Added in Cart",
      icon: "success",
    });

    // toast.success("Data Added in Cart");
  };

  let checkMyProductinCart = cart.find((obj) => obj.id == id);

  // let c=[
  //   {id:161,pname:'iphone'},
  //   {id:162,pname:'iphone12'},
  //   {id:163,pname:'iphone13'}
  // ]

  // let filData= c.filter((obj)=>obj.id!=161)
  // console.log(filData);

  let removeCart = () => {
    Swal.fire({
      title: "Are you want to delete sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let finalCart = cart.filter((obj) => obj.id != id);
        setCart(finalCart);
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      }
    });

    // if (confirm("Are you sure want to delete?")) {
    //   let finalCart = cart.filter((obj) => obj.id != id);
    //   // console.log(finalCart);
    //   setCart(finalCart);
    // }
  };
  // console.log(checkMyProductinCart);

  return (
    <div className="shadow-lg border-1 border-[#ccc]">
      <img src={image} alt="" />
      <div className="p-3">
        <h3 className="font-bold py-2">{name}</h3>
        <p className="line-clamp-2">{description}</p>

        <p className="mt-3 font-bold">Rs.{price}</p>
        <Link to={`/productview/${id}`}>
          <button className="p-2 bg-green-500">Read More</button>
        </Link>

        {checkMyProductinCart ? (
          <button
            onClick={removeCart}
            className="ml-5 p-2 cursor-pointer bg-red-500"
          >
            remove Cart
          </button>
        ) : (
          <button
            onClick={addtoCart}
            className="ml-5 p-2 cursor-pointer bg-green-500"
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}
