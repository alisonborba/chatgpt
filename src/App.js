import * as React from 'react';
import { useState } from "react";
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Switch, IconButton} from '@mui/material';
import { ptBR, enUS } from '@mui/material/locale';


import "./App.css";
import CharacterSelect from './CharacterSelect.js';
import Chat from './Chat.js';

function App() {
  const [person, setPerson] = useState();
  const [locale, setLocale] = React.useState(ptBR);
	const [checked, setChecked] = React.useState(false);
	const theme = useTheme();
	const themeWithLocale = React.useMemo(
		() => createTheme(theme, locale),
		[theme, locale],
	);
  React.useEffect(() => {
		if (checked) {
			setLocale(enUS)
		} else {
			setLocale(ptBR)
		}
	}, [checked])

  return (
    <div className="App">
      <ThemeProvider theme={themeWithLocale}>
        <div style={{position: 'fixed', top: '0', right: '5px', zIndex: 999999}}>
          <IconButton onClick={() => {setChecked(checked => !checked)}}>
            {<img width='30px' src={locale === enUS ? 'english.png': 'brasil.png'} />}
          </IconButton>
        </div>

        {!person && <CharacterSelect select={(c) => setPerson(c)}/> }
        {person && <Chat person={person} clearPerson={() => setPerson(null)}/> }
		  </ThemeProvider>
    </div>
  );
}

export default App;
