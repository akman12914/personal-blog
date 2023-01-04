/* eslint-disable no-unused-vars */
import React from "react";
import "./imageSlider.css";

function imageSlider(props) {
  return (
    <div className="slider-wrap">
      <ul className="list slider">
            <li className="li1">
                <img src="./src/image/red.jpeg" />
            </li>
            <li className="li2">
                <img src="./src/image/orange.jpeg" />
            </li>
            <li className="li3">
                <img src="./src/image/yellow.jpeg" />
            </li>
            <li className="li4">
                <img src="./src/image/green.jpeg" />
            </li>
            <li className="li5">
                <img src="./src/image/blue.jpeg" />
            </li>
            <li className="li6">
                <img src="./src/image/indigo.jpeg" />
            </li>
      </ul>

      <div className="btn next">
        <i className="fa fa-arrow-right"></i>
      </div>
      <div className="btn previous" id="previous">
        <i className="fa fa-arrow-left"></i>
      </div>

      <div className="indicator-wrap" id="indicator-wrap">
            <ul>
                <li className="active"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

        <div className="control-wrap play" id="control-wrap">
            <i className="fa fa-pause" id="pause" data-status="pause"></i>
            <i className="fa fa-play" id="play" data-status="play"></i>
        </div>


    </div>
  );
}
export default imageSlider;
