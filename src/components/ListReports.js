import React from 'react';
import ReportCard from './components/ReportCard';
import PropTypes from 'prop-types';

const ListReports = props => {
    const { reports } = props;

    return (

        <ol className="main__list-reports">
            {reports
                .map(item => {
                    return (
                        <section className="main__section">
                        <li className="list__reports" key={item.id}>
                            <ReportCard
                            id={item.id}
                            />
                        </li>
                        </section>
                    );
                })}
        </ol>
        
    );
};

ListReports.propTypes = {
    reports: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default ListReports;
