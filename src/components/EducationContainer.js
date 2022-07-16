import React, { Component } from 'react';
import styles from '../styles/EducationContainer.module.css';
import EducationInstance from './EducationInstance';

class EducationContainer extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    };

    render() {
        const { educations } = this.props;

        return(
            <div className={styles.EducationContainer}>
                <div className={styles.educationHeader}>
                    <div id={styles.borderLeft}></div>
                    <h1 id={styles.educationHeaderText}>Education</h1>
                </div>

                <div className={styles.educationInstancesContainer}>
                    <div id={styles.borderRight}></div>
                    <div className={styles.educationInstances}>
                        {educations.map((instance) => {
                            return(
                                <EducationInstance className={styles.educationInstance} key={instance.id} schoolName={instance.schoolName} credential={instance.credential} startMonth={instance.startMonth}
                                startYear={instance.startYear} endMonth={instance.endMonth} endYear={instance.endYear} city={instance.city} province={instance.province}
                                description={instance.description}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };
}

export default EducationContainer;