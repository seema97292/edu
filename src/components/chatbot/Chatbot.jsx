
import { useEffect } from "react";

function ChatbaseWidget() {
  useEffect(() => {
    const existingScript = document.getElementById("vGW30xR2qvvJwQdiCw4Jz");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "vGW30xR2qvvJwQdiCw4Jz"; 
      document.body.appendChild(script);
    }
  }, []);

  return null;
}

export default ChatbaseWidget;
