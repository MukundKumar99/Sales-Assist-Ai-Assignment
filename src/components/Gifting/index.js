import ProductsList from "../ProductsList";
import { Component } from "react";
import axios from "axios";

class Gifting extends Component {
  state = { giftingData: [], isLoading: true };

  componentDidMount() {
    this.getGiftingData();
  }

  getGiftingData = () => {
    axios
      .get("https://my-json-server.typicode.com/MukundKumar99/category/db")
      .then((response) => {
        this.setState({
          giftingData: response.data.gifts,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({ isLoading: true });
      });
  };

  renderSuccessView = () => {
    const { giftingData } = this.state;
    return (
      <ul className="products-list-bg-container">
        {giftingData.map((eachData) => (
          <ProductsList productData={eachData} key={eachData.id} />
        ))}
      </ul>
    );
  };

  render() {
    const { isLoading } = this.state;
    return <>{isLoading ? null : this.renderSuccessView()}</>;
  }
}

export default Gifting;
