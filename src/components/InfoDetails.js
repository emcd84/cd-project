import React, { Component } from 'react';
import styles from '../styles/InfoDetails.module.css'

class InfoDetails extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    };

    render() {
        const { name, address, city, province, postalCode, phoneNumber, email} = this.props;


        return(
            <div className={styles.container}>
                <div id={styles.top}>
                    <h1 id={styles.nameText}>{name}</h1>
                    <h2 id={styles.addressText}>{address}</h2>
                    <h2 id={styles.locationText}>{city}, {province}, {postalCode}</h2>
                </div>
                <div id={styles.bottom}>
                    <h2 id={styles.phoneText}>{phoneNumber}</h2>
                    <h2 id={styles.emailText}>{email}</h2>
                </div>
            </div>
        );
    };
}

export default InfoDetails;