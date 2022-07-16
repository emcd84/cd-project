import React, { Component } from 'react';
import styles from '../styles/ExperienceFormContainer.module.css';
import EducationFormInstance from './EducationFormInstance';
import uniqid from 'uniqid';

class EducationContainer extends Component {
    constructor() {
        super();

        this.state = {
            educationInstances: [],
        }

        this.initializeEducation = this.initializeEducation.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
        this.updateEducation = this.updateEducation.bind(this);
    };

    createEmptyEducation = () => {
        return({
            schoolName: "",
            credential: "",
            startMonth: "",
            startYear: "",
            endMonth: "",
            endYear: "",
            city: "",
            province: "",
            description: "",
            id: uniqid(),
        });
    }

    initializeEducation = () => {
        const updatedEducationInstances = this.state.educationInstances.concat(this.createEmptyEducation());
        this.setState(
            {
                educationInstances: updatedEducationInstances,
            }, () => {
                this.props.updateEducationInstances(this.state.educationInstances);
            }
        );
    }

    deleteEducation = (deleteObject) => {
        const newEducationInstances = this.state.educationInstances.filter(instance => instance !== deleteObject);
        this.setState({
            educationInstances: newEducationInstances,
        }, () => {
            this.props.updateEducationInstances(this.state.educationInstances);
        });
    }

    updateEducation = (oldEducationObject, newEducationObject) => {
        let educationsArrayTemp = this.state.educationInstances;
        let educationIndex = educationsArrayTemp.indexOf(oldEducationObject);
        educationsArrayTemp.splice(educationIndex, 1, newEducationObject);
        this.setState({
            educationInstances: educationsArrayTemp,
        });

        this.props.updateEducationInstances(this.state.educationInstances);
    }

    render() {
        const { educationInstances } = this.state;

        return(
            <div id={styles.container}>
                <div id={styles.top}>
                    <h1 id={styles.headerText}>Education:</h1>
                    <div id={styles.buttons}>
                        <button type="button" onClick={this.initializeEducation}>Add Education</button>
                    </div>
                </div>
                <div className={styles.forms}>
                    {educationInstances.map((instance) => {
                        return <EducationFormInstance key={instance.id} educationObject={instance} deleteEducation={this.deleteEducation} updateEducation={this.updateEducation}/>
                    })}
                </div>
            </div>
        );
    };
}

export default EducationContainer;