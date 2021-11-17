import { Provider } from "next-auth/client";
import "tailwindcss/tailwind.css";
import "../style.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
