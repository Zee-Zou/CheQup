// pages/auth/logout.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SuperTokens from 'supertokens-auth-react';

function Logout() {
  const router = useRouter();

  useEffect(() => {
    async function handleLogout() {
      try {
        // Perform logout action (e.g., clear session)
        await SuperTokens.signOut();
        // Redirect to login page after logout
        router.push('/auth/login');
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }

    handleLogout();
  }, [router]);

  return <p>Logging out...</p>;
}

export default Logout;
