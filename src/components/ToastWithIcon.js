import React, { useState } from 'react';
import './toast.css';

export default function ToastWithIcon() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((current) => !current);
  };

  return (
    <div>
      <button className="btn-toggle" onClick={handleShow}>
        Click Me!
      </button>
      <div className={`toast-container ${show === true ? 'show' : 'hide'}`}>
        <div className="toast">
          <header className="toast-header">
            {/* add class toast-icon to your icon */}
            <svg
              className="toast-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="#dc3545"
                d="M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
              />
            </svg>
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo esse maiores assumenda.
            </p>
            <button className="btn">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}
