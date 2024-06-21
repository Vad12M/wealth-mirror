import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store";
import dynamic from "next/dynamic";
import ErrorBoundary from "@/components/ErrorBoundary";

const CustomCursor = dynamic(() => import('@/components/custom-cursor/CustomCursor'), { ssr: false });
const Header = dynamic(() => import('@/components/layouts/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/layouts/Footer'), { ssr: false });

export default function App({ Component, pageProps }: any) {
  return (
    <div id={"global-root"}>
      <div id={"app-root"} className={"flex flex-col min-h-screen"}>
        <Provider store={store}>
          <ErrorBoundary><Header/></ErrorBoundary>
          <ErrorBoundary>
            <div className={"flex justify-center"}>
              {(Component.getLayout || ((page: any) => page))(<Component {...pageProps} />)}
              <CustomCursor/>
            </div>
          </ErrorBoundary>
          <ErrorBoundary><Footer/></ErrorBoundary>
        </Provider>
      </div>
    </div>
  );
}
