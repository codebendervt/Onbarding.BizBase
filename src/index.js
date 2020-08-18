import React from "react";
import ReactDOM from "react-dom";
import App from './app';
import Head from './head'
import * as serviceWorker from './serviceWorker';
import "@babel/polyfill";
import * as typeForEmbed from '@typeform/embed';

const onSub = () => {window.open("https://www.facebook.com/BizBase-112010610516332/"); };

ReactDOM.render(
  <React.StrictMode>
    <App></App>
    
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Head />
  </React.StrictMode>,
   document.getElementById('test')
);

const form =  document.getElementById('form');
typeForEmbed.makeWidget(form,"https://form.typeform.com/to/v7DHvfw1",{hideFooter:true, onSubmit:onSub});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();