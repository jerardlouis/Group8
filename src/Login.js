import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';

function pass() {}
export function Login(props) {
  const [error, seterror] = useState(false);

  function responseGoogle(res) {
    const profile = res.profileObj;
    props.function(profile.name);
    // props.setmail(profile.email); // to set email
    // props.setimg_url(profile.imageUrl); // to set image url
    // console.log(profile.name);
  }
  function responseGoogleFailed() {
    seterror(true);
  }

  return (
    <div className="login">
      <h1>Welcome to BookBuster</h1>
      <h2>Login using Google OAuth</h2>
      <GoogleLogin
        clientId="67682372412-o04q4pmnj9cufpdne7jvt9hlf45nef0u.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogleFailed}
        cookiePolicy="single_host_origin"
      />
      {
        error ? (<div> Something Went Wrong! Try again. </div>) : <></>
      }
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
