import React, { Component } from 'react';
import GeneralInfoForm from './GeneralInfoForm';
import SkillsForm from './SkillsForm';
import ExperienceFormContainer from './ExperienceFormContainer';
import EducationFormContainer from './EducationFormContainer';
import AwardsFormContainer from './AwardsFormContainer';
import styles from '../styles/ResumeForm.module.css';

class ResumeForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    };

    render() {
        const { updateNameOnChange, updateOccupationOnChange, updateDescriptionOnChange, updateAddressOnChange, updateCityOnChange, updateProvinceOnChange, 
            updatePostalCodeOnChange, updatePhoneNumberOnChange, updateEmailOnChange, updateSkillsOnChange, updateExperienceInstances, updateEducationInstances, updateAwardInstances
        } = this.props;

        return(
            <form className={styles.container}>
                <GeneralInfoForm updateNameOnChange={updateNameOnChange} updateOccupationOnChange={updateOccupationOnChange} 
                updateDescriptionOnChange={updateDescriptionOnChange} updateAddressOnChange={updateAddressOnChange} updateCityOnChange={updateCityOnChange} 
                updateProvinceOnChange={updateProvinceOnChange} updatePostalCodeOnChange={updatePostalCodeOnChange} updatePhoneNumberOnChange={updatePhoneNumberOnChange} 
                updateEmailOnChange={updateEmailOnChange}/>
                <SkillsForm updateSkillsOnChange={updateSkillsOnChange}/>
                <ExperienceFormContainer updateExperienceInstances={updateExperienceInstances}/>
                <EducationFormContainer updateEducationInstances={updateEducationInstances}/>
                <AwardsFormContainer updateAwardInstances={updateAwardInstances}/>
            </form>
        );
    };
}

export default ResumeForm;