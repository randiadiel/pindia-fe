import React, { Component } from "react";
import Api from "../../api/Api";
import ProductCard from "../../components/product/ProductCard";

class ShopPage extends Component {
  state = {
    shop: {
      name: "",
    },
    products: [],
  };
  async componentDidMount() {
    const shops = await Api.handleGet("/shops", true);
    this.setState({ shop: shops.data });
    const products = await Api.handleGet("/products", true);
    this.setState({ product: products.data });
  }
  render() {
    const { shop, products } = this.state;
    return (
      <div className="shop-page">
        <h1>Hello, {shop.name}</h1>
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
