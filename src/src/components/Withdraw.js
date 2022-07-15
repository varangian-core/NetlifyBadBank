import React from 'react';
import UserContext from './UserContext';
import Card from './Card';

function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [withdraw, setWithdraw] = React.useState(0);
  const ctx = React.useContext(UserContext); 
  const users = ctx.users;;  
  
   let balance = users[users.length-1].balance;

  function validate(field, label){
    if ( (Number(field) ===0)) {
        setStatus('Error:  Please enter the amount');
        setTimeout(() => setStatus(''),3000);
        return false;
    }
    return true;
    }  

  function validateNumber(field) {
    if (isNaN(parseFloat(field))) {
      setStatus('Error: Please enter a dollar value');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
    }

    function validatePositiveNumber(field) {
      if (Number(field) <0) {
            setStatus('Error: Please enter a positive value');
            setTimeout(() => setStatus(''),3000);
            return false;
          }
            return true;
          }

    function validateOverdraft(num) {
      if (num > balance) {
            setStatus('Error: Can not withdraw more than Balance');
            setTimeout(() => setStatus(''),3000);
            return false;
          }
            return true;
          }
    
function handleWithdraw(){
    if (!validate(withdraw, 'withdraw')){
    alert('Withdraw amount required');
    return;
  }

  if(!validateNumber(withdraw)) {
    alert('Withdraw amount must be a number');
    return;
  }

  if(!validatePositiveNumber(withdraw)) {
    alert('Withdraw amount must be positive');
    return;
  }

  if(!validateOverdraft(withdraw)) {
    alert('Withdraw amount must be less than Balance');
    return;
  }
  
  let newBalance = balance - Number(withdraw);

  users[users.length-1].balance = newBalance;

  setShow(false);
  return newBalance;
 } 
  

function clearForm(){
  setWithdraw(0);
  setShow(true);
};

return (
  <Card
    bgcolor="primary"
    header="BadBank Withdraw Page"
    status={status}
    body={show ? (  
          <>
          Your Current Balance is: ${balance}
          <br/>
          Withdraw Amount<br/>
          <input type="input" className="form-control" id="WithdrawAmount" placeholder="Withdraw Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
          <button type="submit" className="btn btn-light" disabled={withdraw ==="" || withdraw === 0} onClick={handleWithdraw}>Make Withdraw</button><br/>
          </>
        ):(
          <>
          <h5>Success, you have withdrawn ${withdraw} </h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Withdrawal</button>
        </>
     )}
    />
  )
        }
export default Withdraw;