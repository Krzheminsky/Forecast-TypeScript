import { MapContainer, Marker, Polygon, Popup, Circle, TileLayer, useMapEvents, LayersControl, LayerGroup, FeatureGroup } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw"
import "./MapCoordinate.css";
import L from 'leaflet';
import { Container, Row, Col } from 'react-bootstrap';
import "leaflet-draw/dist/leaflet.draw.css";
import 'leaflet-easyprint';
import MapPrint from "./MapPrint";
import ImgYellow from "../../img/marker_yellow.svg";
import ImgRed from "../../img/marker_red.svg";
import { flushSync } from 'react-dom';
import { useState } from 'react';
import Calculation from '../../calculation/CalculatoinFirst';
import { useDispatch, useSelector } from 'react-redux';
import { addLat, addLng, fetchMeteo } from '../../store/cloudeSlice';
import { addDistance, addArea } from '../../store/measureSlice'

const { BaseLayer } = LayersControl;

L.Draw.Event.MARKERCONTEXT = 'draw:markercontext'
L.Draw.Polygon.prototype._onTouch = L.Util.falseFn;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png"
})

const MapCoordinate = () => {

    const dispatch = useDispatch();


    let obj = new Calculation();
    let cloudOne = obj.cloudOne();
    let cloudTwo = obj.cloudTwo();
    let arZMHZ = obj.areaZMHZ().toFixed(3);
    let arFirst = obj.areaFirst().toFixed(3);
    let arSecond = obj.areaSecond().toFixed(3);
    let globDepth = obj.globalDepth().toFixed(3);
    let primDepth = obj.primaryDepth().toFixed(3);
    let radAsid = obj.radiusAccident().toFixed(3);
    let secDepth = obj.secondaryDepth().toFixed(3);

    let firstArea = [cloudOne];
    let secondArea = [cloudTwo];

    const lat = useSelector(state => state.cloud.lat);
    const lng = useSelector(state => state.cloud.lng);
    const name = useSelector(state => state.cloud.chemical);
    const amount = useSelector(state => state.cloud.amountNHR);

    const [zoom, setZoom] = useState(6);
    const [idPoly, setIdPoly] = useState('');
    const [position, setPosition] = useState(null);
    const [areaPoligon, setAreaPoligon] = useState(0);
    const [latObject, setLatObject] = useState(49.16);
    const [lngObject, setLngObject] = useState(34.41);
    const [lengthPolyline, setLengthPolyline] = useState(0);
    const [positionObject, setPositionObject] = useState(null);

    const pos = [lat, lng]

    const myIcon = L.icon({
        iconUrl: ImgYellow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    let LocationMarker = () => {
        const myIcon = L.icon({
            iconUrl: ImgYellow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
        });
        const map = useMapEvents({
            click: (e) => {
                flushSync(() => {
                    setPosition(e.latlng);
                    let lat = e.latlng.lat
                    let lng = e.latlng.lng
                    dispatch(addLat(lat));
                    dispatch(addLng(lng));
                    var todayDate = new Date().toISOString().slice(0, 10);
                    let currentUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,soil_temperature_0cm&current_weather=true&windspeed_unit=ms&start_date=${todayDate}&end_date=${todayDate}`
                    dispatch(fetchMeteo(currentUrl))
                })
            },

            locationfound: (e) => {
            },
        })
        return position === null ? null : (
            < Marker position={position} icon={myIcon}>
                <Popup>{name},{amount} т<br />
                    Координати:<br /> {lat.toFixed(4)}, {lng.toFixed(4)}
                </Popup>
            </Marker >
        )
    }

    let LocationMarkerObject = () => {
        const myIconTwo = L.icon({
            iconUrl: ImgRed,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],

        });
        const map1 = useMapEvents({
            contextmenu: (e) => {
                setLatObject(e.latlng.lat);
                setLngObject(e.latlng.lng);
                setPositionObject(e.latlng);
            },
            locationfound: (e) => {
            },
        })
        return positionObject === null ? null : (
            < Marker position={positionObject} icon={myIconTwo} >
                <Popup> !Правою кнопкою миші!, <br />
                    Координати:<br /> {latObject.toFixed(4)}, {lngObject.toFixed(4)}
                </Popup>
            </Marker >
        )
    }

    return (
        <div className='map-container'>
            <Container fluid>
                <Row>
                    <Col>
                        <MapContainer center={pos} zoom={zoom} >
                            <LayersControl position="topright">
                                <BaseLayer checked name='OpenStreetMap'>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                </BaseLayer>
                                <BaseLayer name='GoogleSatellite'>
                                    <TileLayer
                                        attribution='&copy; <a href="https://earth.google.com">Google</a> contributors'
                                        url="https://mt.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                                    />
                                </BaseLayer>
                                <BaseLayer name='OpenTopoMap'>
                                    <TileLayer
                                        attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                                        maxZoom='17'
                                        url='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
                                    />
                                </BaseLayer>
                                <MapPrint position="bottomleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} title="Друк" />
                                <MapPrint position="bottomleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} title="Експорт до PNG" exportOnly />
                                <LayersControl.Overlay checked name="Розрахункова група">
                                    <FeatureGroup>
                                        <EditControl
                                            position="topleft"
                                            onCreated={(e) => {
                                                if (e.layerType === "rectangle" || e.layerType === "polygon") {
                                                    let seeArea = (L.GeometryUtil.geodesicArea(e.layer._latlngs[0])) / 1000000;
                                                    setAreaPoligon(seeArea);
                                                    dispatch(addArea(seeArea));
                                                    setIdPoly(e.layer._leaflet_id);
                                                }
                                                if (e.layerType === "polyline") {
                                                    let mDistanse = 0,
                                                        length = e.layer._latlngs.length;
                                                    for (let i = 1; i < length; i++) {
                                                        mDistanse += e.layer._latlngs[i].distanceTo(e.layer._latlngs[i - 1]);
                                                    }
                                                    setLengthPolyline(mDistanse / 1000);
                                                    dispatch(addDistance(mDistanse / 1000));
                                                    setIdPoly(e.layer._leaflet_id);
                                                }
                                            }}

                                            onEdited={(e) => {
                                                let seeArea = (L.GeometryUtil.geodesicArea(e.layers._layers[idPoly]._latlngs[0])) / 1000000;
                                                setAreaPoligon(seeArea);
                                                dispatch(addArea(seeArea));

                                                let mDistanse = 0,
                                                    length = e.layers._layers[idPoly]._latlngs.length;
                                                for (let i = 1; i < length; i++) {
                                                    mDistanse += e.layers._layers[idPoly]._latlngs[i].distanceTo(e.layers._layers[idPoly]._latlngs[i - 1]);
                                                }
                                                setLengthPolyline(mDistanse / 1000);
                                                dispatch(addDistance(mDistanse / 1000));

                                            }}
                                            draw={{
                                                circle: false,
                                                circlemarker: false,
                                                marker: false,
                                                rectangle: false,

                                                polyline: true,
                                                polygon: {
                                                    showArea: true,
                                                    showLength: true,
                                                    metric: true,
                                                    repeatMode: true
                                                },
                                            }}
                                            edit={{
                                                edit: false
                                            }}
                                        />
                                    </FeatureGroup>
                                </LayersControl.Overlay>
                                <LayersControl.Overlay checked name="ЗМХЗ">
                                    <Circle center={pos} pathOptions={{ color: "yellow" }} radius={globDepth != '-' ? globDepth * 1000 : 0} >
                                        <Popup>
                                            Зона можливого хімічного забруднення, <br />
                                            глибина ЗМХЗ: {globDepth} км,<br /> площа ЗМХЗ: {arZMHZ} км<sup>2</sup>
                                        </Popup>
                                    </Circle>
                                </LayersControl.Overlay>
                                <LayersControl.Overlay checked name="Зона аварії">
                                    <Circle center={pos} pathOptions={{ color: "red" }} radius={radAsid != '-' ? radAsid * 1000 : 0} >
                                        <Popup>
                                            Радіус аварії {radAsid} км
                                        </Popup>
                                    </Circle>
                                </LayersControl.Overlay>
                                <LayersControl.Overlay checked name="Вторинна хмара">

                                    <Polygon pathOptions={{ color: "green" }} positions={secondArea} >
                                        <Popup>
                                            Вторинна хмара,<br /> глибина Г2: {secDepth} км,<br /> площа S2: {arSecond} км<sup>2</sup>{arFirst} км<sup>2</sup>

                                        </Popup>
                                    </Polygon>
                                </LayersControl.Overlay>
                                <LayersControl.Overlay checked name="Первинна хмара">
                                    <Polygon pathOptions={{ color: "blue" }} positions={firstArea} >
                                        <Popup>
                                            Первинна хмара,<br /> глибина Г1: {primDepth != '-' ? primDepth : 0}  км,<br /> площа S1: {arFirst} км<sup>2</sup>
                                        </Popup>
                                    </Polygon>
                                </LayersControl.Overlay>
                                <LocationMarker />
                                <LocationMarkerObject />
                                <Marker position={pos} icon={myIcon}>
                                    <Popup>
                                        Проведіть розрахунок масштабів забруднення, <br />виберіть місце аварії тa клікніть лівою кравішою миші.
                                    </Popup>
                                </Marker>
                            </LayersControl>
                        </MapContainer>
                    </Col>
                </Row>
                <Row className='area'>
                    <Col md={2}>
                        Відстань: {lengthPolyline.toFixed(3)} км
                    </Col>
                    <Col md={2}>
                        Площа: {areaPoligon.toFixed(3)} км<sup>2</sup>
                    </Col>
                    <Col md={8}>
                        <h6>
                            * використовуйте інструменти polygon та polyline для визначення відстані та площі (краще - правою клавішою миші)
                        </h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MapCoordinate;