import React, {useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {GoogleLogin} from 'react-google-login';
import './Login.css';

function pass() {}
export function Login(props) {
  const [error, seterror] = useState(false);

  function responseGoogle(res) {
    let profile = res.profileObj;
    props.function(profile.name);
    // props.setmail(profile.email); // to set email
    // props.setimg_url(profile.imageUrl); // to set image url
    console.log(profile.name);
  }
  function responseGoogleFailed(){
    seterror(true);
  }

  return (
    <div>
      <h1>Book Busters</h1>
      <h2>
        No Longer Need That One Book?
      </h2>
      <h3>Book Busters has you covered! We are a customer satisfaction driven team. 
        We make it easier for NJIT students to sell and buy books with other 
        students. 
      </h3>
      <h4>
        Meet the Team!
      </h4>
      <h5>
        We are all Computer Science Majors in our senior year at NJIT
      </h5>
      <h6>
      Descartes Duval-Autus &emsp; Julio Rojas &emsp; Mohammad Khan &emsp; Jerard Dayanghirang Guevarra                
      </h6>
      <div className="google">
      <GoogleLogin
          clientId="705923672079-it54j78or9bfmmk9imbumuj4gh48sm1t.apps.googleusercontent.com" 
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogleFailed}
          cookiePolicy={'single_host_origin'}
      />
      </div>
      {
        error?(<div> Something Went Wrong! Try again. </div> ) : <></>
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
