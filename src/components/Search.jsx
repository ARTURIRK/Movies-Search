import React from "react";
import {Input} from './Input'
import {Radio} from './Radio'
class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };
  inputHandler = (e) => {
    if (e.key === "Enter") {
      return this.props.change(this.state.search,this.state.type);
    }
  };
  handleFilter = (e) => {
    this.setState(()=>({type: e.target.dataset.type}), ()=>
    (this.props.change(this.state.search,this.state.type)))
  };
  ChangeValue=(e)=> this.setState({ search: e.target.value })
  clickHandler=(e)=> {
      this.setState({ search: e.target.value });
      return this.props.change(this.state.search,this.state.type);
  }
  Checking=(str)=>{
    return this.state.type === str ? true: false;
  }
  render() {
    return (
      <div>
        <Input keyHandler={this.inputHandler} search={this.state.search} change={this.ChangeValue} click={this.clickHandler}/>
        <Radio filter={this.handleFilter} checking={this.Checking}  />
      </div>
    );
  }
}
export { Search };
