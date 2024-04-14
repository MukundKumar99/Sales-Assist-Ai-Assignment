import "./index.css";
import ProductsList from "../ProductsList";
import { Component } from "react";
import axios from "axios";
import BagsCategories from "../BagsCategories";
import ProductSubCategory from "../ProductSubCategory";

class Bags extends Component {
  state = { bagsData: [], isLoading: true };

  componentDidMount() {
    this.getBagsData();
  }

  getBagsData = () => {
    axios
      .get("https://my-json-server.typicode.com/MukundKumar99/category/db")
      .then((response) => {
        this.setState({ bagsData: response.data.bags, isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: true });
      });
  };

  renderSuccessView = () => {
    const { bagsData } = this.state;
    return (
      <ul className="products-list-bg-container">
        {bagsData.map((eachData) => (
          <ProductsList productData={eachData} key={eachData.id} />
        ))}
      </ul>
    );
  };

  render() {
    const { bagsData, isLoading } = this.state;

    return (
      <>
        <BagsCategories />
        <ProductSubCategory
          subCategoryName="Bags · Backpacks"
          productCount={bagsData.length}
        />
        {isLoading ? null : this.renderSuccessView()}
      </>
    );
  }
}

export default Bags;
