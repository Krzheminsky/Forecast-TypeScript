import React, { Component } from "react";

const Application: React.FC = () => {

    return (
        <div className="how">
            <h6 className="about-h3">Завантажуйте мобільний додаток! </h6>

            <p>До Вашої уваги мобільний застосунок Forecast, <a href="http://forecast.inf.ua/app-release.apk" download="" title="Завантажити мобільний застосунок Forecast">завантажуйте будь ласка.</a> Цей застосунок сторено під платформу Android.</p>

            <p>Але, оскільки я не реєстрував його у Play Market, то Google Play при завантаженні на телефон каже, що це - небезпечний додаток, і він заблокований.</p>
            <p>Якщо на то Ваша воля, можете натиснути "Докладніше" і далі - "Усе одно установити". Далі, Google Play запропонує надіслати додаток на перевірку безпеки. Тут - Ваш вибір. Я не надсилав і не знаю, скільки ця перевірка буде тривати:-)</p>
            <p> У використанні застосунок дуже простий:
                <li>заповнюємо показники на вкладці "Вихідні дані";</li>
                <li>дивимося на результати розрахунків у одноіменній вкладці та натискаємо "Клацніть, щоб нанести показники на мапу";</li>
                <li>переходимо до мапи та вибираємо (клацаємо пальцем) на місце аварії. Хоча це можно зробити і на початку :-)</li>
                <li>якщо потрібно, розраховуємо можливі втрати у відповідних вкладках.</li></p>
            <p>При бажанні, Ви ще зможете знайти деякі цікавинки.</p>
            <p>Якщо у Вас є які-небудь пропозиції по удосконаленню цього застосунку, будь ласка, не соромтесь, пишіть на <a href="mailto:krzheminsky@ukr.net">krzheminsky@ukr.net</a></p>
            <h5 className="about-h3">Все буде Україна! </h5>
        </div >
    );
}

export default Application