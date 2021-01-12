import '../styles/globals.css';
import '../styles/scss/global.scss';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import withRedux from 'next-redux-wrapper';
import { withRouter } from 'next/router';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';

import NProgress from 'nprogress';
import Head from 'next/head';
import Router from 'next/router';

Router.onRouteChangeStart = (url) => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout || MainLayout;
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
export default wrapper.withRedux(MyApp);
