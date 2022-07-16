import React, { Component } from 'react';
import styles from '../styles/EducationInstance.module.css'

class EducationInstance extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    };

    render() {
        const { schoolName, credential, startMonth, startYear, endMonth, endYear, city, province, description } = this.props;

        return(
            <div className={styles.EducationInstance}>
                <h1 className={styles.headerText}>{schoolName} / {credential}</h1>
                <h2 className={styles.subheaderText}>{startMonth.toUpperCase()} {startYear} - {endMonth.toUpperCase()} {endYear}, {city.toUpperCase()} {province.toUpperCase()}</h2>
                <p className={styles.descriptionText}>{description}</p>
            </div>
        );
    };
}

export default EducationInstance;