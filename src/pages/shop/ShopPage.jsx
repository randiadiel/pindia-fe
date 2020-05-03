import React, { Component } from "react";
import Api from "../../api/Api";
import ProductCard from "../../components/product/ProductCard";

class ShopPage extends Component {
  state = {
    shop: {},
    products: [],
  };
  async componentDidMount() {
    const shops = await Api.handleGet("/shops", true);
    this.setState({ shop: shops.data });
    const products = await Api.handleGet("/products/shops", true);
    this.setState({ products: products.data });
  }
  render() {
    const { shop, products } = this.state;
    return (
      <div className="shop-page">
        <h1>Hello, {shop.name}</h1>
        <button
          className="btn btn-warning"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Add Products
        </button>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
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
