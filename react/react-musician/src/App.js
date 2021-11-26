import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: '',
    body:""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ body: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
      return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.response}</h1>
        </header>
        <p className="App-intro">{this.state.body}</p>
      </div>
    );
  }
}

export default App;