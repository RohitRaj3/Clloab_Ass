import { Component } from 'react';
import Home from './Components/Home'; 

class App extends Component {
  constructor() {
    super();
    
    
    this.state = {
      names: ["John", "Alice", "Bob", "Eve"]
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
