import React from 'react';
import './Test.scss';

const Test = () => {
  return (
    <div className="test">
      <div className="test__content">
        <h3>
          Title Lorem ipsum dolor sit amet.
        </h3>

        <div className="test__block">
          <img src="https://picsum.photos/600/300?random=1" />

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea alias possimus tempora totam odit quibusdam accusamus. Reiciendis at, vitae eos distinctio iusto cum cumque suscipit voluptatibus dolores possimus! At, deleniti obcaecati sint fuga nisi iure, vero quae illo assumenda velit saepe magni ab? In maiores rem sunt quae dolorem.
            </p>
        </div>
      </div>

      <div className="test__nearBy">
        <div className="test__nearBy-block">
          <img src="https://picsum.photos/200/100?random=1" />
          <h3>
            Lorem ipsum dolor sit amet.
          </h3>
        </div>
        <div className="test__nearBy-block">
          <img src="https://picsum.photos/200/100?random=2" />
          <h3>
            Lorem ipsum dolor sit amet.
          </h3>
        </div>
        <div className="test__nearBy-block">
          <img src="https://picsum.photos/200/100?random=3" />
          <h3>
            Lorem ipsum dolor sit amet.
          </h3>
        </div>
        <div className="test__nearBy-block">
          <img src="https://picsum.photos/200/100?random=4" />
          <h3>
            Lorem ipsum dolor sit amet.
          </h3>
        </div>
      </div>
    </div >
  )
};

export default Test;