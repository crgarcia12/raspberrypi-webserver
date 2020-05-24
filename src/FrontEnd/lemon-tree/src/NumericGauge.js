import React from 'react';
import './NumericGauge.css';

class NumericGauge extends React.Component {
  constructor(props) {
    super(props);
    // Next we establish our state
    this.state = {
        name: '',
      greeting: `Good ${this.props.time}, `
    }
    // To use the 'this' keyword, we need to bind it to our function
    this.onChange = this.onChange.bind(this);
    // Make the DIV element draggable:
    this.dragElement(this);
  }

  // A custom function to change the name in our state to match the user input
  onChange(e) {
      this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div class="numericgauge">
          <div class="numericgaugeheader">
              <p>Gauge Header</p>
          </div>
        <p>1234.56</p>
      </div>
    )
  }

  dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
}

}
export default NumericGauge;