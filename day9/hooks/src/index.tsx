import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseStateApp1 from './UseStateApp1';
import UseStateApp2 from './UseStateApp2';
import UseEffectApp1 from './UseEffectApp1';
import UseEffectApp2 from './UseEffectApp2';
import UseSampleApp2 from './UseSampleApp1';
import UseContextApp1 from './UseContextApp1';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{padding: '20px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
      <UseStateApp1/>
    </div>
    <div style={{padding: '20px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
      <UseStateApp2/>
    </div>
    <div style={{padding: '20px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
      <UseEffectApp1/>
    </div>
    <div style={{padding: '20px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
      <UseEffectApp2 />
    </div>
    <div style={{padding: '20px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
      <UseSampleApp2 />
    </div>
    <div>
      <UseContextApp1 />
    </div>
    <UseContextApp1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
