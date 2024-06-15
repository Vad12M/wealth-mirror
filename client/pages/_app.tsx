import "../styles/globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Provider } from "react-redux";
import store from "@/store";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import('@/components/custom-cursor/CustomCursor'), { ssr: false });

export default function App({ Component, pageProps }: any) {
  return (
    <div id={"global-root"}>
      <div id={"app-root"} className={"flex flex-col min-h-screen"}>
        <Provider store={store}>
          <Header/>
          <div className={"flex justify-center"}>
            {(Component.getLayout || ((page: any) => page))(<Component {...pageProps} />)}
            <CustomCursor/>
          </div>
          <Footer/>
        </Provider>
      </div>
    </div>
  );
}
