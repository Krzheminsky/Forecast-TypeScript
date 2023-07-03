import React, { Component } from "react";
import './AddDataLosses.css';
import { useAppDispatch, useAppSelector } from '../../hook';
import { addTimeMoment, addDistanceSource, addPopulationDensity, addCoefficientProtection, addAreaAffected } from '../../store/lossesSlice';

const AddDataLosses: React.FC = () => {
    const dispatch = useAppDispatch();

    const area = useAppSelector(state => state.measure.area).toFixed(1);
    const distance = useAppSelector(state => state.measure.distance).toFixed(1);

    const enteredDataLosses = (e: any) => {
        e.preventDefault();
        let elements = e.target.elements;
        let timeMoment = +elements['time'].value;
        let areaAffected = +elements['area'].value;
        let distanceSource = +elements['distance'].value;
        let populationDensity = +elements['density'].value;
        let coefficientProtection = +elements['protection'].value;
        dispatch(addTimeMoment(timeMoment));
        dispatch(addAreaAffected(areaAffected));
        dispatch(addDistanceSource(distanceSource));
        dispatch(addPopulationDensity(populationDensity));
        dispatch(addCoefficientProtection(coefficientProtection));
    }

    return (
        <div className="right-add">
            <h6>Для розрахунку можливих втрат</h6>
            <form onSubmit={enteredDataLosses}>
                <div className="form-group">
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <label className="form-label">Час, з моменту аварії (хвилин)</label>
                                </th>
                                <td>
                                    <input type="number" className="form-num" defaultValue={240} id="exampleInput1" name="time" placeholder="240" min="0" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label className="form-label">Відстань від джерела до об'єкта (км)</label>
                                </th>
                                <td>
                                    <input type="number" className="form-num" name="distance" id="exampleInput2" key={distance} defaultValue={distance} placeholder="0" step="0.1" min="0" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label className="form-label">Щильність населення (осіб/км<sup>2</sup>)</label>
                                </th>
                                <td>
                                    <input type="number" className="form-num" name="density" id="exampleInput3" placeholder="0" min="0" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label className="form-label">Коефіціент захищеності</label>
                                </th>
                                <td>
                                    <input type="number" className="form-num" name="protection" id="exampleInput4" defaultValue={0.72} placeholder="0.72" step="0.01" min="0.01" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label className="form-label">Площа ураженої території (км<sup>2</sup>)</label>
                                </th>
                                <td>
                                    <input type="number" name="area" className="form-num" id="exampleInput5" key={area} defaultValue={area} placeholder="0" step="0.1" min="0" />
                                </td>
                            </tr>
                        </tbody>
                    </table >
                    <button
                        style={{ paddingTop: 0 }}
                        type="submit"
                        className="btn btn-outline-primary btn-2"
                        name="button-add-losses"
                    >Розрахувати</button>
                </div>
            </form>
        </div>
    )
}

export default AddDataLosses;