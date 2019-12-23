import React from 'react';
/* import FilterId from './FilterId'; */
import ReportsList from './ReportsList';
import PropTypes from 'prop-types';

const ReportsHome = props => {
  const { getQueryData, queryData, reports } = props;

  return (
    <React.Fragment>
    {/*   <FilterId
        getQueryData={getQueryData}
        queryData={queryData}
      /> */}

      <ReportsList
        reports={reports}
        queryData={queryData}
      />
    </React.Fragment>
  );
};

ReportsHome.propTypes = {
  getQueryData: PropTypes.func.isRequired,
  queryData: PropTypes.string.isRequired,
  reports: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ReportsHome;