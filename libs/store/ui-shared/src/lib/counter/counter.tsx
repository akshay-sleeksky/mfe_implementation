// import styles from './counter.module.css';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
/* eslint-disable-next-line */
interface CounterProps {
  count? : number
}

function Counter(props : CounterProps) {
  return (
    <div >
      <h1>Lib count is Bottom</h1>
    </div>
  );
}

export class MyWebComponent extends HTMLElement {
  
  constructor() {
    super();
    // Do something more
  }

  connectedCallback() {
    
    // Create a ShadowDOM
    const root = this.attachShadow({ mode: 'open' });

    // Create a mount element
    const mountPoint = document.createElement('div');
    
    root.appendChild(mountPoint);

    // You can directly use shadow root as a mount point
    ReactDOM.render(<Counter />, mountPoint);
  }
}

customElements.define('my-web-component', MyWebComponent);


export default Counter;
