import React from 'react';
import ReportsList from './ReportsList';
import PropTypes from 'prop-types';

const ReportsHome = props => {
  const { reports } = props;

  return (
    <ReportsList
      reports={reports}
    />
  );
};

ReportsHome.propTypes = {
  reports: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ReportsHome;