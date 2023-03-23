import * as React from 'react';
import { useState } from "react";
import { IconButton} from '@mui/material';
import { useTranslation } from 'react-i18next';

import './i18n'
import "./App.css";
import Chat from './Chat.js';
import CharacterSelect from './CharacterSelect.js';

function App() {
  const [person, setPerson] = useState();
	const [lang, setLang] = useState('pt');
  const { i18n } = useTranslation();

  return (
    <div className="App">
        <div style={{position: 'absolute', top: '15px', right: '15px' }}>
          <IconButton onClick={() => {
              setLang(lang === 'pt' ? 'en' : 'pt')
              i18n.changeLanguage(lang === 'pt' ? 'pt' : 'en')
              }}>
            {<img width='30px' src={lang === 'pt' ? 'brasil.png': 'english.png'} alt="languages-flag"/>}
          </IconButton>
        </div>

        {!person && <CharacterSelect select={(c) => setPerson(c)}/> }
        {person && <Chat person={person} clearPerson={() => setPerson(null)}/> }
    </div>
  );
}

export default App;
