import ProductsList from "../ProductsList";
import { Component } from "react";
import axios from "axios";

class Travel extends Component {
  state = { travelsData: [], isLoading: true };

  componentDidMount() {
    this.gettravelsData();
  }

  gettravelsData = () => {
    axios
      .get("https://my-json-server.typicode.com/MukundKumar99/category/db")
      .then((response) => {
        this.setState({ travelsData: response.data.travel, isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: true });
      });
  };

  renderSuccessView = () => {
    const { travelsData } = this.state;
    return (
      <ul className="products-list-bg-container">
        {travelsData.map((eachData) => (
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

export default Travel;
