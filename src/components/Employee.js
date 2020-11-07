import React, { Component } from "react";
import Employee from "./Employee";

class DataList extends Component {
  state = {
    currentPage: "Employee"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
        <Employee
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        Based on `this.state.currentPage`, render the appropriate component
        here.
      </div>
    );
  }
}

export default Employee;
