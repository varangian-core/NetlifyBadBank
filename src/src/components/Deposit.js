import React from 'react';
import UserContext from './UserContext';
import Card from './Card';

function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [deposit, setDeposit] = React.useState(0);
  const ctx = React.useContext(UserContext); 
  const users = ctx.users;;  
  
   let balance = users[users.length-1].balance;

  function validate(field){
    if (Number(field) ===0) {
        setStatus('Error:  Please Enter Amount');
        setTimeout(() => setStatus(''),3000);
        return false;
    }
    return true;
    }  

  function validateNumber(field) {
    if (isNaN(parseFloat(field))) {
      setStatus('Error: Please enter a dollar amount');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
    }

    function validatePositiveNumber(field) {
      if (Number(field) <0) {
            setStatus('Error: Please enter a positive dollar amount');
            setTimeout(() => setStatus(''),3000);
            return false;
          }
            return true;
          }

function handleDeposit(){
    if (!validate(deposit, 'deposit')){
    alert('Deposit amount required');
    return;
  }

  if(!validateNumber(deposit)) {
    alert('Deposit amount must be a number');
    return;
  }

  if(!validatePositiveNumber(deposit)) {
    alert('Deposit amount must positive');
    return;
  }
  
  let newBalance = balance + Number(deposit);

  users[users.length-1].balance = newBalance;

  setShow(false);
  return newBalance;
 } 
  

function clearForm(){
  setDeposit(0);
  setShow(true);
};

return (
  <Card
    bgcolor="primary"
    header="BadBank Deposit"
    status={status}
    body={show ? (  
          <>
          Your Current Balance is: ${balance}
          <br/>
          Deposit Amount<br/>
          <input type="input" className="form-control" id="DepositAmount" placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
          <button type="submit" className="btn btn-light" disabled={deposit ==="" || deposit === 0} onClick={handleDeposit}>Make Deposit</button><br/>
          </>
        ):(
          <>
          <h5>Success, you made a ${deposit} deposit!</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
        </>
     )}
    />
  )
        }
  export default Deposit;