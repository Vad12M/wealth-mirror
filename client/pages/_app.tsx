import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store";
import dynamic from "next/dynamic";
import ErrorBoundary from "@/components/ErrorBoundary";
import JoinWaitlistFooter from "@/components/join-waitlist/JoinWaitlistFooter";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CustomCursor = dynamic(() => import('@/components/custom-cursor/CustomCursor'), { ssr: false });
const Header = dynamic(() => import('@/components/layouts/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/layouts/Footer'), { ssr: false });

export default function App({ Component, pageProps }: any) {

  return (
    <div id={"global-root"}>
      <div id={"app-root"} className={"flex flex-col min-h-screen"}>
        <Provider store={store}>
          <GoogleOAuthProvider clientId={'789657400021-8c0cq6pqbis2h2fc2d9f2e11i7sielau.apps.googleusercontent.com'}>
            <ErrorBoundary><Header/></ErrorBoundary>
            <ErrorBoundary>
              <div className={"flex justify-center"}>
                {(Component.getLayout || ((page: any) => page))(<Component {...pageProps} />)}
                <CustomCursor/>
              </div>
            </ErrorBoundary>
            {/*<ErrorBoundary><Footer/></ErrorBoundary>*/}
            <div className="fixed-container mx-auto z-10">
              <JoinWaitlistFooter/>
            </div>
          </GoogleOAuthProvider>
        </Provider>
      </div>
    </div>
  );
}
