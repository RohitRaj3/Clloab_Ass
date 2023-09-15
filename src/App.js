import { Component } from 'react';
import Home from './Components/Home'; 

class App extends Component {
  constructor() {
    super();
    
    
    this.state = {
      names: ["Iron Man", "Captian America" , "Hulk", "Spider Man"]
    };
  }

  render() {
    return (
      <div className="App">
        
        <Home names={this.state.names} />
      </div>
    );
  }
}

export default App;
