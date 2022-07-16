import React, {Component} from 'react';
import ResumeForm from './components/ResumeForm';
import ResumeDisplay from './components/ResumeDisplay';
import './styles/App.css';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "John Doe",
      occupation: "Business Manager",
      description: "Professional Business Developer with four years of experience in testing, management, and development.",
      address: "1234 76 St SW",
      city: "Hamilton",
      province: "ON",
      postalCode: "T4L 8P9",
      phoneNumber: "123-456-7890",
      email: "johndoe@email.com",
      skills: "Skilled in sales and marketing, including over email and social media. Experienced negotiator and decision-maker. Capable public speaker. Knowledgable in search engine optimization and Google Analytics.",
      experienceInstances: [
        {
            companyName: "River Tech",
            jobTitle: "Business Operations Manager",
            startMonth: "Jul",
            startYear: 2019,
            endMonth: "Jun",
            endYear: 2022,
            city: "Toronto",
            province: "ON",
            description: "Conceptualized a leave of absence system to reduce process handling time by 25% and needed workers by two. Analyzed statistical data to increase production by 20% and reduce compliance issues by 35%. Maximized hiring procedures to expand employment base by 35+ people.",
            id: uniqid(),
        }
      ],
      educationInstances: [
        {
            schoolName: "University of Alberta",
            credential: "Bachelor of Business",
            startMonth: "Sep",
            startYear: 2010,
            endMonth: "May",
            endYear: 2014,
            city: "Edmonton",
            province: "AB",
            description: "Majored in business management while studying a breadth of business topics, including accounting, finance, and entrepreneurship. Participated in clubs and student initiatives. Worked as an intern in the summer the final two years.",
            id: uniqid(),
        }
      ],
      awardInstances: [
        {
          description: "University of Alberta Dean's List, 2014",
          id: uniqid(),
        }
      ],
    }
  }

  updateNameOnChange = (e) => {
    this.setState({
        name: e.target.value,
    });
  }

  updateOccupationOnChange = (e) => {
    this.setState({
        occupation: e.target.value,
    });
  }

  updateDescriptionOnChange = (e) => {
    this.setState({
        description: e.target.value,
    });
  }

  updateAddressOnChange = (e) => {
    this.setState({
        address: e.target.value,
    });
  }

  updateCityOnChange = (e) => {
    this.setState({
        city: e.target.value,
    });
  }

  updateProvinceOnChange = (e) => {
    this.setState({
        province: e.target.value,
    });
  }

  updatePostalCodeOnChange = (e) => {
    this.setState({
        postalCode: e.target.value,
    });
  }

  updatePhoneNumberOnChange = (e) => {
    this.setState({
        phoneNumber: e.target.value,
    });
  }

  updateEmailOnChange = (e) => {
    this.setState({
        email: e.target.value,
    });
  }

  updateSkillsOnChange = (e) => {
    this.setState({
      skills: e.target.value,
    });
  }

  updateExperienceInstances = (newExperienceInstances) => {
    this.setState({
      experienceInstances: newExperienceInstances,
    });
  }

  updateEducationInstances = (newEducationInstances) => {
    this.setState({
      educationInstances: newEducationInstances,
    })
  }

  updateAwardInstances = (newAwardInstances) => {
    this.setState({
      awardInstances: newAwardInstances,
    })
  }

  render() {
    const { name, occupation, description, address, city, province, postalCode, phoneNumber, email, skills, experienceInstances, educationInstances, awardInstances } = this.state;

    return (
      <div className="App">
        <ResumeForm updateNameOnChange={this.updateNameOnChange} updateOccupationOnChange={this.updateOccupationOnChange} updateDescriptionOnChange={this.updateDescriptionOnChange} 
        updateAddressOnChange={this.updateAddressOnChange} updateCityOnChange={this.updateCityOnChange} updateProvinceOnChange={this.updateProvinceOnChange}
        updatePostalCodeOnChange={this.updatePostalCodeOnChange} updatePhoneNumberOnChange={this.updatePhoneNumberOnChange} updateEmailOnChange={this.updateEmailOnChange}
        updateSkillsOnChange={this.updateSkillsOnChange} updateExperienceInstances={this.updateExperienceInstances} updateEducationInstances={this.updateEducationInstances}
        updateAwardInstances={this.updateAwardInstances}/>
        <ResumeDisplay name={name} occupation={occupation} description={description} address={address} city={city} province={province} postalCode={postalCode} 
        phoneNumber={phoneNumber} email={email} skills={skills} experiences={experienceInstances} educations={educationInstances} awards={awardInstances}/>
      </div>
    );
  }
}


export default App;

