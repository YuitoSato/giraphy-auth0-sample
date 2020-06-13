import React, { useEffect } from 'react';
import auth0Client from './Auth';
import { withRouter } from 'react-router';

const Callback = (props: any) => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    const f = async () => {
      await auth0Client.handleAuthentication();
      console.log(auth0Client.getIdToken());
      props.history.replace('/');
    };
    f();

  }, []);

  return (
    <p>Loading profile...</p>
  );
};

export default withRouter(Callback);
