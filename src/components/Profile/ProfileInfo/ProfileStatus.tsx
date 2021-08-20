import React, { Component } from 'react'




export default class ProfileStatus extends Component {
  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }


  render() {
    return (
      <div>
          {!this.state.editMode &&
            <div>
              <span onDoubleClick={this.activateEditMode}>dwdw</span>
            </div>
          }
          {this.state.editMode &&
            <div>
              <input autoFocus onBlur={this.deactivateEditMode} value={"dwdw"}></input>
            </div>
          }
      </div>
    )
  }
}
