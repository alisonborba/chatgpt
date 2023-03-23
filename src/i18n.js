import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

i18next
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    title: 'Ask a question to a Master',
                    subtitle: 'Choose one and make any question',
                    hello1: 'Hello! I am',
                    hello2: 'ask me anything.',
                    warningMessage: '*** This project is just a study case, the information are provided by ChatGPT (IA) ***.',
                    chatPlaceholder: 'Type here anything you want to know about'
                }
            },
            pt: {
                translation: {
                    title: 'Pergunte aos mestres',
                    subtitle: 'Escolha um e faça qualquer pergunta',
                    hello1: 'Olá! Sou',
                    hello2: 'pergunte-me o que quiser.',
                    warningMessage: '***Está aplicação é apenas um estudo de caso, as informações são providas atravez do ChatGPT (Inteligência artificial).***',
                    chatPlaceholder: 'Escreva aqui qualquer coisa que queira saber sobre'
                }
            }
        }
    })