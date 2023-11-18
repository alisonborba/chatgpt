import { useState } from "react";
import { IconButton, OutlinedInput } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface ChatInputProps {
  placeholder: string;
  sendMessage: (arg: string) => void;
}

export const ChatInput = ({ placeholder, sendMessage }: ChatInputProps) => {
  const [text, setText] = useState("");

  const keyPress = (e: KeyboardEvent) => {
    // Get enter key and submit the message
    if (e.key === "Enter") {
      const text = (e.target as HTMLInputElement).value;
      e.preventDefault(); //prevent insert "enter key"
      sendMessage(text);
      setText("");
    }
  };

  return (
    <OutlinedInput
      className="dialog-input"
      placeholder={placeholder}
      onKeyDown={(e) => keyPress(e)}
      type="text"
      value={text}
      multiline
      onChange={(e) => {
        setText(e.target.value);
      }}
      endAdornment={
        <IconButton
          onClick={() => {
            setText("");
            sendMessage(text);
          }}
        >
          <SendIcon sx={{ color: "white" }} />
        </IconButton>
      }
    />
  );
};
