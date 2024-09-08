import { useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo2.jpeg';

import './dashboardPage-styles.scss'

export default function DashboardPage() {
  const location = useLocation();
  const { customerName, policyNumber, fundAmount } = location.state || {};

  const availableFundAmount = fundAmount - (20 * fundAmount) / 100;

  // Function to format number in Indian currency
  const formatToINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  return (
    <div className="dashboardPage">
      <img src={logo} alt="Company Logo" />
      <h2>Aditya Birla Sun Life Insurance Company Ltd.</h2>
      <table>
        <tr>
          <td>Customer Name</td>
          <td>{customerName}</td>
        </tr>
        <tr>
          <td>Policy Number</td>
          <td>{policyNumber}</td>
        </tr>
        <tr>
          <td>Total Fund Amount</td>
          <td>{formatToINR(Number(fundAmount))}</td>
        </tr>
        <tr>
          <td>Available Fund Amount</td>
          <td>{formatToINR(availableFundAmount)}</td>
        </tr>
      </table>
    </div>
  );
}
