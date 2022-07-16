import React, {Component} from 'react';
import styles from '../styles/SkillsForm.module.css';

class SkillsForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    };

    render() {
        const { updateSkillsOnChange } = this.props;

        return(
            <div className={styles.container}>
                <h1 id={styles.header}>Skills:</h1>
                <div className={styles.formContainer}>
                    <textarea id={styles.skillsArea} name="skills" rows="5" cols="79" onChange={updateSkillsOnChange}></textarea>
                </div>
            </div>
        );
    };
};

export default SkillsForm;