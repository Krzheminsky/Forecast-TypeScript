import React, { Component } from "react";
import './AddDataChemical.css';
import { chemicalSubstances, phisicalState, verticalStability, probability } from '../../data/data';
import { useAppDispatch, useAppSelector } from '../../hook';
import { addInput, addChemical, addVertical, addPhisical, addProbab, addWindSpeed, addAirTemperature, addAmountNHR, addCoefficient, addPalletHeight, addBoilingPoint, addCoefHeat, addDensity, addDensityGas, addMolWeight, addToxiCosis, addVaporisation, addNhr, addVert, addPhis, addProb } from '../../store/cloudeSlice';
import Wind from '../../wind/Wind';

const AddDataChemical: React.FC = () => {
    const dispatch = useAppDispatch();

    const defaultVertical = useAppSelector(state => state.cloud.vertical);
    const defaultWindSreed = useAppSelector(state => state.cloud.windSpeed);
    const defaultTemperature = useAppSelector(state => state.cloud.airTemperature);

    const enteredData = (e: any) => {
        e.preventDefault();
        let elements = e.target.elements;
        let probab: string = elements['prognoz'].value;
        let windSpeed: number = +elements['wind'].value;
        let amountNHR: number = +elements['massa'].value;
        let coefficient: number = +elements['koef'].value;
        let airTemperature: number = +elements['term'].value;
        let palletHeight: number = +elements['visota'].value;
        let phisical: string = elements['phisical-state'].value;
        let vertical: string = elements['vertical-stability'].value;
        let chemical: string = elements['chemical-substances'].value;

        dispatch(addInput(true));
        dispatch(addProbab(probab));
        dispatch(addChemical(chemical));
        dispatch(addVertical(vertical));
        dispatch(addPhisical(phisical));
        dispatch(addAmountNHR(amountNHR));
        dispatch(addWindSpeed(windSpeed));
        dispatch(addCoefficient(coefficient));
        dispatch(addPalletHeight(palletHeight));
        dispatch(addAirTemperature(airTemperature));

        chemicalSubstances.map((el) => {
            if (el.name === chemical) {
                dispatch(addNhr(el.nhr));
                dispatch(addDensity(el.density));
                dispatch(addMolWeight(el.molWeight));
                dispatch(addToxiCosis(el.toxiCosis));
                dispatch(addCoefHeat(el.coecificHeat));
                dispatch(addDensityGas(el.densityGas));
                dispatch(addBoilingPoint(el.boilingPoint));
                dispatch(addVaporisation(el.vaporisation));
            }
        })

        verticalStability.map((el) => {
            if (el.name === vertical) {
                dispatch(addVert(el.param));
            }
        })

        phisicalState.map((el) => {
            if (el.name === phisical) {
                dispatch(addPhis(el.param));
            }
        })

        probability.map((el) => {
            if (el.name === probab) {
                dispatch(addProb(el.param));
            }
        })

    }
    return (
        <div className="left-add">
            <h5 className="h5">Вихідні дані</h5>
            <form onSubmit={enteredData}>
                <div className="form-group">
                    <table className="table table-hover" style={{ marginBottom: 0 }}>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <label for-html="exampleSelect1" className="form-label">Вибір хімічної речовини</label>
                                </th>
                                <td>
                                    <select className="form-select" id="exampleSelect1" name="chemical-substances">
                                        {chemicalSubstances.map((el, key) => (
                                            <option key={key} value={el.name}>{el.name}</option>)
                                        )}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label className="form-label">Ступінь вертикальної стійкості</label>
                                </th>
                                <td>
                                    <select key={defaultVertical} defaultValue={defaultVertical} className="form-select" id="exampleSelect2" name="vertical-stability">
                                        {verticalStability.map((el, key) => (
                                            <option key={key} value={el.name}>{el.name}</option>)
                                        )}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label className="form-label">Агрегатний стан НХР</label>
                                </th>
                                <td>
                                    <select className="form-select" id="exampleSelect3" name="phisical-state">
                                        {phisicalState.map((el, key) => (
                                            <option key={key} value={el.name}>{el.name}</option>)
                                        )}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label className="form-label">Характер прогнозування</label>
                                </th>
                                <td>
                                    <select className="form-select" id="exampleSelect4" name="prognoz">
                                        {probability.map((el, key) => (
                                            <option key={key} value={el.name}>{el.name}</option>)
                                        )}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label className="form-label">Швидкість вітру (м/с)</label>
                                </th>
                                <td>
                                    <input type="number" className="form-num" key={defaultWindSreed} defaultValue={defaultWindSreed} name="wind" step="0.1" min="0.1" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label className="form-label">Температура повітря (С&#xb0;)</label>
                                </th>
                                <td>
                                    <input type="number" className="form-num" key={defaultTemperature} defaultValue={defaultTemperature} name="term" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label className="form-label">Кількість НХР в ємності (кг)</label>
                                </th>
                                <td>
                                    <input type="number" className="form-num" defaultValue={1000} name="massa" min="0" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label className="form-label">Коефіцієнт впливу місцевості</label>
                                </th>
                                <td>
                                    <input type="number" className="form-num" defaultValue={0.5} placeholder="0.5" name="koef" step="0.1" min="0.1" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label className="form-label">Висота піддону (м) </label>
                                </th>
                                <td>
                                    <input type="number" className="form-num" step="0.1" placeholder="0 - якщо відсутній" name="visota" min="0" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label for-html="exampleInput6" className="form-label">Напрямок вітру</label>
                                </th>
                                <td>
                                    <Wind />
                                </td>
                            </tr>
                        </tbody>
                    </table >
                    <button
                        type="submit"
                        style={{ paddingTop: 0 }}
                        className="btn btn-outline-primary">Розрахувати</button>
                </div>
            </form>
        </div >
    )
}

export default AddDataChemical;