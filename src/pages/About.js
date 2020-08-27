import React, { Component } from "react";
import employees from "../employees.json";

class About extends Component {
  state = {
    employees: employees,
    search: "",
    sortBy: "last"
  }

  handleInputChange = (event) => {
    let searchTerm = event.target.value;
    this.setState({ search: searchTerm });
  }

  // handleSortClick = (event) => {
  //   console.log(event.target);
  //   let sortCol = event.target.value;
  //   this.setState({ sort: sortCol});
  // }

  sortField = function (arr) {
    const propComparator = (field) =>
      (a, b) => a[field] > b[field] ? 1 : -1;
    return arr.sort(propComparator(this.state.sortBy));
  }

  toggleSort = (event) => {
    console.log(event.target);
    //let sortCol = event.target.value;
    this.setState({ sortBy: event.target.value });
    this.setState({ employees: this.sortField(employees) });
  }

  render() {

    let filterSearch = this.state.employees.filter(
      employee => {
        return employee.last.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    )
    console.log(this.state.employees);
    return (
      <div>
        <div className="container">
          <div className="jumbotron mt-4">
            <h1 className="display-3 text-center">Employee Tracker</h1>
            <hr className="my-4"></hr>
            <div className="text-center">
              <p className="lead">Click on a column header to sort by that column, or search for an employee here!</p>
              <div className="container justify-contents-center my-4">
                <form>
                  <input
                    className="text-center"
                    type="text"
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    placeholder="Last Name">
                  </input>
                </form>
              </div>
            </div>
            <table className="table table-bordered table-secondary table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      value="first"
                      onClick={this.toggleSort}
                    >First Name
                </button>
                  </th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      value="last"
                      onClick={this.toggleSort}
                    >Last Name
                </button>
                  </th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      value="role"
                      onClick={this.toggleSort}
                    >Role
                </button>
                  </th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      value="email"
                      onClick={this.toggleSort}
                    >Email
                </button>
                  </th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      value="location"
                      onClick={this.toggleSort}
                    >Location
                </button>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {filterSearch.map((employee) =>
                  <tr key={employee.id}>
                    <td>{employee.first}</td>
                    <td>{employee.last}</td>
                    <td>{employee.role}</td>
                    <td>{employee.email}</td>
                    <td>{employee.location}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
