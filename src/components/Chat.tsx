import { useState } from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTranslation } from "react-i18next";

import speak from "../services/speechService";
import chatgptApi from "../services/chatgptService";
import { ChatInput } from "./ChatInput";
import { Dialog, Person, langs } from "../utils/index";

interface ChatProps {
  person: Person;
  clearPerson: () => void;
}

export default function Chat({ person, clearPerson }: ChatProps) {
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState<Dialog[]>([]);
  const { t, i18n } = useTranslation();

  const lang = langs.find((l) => l.id === i18n.language) || langs[0];

  const sendMessage = async (_text: string) => {
    setDialog((dialog) => [...dialog, { user: 1, text: _text }]);
    setLoading(true);

    // Initializing the speech component before use it
    // It's necessary to mobile (iOS, not sure about android)
    speak(lang.locale, "");

    const apiResponse = await chatgptApi(_text, person.nickname, lang.label);

    if (apiResponse) {
      const respText = apiResponse.choices[0]?.text;
      setDialog((dialog) => [...dialog, { user: 0, text: respText }]);
      speak(lang.locale, respText);
    } else {
      setDialog((dialog) => [
        ...dialog,
        { user: 0, text: "Something went wrong" },
      ]);
    }
    setLoading(false);
  };

  return (
    <Box
      className="chat-backdrop"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(40, 44, 53, 0.9), rgba(40, 44, 53, 0.9)), url(${person.img})`,
      }}
    >
      <Box className="chat-top-bar">
        <Grid container justifyContent="center">
          <Grid className="chat-top-back-btn" onClick={() => clearPerson()}>
            <ArrowBackIcon
              sx={{ color: "white", m: "15px", cursor: "pointer" }}
            />
          </Grid>
          <Grid>
            <Typography
              variant="h5"
              className="chat-top-title"
              onClick={() =>
                speak(
                  lang.locale,
                  `${t("hello1")} ${person.nickname}, ${t("hello2")}`
                )
              }
            >
              {t(person.nickname)}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ position: "fixed", bottom: 0, width: "100%" }}>
        {dialog.map((d, i) => (
          <Box style={{ display: "inline-block", width: "100%" }} key={i}>
            <Box className={`dialog-message ${d?.user ? "user" : "ai"}`}>
              {d.text}
            </Box>
          </Box>
        ))}
        {loading && (
          <Grid container justifyContent="center">
            <CircularProgress />
          </Grid>
        )}
        <ChatInput
          placeholder={`${t("chatPlaceholder")} ${t(person.nickname)}...`}
          sendMessage={sendMessage}
        />
      </Box>
    </Box>
  );
}
