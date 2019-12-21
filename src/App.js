import React from 'react';
import { fetchReports } from './services/fetch-reports-api';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      informs: [],
    }
    this.getReports = this.getReports.bind(this);

  }
  componentDidMount() {
    this.getReports();
  }

  getReports() {
    fetchReports()
      .then(data => {
        this.setState({
          informs: data.id
        });
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TRY-REPORTS</h1>
        </header>
      </div>
    );
  }
}

export default App;
