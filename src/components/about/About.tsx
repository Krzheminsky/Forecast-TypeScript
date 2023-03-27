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
            <p>З повагою та надією на розуміння, автор - Віктор Кржемінський. <a href="mailto:krzheminsky@ukr.net">krzheminsky@ukr.net</a> </p>
            <h5 className="about-h3">Все буде Україна! </h5>
        </div >
    )
}

export default About;