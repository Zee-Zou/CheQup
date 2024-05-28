import React from 'react';
import App from 'next/app';
import SuperTokensReact from 'supertokens-auth-react';
import Session from 'supertokens-auth-react/recipe/session';
import { useRouter } from 'next/router';
import { redirectToAuth } from 'supertokens-auth-react/recipe/thirdpartyemailpassword';

SuperTokensReact.init();

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    React.useEffect(() => {
        async function doRefresh() {
            if (await Session.doesSessionExist()) {
                // Refresh session if necessary
                await Session.refreshSession();
            }
        }
        doRefresh();
    }, []);

    if (router.pathname.startsWith("/auth") && Session.doesSessionExist()) {
        router.push("/");
        return null;
    }

    if (!router.pathname.startsWith("/auth") && !Session.doesSessionExist()) {
        redirectToAuth();
        return null;
    }

    return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
}

export default MyApp;
