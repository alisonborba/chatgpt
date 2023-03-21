import { useState } from "react";
import { CircularProgress, Grid, IconButton, OutlinedInput, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import speak from './speechService';
import chatgptApi from './chatgptService';

export default function Chat({person, clearPerson}) {
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');
    const [dialog, setDialog] = useState([]);

    const sendMessage = async (_text) => {
        setDialog((dialog) => [...dialog, {user: 1, text: _text}]);
        setText('');
        setLoading(true);

        // Initializing the speech component before use it
        // It's necessary to mobile (iOS, not sure android)
        speak('pt-BR', '')

        const apiResponse = await chatgptApi(_text, person.nickname);

        if (apiResponse) {
            setDialog((dialog) => [...dialog, {user: 0, text: apiResponse.choices[0].text}]);
            speak('pt-BR', apiResponse.choices[0].text)
            setLoading(false);
        }
    };

    const keyPress = (e) => {
        if (e.keyCode === 13) {
            setText(e.target.value);
            sendMessage(e.target.value);
        }
    };

    return <div style={{
            width: '100%',
            height: '100%',
            position: 'fixed',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `linear-gradient(to bottom, rgba(40, 44, 53, 0.9), rgba(40, 44, 53, 0.9)), url(${person.img})`,
            }}
        >
        <Grid item sx={{position: 'fixed', top: '0', width: '100%', zIndex: 9, background: '#3c568a'}}>
            <Grid container justifyContent="center">
                <Grid sx={{position: 'absolute', left: 0, top: 0}} onClick={() => clearPerson()}>
                    <ArrowBackIcon sx={{color: 'white', m: '15px'}}/>
                </Grid>
                <Grid>
                    <Typography
                        sx={{p: 1}}
                        variant='h5'
                        color={'white'}
                        onClick={() => speak('pt-BR', `Olá! Sou ${person.nickname}, pergunte-me o que quiser.`)}>
                        {person.nickname}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid sx={{position: 'fixed', bottom: '0', width: '100%'}}>
            {dialog.map((d, i) =>
                <div style={{ display: 'inline-block', width: '100%'}} key={i}>
                    <Grid
                        sx={{
                            background: d?.user ? 'white' : '#3c568a',
                            color: d?.user ? 'black' : 'white',
                            float: d?.user ? 'right' : 'left',
                            width: 'auto',
                            maxWidth: '300px',
                            textAlign: 'justify',
                            borderRadius: '10px',
                            m: '5px 15px',
                            p: 2
                        }}>
                        {d.text}
                    </Grid>
                </div>
            )}
            {loading && <Grid container justifyContent="center"><CircularProgress /></Grid>}
            <OutlinedInput
                sx={{color: 'white', border: '3px solid white', width: 'calc(100% - 30px)', m: '15px'}}
                placeholder={`Escreva aqui qualquer coisa que queira saber sobre ${person.nickname}...`}
                onKeyDown={(e) => keyPress(e)}
                type="text"
                value={text}
                multiline
                onChange={(e) => {
                    setText(e.target.value);
                }}
                endAdornment={
                    <IconButton onClick={() => { sendMessage(text) }}>
                        <SendIcon sx={{color: 'white'}}/>
                    </IconButton>
                }
            />
        </Grid>
    </div>
}
