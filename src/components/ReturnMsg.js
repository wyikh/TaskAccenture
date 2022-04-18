import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./PopupMsg.css";
class ReturnMsg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EmployeeSerialNumber: null,
            err: 0,
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }

    handleInput(e) {
        // Set state when input
        this.setState({ EmployeeSerialNumber: e.target.value });
    }

    handleValidation() {
        //Input validation
        // Check if input field is empty, set err state if yes
        let EmployeeSerialNumber = this.state.EmployeeSerialNumber;

        if (EmployeeSerialNumber === null || EmployeeSerialNumber === "") {
            this.setState({ err: 1 });
        } else {
            this.setState({ err: 0 });
            this.props.onIncrement(EmployeeSerialNumber);
        }
    }
    render() {
        return (
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button onClick={() => this.props.onReturnPopup()}>X</button>
                    </div>
                    <div className="title">
                        <h3>Thanks for using! </h3>
                    </div>
                    <TextField required className="outlined-basic" label="Please enter your Employee Serial Number" inputProps={{ style: { textAlign: "center" } }} onChange={(e) => this.handleInput(e)} />
                    {this.state.err === 1 ? <div className="errMsg">This field is required!</div> : this.props.err === 2 ? <div className="errMsg">Inputted serial number didn't take any cup</div> : null}
                    <div className="footer">
                        <button onClick={() => this.handleValidation()} className="btn btn-secondary btn-sm m-2">
                            Continuous
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ReturnMsg;
