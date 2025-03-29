// frontend/src/components/Chat.js
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [user] = useState("User" + Math.floor(Math.random() * 100));

  // Fetch past messages
  useEffect(() => {
    axios.get("http://localhost:5000/chat").then((res) => setMessages(res.data));
  }, []);

  // Receive new messages
  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("message");
  }, []);

  // Send message
  const sendMessage = () => {
    if (text.trim()) {
      const msg = { user, message: text };
      socket.emit("message", msg);
      setText("");
    }
  };

  return (
    <div>
      <h2>Chat App</h2>
      <div style={{ height: "200px", overflowY: "scroll", border: "1px solid gray", padding: "10px" }}>
        {messages.map((msg, index) => (
          <p key={index}><strong>{msg.user}:</strong> {msg.message}</p>
        ))}
      </div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message" />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
