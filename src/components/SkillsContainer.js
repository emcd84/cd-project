import React, {Component} from 'react';
import styles from '../styles/SkillsContainer.module.css';

class SkillsContainer extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    };

    render() {
        const { skills } = this.props;

        return(
            <div className={styles.SkillsContainer}>
                <div className={styles.skillsHeader}>
                    <div id={styles.borderLeft}></div>
                    <h1 id={styles.skillsHeaderText}>Skills</h1>
                </div>
                <div className={styles.skills}>
                    <div id={styles.borderRight}></div>
                    <p id={styles.skillsText}>{skills}</p>
                </div>
            </div>
        );
    };
}

export default SkillsContainer;