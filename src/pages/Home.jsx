import React from 'react';
import { Container } from '@mui/material';

function Home() {
  return (
    <Container>
    <div>
      <h1>Technical Test Instructions</h1>
      <p></p>

      <pre>
        
      </pre>
      <h3></h3>
      <ol>
        <li>Create a New Git Branch:
            <p>- Please create a new Git branch using your name for identification.</p>
        </li>
        <li>Render Items from JSON File:
            <p>- Render the list of items contained in the data/products.json file within your application.</p>
        </li>
        <li>
            Add "Add to Basket" button for each item:
            <p>- Incorporate an "Add" icon to enable users to add items to the shopping cart.</p>
        </li>
        <li>
            Implement Add to Cart Functionality:
            <p>- Develop the functionality to allow users to add items to their shopping cart.</p>
        </li>
        <li>
            Implement Remove from Cart Functionality:
            <p>- Develop the functionality to allow users to remove items from their shopping cart.</p>
        </li>
        <li>
            Display Shopping Cart Total:
            <p>- Ensure the total value of the shopping cart is dynamically displayed.</p>
        </li>
        <li>
            Ability to add more than 1x of the same item
            <p>- Display the quantity of items in the shopping cart</p>
        </li>
      </ol>
    </div>
    </Container>
  );
}

export default Home;
