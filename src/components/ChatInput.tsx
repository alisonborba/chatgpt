import { useState } from "react";
import { IconButton, OutlinedInput } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface ChatInputProps {
  placeholder: string;
  sendMessage: (arg: string) => void;
}

export const ChatInput = ({ placeholder, sendMessage }: ChatInputProps) => {
  const [text, setText] = useState("");

  return (
    <OutlinedInput
      className="dialog-input"
      placeholder={placeholder}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault(); // Prevent insert "enter key"
          if (e.target instanceof HTMLInputElement) {
            sendMessage(e.target.value);
          }
          setText("");
        }
      }}
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
