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
                <Route path="/covid-cert/status/:id" element={<Vaccine/>}/>
            </Routes>
        </BrowserRouter>
    )
}


function Vaccine() {
    const params = useParams();

    const [language, setLanguage] = useState('ru');

    const _data = {
        '967e2a78-98d9-4b86-851f-4de3c94c936b': {
            certificateId: '1000 3469 1524 0352',
            name: language === 'ru' ? 'Б*** А*** В***' : 'B*** А*** V***',
            dateOfBirth: '04.12.1994',
            validUntil: language === 'ru' ? 'Действителен до 24.12.2022' : 'Valid until 24.12.2022',
            passport: '29** ***930',
        },
        '345e2a78-45d9-4b86-861f-5dq65sdl234': {
            certificateId: '3861 5890 1840 4839',
            name: language === 'ru' ? 'Ф*** А*** К***' : 'F*** A*** K***',
            dateOfBirth: '15.06.1995',
            validUntil: language === 'ru' ? 'Действителен до 16.11.2022' : 'Valid until 16.11.2022',
            passport: '45** ***283',
        },
        '894e2a68-65d9-4b86-861f-543gjpdc936b': {
            certificateId: '1000 5843 5836 1098',
            name: language === 'ru' ? 'З*** А*** В***' : 'Z*** A*** V***',
            dateOfBirth: '27.07.1996',
            validUntil: language === 'ru' ? 'Действителен до 05.04.2023' : 'Valid until 05.04.2023',
            passport: '03** ***184',
        },
        '793e2a58-13d9-7b96-861f-5dq65sdl234': {
            certificateId: '1000 5784 4739 3659',
            name: language === 'ru' ? 'З*** С*** И***' : 'Z*** S*** I***',
            dateOfBirth: '12.12.1993',
            validUntil: language === 'ru' ? 'Действителен до 27.08.2023' : 'Valid until 27.08.2023',
            passport: '03** ***141',
        },
        '3277d0e3-4ea8-b9ea-78b0-5af0b07345f': {
            certificateId: '1000 5170 1808 5929',
            name: language === 'ru' ? 'В*** Ф*** И***' : 'V*** P*** I***',
            dateOfBirth: '01.05.1996',
            validUntil: language === 'ru' ? 'Действителен до 07.07.2023' : 'Valid until 07.07.2023',
            passport: '45** ***583',
        },
        '934e2a68-25d8-2b87-131d-3dq67sdl834': {
            certificateId: '1000 3785 0146 0059',
            name: language === 'ru' ? 'М*** Я*** А***' : 'M*** Y*** A***',
            dateOfBirth: '26.01.1997',
            validUntil: language === 'ru' ? 'Действителен до 27.11.2022' : 'Valid until 27.11.2022',
            passport: '03** ***229',
        },
    }

    if (!Object.keys(_data).includes(params.id)) return null;

    const {name, dateOfBirth, validUntil, passport, certificateId} = _data[params.id];


    return (
        <div className="vaccine-result">
            <div className="wrapper">
                <div className="logo-wrapper">
                    <a href="https://www.gosuslugi.ru">
                        <img src={logo} className="logo" alt="React logo"/>
                    </a>
                </div>

                <div className="button-wrapper" onClick={() => setLanguage(lang => lang === 'ru' ? 'en' : 'ru')}>
                    <div className="lang-image">
                        <img src={language === 'ru' ? ru : en} className=".logo" alt="React logo"/>
                    </div>
                    <div className="lang-label">{language === 'ru' ? 'RUS' : 'ENG'}</div>
                </div>
            </div>

            <div className="certificate-container">
                <img src={background} alt={'bg'}/>
                <div className="status-container-inner">
                    <h4 className="title">{language === 'ru' ? 'Сертификат COVID-19' : 'COVID-19 certificate'}</h4>
                    <div className="available-till-wrapper">
                        <span className="available-till">{validUntil}</span>
                    </div>
                    <h4 className="cert-id-block">№ {certificateId}</h4>
                </div>
            </div>

            <div className="person-data">
                <div className="full-name">{name}</div>

                <div className="birth-date">
                    <div className="label">{language === 'ru' ? 'Дата рождения:' : 'Date of birth:'}</div>
                    <div className="value">{dateOfBirth}</div>
                </div>

                <div className="passport">
                    <div className="label">{language === 'ru' ? 'Паспорт:' : 'National passport:'}</div>
                    <div className="value">{passport}</div>
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
