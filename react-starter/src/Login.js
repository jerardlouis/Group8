import React, { useRef } from "react";
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
      <button type="button" onClick={Clicked}>
        Login
      </button>
    </div>
  );
}

export default Login;
