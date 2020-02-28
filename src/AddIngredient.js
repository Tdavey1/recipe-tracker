import React from 'react';

class AddIngredient extends React.Component {

  state = {
    item: "",
    amount: 0,
    unit: ""
  }

  processAdd = () => {
    if (this.state.item === "") {
      alert("you gotta have an item")
    } else if (this.state.amount < 1) {
      alert("amount must be greater than 0")
    } else {
      let unit = (this.state.unit !== "") ? this.state.unit : null;
      this.props.addIngredient(this.state.item, this.state.amount, unit)
      this.setState({ item: "", amount: 0, unit: "" })
    }

  }

  render() {
    return (
      <div className={"add-ingredient" + (!this.props.editing ? " hide" : "")}>
        <span onClick={this.processAdd} className="plus-button"></span>
        <input className="input input-amount" type="number" min="0" onChange={({ target }) => { this.setState({ amount: target.value }) }} value={this.state.amount} />
        <select value={this.state.unit} className="input input-unit" onChange={({ target }) => { this.setState({ unit: target.value }) }}>
          <option value="">None</option>
          <option value="tablespoons">tablespoons</option>
          <option value="teaspoons">teaspoons</option>
          <option value="cups">cups</option>
          <option value="ml">ml</option>
        </select>
        <input className="input input-item" type="text" onChange={({ target }) => { this.setState({ item: target.value }) }} value={this.state.item} />
      </div>
    );
  }
}

export default AddIngredient;
