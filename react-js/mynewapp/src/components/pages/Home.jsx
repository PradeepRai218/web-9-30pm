import { products } from "../../Data/productData";
import Footer from "../common/Footer";
import { Header } from "../common/Header";
import "./Home.css";
function Home() {
  let n = 10;
  let m = 20;

  let status = true;

  let name = "";

  let user = ["Anil", "Sunil", "Kunal", "Ramesh", "Suresh", "Mahesh", "Rajesh"];

  let allUser = user.map((v, i) => (
    <li>
      {" "}
      {i + 1} {v}
    </li>
  ));

  return (
    <section>
      <Header />
      <section className="homeSection">
        <ul>{allUser}</ul>
        <ul>
          {user.map((value, index) => {
            return (
              <li>
                {" "}
                {index + 1} {value}
              </li>
            );
          })}

          {user.map((value, index) => (
            <li>
              {" "}
              {index + 1} {value}{" "}
            </li>
          ))}
        </ul>

        {name != "" && <h3> {name} </h3>}

        {status ? <p>Welcome</p> : ""}

        {status && <p>Welcome to ws</p>}

        <h1>
          Our Product {n + m} {"Hello"}{" "}
        </h1>

        <div
          className="productConatiner"
          style={{ marginBottom: "30px", backgroundColor: "yellow" }}
        >
          {
          products.map((obj, index) => {
            return (
              <div className="productItems">
                <img
                  src={obj.thumbnail}
                  alt=""
                />
                <h3>{obj.title}</h3>
                 <h4>{obj.price}</h4>
              </div>
            );
          })
          
          }
        </div>

        <div className="productConatiner">
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
        </div>
      </section>

      <Footer />
    </section>
  );
}

function ProductItems() {
  return (
    <div className="productItems">
      <img
        src="https://www.wscubetech.com/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fuploads%2Ftop-bar-content%2FFor%20Website.png&w=1200&q=75"
        alt=""
      />
      <h3>Marketing</h3>
    </div>
  );
}
export { Home };
