import React, { Component } from 'react';
import BasicInfoContainer from './BasicInfoContainer';
import SkillsContainer from './SkillsContainer';
import EducationContainer from './EducationContainer';
import ExperienceContainer from './ExperienceContainer';
import AwardsContainer from './AwardsContainer';
import styles from '../styles/ResumeDisplay.module.css';

class ResumeDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, occupation, description, address, city, province, postalCode, phoneNumber, email, skills, experiences, educations, awards } = this.props;

        return(
            <div className={styles.container}>
                <BasicInfoContainer name={name} occupation={occupation} description={description} address={address} city={city} province={province} postalCode={postalCode} phoneNumber={phoneNumber} email={email}/>
                <SkillsContainer skills={skills}/>
                <ExperienceContainer experiences={experiences}/>
                <EducationContainer educations={educations}/>
                <AwardsContainer awards={awards}/>
            </div>
        );
    };
}

export default ResumeDisplay;