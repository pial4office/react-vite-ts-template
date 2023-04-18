import { useEffect } from "react";
import { useWebSocket } from "./hooks";

function App() {
  const { webSocket } = useWebSocket();

  useEffect(() => {
    if (!webSocket) {
      return;
    }
    webSocket.send("Hi");
  }, [webSocket]);

  return <div className='App'></div>;
}

export default App;
