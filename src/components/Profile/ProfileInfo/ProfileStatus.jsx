import React from 'react';
import {logicalExpression} from "@babel/types";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    editModeOn = () => {
        this.setState(
            {editMode: true}
        )
    };

    editModeOff = () => {
        this.setState(
            {editMode: false}
        );

        this.props.putStatus(this.state.status);

    };

    onStatusChange = (e) => {
        this.setState(
            {status: e.currentTarget.value}
        )
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.state.status = this.props.status;
        }
    }

    render() {

        return (
            <>
                <div> this.props.status: <span>'{this.props.status}'</span></div>
                <div> this.state.status: <span>'{this.state.status}'</span></div>

                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.editModeOn}>'{this.props.status || 'No status'}'</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.editModeOff}
                           value={this.state.status}/>
                </div>
                }

            </>

        )
    }
}

export default ProfileStatus;