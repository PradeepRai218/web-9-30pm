import "./Home.css";
function Home() {
  return (
    //HTML CODE
    <section>
      <div className="main">
        <h1>Home Page Comp</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          blanditiis exercitationem et dolores quo saepe molestias id
          praesentium corrupti similique. Nobis ipsam officia quibusdam
          recusandae maiores vel modi ullam odit.
        </p>
      </div>
      <ProductSection/>
    </section>
  );
}

function ProductSection() {
  return (
    <section>
      <h1>Our Products</h1>
      
    </section>
  );
}

// export default Home

export { Home };
