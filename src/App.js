import React from 'react';
import { fetchReports } from './services/fetch-reports-api';
import ReportsHome from './components/ReportsHome';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reports: [],
      queryData: ''

    }
    this.getReports = this.getReports.bind(this);
    this.getQueryData = this.getQueryData.bind(this);
    /* this.handleId = this.handleId.bind(this); */

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

 /*  handleId() {
    this.setState((prevState, props) => ({
      chooseId: prevState.chooseId ===  `{item.id}`  ? `{item.id}` : `{item.createdAt}`
    }));
  } */

  render() {
    const { reports, queryData } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="main__title-app">informes</h1>
        </header>
      {/*   <button
        className={`btn btn-${this.state.chooseId}`}
        onClick={this.handleId}
      >
        {this.props.label}
      </button> */}
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
