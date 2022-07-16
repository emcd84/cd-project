import React, { Component } from 'react';
import styles from '../styles/ExperienceContainer.module.css';
import ExperienceInstance from './ExperienceInstance';

class ExperienceContainer extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    };

    render() {
        const { experiences } = this.props;

        return(
            <div className={styles.ExperienceContainer}>
                <div className={styles.experienceHeader}>
                    <div id={styles.borderLeft}></div>
                    <h1 id={styles.experienceHeaderText}>Experience</h1>
                </div>

                <div className={styles.experienceInstancesContainer}>
                    <div id={styles.borderRight}></div>
                    <div className={styles.experienceInstances}>
                        {experiences.map((instance) => {
                            return(
                                <ExperienceInstance className={styles.experienceInstance} key={instance.id} companyName={instance.companyName} jobTitle={instance.jobTitle} startMonth={instance.startMonth}
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

export default ExperienceContainer;