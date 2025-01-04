import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

function MyApp(){
    return(
        <div>
            <h1>Custom App | Shivam</h1>
        </div>
    )
}
const anotherUser = 'Chai aur react'

const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target: '_blank'},
    'Click me to visit google',
    anotherUser
)


const root = createRoot(document.getElementById('root'));
root.render(
   
    reactElement  
    // <MyApp/>
);

