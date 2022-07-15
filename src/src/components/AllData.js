import React from 'react';
import UserContext from './UserContext';
import Card from './Card';

function AllData(){
  const ctx = React.useContext(UserContext);
  const users = ctx.users;
  return (
      <Card
          bgcolor="primary"
          txtcolor="white"
          header="BadBank All Data Page"
          title="Bad Bank"
          text= "All Data in Store"
          body=
          {<table className="table">
            <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Password</th>
             <th scope="col">Balance</th>
            </tr>
            </thead>
            <tbody>
              {users.map(element=> {
                return <tr>
                  <td>{element.email}</td>
                  <td>{element.name}</td>
                  <td>{element.password}</td>
                  <td>{element.balance}</td>
            </tr>
              })}
            </tbody>
          </table>}
          
      />
          
  )
} 

export default AllData;