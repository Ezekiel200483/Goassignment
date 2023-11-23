import React, { Component } from "react";
import "./App.css";
import workerImage from './download.jpeg';

class App extends Component {
  constructor(props) {
    super(props);
                            
    this.state = {
      person: {
        fullName: "Mark Zukerberg",
        bio: "In January 2004, Zuckerberg began writing code for a new website. On February 4, 2004, Zuckerberg launched Thefacebook originally located at thefacebook.com in partnership with his roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.",
        imgSrc: workerImage,
        profession: "Software Developer",
      },
      shows: true,
      timeSinceMount: 0,
      
    };
    
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000); // Update every 1000 milliseconds (1 second)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeSinceMount } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toggleShow}>
            {shows ? "Hide Profile" : "Show Profile"}
          </button>

          {shows && (
            <div>
              <img src={imgSrc} alt={fullName} />
              <h1>{fullName}</h1>
              <p>{bio}</p>
              <p>Profession: {profession}</p>
            </div>
          )}

          <p>Time since mount: {timeSinceMount} seconds</p>
        </header>
      </div>
    );
  }
}

export default App;
