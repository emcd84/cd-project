import React, { Component } from 'react';
import styles from '../styles/ExperienceFormContainer.module.css';
import AwardsFormInstance from './AwardsFormInstance';
import uniqid from 'uniqid';

class AwardsFormContainer extends Component {
    constructor() {
        super();

        this.state = {
            awardInstances: [],
        }

        this.initializeAward = this.initializeAward.bind(this);
        this.deleteAward = this.deleteAward.bind(this);
        this.updateAward = this.updateAward.bind(this);
    };

    createEmptyAward = () => {
        return({
            description: "",
            id: uniqid(),
        });
    }

    initializeAward = () => {
        const updatedAwardInstances = this.state.awardInstances.concat(this.createEmptyAward());
        this.setState(
            {
                awardInstances: updatedAwardInstances,
            }, () => {
                this.props.updateAwardInstances(this.state.awardInstances);
            }
        );
    }

    deleteAward = (deleteObject) => {
        const newAwardInstances = this.state.awardInstances.filter(instance => instance !== deleteObject);
        this.setState({
            awardInstances: newAwardInstances,
        }, () => {
            this.props.updateAwardInstances(this.state.awardInstances);
        });
    }

    updateAward = (oldAwardObject, newAwardObject) => {
        let awardsArrayTemp = this.state.awardInstances;
        let awardIndex = awardsArrayTemp.indexOf(oldAwardObject);
        awardsArrayTemp.splice(awardIndex, 1, newAwardObject);
        this.setState({
            awardInstances: awardsArrayTemp,
        });

        this.props.updateAwardInstances(this.state.awardInstances);
    }

    render() {
        const { awardInstances } = this.state;

        return(
            <div id={styles.container}>
                <div id={styles.top}>
                    <h1 id={styles.headerText}>Awards:</h1>
                    <div id={styles.buttons}>
                        <button type="button" onClick={this.initializeAward}>Add Award</button>
                    </div>
                </div>
                <div className={styles.forms}>
                    {awardInstances.map((instance) => {
                        return <AwardsFormInstance key={instance.id} awardObject={instance} deleteAward={this.deleteAward} updateAward={this.updateAward}/>
                    })}
                </div>
            </div>
        );
    };
}

export default AwardsFormContainer;