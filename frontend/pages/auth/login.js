import React from 'react';
import SuperTokens from 'supertokens-auth-react';
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword';

SuperTokens.init();

function Login() {
    return (
        <div>
            <h1>Login to CheQup</h1>
            <ThirdPartyEmailPassword.SignInAndUp />
        </div>
    );
}

export default Login;
