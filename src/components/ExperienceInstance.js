import React, { Component } from 'react';
import styles from '../styles/ExperienceInstance.module.css'

class ExperienceInstance extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    };

    render() {
        const { companyName, jobTitle, startMonth, startYear, endMonth, endYear, city, province, description } = this.props;

        return(
            <div className={styles.ExperienceInstance}>
                <h1 className={styles.headerText}>{companyName} / {jobTitle}</h1>
                <h2 className={styles.subheaderText}>{startMonth.toUpperCase()} {startYear} - {endMonth.toUpperCase()} {endYear}, {city.toUpperCase()} {province.toUpperCase()}</h2>
                <p className={styles.descriptionText}>{description}</p>
            </div>
        );
    };
}

export default ExperienceInstance;