const Body = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
  
          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>
          <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/Images/Amazonlogo.webp" height="25px" width="25px" alt="amazon-logo" />
            <img className="fliplogo" src="/Images/flipkartlogo.png" height="40px" width="40px" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/Images/shoes1.webp" height="500px" width="400px" alt="hero-image" />
        </div>
</main>
    )
}
export default Body;