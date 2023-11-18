import { useState } from "react";
import "./utils/App.css";
import { IconButton } from "@mui/material";
import Chat from "./components/Chat.js";
import "./utils/i18n.js";
import { Lang, Person } from "./utils/index";
import CharacterSelect from "./components/CharacterSelect.js";
import { useTranslation } from "react-i18next";

function App() {
  const [person, setPerson] = useState<Person | null>(null);
  const [lang, setLang] = useState<string>("pt");
  const { i18n } = useTranslation();

  return (
    <>
      <div className="top-i18n-btn">
        <IconButton
          title={`Translate to ${lang}`}
          onClick={() => {
            setLang(lang === Lang.PT ? Lang.EN : Lang.PT);
            i18n.changeLanguage(lang);
          }}
        >
          {<img width="30px" src={`${lang}.png`} alt="languages-flag" />}
        </IconButton>
      </div>
      {!person && <CharacterSelect select={(p: Person) => setPerson(p)} />}
      {person && <Chat person={person} clearPerson={() => setPerson(null)} />}
    </>
  );
}

export default App;
