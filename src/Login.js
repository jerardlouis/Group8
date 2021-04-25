import React, { useRef } from "react";
import PropTypes from "prop-types";

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
      <input ref={inputRef} type="text" />
      <button type="button" onClick={Clicked} onKeyPress={Clicked}>
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
