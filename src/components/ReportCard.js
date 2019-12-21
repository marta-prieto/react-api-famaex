import React from 'react';
import Proptypes from 'prop-types';


const ReportCard = props => {
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

ReportCard.propTypes = {
    name: Proptypes.string.isRequired,
    group: Proptypes.string.isRequired,
    text: Proptypes.string.isRequired
}

export default ReportCard;
  