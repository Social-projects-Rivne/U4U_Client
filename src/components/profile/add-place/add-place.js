import React, { Component } from "react";
import "./add-place.scss";

export default class AddPlace extends Component {
  render() {
    return (
      <div className="add-place">
        <form className="add-place-form">
          <h1 className="add-place-header">Add your place</h1>
          <select className="district-selector">
            <option>Choose region</option>
            <option>Rivnenskyi</option>
            <option>Kyivskyi</option>
            <option>Lvivskyi</option>
            <option>Chernigivskyi</option>
          </select>
          <input 
          className="add-place-title" 
          type="text" 
          name="title" 
          placeholder="Назва місця"
          />
          <textarea
            class="add-place-description"
            name="textarea"
            id=""
            placeholder="Опис..."
          ></textarea>
          <div className="add-place-file-submit">
            <input className="add-place-file" type="file" />
            <input className="add-place-submit" type='submit' />
          </div>
          
        </form>
      </div>
    );
  }
}
