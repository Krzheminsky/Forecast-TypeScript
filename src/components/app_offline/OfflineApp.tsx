import React from "react";

const OfflineApp: React.FC = () => {

    return (
        <div className="off">
            <h6 className="about-h3">Завантажуйте мобільний додаток, який працює без інтернету! </h6>




            <p>До Вашої уваги мобільний застосунок Forecast Offline Sumy Region, який працює автономно, тобто без інтернету, <a href="http://forecast.inf.ua/app-release-sumy.apk" download="" title="Завантажити мобільний застосунок Forecast Offline">завантажуйте будь ласка.</a>   </p>

            <p>
                Цей застосунок сторено під платформу Android і призначено до застосування в умовах відсутності мобільного інтернету.
            </p>

            <p>
                До застосунку завантажено тайли мапи <span style={{ color: 'tomato', fontWeight: 600 }}>Сумської області</span> із рівнем деталізації від 7 до 13. Нажаль збільшення деталізації тягне за собою значне утяжеління застосунку:-(
            </p>
            <p> У використанні застосунок дуже простий:
                <li>заповнюємо показники на вкладці "Вихідні дані";</li>
                <li>дивимося на результати розрахунків у одноіменній вкладці та натискаємо "Клацніть, щоб нанести показники на мапу";</li>
                <li>переходимо до мапи та вибираємо (клацаємо пальцем) на місце аварії. Хоча це можно зробити і на початку :-)</li>
                <li>якщо потрібно, розраховуємо можливі втрати у відповідних вкладках.</li></p>
            <p>Якщо є бажання <span style={{ color: 'tomato', fontWeight: 600 }}>замовити</span> подібний застосунок із тайлами <span style={{ color: 'tomato', fontWeight: 600 }}>інших регіонів </span>, звертайтесь: <a href="mailto:krzheminsky@ukr.net">krzheminsky@ukr.net</a></p>
            <h5 className="about-h3">Все буде Україна! </h5>
        </div >
    );
}

export default OfflineApp