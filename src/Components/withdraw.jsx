import React from 'react';
import UserContext from './context';
import './bank.css';
import Card from './card';

function Withdraw() {
    const [withdraw, setWithdraw] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [show, setShow] = React.useState(true);
    const ctx = React.useContext(UserContext);
    let lastUser = ctx.users.length -1;
    let balance = parseInt(ctx.users[lastUser].balance);
    function validate(field, label){
      if (isNaN(withdraw) || withdraw === " ") {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }     if (withdraw < 0) {
        setStatus('Error: Negative Number');
        setTimeout(() => setStatus(''),3000);
        return false;
      } if (withdraw > balance) {
        setStatus('Error: Insufficient Funds');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }
    function makeWithdrawal () {
      if (!validate(withdraw, 'Number Required'))
      return;
      let newAmount = balance - parseInt(withdraw);
      let deductedFunds = `${ctx.users[lastUser].name} withdrew: ${withdraw}`;
      let newTransaction = {type: 'Withdrawn', amount: parseInt(withdraw), date: new Date()}
      setShow(false)
      return ( 
        ctx.users[lastUser].balance = newAmount, 
        ctx.submissions.push(deductedFunds),
    
      // Initialize submissions as an empty array if it is undefined or null
      ctx.submissions ??= [],
    
      // Push deductedFunds to the submissions array
      ctx.submissions.push(deductedFunds),
    
      // Update the balance in the users array
      ctx.users[lastUser].balance = newAmount,

      // Update the current deposit to transaction array
      ctx.users[lastUser].transactions ??= [],
      ctx.users[lastUser].transactions.push(newTransaction)
    )}
    
    function clearForm(){
      setWithdraw(0);
      setShow(true);
      console.log(ctx)
    }
    return (

          <Card
          bgcolor="info"
          header="Withdraw Funds"
          status={status}
          body= {show ? (
            <>
            <h5>Hello {ctx.users[lastUser].name},</h5>
            <h6>Account Balance = $ {ctx.users[lastUser].balance}</h6><br/>
            <input type="input" className="form-control" id="withdraw" placeholder="Enter amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /> <br/>
            <button type="submit" className="btn btn-light" disabled={withdraw === 0 || withdraw === ''? true : false} onClick={makeWithdrawal}>Withdraw</button> <br/>
            </> ) : (<>
            <h6>New Balance = $ {balance}</h6> <br/>
            <p>Transaction successful!</p>
            <button type="submit" className="btn btn-light"  onClick={clearForm}>Withdraw More...</button> <br/>
            </>
            )
          }
          />

      )
}

export default Withdraw;