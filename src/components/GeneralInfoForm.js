import React, {Component} from 'react';
import styles from '../styles/GeneralInfoForm.module.css';

class GeneralInfoForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    };

    render() {
        const { updateNameOnChange, updateOccupationOnChange, updateDescriptionOnChange, updateAddressOnChange, updateCityOnChange, updateProvinceOnChange, 
            updatePostalCodeOnChange, updatePhoneNumberOnChange, updateEmailOnChange } = this.props;

        return(
            <div className={styles.container}>
                <h1 id={styles.header}>General Information:</h1>
                <div className={styles.formContainer}>
                    <div className={styles.formElement} id={styles.nameForm}>
                        <label className={styles.formLabel} htmlFor="name">Name:</label>
                        <input className={styles.formInput} type="text" id="name" name="name" onChange={updateNameOnChange}></input>
                    </div>
                    <div className={styles.formElement} id={styles.occupationForm}>
                        <label className={styles.formLabel} htmlFor="occupation">Occupation:</label>
                        <input className={styles.formInput} type="text" id="occupation" name="occupation" onChange={updateOccupationOnChange}></input>
                    </div>
                    <div className={styles.formElement} id={styles.addressForm}>
                        <label className={styles.formLabel} htmlFor="address">Address:</label>
                        <input className={styles.formInput} type="text" id="address" name="address" onChange={updateAddressOnChange}></input>
                    </div>
                    <div className={styles.formElement} id={styles.cityForm}>
                        <label className={styles.formLabel} htmlFor="city">City:</label>
                        <input className={styles.formInput} type="text" id="city" name="city" onChange={updateCityOnChange}></input>
                    </div>
                    <div className={styles.formElement} id={styles.provinceForm}>
                        <label className={styles.formLabel} htmlFor="province">Province:</label>
                        <select className={styles.formInput} id="province" name="province" onChange={updateProvinceOnChange} defaultValue="ON">
                            <option value="AB">AB</option>
                            <option value="BC">BC</option>
                            <option value="MB">MB</option>
                            <option value="NB">NB</option>
                            <option value="NL">NL</option>
                            <option value="NT">NT</option>
                            <option value="NS">NS</option>
                            <option value="NU">NU</option>
                            <option value="ON">ON</option>
                            <option value="PE">PE</option>
                            <option value="QC">QC</option>
                            <option value="SK">SK</option>
                            <option value="YT">YT</option>
                        </select>
                    </div>
                    <div className={styles.formElement} id={styles.postalCodeForm}>
                        <label className={styles.formLabel} htmlFor="postalCode">Postal Code:</label>
                        <input className={styles.formInput} type="text" id="postalCode" name="postalCode" onChange={updatePostalCodeOnChange}></input>
                    </div>
                    <div className={styles.formElement} id={styles.phoneNumberForm}>
                        <label className={styles.formLabel} htmlFor="phoneNumber">Phone Number:</label>
                        <input className={styles.formInput} type="text" id="phoneNumber" name="phoneNumber" onChange={updatePhoneNumberOnChange}></input>
                    </div>
                    <div className={styles.formElement} id={styles.emailForm}>
                        <label className={styles.formLabel} htmlFor="email">Email:</label>
                        <input className={styles.formInput} type="text" id={styles.emailInput} name="email" onChange={updateEmailOnChange}></input>
                    </div>
                    <div className={styles.formElement} id={styles.descriptionForm}>
                        <label className={styles.formLabel} htmlFor="description">About You:</label>
                        <textarea id={styles.descriptionArea} name="description" rows="3" cols="70" onChange={updateDescriptionOnChange}></textarea>
                    </div>
                </div>
            </div>
        );
    };
}

export default GeneralInfoForm;