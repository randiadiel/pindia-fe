import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Api from "../../api/Api";
import ProductCard from "../../components/product/ProductCard";
import AddProduct from "../../components/product/AddProduct/AddProduct";
import AuthServices from "../../auth/AuthServices";

class ShopPage extends Component {
  state = {
    shop: {
      name: "",
    },
    products: [],
    unauthorized: false,
  };
  async componentDidMount() {
    const shopResponse = await Api.handleGet("/shops", true);
    if (shopResponse.status === 403) {
      AuthServices.logout();
      this.setState({ unauthorized: true });
    } else {
      this.setState({ shop: shopResponse.data });
      const productsResponse = await Api.handleGet("/products/shops", true);
      this.setState({ products: productsResponse.data });
    }
  }
  render() {
    const { shop, products, unauthorized } = this.state;
    if (unauthorized === true) {
      return <Redirect to="/login"></Redirect>;
    }
    return (
      <div className="shop-page container">
        <h1>Hello, {shop.name}</h1>
        <AddProduct></AddProduct>
        <p>{`Showing ${products.length} Product${
          products.length < 2 ? "" : "s"
        }`}</p>
        {products.length === 0 ? (
          <h4>You Have No Product</h4>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))
        )}
      </div>
    );
  }
}

export default ShopPage;
