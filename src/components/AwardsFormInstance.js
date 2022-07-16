import React, { Component } from 'react';
import styles from '../styles/AwardsFormInstance.module.css';

class ExperienceFormInstance extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: this.props.awardObject.description,
            id: this.props.awardObject.id,
        }
    };

    trackDescription = (e) => {
        this.setState({
            description: e.target.value,
        }, () => {
            this.props.updateAward(this.props.awardObject, this.state);
        });
    }

    render() {

        const { awardObject, deleteAward } = this.props;

        return(
            <div className={styles.container}>
                <div id={styles.formContainer}>
                    <div className={styles.formElement} id={styles.descriptionForm}>
                        <label className={styles.formLabel} htmlFor="description">Award:</label>
                        <textarea id={styles.descriptionArea} name="description" rows="3" cols="70" onChange={this.trackDescription}></textarea>
                    </div>
                    <button id={styles.button} type="button" onClick={() => deleteAward(awardObject)}>Delete</button>
                </div>
            </div>
        );
    };
}

export default ExperienceFormInstance;