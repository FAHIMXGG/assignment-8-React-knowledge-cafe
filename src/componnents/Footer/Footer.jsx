import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <h2>Props vs State</h2>
                <p>props: received array data to a component to another component by using a loop like map(rad-only, !modified) <br />
state: contain data or information(async, modified using this.setState)</p>
            </div>
            <div>
                <h2>How does useState work?</h2>
                <p>useState a hook of React that can allow adding state to a functional component <br />
return 2 values current state and a function to update it</p>
            </div>
            <div>
                <h2>
Purpose of useEffect other than fetching data?</h2>
                <p>useEffect is a side effect to perform in components
we can get a API data by using useEffect</p>
            </div>
            <div>
                <h2>How Does React work?</h2>
                <p>Right now I learn from this course react is a JS library 
It makes easier to code
Using Components step by step
When a React component is rendered, <br />
it generates a virtual DOM (Document Object Model),
which is a lightweight representation of the actual DOM. <br />
This virtual DOM is a tree-like data structure that
React uses to keep track of changes to the UI.</p>
            </div>
        </div>
    );
};

export default Footer;