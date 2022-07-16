import React, { Component } from 'react';
import styles from '../styles/ExperienceFormInstance.module.css';

class EducationFormInstance extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolName: this.props.educationObject.schoolName,
            credential: this.props.educationObject.credential,
            startMonth: this.props.educationObject.startMonth,
            startYear: this.props.educationObject.startYear,
            endMonth: this.props.educationObject.endMonth,
            endYear: this.props.educationObject.endYear,
            city: this.props.educationObject.city,
            province: this.props.educationObject.province,
            description: this.props.educationObject.description,
            id: this.props.educationObject.id,
        }
    };

    trackSchoolName = (e) => {
        this.setState({
            schoolName: e.target.value,
        }, () => {
            this.props.updateEducation(this.props.educationObject, this.state);
        });
    }

    trackCredential = (e) => {
        this.setState({
            credential: e.target.value,
        }, () => {
            this.props.updateEducation(this.props.educationObject, this.state);
        });
    }

    trackCity = (e) => {
        this.setState({
            city: e.target.value,
        }, () => {
            this.props.updateEducation(this.props.educationObject, this.state);
        });
    }

    trackProvince = (e) => {
        this.setState({
            province: e.target.value,
        }, () => {
            this.props.updateEducation(this.props.educationObject, this.state);
        });
    }

    trackStartTime = (e) => {
        const startYear = e.target.value.slice(0,4);
        const startMonthNum = e.target.value.slice(5,7);
        const date = new Date();
        date.setMonth(startMonthNum - 1);
        const startMonthStr = date.toLocaleString('en-US', {
            month: 'short',
        });

        this.setState({
            startMonth: startMonthStr,
            startYear: startYear,
        }, () => {
            this.props.updateEducation(this.props.educationObject, this.state);
        });
    }

    trackEndTime = (e) => {
        const endYear = e.target.value.slice(0,4);
        const endMonthNum = e.target.value.slice(5,7);
        const date = new Date();
        date.setMonth(endMonthNum - 1);
        const endMonthStr = date.toLocaleString('en-US', {
            month: 'short',
        });

        this.setState({
            endMonth: endMonthStr,
            endYear: endYear,
        }, () => {
            this.props.updateEducation(this.props.educationObject, this.state);
        });
    }

    trackDescription = (e) => {
        this.setState({
            description: e.target.value,
        }, () => {
            this.props.updateEducation(this.props.educationObject, this.state);
        });
    }


    render() {

        const { educationObject, deleteEducation } = this.props;

        return(
            <div className={styles.container}>
                <div id={styles.formContainer}>
                    <div className={styles.formElement} id={styles.nameForm}>
                            <label className={styles.formLabel} htmlFor="name">School:</label>
                            <input className={styles.formInput} type="text" id={styles.companyName} name="name" onChange={this.trackSchoolName}></input>
                    </div>
                    <div className={styles.formElement} id={styles.jobForm}>
                            <label className={styles.formLabel} htmlFor="credential">Title:</label>
                            <input className={styles.formInput} type="text" id={styles.jobTitle} name="credential" onChange={this.trackCredential}></input>
                    </div>
                    <div className={styles.formElement} id={styles.cityForm}>
                            <label className={styles.formLabel} htmlFor="city">City:</label>
                            <input className={styles.formInput} type="text" id={styles.cityName} name="city" onChange={this.trackCity}></input>
                    </div>
                    <div className={styles.formElement} id={styles.provinceForm}>
                        <label className={styles.formLabel} htmlFor="province">Province:</label>
                        <select className={styles.formInput} id="province" name="province" defaultValue="ON" onChange={this.trackProvince}>
                            <option value="AB">AB</option>
                            <option value="BC">BC</option>
                            <option value="MB">MB</option>
                            <option value="NB">NB</option>
                            <option value="NL">NL</option>
                            <option value="NT">NT</option>
                            <option value="NS">NS</option>
                            <option value="NU">NU</option>
                            <option value="ON">ON</option>
                            <option value="PE">PE</option>
                            <option value="QC">QC</option>
                            <option value="SK">SK</option>
                            <option value="YT">YT</option>
                        </select>
                    </div>
                    <div className={styles.formElement} id={styles.beginningForm}>
                            <label className={styles.formLabel} htmlFor="beginning">Beginning:</label>
                            <input className={styles.formInput} type="month" id={styles.startTime} name="beginning" onChange={this.trackStartTime}></input>
                    </div>
                    <div className={styles.formElement} id={styles.untilForm}>
                            <label className={styles.formLabel} htmlFor="until">Until:</label>
                            <input className={styles.formInput} type="month" id={styles.untilTime} name="until" onChange={this.trackEndTime}></input>
                    </div>
                    <div className={styles.formElement} id={styles.descriptionForm}>
                        <label className={styles.formLabel} htmlFor="description">Description:</label>
                        <textarea id={styles.descriptionArea} name="description" rows="3" cols="70" onChange={this.trackDescription}></textarea>
                    </div>
                    <button id={styles.button} type="button" onClick={() => deleteEducation(educationObject)}>Delete</button>
                </div>
            </div>
        );
    };
}

export default EducationFormInstance;