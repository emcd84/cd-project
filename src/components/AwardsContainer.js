import React, {Component} from 'react';
import AwardsInstance from './AwardsInstance';
import styles from '../styles/AwardsContainer.module.css';

class AwardsContainer extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    };

    render() {
        const { awards } = this.props;

        return(
            <div className={styles.AwardsContainer}>
                <div className={styles.awardsHeader}>
                    <div id={styles.borderLeft}></div>
                    <h1 id={styles.awardsHeaderText}>Awards</h1>
                </div>
                <div className={styles.awards}>
                    <div id={styles.borderRight}></div>
                    <div id={styles.awardsInstances}>
                        {awards.map((instance) => {
                            return(
                                <AwardsInstance description={instance.description}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };
}

export default AwardsContainer;