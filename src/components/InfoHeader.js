import React, { Component } from 'react';
import styles from '../styles/InfoHeader.module.css';


class InfoHeader extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const { name, occupation, description } = this.props;


        return(
            <div className={styles.container}>
                <div id={styles.top}>
                    <h1 id={styles.nameText}>{name}</h1>
                    <h1 id={styles.occupationText}>{occupation}</h1>
                </div>
                <div id={styles.bottom}>
                    <h2 id={styles.descriptionText}>{description}</h2>
                </div>
            </div>
        );
    };
}

export default InfoHeader;