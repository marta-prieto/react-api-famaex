import React from 'react';
import { fetchReports } from './services/fetch-reports-api';
import ReportsHome from './components/ReportsHome';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reports: [],
      queryData: ''

    }
    this.getReports = this.getReports.bind(this);
    this.getQueryData = this.getQueryData.bind(this);

  }
  componentDidMount() {
    this.getReports();
  }

  getReports() {
    fetchReports()
      .then(data => {
        this.setState({
          reports: data,
        });
      })
  }

  getQueryData(event) {
    const queryData = event.currentTarget.value;
    this.setState({
      queryData: queryData
    });
  }

  render() {
    const { reports, queryData } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="main__title-app"></h1>
        </header>
        <ReportsHome
                getQueryData={this.getQueryData}
                queryData={queryData}
                reports={reports}
              />
      </div>
    );
  }
}

export default App;
