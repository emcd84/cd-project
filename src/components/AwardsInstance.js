import React, {Component} from 'react';
import styles from '../styles/AwardsInstance.module.css';

class AwardsInstance extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(description) {
        super(description);
    };

    render() {
        const { description } = this.props;

        return(
            <div className={styles.AwardsInstance}>
                <p id={styles.awardText}>{description}</p>
            </div>
        );
    };
}

export default AwardsInstance;