import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function pass() {}
export function Login(props) {
  const inputRef = useRef(null);
  function Clicked() {
    if (inputRef != null) {
      const message = inputRef.current.value;
      console.log(message);
      props.function(message);
    }
  }

  return (
    <div>
      <p>Landing Page</p>
      <br></br>
      <input placeholder="Username" ref={inputRef} type="text" />
      <button type="button" onClick={Clicked}>
        Login
      </button>
      
    </div>
  );
}

Login.propTypes = {
  function: PropTypes.func,
};
Login.defaultProps = {
  function: pass(),
};

export default Login;
