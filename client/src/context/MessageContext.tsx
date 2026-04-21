import { createContext, useContext, type ReactNode, useState } from "react";

interface MessageContextType {
  message: string;
  setMessage: (message: string) => void;
}

const MessageContext = createContext<MessageContextType | null>(null);

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string>("");
  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageContext = () => {
  const context = useContext(MessageContext);

  if (!context) {
    throw new Error("useMessageContext must be used within MessageProvider");
  }

  return context;
};
