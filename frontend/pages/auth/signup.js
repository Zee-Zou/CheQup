import React from 'react';
import SuperTokens from 'supertokens-auth-react';
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword';

SuperTokens.init();

function SignUp() {
    return (
        <div>
            <h1>Sign Up for CheQup</h1>
            <ThirdPartyEmailPassword.SignInAndUp />
        </div>
    );
}

export default SignUp;
