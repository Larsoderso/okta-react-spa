
import React from 'react';
import { useOktaAuth } from '@okta/okta-react';


const Home = () => {
  const { authState } = useOktaAuth();

  return (
    authState.isAuthenticated ? <p>Welcome! Click the profile button on the navBar to view your profile and some details returned by Okta!</p> : <p>This is the landing page of our tiny app.</p>
  )
}

export default Home