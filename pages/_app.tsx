import "../styles/globals.css";

const LogRocket = require("logrocket");
const setupLogRocketReact = require("logrocket-react");

// only initialize when in the browser
if (typeof window !== "undefined") {
  LogRocket.init("dannyaziz/wherecanitravelto");
  // plugins should also only be initialized when in the browser
  setupLogRocketReact(LogRocket);
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
