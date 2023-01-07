/* eslint-disable no-unused-vars */
import React from "react";
import "./imageSlider.css";
import imgRed from './image/red.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft, faPause, faPlay} from "@fortawesome/free-solid-svg-icons";

//imageSlide 코드 작성용 - 2023/ 01 - 07
// class imageSlide extends Component{
//   constructor(props){
//     super(props);
    
//   }
// }

function imageSlider() {
 
  
  return (
      <div className="slider-wrap">
      <ul className="list slider">
        <li className="li1">
          <img src={imgRed} />
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
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div className="btn previous" id="previous">
        <FontAwesomeIcon icon={faArrowLeft} />
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
        <FontAwesomeIcon icon={faPause} />
        <FontAwesomeIcon icon={faPlay} />
      </div>


      <img src={imgRed} />


    </div>
  );
}


export default imageSlider;
