import { ButtonPreset } from "../../constants/common-constants";
import FNButton from "../../components/button/FNButton";
import FNInput from "../../components/input/FNInput";
import './login-styles.scss';
import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 

export default function LoginPage() {
  const navigate = useNavigate();

  // State variables for each input field
  const [customerName, setCustomerName] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [fundAmount, setFundAmount] = useState('');

  // State variables for input fields errors
  const [isCustomerNameError, setIsCustomerNameError] = useState(false);
  const [isPolicyNumberError, setIsPolicyNumberError] = useState(false);
  const [isFundAmountError, setIsFundAmountError] = useState(false);

  // Handlers to update the state for each input field
  const handleCustomerNameChange = (value: string) => {
    setCustomerName(value);
    setIsCustomerNameError(false);
  };
  const handlePolicyNumberChange = (value: string) => {
    setPolicyNumber(value);
    setIsPolicyNumberError(false);
  };
  const handleFundAmountChange = (value: string) => {
    setFundAmount(value);
    setIsFundAmountError(false);
  };

  // Handler for resetting all fields
  const handleReset = () => {
    setCustomerName('');
    setPolicyNumber('');
    setFundAmount('');

    // Reset error states as well
    setIsCustomerNameError(false);
    setIsPolicyNumberError(false);
    setIsFundAmountError(false);
  };

  // Validation function
const handleSearch = () => {
  if (customerName.trim() === '') {
    setIsCustomerNameError(true);
    return;
  }
  const policyNumberPattern = /^\d{9}$/;
  if (!policyNumberPattern.test(policyNumber)) {
    setIsPolicyNumberError(true);
    return;
  }
  if (isNaN(Number(fundAmount)) || Number(fundAmount) <= 0) {
    setIsFundAmountError(true);
    return;
  }

  navigate('/dashboard', {
    state: { 
      customerName, 
      policyNumber, 
      fundAmount 
    }
  });
};

  return (
    <div className="loginPage">
      <h2>Customer Search</h2>
      <div className="loginPage__input-group">
        <FNInput
          handleChange={handleCustomerNameChange}
          label="Customer Name"
          placeholder="Enter customer name"
          hasBorder
          value={customerName}
          isError={isCustomerNameError}
          errorMessage="Customer name is required"
        />
        <FNInput
          handleChange={handlePolicyNumberChange}
          label="Policy Number"
          placeholder="Enter policy number"
          hasBorder
          value={policyNumber}
          isError={isPolicyNumberError}
          errorMessage="Policy number should be 9 digits"
        />
        <FNInput
          handleChange={handleFundAmountChange}
          label="Fund Amount"
          placeholder="Enter fund amount"
          hasBorder
          value={fundAmount}
          isError={isFundAmountError}
          errorMessage="Fund amount should be a postive number"
        />
      </div>
      <div className="loginPage__button-container">
        <FNButton
          handleClick={handleSearch}
          title="Search"
          buttonType={ButtonPreset.GreyBackground}
          buttonClass="loginPage__button loginPage__button--grey"
        />
        <FNButton
          handleClick={handleReset}
          title="Reset"
          buttonType={ButtonPreset.GreyBackground}
          buttonClass="loginPage__button loginPage__button--grey"
        />
      </div>
    </div>
  );
}
