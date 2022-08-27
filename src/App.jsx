import { useState } from 'react';
import background from './assets/background.svg';
import logo from './assets/logo.svg';
import ru from './assets/ru.svg';
import './App.css';

export default function App() {
  const [language, setLanguage] = useState('ru');

  return (
    <div className="vaccine-result">
      <div className="wrapper">
        <div className="logo-wrapper">
          <a href="https://www.gosuslugi.ru">
            <img src={logo} className="logo" alt="React logo" />
          </a>
        </div>

        <div className="button-wrapper">
          <div className="lang-image">
            <img src={ru} className=".logo" alt="React logo" />
          </div>
          <div className="lang-label">RUS</div>
        </div>
      </div>

      <div className="certificate-container">
        <img src={background} />
        <div class="status-container-inner">
          <h4 class="title">Сертификат COVID-19</h4>
          <div class="available-till-wrapper">
            <span class="available-till">Действителен до 17.01.2023</span>
          </div>
          <h4 class="cert-id-block">№ 1000 3469 1524 0352</h4>
        </div>
      </div>

      <div class="person-data">
        <div class="full-name">Б*** А*** В***</div>

        <div class="birth-date">
          <div class="label">Дата рождения:</div>
          <div class="value">04.12.1994</div>
        </div>

        <div class="passport">
          <div class="label">Паспорт:</div>
          <div class="value">45** ***279</div>
        </div>
      </div>

      <div class="close-button">
        <a href="/" class="button">
          Закрыть
        </a>
      </div>
    </div>
  );
}
