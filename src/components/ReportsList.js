import React from 'react';
import ReportsCard from './ReportsCard';
import PropTypes from 'prop-types';

const ReportsList = props => {
  const { reports, queryData } = props;

  return (
    <main className="main__app">
    <section className="section__app">
      <ul className="main__list-reports">
        {reports
          .filter(filterReports => filterReports.id.includes(queryData))
          .map(item => {
            return (

              <li className="list__reports" key={item.id} style={{ gridColumnStart: 'span 1', gridColumnEnd: 'span 2' }}>
                <ReportsCard
                  id={item.id}
                  name={item.name}
                  text={item.Text}
                />
              </li>

            );
          })}
      </ul>
    </section>
        <footer className="footer__app"> 
          <span className="footer__title">footer |</span>
          
          <nav className="footer__nav">
          <ul className="footer__menu">
            <li className="footer__list">
              <a className="footer__link" href="/">con |</a>
            </li>
            <li className="footer__list">
              <a className="footer__link" href="/"> algunos |</a>
            </li>
            <li className="footer__list">
              <a className="footer__link" href="/">links</a>
            </li>
          </ul>
        </nav>   
        
    </footer>
    </main>
    
  );
};

ReportsList.propTypes = {
  reports: PropTypes.arrayOf(PropTypes.object).isRequired,
  queryData: PropTypes.string.isRequired
  /* id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired */
};
export default ReportsList;
