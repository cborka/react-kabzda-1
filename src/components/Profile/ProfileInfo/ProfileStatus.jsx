import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };

    editModeOn = () => {
        debugger
        this.setState(
            {editMode: true}
        )
    }

    editModeOff() {
        this.setState(
            {editMode: false}
        )
    }

    render() {

        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.editModeOn}>{this.props.profileStatus}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.editModeOff.bind(this)} value={this.props.profileStatus}/>
                </div>
                }

            </>

        )
    }
}

export default ProfileStatus;