import React from 'react';
import UserContext from './context';
import Card from './card';

function Alldata(){
    const ctx = React.useContext(UserContext);
  
    let users = [...ctx.users];
    
    function userNumber(i) {
      return (`User Account ${i+1} Detail`);
    }
  
    function userInfo(user) {
      return [user.name, user.email, user.password, user.balance];
    }
    
    return (
      <>
      {users.map((user, i) => (
        <Card
        index = {i}
        key = {i} 
        bgcolor="info"
        txtcolor="white"
        header="All data Summary"
        text={userNumber(i)}
        allData={userInfo(user)}
        body={
                                <table className="table"> 
                                  <thead>
                                    <tr>
                                      <th>Email</th>
                                      <th>Name</th>
                                      <th>Password</th>
                                      <th>Balance</th>
                                      { <th>Transactions</th> }
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr style={{ color: "grey" }}>
                                          <td>{user.email}</td>
                                          <td>{user.name}</td>
                                          <td>{user.password}</td>
                                          <td>{user.balance}</td>
                                          {<td>
                                            {user.transactions &&
                                              user.transactions.map((transaction, index) => (
                                                <div key={index}>
                                                  {transaction.type}: ${transaction.amount.toFixed()} {' '}
                                                  ({new Date(transaction.date).toLocaleDateString()})
                                                </div>
                                              ))}
                                          </td> }
                                        </tr>
                                  </tbody>
                                </table>
        }
        /> )
      )}
      </>
    )
  }
// function Alldata() {
//      const ctx = React.useContext(UserContext);
//     return (
//         // <h1>All Data<br/>
//         // {JSON.stringify(ctx)}
//         //  </h1>
         
           
//                 <>
//                   <br />
//                   <hr className="solid"></hr>
//                   <h3>ALL DATA<br/>
//                    {JSON.stringify(ctx)}
//                   </h3>
//                   <Card
//                     header="List of all user credentials and balances"
//                     bgcolor="info"
//                     body={
//                       <table className="table"> 
//                         <thead>
//                           <tr>
//                             <th>Email</th>
//                             <th>Name</th>
//                             <th>Password</th>
//                             <th>Balance</th>
//                             <th>Transactions</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {React.state.users.map((element) => {
//                             return (
//                               <tr style={{ color: "grey" }}>
//                                 <td>{element.email}</td>
//                                 <td>{element.name}</td>
//                                 <td>{element.password}</td>
//                                 <td>{element.balance}</td>
//                                 <td>
//                                   {element.transactions &&
//                                     element.transactions.map((transaction, index) => (
//                                       <div key={index}>
//                                         {transaction.type}: ${transaction.amount.toFixed()}{" "}
//                                         ({new Date(transaction.date).toLocaleDateString()})
//                                       </div>
//                                     ))}
//                                 </td>
//                               </tr>
//                             );
//                           })}
//                         </tbody>
//                       </table>
//                     }
//                   />
//                   <br />
//                 </>
//               );
//             }
          


export default Alldata;