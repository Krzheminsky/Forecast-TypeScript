import React, { Component } from "react";
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about">
            <h5 className="about-h3">Слава Україні! Героям слава! </h5>
            <p>Шановні співвітчизники, доброго часу доби!</p>
            <p> Після видання МВС України наказу від 29.11.2019 № 1000 "Про затвердження Методики прогнозування наслідків виливу (викиду) небезпечних хімічних речовин під час аварій на хімічно небезпечних об’єктах і транспорті", і до цього часу в Українському інтернеті автор не знайшов жодного застосунку, який би міг допомогти чи то фахівцю, чи то пересічному громадянину оперативно розрахувати небезпеки, пов'язані із аваріями на хімічно-небезпечних об'єктах.</p>
            <p>Застосунок Forecast - розроблено з метою допомоги фахівцям з цивільного захисту та громадянам оперативно, швидко визначити основні загрози, які можуть виникнути при аваріях на ХНО, ураховуючи вищезгадану Методику.</p>
            <p>Автор наполягає, що засосунок Forecast НЕ Є ОФІЦІЙНИМ ДЖЕРЕЛОМ отримання розрахункових даних, а лише допомогає оперативно розрахувати та візуалізувати на карті місце та район аварії, глибину поширення первинної та вторинної хмар, площу ЗМХЗ. </p>
            <p>Для використання у офіційних документах розрахунків, щодо наслідків виливу (викиду) небезпечних хімічних речовин під час аварій на хімічно небезпечних об’єктах і транспорті, будь ласка, користуйтеся наказом МВС України від 29.11.2019 № 1000 "Про затвердження Методики...", також нагадую, що для визначення фактичної ЗХЗ отримані розрахункові дані уточнюються шляхом проведення хімічної розвідки.</p>

            <h5 className="about-h3">Як користуватися</h5>

            <p>Перед початком роботи зайдіть на головну сторінку з картою місцевості. Розрахунки треба розпочинати із заповнення вихідних даних: вибору хімічної речовини, ступені вертикальної стійкості, агрегатного стану та ін. Для коректної роботи застосунку, перед тим, як натиснути кнопку "Розрахувати" усі поля "Вихідних даних" повинні бути заповнені. Висота піддону повинна бути вказана 0 - якщо піддон, або обвалування відсутні. Не забудьте вказати напрямок вітру.</p>
            <p>Значення коефіцієнту впливу місцевості слід визначати виходячи із значення комплексного показника (додатки 5 та 6 методики). Зазвичай, для лісисто-степового виду рослинності та рівнинно-хвилястого виду рельєфу цей показник складає 0.5.</p>
            <p>Після заповнення полів у розділі "Вихідні дані" натисніть кнопку "Розрахувати". У розділі "Результати розрахунків" з'являться розрахункові дані. Також можна буде переглянути "Проміжні розрахунки" та "Довідкову інформацію про НХР".</p>
            <p>Далі - робота з картою. З допомогою "мишки" виберіть на карті місце виникнення аварії та натисніть ліву клавішу. На карті відобразяться ЗМХЗ та первинна і вторинна хмари. Якщо клікнути на них лівою кнопкою миші,  відобразяться основні розрахунки.</p>
            <p> Після накладання зон аварії на карту можна продовжити розрахунки щодо можливих втрат, заповнити відповідні форми у розділі "Для розрахунку можливих втрат" та натиснути "Розрахувати".</p>
            <p>Нагадую: </p>
            <ul>
                <li>
                    для використання у офіційних документах розрахунків, щодо наслідків виливу (викиду) небезпечних хімічних речовин під час аварій на хімічно небезпечних об’єктах і транспорті, будь ласка, користуйтеся наказом МВС України від 29.11.2019 № 1000 "Про затвердження Методики..."</li>
                <li>для визначення фактичної ЗХЗ отримані розрахункові дані уточнюються шляхом проведення хімічної розвідки.</li>
            </ul>
            <h5 className="about-h3">Що нового</h5>
            <h6>Додано розрахунок стану вертикальної стійкості повітря.</h6>
            <p>До розділу "Поточні метеодані" додано розрахунок стану вертикальної стійкості повітря (ВСП).</p>
            <p>ВСП прийнято визначати за допомогою термодинамічного критерію (відношення температурного градієнту у приземному шарі повітря до квадрату середньої швидкості повітря). Температурний градієнт - різниця температур повітря на висоті 50 та 200 сантиметрів. Метеосервер мав дані щодо температури на висоті 200 см та дані температури на поверхні грунту - ці температури й були ураховані при визначенні ВСП. У воєнно-хімічній метеорології прийняті такі граничні значення термодинамічного критерію для кожного стану ВСП:
                <li>меньше або дорівнює -0,1 - інверсія</li>
                <li>більше або дорівнює +0,1 - конвекція</li>
                <li>від -0,1 до +0,1 - ізотермія </li>
            </p>
            <h6>Додано визначення поточних метеоданих.</h6>
            <p>При виборі на мапі місця аварії спрацьовує запит до метеосервера (https://open-meteo.com/), який надсилає поточні показники температури повітря, швидкості та напрямку вітру. Після отримання поточних метеоданих доцільно (за Вашим бажанням :) відкоригувати ці показники у розділі "Вихідні дані", натиснувши кнопку "Внести метео" та ще раз натиснути кнопку "Розрахувати".</p>
            <h6>Додано шар "Розрахункова група" та інструменти (Polyline та Polygon) для визначення відстані та площі.</h6>
            <p>Ці інструменти потрібні для розрахунку можливих втрат населення.</p>
            <p>Як це працює:
                <li>Враховуючи, що ліва клавіша миші задіяна у побудові, визначенні місця та нанесення на мапу ЗМХЗ, доцільно використовувати ПРАВУ КЛАВІШУ МИШІ!</li>
                <li>Вибір інструменту (Polyline або Polygon) проводиться ЛІВОЮ КЛАВІШОЮ МИШІ, а нанесення на мапу - ПРАВОЮ КЛАВІШОЮ МИШІ (ну, так вийшло:-)</li>
                <li>При задіянні інструментів (Polyline або Polygon) висвітлюється меню: Finish (завершити), Delete Last Point (видалити останню точку) та Cansel (відмінити).
                    Доцільно їх використовувати для зазначених операцій.</li>
                <li>Результати вимірювань відстані та/або площі автоматично вносяться до розділу "Для розрахунку можливих втрат", також їх можна побачити внизу під мапою.</li>
            </p>
            <h6>Додано шар з GoogleMap та інструменти для роздрукування мапи або експорту до файлу PNG.</h6>
            <p>Якщо у Вас є які-небудь пропозиції по удосконаленню цього застосунку, будь ласка, не соромтесь, пишіть на <a href="mailto:krzheminsky@ukr.net">krzheminsky@ukr.net</a></p>
            <p>З повагою та надією на розуміння, автор - Віктор Кржемінський. </p>
            <h5 className="about-h3 bottom">Все буде Україна! </h5>
        </div >
    )
}

export default About;