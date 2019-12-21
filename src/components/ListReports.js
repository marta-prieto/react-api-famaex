import React from 'react';
import PropTypes from 'prop-types';

const ListReports = props => {
    const { reports } = props;

    return (

        <ol className="main__list-reports"
            {reports
                .map(item => {
                    return (
                        <li className="list__reports" key={item.id}>
                            name={item.name}
                        </li>
                    );
                })}
        </ol >
        
    );
};

ListReports.propTypes = {
    reports: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default ListReports;
