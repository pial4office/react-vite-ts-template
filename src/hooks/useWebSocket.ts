import { useEffect, useState } from "react";

export function useWebSocket() {
  const [webSocket, setWebSocket] = useState<WebSocket>();

  useEffect(() => {
    const webSocket = new WebSocket(import.meta.env.VITE_WEB_SOCKET);

    webSocket.onopen = function (this, event) {
      console.debug("Connected to websocket");
      console.debug(this);
      console.debug(event);
      setWebSocket(webSocket);
    };

    webSocket.onmessage = (message) => {
      console.debug(Date(), message.data);
    };

    return () => webSocket.close();
  }, []);

  return { webSocket };
}
