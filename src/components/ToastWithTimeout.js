import React, { useState } from 'react';
import './toast.css';

export default function ToastWithTimeout() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((current) => !current);
  };

  setTimeout(() => {
    setShow(false);
  }, 5000);

  return (
    <div>
      <button className="btn-toggle" onClick={handleShow}>
        Click Me!
      </button>
      <div className={`toast-container ${show === true ? setTimeout : 'hide'}`}>
        <div className="toast">
          <header className="toast-header">
            <h3>Toast Header</h3>
            <button className="btn-close" onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8L3.72 4.78a.75.75 0 0 1 0-1.06z"
                />
              </svg>
            </button>
          </header>
          <div className="toast-body">
            <p>This toast will dissappeared after 5 seconds</p>
            <button className="btn">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}
