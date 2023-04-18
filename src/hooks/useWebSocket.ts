import { useEffect, useState } from "react";

export function useWebSocket() {
  const [webSocket, setWebSocket] = useState<WebSocket>();

  useEffect(() => {
    const webSocket = new WebSocket(import.meta.env.VITE_WEB_SOCKET);

    webSocket.onopen = () => {
      console.debug("Connected to websocket");
      setWebSocket(webSocket);
    };

    webSocket.onmessage = (message) => {
      console.debug(Date.now(), JSON.parse(message.data));
    };

    return () => webSocket.close();
  }, []);

  return { webSocket };
}
