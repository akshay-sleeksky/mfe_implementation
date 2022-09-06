// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as PropTypes from 'prop-types';


interface AppProps {
  count? : number
}

export function App({count} : AppProps) {
  return (
    <div style={{background:'gray',padding:'4px',color:'white'}}>
      <p>I'm Remote Component</p>
      <h1>Live app count is {count}</h1>
    </div>
  );
}



App.propTypes = {
  count : PropTypes.number
}

