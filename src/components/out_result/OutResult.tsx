import React, { Component } from "react";
import './OutResult.css';
import stup from "./stup.png";
import Calculation from '../../calculation/CalculatoinFirst';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppSelector } from '../../hook'

const OutResult: React.FC = (props) => {

    let nhr = useAppSelector(store => store.cloud.nhr)
    let addInput = useAppSelector(state => state.cloud.input);

    let obj: any = new Calculation(props);

    let anglF1: number = obj.angleF1();
    let anglF2: number = obj.angleF2();
    let primCloud: number = obj.primaryСloud();
    let populPZHZ: number = obj.populationPZHZ();

    let sCloud: number = obj.secCloud().toFixed(3);
    let arZMHZ: number = obj.areaZMHZ().toFixed(3);
    let arPZHZ: number = obj.areaPZHZ().toFixed(3);
    let numAffected: number = obj.numberAffected();
    let arFirst: number = obj.areaFirst().toFixed(3);
    let pCloud: number = obj.primaCloud().toFixed(3);
    let koefA: number = obj.coeficientA().toFixed(3);
    let duration: number = obj.duration().toFixed(3);
    let surArea: number = obj.surfaceArea().toFixed(3);
    let arSecond: number = obj.areaSecond().toFixed(3);
    let koefB1: number = obj.coeficientB1().toFixed(3);
    let koefB2: number = obj.coeficientB2().toFixed(3);
    let diamArea: number = obj.diameterArea().toFixed(3);
    let globDepth: number = obj.globalDepth().toFixed(3);
    let apprTime: number = obj.approachTime().toFixed(3);
    let disseminat: number | string = obj.dissemination();
    let arAccident: number = obj.areaAccident().toFixed(3);
    let secDepth: number = obj.secondaryDepth().toFixed(3);
    let tranSpeed: number = obj.transferSpeed().toFixed(3);
    let primDepth: number = obj.primaryDepth().toFixed(3);
    let radAsid: number = obj.radiusAccident().toFixed(3);
    let secCloud: number = obj.secondaryCloud().toFixed(2);
    let evaporRate: number = obj.evaporationRate().toFixed(3);
    let evaporTime: number = obj.evaporationTime().toFixed(3);


    return (
        <div className="left-out">
            <h5 className="h5">Результати розрахунків</h5>
            <table className="table table-hover">
                <tbody>
                    <tr>
                        <th scope="row">Радіус аварії <span>Ra</span> (км)</th>
                        <td>{radAsid}</td>
                    </tr>
                    <tr>
                        <th scope="row">Площа аварії <span>Sa</span> (км<sup>2</sup>)</th>
                        <td>{arAccident}</td>
                    </tr>
                    <tr>
                        <th scope="row">Глибина поширення первинної хмари <span>Г1</span> (км)</th>
                        <td>{primDepth}</td>
                    </tr>
                    <tr>
                        <th scope="row">Глибина поширення вторинної хмари <span>Г2</span> (км)</th>
                        <td>{secDepth}</td>
                    </tr>
                    <tr>
                        <th scope="row">Глибина зони хімічного забруднення <span>Г</span> (км)</th>
                        <td>{globDepth}</td>
                    </tr>
                    <tr>
                        <th scope="row">Площа ЗМХЗ <span>Sзмхз</span> (км<sup>2</sup>)</th>
                        <td>{arZMHZ}</td>
                    </tr>
                    <tr>
                        <th scope="row">Площа первинної хмари <span>S1</span> (км<sup>2</sup>)</th>
                        <td>{arFirst}</td>
                    </tr>
                    <tr>
                        <th scope="row">Площа вторинної хмари <span>S2</span> (км<sup>2</sup>)</th>
                        <td>{arSecond}</td>
                    </tr>
                    <tr>
                        <th scope="row">Площа ПЗХЗ <span>Sпмхз</span> (км<sup>2</sup>)</th>
                        <td>{arPZHZ}</td>
                    </tr>
                    <tr >
                        <th className="ogl" scope="row">Результати розрахунку можливих втрат</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Кількість населення в ПЗХЗ <span>L</span> (тис.чол)</th>
                        <td>{(populPZHZ / 1000).toFixed(3)}</td>
                    </tr>
                    <tr>
                        <th scope="row">Прогнозована кількість уражених <span>B</span> (тис.чол.)</th>
                        <td>{(numAffected / 1000).toFixed(3)}</td>
                    </tr>
                    <tr>
                        <th scope="row">Тривалість хімічного забруднення <span>Твип</span> (хв.)</th>
                        <td>{duration}</td>
                    </tr>
                    <tr>
                        <th scope="row">Швидкість перенесення фронту хмари <span>v</span> (км/год)</th>
                        <td>{tranSpeed}</td>
                    </tr>
                    <tr>
                        <th scope="row">Час підходу хмари <span>t</span> (хв.)</th>
                        <td>{apprTime}</td>
                    </tr>
                    <tr>
                        <th scope="row">Глибина розповсюдження хмари з моменту аварії <span>Гр</span> (км)</th>
                        <td>{disseminat}</td>
                    </tr>
                </tbody>
            </table >
            <div className="accordion" id="accordionExample">

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Проміжні розрахунки
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table table-hover">
                                <tbody >
                                    <tr>
                                        <th scope="row">Розрахункова глибина первинної хмари <span>Г1р</span> (км)</th>
                                        <td>{pCloud}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Розрахункова глибина вторинної хмари <span>Г2р</span> (км)</th>
                                        <td>{sCloud}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">К-сть НХР, що перейшла у первинну хмару <span>Q1</span> (т)</th>
                                        <td>{(primCloud / 1000).toFixed(3)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">К-сть НХР, що перейшла у вторинну хмару <span>Q2</span> (т)</th>
                                        <td>{(secCloud / 1000).toFixed(3)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Приведений діаметр площі виливу НХР <span>dпр</span> (м)</th>
                                        <td>{diamArea}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Площа поверхні виливу НХР <span>Sпр</span> (км<sup>2</sup>)</th>
                                        <td>{surArea}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Питома швидкість випаровування <span>E</span> (кг/м<sup>2</sup>*с)</th>
                                        <td>{evaporRate}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Час випаровування <span>τ</span> (год)</th>
                                        <td>{evaporTime}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Коефіціент А</th>
                                        <td>{koefA}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Коефіціент В1</th>
                                        <td>{koefB1}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Коефіціент В2</th>
                                        <td>{koefB2}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Половина кута Ф1 (первинна хмара)</th>
                                        {!addInput ? <td>0.000</td> : <td>{anglF1}&#176;</td>}
                                    </tr>
                                    <tr>
                                        <th scope="row">Половина кута Ф2 (вторинна хмара)</th>
                                        {!addInput ? <td>0.000</td> : <td>{anglF2}&#176;</td>}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Довідкова інформація про НХР
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p className="nhr" >{nhr}</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Ступені вертикальної стійкості повітря
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <img className="imgChim" src={stup} alt="Таблиця стану НХР" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OutResult;