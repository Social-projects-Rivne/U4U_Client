import React, { Component } from "react";
import AvatarSection from "./avatar-section";
import UserInfoForm from "./user-info-form";
import UserInfo from "./user-info";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import "./user-info-section.scss";

export default class UserInfoSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      editState: false
    };

    this.userInfoForm = React.createRef();
  }

  editProfile = () => {
    this.setState(({ editState }) => {
      const newEditState = !editState;

      return {
        editState: newEditState
      };
    });
  };

  newDataHandler = (user) => {
    this.setState({
      user
    });
    this.editProfile();
  };

  submitEdit = () => {
    this.userInfoForm.current.handleSubmit();
  }

  render() {
    return (
      <div className="global-white-layout user-info__section">
        <AvatarSection />
        <div className="user-info-wrapper">
          <div className="user-info-wrapper-actions">
            {
              !this.state.editState ? (
                <div className="user-info-wrapper-actions_edit">
                  <button
                    className="user-info-wrapper-actions_edit__button"
                    onClick={this.editProfile}
                  >
                    <FontAwesomeIcon icon={faUserEdit} />
                  </button>
                </div>
              ) : (
                <div className="user-info-wrapper-actions_edit-confirm">
                  <div>
                    <button
                        className="user-info-wrapper-actions_edit__button"
                        onClick={this.submitEdit}
                      >
                        <FontAwesomeIcon icon={faCheck} />
                      </button>
                  </div>
                  <div>
                    <button
                        className="user-info-wrapper-actions_edit__button"
                        onClick={this.editProfile}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                  </div>
                </div>
              )
            }
            
          </div>
          <div className="user-info-wrapper-info">
            {this.state.editState === false ? (
              <UserInfo user={this.state.user || this.props.user} />
            ) : (
              // <div className="">

              //   </div>
              <UserInfoForm
                  ref={this.userInfoForm}
                  user={this.state.user || this.props.user}
                  newDataHandler={this.newDataHandler}
                  submitEdit={this.submitEdit}  />
            )}
          </div>
        </div>
      </div>
    );
  }
}
