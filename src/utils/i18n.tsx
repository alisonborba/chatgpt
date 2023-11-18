import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Lang } from "./index";

i18n.use(initReactI18next).init({
  fallbackLng: Lang.EN,
  resources: {
    pt: {
      translation: {
        title: "Pergunte aos mestres",
        subtitle: "Escolha um e faça qualquer pergunta",
        hello1: "Olá! Sou",
        hello2: "pergunte-me o que quiser.",
        warningMessage:
          "***Está aplicação é apenas um experimento, as informações são providas atravez do ChatGPT (Inteligência artificial).***",
        chatPlaceholder: "Escreva aqui qualquer coisa que queira saber sobre",
        //  Content
        freud: "Sigmund Freud",
        freudDesc:
          "Neurologista, psiquiatra austríaco, criador da psicanálise e a personalidade mais influente da história no campo da psicologia. A influência dele pode ser observada hoje na cultura popular.",
        "mother teresa": "Madre Teresa de Calcutá",
        "mother teresaDesc":
          "Religiosa católica de etnia albanesa naturalizada indiana, fundadora da congregação das Missionárias da Caridade, cujo carisma é o serviço aos mais pobres por meio da vivência do Evangelho de Jesus Cristo.",
        shakespeare: "William Shakespeare",
        shakespeareDesc:
          "Poeta, dramaturgo e ator inglês, tido como o maior escritor do idioma inglês e o mais influente dramaturgo do mundo. Seus textos e temas permanecem vivos até hoje no teatro, televisão, cinema e literatura.",
        nietzsche: "Friedrich Wilhelm Nietzsche",
        nietzscheDesc:
          "Filósofo, crítico cultural, poeta, compositor e Alemão. Escreveu vários textos criticando a religião, a moral, a cultura contemporânea, filosofia e ciência.",
        plato: "Arístocles (Platão)",
        platoDesc:
          "Filósofo e matemático grego, autor de diversos diálogos filosóficos e fundador da Academia em Atenas, a primeira instituição de educação superior do mundo ocidental.",
        "julius caesar": "Imperador Júlio Cesar",
        "julius caesarDesc":
          "Líder militar e político romano. Desempenhou um papel crítico na transformação da república Romana para império. É considerado um dos maiores militares da história.",
        buddha: "Sidarta Gautama (Buda)",
        buddhaDesc:
          "Príncipe de uma região no sul do atual Nepal que renunciou o trono, se dedicou à busca da erradicação do sofrimento humano, se tornou mestre ou professor espiritual, fundando o budismo.",
      },
    },
    en: {
      translation: {
        title: "Ask the Masters",
        subtitle: "Choose one and make any question",
        hello1: "Hello! I am",
        hello2: "ask me anything.",
        warningMessage:
          "*** This project is just a experimental case, the information are provided by ChatGPT (IA) ***.",
        chatPlaceholder: "Type here anything you want to know about",
        //  Content
        freud: "Sigmund Freud",
        freudDesc:
          "Neurologist and the founder of psychoanalysis, a clinical method for evaluating and treating pathologies seen as originating from conflicts in the psyche, between patient and psychoanalyst.",
        "mother teresa": "Mother Teresa of Calcutta",
        "mother teresaDesc":
          "Mother Teresa, was an Albanian-Indian Catholic nun who founded the Missionaries of Charity. Saint Teresa of Calcutta was canonised on 4 September 2016. The anniversary of her death is her feast day.",
        shakespeare: "William Shakespeare",
        shakespeareDesc:
          "William Shakespeare was an English playwright, poet and actor. He is widely regarded as the greatest writer in the English language and the world is pre-eminent dramatist.",
        nietzsche: "Friedrich Wilhelm Nietzsche",
        nietzscheDesc:
          "German philosopher, prose poet, cultural critic, philologist, and composer whose work has exerted a profound influence on contemporary philosophy.",
        plato: "Aristocles (Plato)",
        platoDesc:
          "Greek philosopher. Plato founded the Academy, a philosophical school where he taught the philosophical doctrines that would later became known as Platonism.",
        "julius caesar": "Emperor Julius Caesar",
        "julius caesarDesc":
          "Gaius Julius Caesar was a Roman general and statesman. He played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire.",
        buddha: "Siddhartha Gautama (Buddha)",
        buddhaDesc:
          "Siddhartha Gautama, most commonly referred to as the Buddha, was a wandering ascetic and religious teacher who lived in South Asia during the 6th or 5th century BCE and founded Buddhism.",
      },
    },
  },
});
