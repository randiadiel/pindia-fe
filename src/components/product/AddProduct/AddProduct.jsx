import React, { Component } from "react";
import { Button, Collapse } from "react-bootstrap";
import TextBox from "../../common/input/TextBox";
import TextArea from "../../common/input/TextArea";
import { inputs } from "./AddProductConfig";

class AddProduct extends Component {
  state = {
    open: false,
  };

  setOpen = (e) => {
    this.setState({ open: !this.state.open });
    console.log(this.state.open);
  };
  render() {
    const { open } = this.state;
    return (
      <div className="add-product">
        <Button
          variant="warning"
          onClick={this.setOpen}
          aria-controls="add-product-collapse"
          aria-expanded={open}
        >
          Add Product
        </Button>
        <Collapse in={open}>
          <div id="add-product-collapse" className="container">
            <form>
              <TextBox input={inputs.name}></TextBox>
              <TextBox input={inputs.price}></TextBox>
              <TextArea input={inputs.description}></TextArea>
              <input
                type="submit"
                value="Add"
                className="btn btn-warning"
              ></input>
            </form>
          </div>
        </Collapse>
      </div>
    );
  }
}
export default AddProduct;
