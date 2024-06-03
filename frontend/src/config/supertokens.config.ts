import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import Session from "supertokens-auth-react/recipe/session";
import SuperTokens from 'supertokens-auth-react';

SuperTokens.init({
  appInfo: {
    appName: 'CheQup',
    apiDomain: 'http://localhost:3000',
    websiteDomain: 'http://localhost:3000',
    apiBasePath: '/api/auth',
    websiteBasePath: '/auth',
  },
  recipeList: [
    ThirdPartyEmailPassword.init(), // Ensure this method returns a RecipeListFunction
    Session.init(), // Provide the required configuration object as an argument
  ],
});
