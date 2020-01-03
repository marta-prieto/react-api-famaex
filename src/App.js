import React from 'react';
import ReportsHome from './components/ReportsHome';
import './App.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [{
        "id": "1",
        "createdAt": "2019-12-19T00:03:39.391Z",
        "name": "Informe 1",
        "group": "1",
        "Text": "Esto es una descripción corta del informe 1.En versión desktop la altura de esta sección debe llegar hasta la altura de la del informe 4"
      },
      {
        "id": "2",
        "createdAt": "2019-12-19T03:31:43.900Z",
        "name": "Informe  2",
        "group": "2",
        "Text": "Esto es una descripción del informe 2. En este caso la sección debe de ajustarse al largo del texto. Como el texto es largo, la altura deberá ser bastante larga también. Si el texto fuera más corto, la altura será menor."
      },
      {
        "id": "3",
        "createdAt": "2019-12-18T01:33:37.485Z",
        "name": "Informe  3",
        "group": "1",
        "Text": "Descripción corta del informe 3.Como en el caso del informe 3 la altura será el combinado entre el informe 2 y el informe 4"
      },
      {
        "id": "4",
        "createdAt": "2019-12-20T04:43:29.130Z",
        "name": "Informe  4",
        "group": "2",
        "Text": "Una descripción corta del informe 4."
      }],
    }
  }



  render() {
    const { reports } = this.state;
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="main__title-app">informes</h1>
        </header>
        <ReportsHome
          reports={reports}
        />
      </div>
    );
  }
}

export default App;
