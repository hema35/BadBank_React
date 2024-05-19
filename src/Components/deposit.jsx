import React from 'react';
import Card from './card';
import UserContext from './context';

function Deposit() {
    const [show, setShow] = React.useState(true);
    const [deposit, setDeposit] = React.useState('');
    const [status, setStatus] = React.useState('');
    const ctx = React.useContext(UserContext);
    let lastUser = ctx.users.length -1;
    let balance = parseInt(ctx.users[lastUser].balance);
    function validate(field, label){
      if (isNaN(deposit) || deposit === " ") {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }     if (deposit < 0) {
        setStatus('Error: Negative number');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }
  function makeDeposit () {
    if (!validate(deposit, 'Number Required'))
      return;
    let newAmount = balance + parseInt(deposit);
    let newMoney = `${ctx.users[lastUser].name} deposited: ${deposit}`;
    let newTransaction = {type: 'Deposit', amount: parseInt(deposit), date: new Date()}
    setShow(false);
  return (
    // Initialize submissions as an empty array if it is undefined or null
    ctx.submissions ??= [],
  
    // Push newMoney to the submissions array
    ctx.submissions.push(newMoney),
  
    // Update the balance in the users array
    ctx.users[lastUser].balance = newAmount,

    // Update the current deposit to transaction array
    ctx.users[lastUser].transactions ??= [],
    ctx.users[lastUser].transactions.push(newTransaction)
  )}

    function clearForm(){
      setDeposit(0);
      setShow(true);
      console.log(ctx)
    }
    return (
        
          <Card
          bgcolor="secondary"
          header="Deposit Funds"
          status={status}
          body= {show ? (
            <>
            <h5>Hello {ctx.users[lastUser].name},</h5>
            <h6>Account Balance = $ {ctx.users[lastUser].balance}</h6><br/>
            <input type="input" className="form-control" id="deposit" placeholder="Enter Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /> <br/>
            <button type="submit" className="btn btn-light" disabled={deposit === 0 || deposit === '' ? true : false} onClick={makeDeposit}>Deposit Amount</button> <br/>
            </> ) : (<>
            <h6>New Balance = $ {balance}</h6> <br/>
            <p>Transaction successful!</p>
            <button type="submit" className="btn btn-light"  onClick={clearForm}>Deposit More...</button> <br/>
            </>
            )
          }
          />
 
      
    );
}

export default Deposit;