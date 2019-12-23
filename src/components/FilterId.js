import React from 'react';
import PropTypes from 'prop-types';

const FilterId = props => {
    const { getQueryData, queryData } = props;
    return (
        <div className="filters__list">
            <label>ID: </label>
            <input className="input" type="text" onChange={getQueryData} value={queryData} />
        </div>
    );
};

FilterId.propTypes = {
    getQueryData: PropTypes.func.isRequired,
    queryData: PropTypes.string.isRequired
};

export default FilterId;