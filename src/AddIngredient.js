import React from 'react';

class AddIngredient extends React.Component {

  state = {
    item: "",
    amount: 0,
    unit: ""
  }

  processAdd = () => {
    console.log("process add")
    if (this.state.item === "") {
      alert("you gotta have an item")
    } else if (this.state.amount < 1) {
      alert("amount must be greater than 0")
    } else {
      let unit = (this.state.unit !== "") ? this.state.unit : null;
      this.props.onClick(this.state.item, this.state.amount, unit)
      this.setState({ item: "", amount: 0, unit: "" })
    }

  }

  render() {
    return (
      <div className="add-ingredient">
        <span onClick={this.processAdd} className="plus-button"></span>

        <input type="text" onChange={({ target }) => { this.setState({ item: target.value }) }} value={this.state.item} />
        <input type="number" min="0" onChange={({ target }) => { this.setState({ amount: target.value }) }} value={this.state.amount} />
        <input type="text" onChange={({ target }) => { this.setState({ unit: target.value }) }} value={this.state.unit} />
      </div>
    );
  }
}

export default AddIngredient;
