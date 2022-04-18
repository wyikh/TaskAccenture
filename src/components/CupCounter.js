import React, { Component } from "react";
import "./CupCounter.css";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

class CupCounter extends Component {
    constructor(props) {
        super(props);
        this.CounterClass = this.CounterClass.bind(this);
        this.formatCount = this.formatCount.bind(this);
        this.subtitleMsg = this.subtitleMsg.bind(this);
    }
    CounterClass() {
        let classes = "remain";
        classes += this.props.CupCounter === 0 ? "zero" : "oneormore";
        return classes;
    }

    formatCount() {
        const CupCounter = this.props.CupCounter;
        return CupCounter < 10 ? "0" + CupCounter : CupCounter;
    }

    subtitleMsg() {
        const CupCounter = this.props.CupCounter;
        return CupCounter > 0 ? "CUP REMAINING" : "All CUPS HAVE BEEN TAKEN";
    }

    render() {
        return (
            <div className="mainSection">
                <div className="appTitle">
                    <h3>The Cup Counter App</h3>
                    <p>Each time when you take a cup away, please press the Take button to indicate a cup has been taken away. When you return the cup, please Return button to let the app know that the cup has been returned.</p>
                    <br />
                </div>
                <div className="counterSection">
                    <div className="icon">
                        <LocalCafeIcon style={{ fontSize: 50 }} />
                    </div>
                    <div className="counterNumber">{this.formatCount()}</div>
                    <div className="subtitleMsg">{this.subtitleMsg()}</div>
                </div>
                <br />
                <div className="optionButton">
                    <button onClick={() => this.props.onReturnPopup()} className="btn btn-secondary btn-sm m-2">
                        Return
                    </button>
                    <button onClick={() => this.props.onTakePopup()} className="btn btn-secondary btn-sm m-2">
                        Take
                    </button>
                    <button onClick={() => this.props.onShowEmployeeSerialNumberList()} className="btn btn-secondary btn-sm m-2">
                        Trace Cups
                    </button>
                </div>
            </div>
        );
    }
}
export default CupCounter;
