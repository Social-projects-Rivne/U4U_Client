import React, { Component } from "react";
import "./add-place.scss";

export default class AddPlace extends Component {
  render() {
    return (
      <div className="add-place">
        <form className="add-place-form">
          <h1 className="add-place-header">Add your place</h1>
          <select className="district-selector">
            <option>Choose district</option>
            <option>Rivnenska</option>
            <option>Kyivska</option>
          </select>
          <input className="add-place-title" type="text" name="title" />
          <textarea
            name="add-place-description"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input className="add-place-file" type="file" />
        </form>
      </div>
    );
  }
}
