import React from 'react';
import PropTypes from 'prop-types';


const ReportsCard = props => {
    const { name, group, text } = props;
    return (
        <div className="container__articles">
            <article className="main__card-article">
                <h2 className="name__report">{name}</h2>
                <p className="group__report">{group}</p>
                <p className="text__report">{text}</p>
            </article>
        </div>

    );
};

ReportsCard.propTypes = {
    name: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default ReportsCard;
