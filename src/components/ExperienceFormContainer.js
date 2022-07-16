import React, { Component } from 'react';
import styles from '../styles/ExperienceFormContainer.module.css';
import ExperienceFormInstance from './ExperienceFormInstance';
import uniqid from 'uniqid';

class ExperienceFormContainer extends Component {
    constructor() {
        super();

        this.state = {
            experienceInstances: [],
        }

        this.initializeExperience = this.initializeExperience.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
        this.updateExperience = this.updateExperience.bind(this);
    };

    createEmptyExperience = () => {
        return({
            companyName: "",
            jobTitle: "",
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

    initializeExperience = () => {
        const updatedExperienceInstances = this.state.experienceInstances.concat(this.createEmptyExperience());
        this.setState(
            {
                experienceInstances: updatedExperienceInstances,
            }, () => {
                this.props.updateExperienceInstances(this.state.experienceInstances);
            }
        );
    }

    deleteExperience = (deleteObject) => {
        const newExperienceInstances = this.state.experienceInstances.filter(instance => instance !== deleteObject);
        this.setState({
            experienceInstances: newExperienceInstances,
        }, () => {
            this.props.updateExperienceInstances(this.state.experienceInstances);
        });
    }

    updateExperience = (oldExperienceObject, newExperienceObject) => {
        let experiencesArrayTemp = this.state.experienceInstances;
        let experienceIndex = experiencesArrayTemp.indexOf(oldExperienceObject);
        experiencesArrayTemp.splice(experienceIndex, 1, newExperienceObject);
        this.setState({
            experienceInstances: experiencesArrayTemp,
        });

        this.props.updateExperienceInstances(this.state.experienceInstances);
    }

    render() {
        const { experienceInstances } = this.state;

        return(
            <div id={styles.container}>
                <div id={styles.top}>
                    <h1 id={styles.headerText}>Experience:</h1>
                    <div id={styles.buttons}>
                        <button type="button" onClick={this.initializeExperience}>Add Experience</button>
                    </div>
                </div>
                <div className={styles.forms}>
                    {experienceInstances.map((instance) => {
                        return <ExperienceFormInstance key={instance.id} experienceObject={instance} deleteExperience={this.deleteExperience} updateExperience={this.updateExperience}/>
                    })}
                </div>
            </div>
        );
    };
}

export default ExperienceFormContainer;