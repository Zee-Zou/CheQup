import {
  init,
  ThirdPartyEmailPasswordNode,
  SessionNode,
} from 'supertokens-node';

export let backendConfig = () => {
  return {
    framework: 'express',
    supertokens: {
      connectionURI: 'https://try.supertokens.io',
    },
    appInfo: {
      appName: 'CheQup',
      apiDomain: 'http://localhost:3000',
      websiteDomain: 'http://localhost:3000',
      apiBasePath: '/api/auth',
      websiteBasePath: '/auth',
    },
    recipeList: [ThirdPartyEmailPasswordNode.init(), SessionNode.init()],
  };
};

init(backendConfig());
