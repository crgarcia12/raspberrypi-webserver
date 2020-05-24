import React from 'react';
import Draggable from 'react-draggable';
import './NumericGauge.css';

class NumericGauge extends React.Component {
  constructor(props) {
    super(props);
    // Next we establish our state
    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      }
    };

    // To use the 'this' keyword, we need to bind it to our function
    this.onChange = this.onChange.bind(this);
  }

  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  onStart = () => {
    this.setState({activeDrags: ++this.state.activeDrags});
  };

  onStop = () => {
    this.setState({activeDrags: --this.state.activeDrags});
  };

  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  };

  onControlledDrag = (e, position) => {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  // A custom function to change the name in our state to match the user input
  onChange(e) {
      this.setState({
      name: e.target.value
    })
  }

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    return (
    <>
    <Draggable {...dragHandlers}>
      <div className="box">Temp: 18º</div>
    </Draggable>
    </>
  );}
}
export default NumericGauge;