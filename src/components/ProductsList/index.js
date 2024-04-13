import "./index.css";

const ProductsList = (props) => {
  const { productData } = props;
  const { name, imageUrl, price, oldPrice } = productData;
  return (
    <li className="products-list">
      <img
        src="https://res.cloudinary.com/dc2b69ycq/image/upload/v1708101950/CCBP%20Assignments/Bookmark_m8byro.png"
        className="bookmark"
        alt="bookmark"
      />
      <img className="product-image" src={imageUrl} alt="productImage" />

      <div className="product-description-container">
        <p className="product-name">{name}</p>
        <div className="price-and-add-container">
          <div className="price-container">
            <p className="price">
              ₹ {price} <span className="marked-price">{oldPrice} </span>
              <span className="off-label">(50% Off)</span>
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dc2b69ycq/image/upload/v1708093691/CCBP%20Assignments/shopping-bag_wvnlmn.png"
            className="shopping-bag-image"
            alt="shoppingBag"
          />
        </div>
      </div>
    </li>
  );
};

export default ProductsList;
