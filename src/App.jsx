import {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route, useParams,
} from "react-router-dom";
import background from './assets/background.svg';
import logo from './assets/logo.svg';
import ru from './assets/ru.svg';
import en from './assets/en.svg';
import './App.css';

export default function App() {
  const [isShown, show] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      show(true);
    }, 700)
  }, []);

  if (!isShown) {
    return null;
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/covid-cert/status/:id" element={<Vaccine />} />
        </Routes>
      </BrowserRouter>
  )
}


function Vaccine() {
  const params = useParams();
  const isArina = params.id === '967e2a78-98d9-4b86-851f-4de3c94c936b'
  const isMe = params.id === '345e2a78-45d9-4b86-861f-5dq65sdl234'

  const [language, setLanguage] = useState('ru');

  if (!isMe && !isArina) return null;

  const data = {
    validUntil: isArina ? '24.12.2022' : '16.11.2022',
    id: isArina ? '1000 3469 1524 0352' : '3861 5890 1840 4839',
    name: isArina
        ? language === 'ru' ? 'Б*** А*** В***' : 'B*** А*** V***'
        : language === 'ru' ? 'Ф*** А*** К***' : 'F*** A*** K***',
    dateOfBirth: isArina ? '04.12.1994' : '15.06.1995',
    passport: isArina ? '29** ***930' : '45** ***283',
  }

  return (
      <div className="vaccine-result">
        <div className="wrapper">
          <div className="logo-wrapper">
            <a href="https://www.gosuslugi.ru">
              <img src={logo} className="logo" alt="React logo" />
            </a>
          </div>

          <div className="button-wrapper" onClick={() => setLanguage(lang => lang === 'ru' ? 'en' : 'ru')}>
            <div className="lang-image">
              <img src={language === 'ru'?  ru : en} className=".logo" alt="React logo" />
            </div>
            <div className="lang-label">{language === 'ru' ? 'RUS' : 'ENG'}</div>
          </div>
        </div>

        <div className="certificate-container">
          <img src={background} alt={'bg'}/>
          <div className="status-container-inner">
            <h4 className="title">{language === 'ru' ? 'Сертификат COVID-19' : 'COVID-19 certificate'}</h4>
            <div className="available-till-wrapper">
              <span className="available-till">{language === 'ru' ? `Действителен до ${data.validUntil}` : `Valid until ${data.validUntil}`}</span>
            </div>
            <h4 className="cert-id-block">№ {data.id}</h4>
          </div>
        </div>

        <div className="person-data">
          <div className="full-name">{data.name}</div>

          <div className="birth-date">
            <div className="label">{language === 'ru' ? 'Дата рождения:' : 'Date of birth:'}</div>
            <div className="value">{data.dateOfBirth}</div>
          </div>

          <div className="passport">
            <div className="label">{language === 'ru' ? 'Паспорт:' : 'National passport'}</div>
            <div className="value">{data.passport}</div>
          </div>
        </div>

        <div className="close-button">
          <a href="https://www.gosuslugi.ru/" className="button">
            {language === 'ru' ? 'Закрыть' : 'Close'}
          </a>
        </div>
      </div>
  );
}
