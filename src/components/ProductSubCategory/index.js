import "./index.css";

const ProductSubCategory = (props) => {
  const { subCategoryName, productCount } = props;
  return (
    <div className="product-sub-category">
      <p className="sub-category">{subCategoryName}</p>
      <div>
        <p className="sub-category">
          {productCount} products
          <span>
            <img
              src="https://res.cloudinary.com/dc2b69ycq/image/upload/v1708108493/CCBP%20Assignments/Vector_4_fvulrq.png"
              alt="product"
              className="product-count"
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductSubCategory;
