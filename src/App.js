import React from 'react';
import { fetchReports } from './services/fetch-reports-api';
import ListReports  from './components/ListReports';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reports: [],
      data: ''
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
          reports:data.name
        });
      })
  }

  render() {
    const { reports } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>TRY-REPORTS</h1>
        </header>
        <ListReports
        reports= {reports}
        
        />
      </div>
    );
  }
}

export default App;
