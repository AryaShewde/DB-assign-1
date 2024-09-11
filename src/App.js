import { useState } from 'react';
import './App.css';
import Form_one from './components/Form_one';
import Form_two from './components/Form_two';
import Form_three from './components/Form_three';
import Form_last from './components/Form_last';

function App() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    username: "",
    password: "",
    cpassword: "",
    address: "",
    country: "",
    village: "",
    occupation: "",
    adharno: "",
    cardno: "",
    expirationDate: "",
    cvvcode: ""
  })

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = input => e => {
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }));
  }
  switch (step) {
    case 1:
      return (
        <div className="App">
          <Form_one nextStep={nextStep} handleFormData={handleInputData} values={formData} />
        </div>
      );
    case 2:
      return (
        <div className="App">
          <Form_two nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        </div>
      );
    case 3:
      return (
        <div className="App">
          <Form_three nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        </div>
      );
    case 4:
      return (
        <div className="App">
          <Form_last nextStep={nextStep} prevStep={prevStep} values={formData}/>
        </div>
      );
    default:
      return (
        <div className="App">
          hello
        </div>
      );
  }
}

export default App;
