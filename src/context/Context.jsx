import { createContext, useEffect, useState } from "react";
import main from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData(prev => prev + nextWord)
    }, 75*index)
  }

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  }

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    
    let response;
    if (prompt !== undefined) {
      response = await main(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompt(prev => [...prev, input])
      setRecentPrompt(input);
      response = await main(input);
    }

    let responseArray = response.split("**");
    let newResponse = "";
    // mkaing text bold for the ** 
    for (let i = 0;i < responseArray.length;i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>"+responseArray[i]+"</b>";
      }
    }
      
    // making one line with the single star
    let newResponse2 = newResponse.split("*").join("</br>");

    // typing effect
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0;i < newResponseArray.length;i++) {
      const nextWrod = newResponseArray[i];
      delayPara(i, nextWrod + " ");
    }
    
    setLoading(false);
    setInput("");

  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  }

  useEffect(() => {
  }, []);

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

