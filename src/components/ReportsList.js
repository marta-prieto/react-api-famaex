import React from 'react';
import ReportsCard from './ReportsCard';
import PropTypes from 'prop-types';

const ReportsList = props => {
    const { reports, queryData } = props;

    return (

        <ul className="main__list-reports">
            {reports
             .filter(filterReports => filterReports.id.includes(queryData))
                .map(item => {
                    return (
                        <section className="main__section">
                        <li className="list__reports" key={item.id}>
                            <ReportsCard
                            id={item.id}
                            name={item.name}
                            text={item.Text}
                            />
                        </li>
                        </section>
                    );
                })}
        </ul>
        
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
