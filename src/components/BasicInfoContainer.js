import React, { Component } from 'react';
import styles from '../styles/BasicInfoContainer.module.css';
import InfoHeader from './InfoHeader';
import InfoDetails from './InfoDetails';


class BasicInfoContainer extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    render() {
        const { name, occupation, description, address, city, province, postalCode, phoneNumber, email } = this.props;

        return(
            <div className={styles.container}>
                <InfoHeader name={name} occupation={occupation} description={description}/>
                <InfoDetails class={styles.InfoDetails} name={name} address={address} city={city} province={province} 
                postalCode={postalCode} phoneNumber={phoneNumber} email={email}/>
            </div>
        );
    };
}

export default BasicInfoContainer;