import React, { Component } from "react";
import CupCounter from "./CupCounter";
import TakepMsg from "./TakeMsg";
import ReturnMsg from "./ReturnMsg";
import NotReturnList from "./NotReturnList";

let EmployeeSerialNumber = [];
const maxvalue = 10;

class CupCounterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CupCounter: maxvalue,
            IsTakePopup: false,
            err: 0,
            IsReturnPopup: false,
            IsNameListPopup: false,
        };
        this.handleTakePopup = this.handleTakePopup.bind(this);
        this.handleReturnPopup = this.handleReturnPopup.bind(this);
        this.handleShowEmployeeSerialNumber = this.handleShowEmployeeSerialNumber.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleTakePopup() {
        // handle the flag state of the take popup box
        let IsTakePopup = this.state.IsTakePopup;
        if (IsTakePopup === true) {
            IsTakePopup = false;
        } else {
            IsTakePopup = true;
        }
        this.setState({ IsTakePopup });
        this.setState({ IsReturnPopup: false });
        this.setState({ IsNameListPopup: false });
        this.setState({ err: 0 });
    }

    handleReturnPopup() {
        // handle the flag state of the return popup box
        let IsReturnPopup = this.state.IsReturnPopup;
        if (IsReturnPopup === true) {
            IsReturnPopup = false;
            this.setState({ err: 0 });
        } else {
            IsReturnPopup = true;
        }
        this.setState({ IsReturnPopup });
        this.setState({ IsTakePopup: false });
        this.setState({ IsNameListPopup: false });
    }

    handleShowEmployeeSerialNumber() {
        // handle the flag state of the unretuen person popup box
        let IsNameListPopup = this.state.IsNameListPopup;
        if (IsNameListPopup === true) {
            IsNameListPopup = false;
        } else {
            IsNameListPopup = true;
        }
        this.setState({ IsNameListPopup });
        this.setState({ IsTakePopup: false });
        this.setState({ IsReturnPopup: false });
        this.setState({ err: 0 });
    }

    handleIncrement(e) {
        // when continuous button of the return popup box is clicked
        let CupCounter = this.state.CupCounter;
        let beforcount = EmployeeSerialNumber.length;
        EmployeeSerialNumber = EmployeeSerialNumber.filter((Employee) => Employee.SerialNumber !== e);
        let aftercount = EmployeeSerialNumber.length;
        //check if the inputted serial number is on the EmployeeSerialNumber List, increase the counter if yes, set err state otherwise
        if (beforcount !== aftercount) {
            CupCounter += beforcount - aftercount;
            this.setState({ CupCounter });
            this.handleReturnPopup();
            this.setState({ err: 0 });
        }
        this.setState({ err: 2 });
    }

    handleDecrement(e) {
        // when continuous button of the take popup box is clicked

        //get local time
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        let hour = now.getHours();
        let minute = now.getMinutes();

        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        // appen the inputted EmployeeSerialNumber, local date and time to EmployeeSerialNumber lsit
        EmployeeSerialNumber = [
            ...EmployeeSerialNumber,
            {
                SerialNumber: e,
                date: year + "/" + month + "/" + date,
                time: hour + ":" + minute,
            },
        ];
        //Decrease the counter
        let CupCounter = this.state.CupCounter;
        if (CupCounter > 0) {
            CupCounter--;
            this.setState({ CupCounter });
            this.handleTakePopup();
        }
    }

    render() {
        return (
            <div className="AppBackground">
                {this.state.IsTakePopup && this.state.CupCounter > 0 && <TakepMsg onDecrement={this.handleDecrement} onTakePopup={this.handleTakePopup} className="takepMsg" />}
                {/* disable take popup box when the cup counter is zero or no trigger button is clicked */}
                {this.state.IsReturnPopup && this.state.CupCounter < maxvalue && <ReturnMsg onIncrement={this.handleIncrement} onReturnPopup={this.handleReturnPopup} err={this.state.err} className="returnMsg" />}
                {/* disable return popup box when the cup counter is equal to max value or no trigger button is clicked */}
                {this.state.IsNameListPopup && <NotReturnList EmployeeSerialNumber={EmployeeSerialNumber} onShowEmployeeSerialNumberList={this.handleShowEmployeeSerialNumber} className="notReturnList" />}
                <CupCounter CupCounter={this.state.CupCounter} onReturnPopup={this.handleReturnPopup} onTakePopup={this.handleTakePopup} onShowEmployeeSerialNumberList={this.handleShowEmployeeSerialNumber} />
            </div>
        );
    }
}
export default CupCounterContainer;
