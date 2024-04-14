import ProductsList from "../ProductsList";
import { Component } from "react";
import axios from "axios";
import ProductSubCategory from "../ProductSubCategory";

class Accessories extends Component {
  state = { accessoriesData: [], isLoading: true };

  componentDidMount() {
    this.getAccessoriesData();
  }

  getAccessoriesData = () => {
    axios
      .get("https://my-json-server.typicode.com/MukundKumar99/category/db")
      .then((response) => {
        this.setState({
          accessoriesData: response.data.accessories,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({ isLoading: true });
      });
  };

  renderSuccessView = () => {
    const { accessoriesData } = this.state;
    return (
      <ul className="products-list-bg-container">
        {accessoriesData.map((eachData) => (
          <ProductsList productData={eachData} key={eachData.id} />
        ))}
      </ul>
    );
  };

  render() {
    const { accessoriesData, isLoading } = this.state;
    return (
      <>
        <ProductSubCategory
          subCategoryName="Gadgets · Latest"
          productCount={accessoriesData.length}
        />
        {isLoading ? null : this.renderSuccessView()}
      </>
    );
  }
}

export default Accessories;
