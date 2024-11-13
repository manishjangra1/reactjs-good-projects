const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content poppins-semibold">
        <h1 id="heading1" className="poppins-semibold">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="poppins-semibold">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button className="secondary-button">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/flipkart.png" alt="flipkart" />
            <img src="/images/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe.png" alt="shoe" />
      </div>
    </main>
  );
};

export default Hero;
