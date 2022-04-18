import React, { Component } from "react";
import "./PopupMsg.css";

class NotReturnList extends Component {
    render() {
        return (
            <div className="modalBackground">
                <div className="modalListContainer">
                    <div className="titleCloseBtn">
                        <button onClick={() => this.props.onShowEmployeeSerialNumberList()}>X</button>
                    </div>
                    <div className="title">
                        <h3>Preson who haven't return the cup</h3>
                        <br />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>Serial Number</td>
                                <td>Date</td>
                                <td>Time</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.EmployeeSerialNumber
                                ? this.props.EmployeeSerialNumber.map((Employee) => (
                                      <tr key={this.props.EmployeeSerialNumber.indexOf(Employee)}>
                                          <td> {Employee.SerialNumber}</td>
                                          <td> {Employee.date}</td>
                                          <td> {Employee.time}</td>
                                      </tr>
                                  ))
                                : null}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default NotReturnList;
