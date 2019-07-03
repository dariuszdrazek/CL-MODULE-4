import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class StrobeLight extends Component {
     constructor(props) {
          super(props);

          this.state = {
               color: this.props.color,
               frequency: this.props.frequency,
               style: {
                    width: '500px',
                    height: '50px',
                    backgroundColor: 'white'
               }
          };
     }

     componentDidMount() {
          this.interval = setInterval(() => {
               if (this.state.style.backgroundColor === 'white') {
                    this.setState({
                         style: {
                              width: '500px',
                              height: '50px',
                              backgroundColor: this.state.color
                         }
                    });
               } else {
                    this.setState({
                         style: {
                              width: '500px',
                              height: '50px',
                              backgroundColor: 'white'
                         }
                    });
               }
          }, this.state.frequency);
     }

     render() {
          return <div style={this.state.style} />;
     }
}

function App() {
     return <StrobeLight color="red" frequency={500} />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App };

// import React from "react";
// import ReactDOM from "react-dom";

// class StrobeLight extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       backgroundColor: "white"
//     };
//   }

//   componentDidMount() {
//     const { backgroundColor } = this.state;
//     const { color, frequency } = this.props;
//     this.interval = setInterval(() => {
//       this.setState({
//         backgroundColor: backgroundColor === "white" ? color : "white"
//       });
//     }, frequency);
//   }

//   render() {
//     let style = {
//       width: "500px",
//       height: "50px",
//       backgroundColor: this.state.backgroundColor
//     };

//     return <div style={style} />;
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }
// }

// /**

// function App() {
//   return <StrobeLight color="cyan" frequency={1000} />;
// }

// ReactDOM.render(<App />, document.getElementById("app"));
