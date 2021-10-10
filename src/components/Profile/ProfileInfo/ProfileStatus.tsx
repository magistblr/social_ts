import React, { ChangeEvent, Component } from 'react'
import s from './ProfileInfo.module.css'


type ProfileStatusType ={
  status: string
  updateUserStatus: (userId: string) => void
  isOwner: boolean
}

export default class ProfileStatus extends Component<ProfileStatusType> {
  state = {
    editMode: false,
    status: this.props.status
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
    this.props.updateUserStatus(this.state.status)
  }

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps: ProfileStatusType, prevState: ProfileStatusType){
    if(prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div className={s.status_wrapper}>
          {!this.state.editMode &&
            <div className={s.status_span}>
              <span onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : "-----------------"}</span>
            </div>
          }
          {this.state.editMode &&
            <div className={s.status_input}>
              <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} value={this.state.status}></input>
            </div>
          }
      </div>
    )
  }
}
