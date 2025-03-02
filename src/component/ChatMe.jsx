import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { text: "Hello!", sender: "other", time: "10:30 AM" },
    { text: "Hey! How are you?", sender: "me", time: "10:32 AM" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      const newMessage = { text: input, sender: "me", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      setMessages([...messages, newMessage]);
      setInput("");
      
      // Simulating response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "I'm good!", sender: "other", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      }, 1000);
    }
  };


  

  return (
    <div className="flex flex-col mt-10 h-[400px] sm:h-[500px] w-full max-w-md mx-auto border rounded-xl shadow-lg bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-xs p-2 rounded-lg ${msg.sender === "me" ? "bg-green-500 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg" : "bg-white text-black border"}`}>
              <p>{msg.text}</p>
              <p className="text-xs text-gray-200 text-right mt-1">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center p-2 border-t bg-white">
        <input
          type="text"
          className="flex-1 p-2 border rounded-full focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="ml-2 p-2 bg-green-500 text-white rounded-full" onClick={sendMessage}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
