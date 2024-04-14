import ProductsList from "../ProductsList";
import { Component } from "react";
import axios from "axios";
import ProductSubCategory from "../ProductSubCategory";

class Jewellery extends Component {
  state = { jewelleryData: [], isLoading: true };

  componentDidMount() {
    this.getJewelleryData();
  }

  getJewelleryData = () => {
    axios
      .get("https://my-json-server.typicode.com/MukundKumar99/category/db")
      .then((response) => {
        this.setState({
          jewelleryData: response.data.jewellery,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({ isLoading: true });
      });
  };

  renderSuccessView = () => {
    const { jewelleryData } = this.state;
    return (
      <ul className="products-list-bg-container">
        {jewelleryData.map((eachData) => (
          <ProductsList productData={eachData} key={eachData.id} />
        ))}
      </ul>
    );
  };

  render() {
    const { jewelleryData, isLoading } = this.state;
    return (
      <>
        <ProductSubCategory
          subCategoryName="Jewellery · New"
          productCount={jewelleryData.length}
        />
        {isLoading ? null : this.renderSuccessView()}
      </>
    );
  }
}

export default Jewellery;
