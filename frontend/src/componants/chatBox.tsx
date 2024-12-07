import { useState } from "react"
import useWebSocket from "react-use-websocket"
function ChatBox() {
  const [ sendMessage, lastMessage, readyState ] = useWebSocket("localhost:3000");

  return (
    <div>
      
    </div>
  )
}


export default ChatBox
