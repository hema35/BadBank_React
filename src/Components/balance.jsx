import React from 'react';
import './bank.css';
import Card from './card';
function Balance() {
    return (
        <Card
          bgcolor="info"
          header="Balance as of Today"
          body= { (<>
            <h6>New Balance</h6> <br/>
            <p>Page under construction!!</p>
            </>
            )
          }
          />
    );
}

export default Balance;