import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddWeather.css';
import { useAppDispatch, useAppSelector } from '../../hook';
import { addVertical, addWindSpeed, addAirTemperature, addDirectionWind } from '../../store/cloudeSlice';

const AddWeather: React.FC = () => {
    const dispatch = useAppDispatch();

    const { status, error } = useAppSelector(state => state.cloud)
    const weather = useAppSelector(state => state.cloud.currentWeather);
    const { temperature, weathercode, winddirection, windspeed } = weather.current_weather;
    const currentTime = weather.current_weather.time;
    const { soil_temperature_0cm, temperature_2m, time } = weather.hourly;
    const currentHourly = time.indexOf(currentTime);
    const currentSoilTemperature = soil_temperature_0cm[currentHourly];
    const currentTemperature = temperature_2m[currentHourly];

    const currentWeather = () => {
        if (weathercode == 0) {
            return 'Чисте небо'
        }
        else if (weathercode == 1) {
            return 'Переважно ясно, мінлива хмарність'
        }
        else if (weathercode == 2) {
            return 'Переважно ясно, мінлива хмарність'
        }
        else if (weathercode == 3) {
            return 'Переважно ясно, мінлива хмарність'
        }
        else if (weathercode == 45) {
            return 'Туман'
        }
        else if (weathercode == 48) {
            return 'Паморозь'
        }
        else if (weathercode == 51) {
            return 'Мряка: легка інтенсивність'
        }
        else if (weathercode == 53) {
            return 'Мряка: помірна інтенсивність'
        }
        else if (weathercode == 55) {
            return 'Мряка: щільна інтенсивність'
        }
        else if (weathercode == 56) {
            return 'Крижана мряка: легка інтенсивність'
        }
        else if (weathercode == 57) {
            return 'Крижана мряка: щільна інтенсивність'
        }
        else if (weathercode == 61) {
            return 'Слабкий дощ'
        }
        else if (weathercode == 63) {
            return 'Помірний дощ'
        }
        else if (weathercode == 65) {
            return 'Сильний дощ'
        }
        else if (weathercode == 66) {
            return 'Крижаний дощ: легкий'
        }
        else if (weathercode == 67) {
            return 'Крижаний дощ: сильний'
        }
        else if (weathercode == 71) {
            return 'Снігопад: легкий'
        }
        else if (weathercode == 73) {
            return 'Снігопад: помірний'
        }
        else if (weathercode == 75) {
            return 'Снігопад: сильний'
        }
        else if (weathercode == 77) {
            return 'Снігові зерна'
        }
        else if (weathercode == 80) {
            return 'Зливи: слабкі'
        }
        else if (weathercode == 81) {
            return 'Зливи: помірні'
        }
        else if (weathercode == 82) {
            return 'Зливи: сильні'
        }
        else if (weathercode == 85) {
            return 'Слабкий сніг'
        }
        else if (weathercode == 86) {
            return 'Сильний сніг'
        }
        else if (weathercode == 95) {
            return 'Гроза: Слабка або помірна'
        }
        else if (weathercode == 96) {
            return 'Гроза зі слабким градомг'
        }
        else if (weathercode == 99) {
            return 'Гроза із сильним градом'
        } else {
            return 'Виберіть місце на мапі...'
        }
    }

    const verticalStability = () => {
        const vertStability = (currentSoilTemperature - currentTemperature) / (Math.pow((windspeed + 0.0001), 2))
        if (!vertStability) {
            return '';
        } else {
            if (vertStability >= 0.1) {
                return 'конвекція'
            }
            else if (vertStability <= -0.1) {
                return 'інверсія'
            } else {
                return 'ізотермія'
            }
        }
    }

    const enterWeather = (e: any) => {
        e.preventDefault();
        const addSpeed = Math.floor(windspeed * 10) / 10;
        dispatch(addWindSpeed(addSpeed));
        dispatch(addDirectionWind(winddirection));
        dispatch(addVertical(verticalStability()));
        dispatch(addAirTemperature(currentTemperature));
    }

    return (
        <div className="weather">
            <h6 className="h6">Поточні метеодані</h6>
            <div className="errorr">
                {status === 'loading' && <span>Завантаження метеоданих з сервера...</span>}
                {error && <span>Помилка завантаження метеоданних із сервера: <span className="errorrr">виберіть швидкість та напрямок вітру самостійно!</span></span>}
                <span className="transparent">P</span>
            </div>
            <form onSubmit={enterWeather}>
                <div className="form-group">
                    <table className="table table-hover add-weather">
                        <tbody>
                            <tr>
                                <th scope="row">Температура повітря (С&#xb0;)</th>
                                <td>{!temperature ? '' : temperature}</td>
                            </tr>
                            <tr>
                                <th scope="row">Швидкість вітру (м/сек)</th>
                                <td>{!windspeed ? '' : windspeed}</td>
                            </tr>
                            <tr>
                                <th scope="row">Напрямок вітру (&#xb0;)</th>
                                <td>{!winddirection ? '' : winddirection}</td>
                            </tr>
                            <tr>
                                <th scope="row">Вертикальна стійкість повітря</th>
                                <td className="verticalStability">{verticalStability()}</td>
                            </tr>
                        </tbody>
                    </table >
                    <table className="table table-hover current-weather">
                        <tbody>
                            <tr>
                                <th scope="row">{currentWeather()}</th>
                                <td></td>
                            </tr>
                        </tbody>
                    </table >
                    {!temperature ? <div></div> :
                        <button
                            type="submit"
                            style={{ paddingTop: 0, marginBottom: 30, paddingRight: 9, paddingLeft: 9 }}
                            className="btn btn-outline-primary">Внести метео</button>}
                </div>
            </form>
        </div >
    )
}

export default AddWeather;