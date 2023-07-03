import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import MapCoordinate from './components/map-coordinate/MapCoordinate';
import About from './components/about/About';
import AddDataChemical from './components/add_data_chemical/AddDataChemical';
import AddDataLosses from './components/add_data_losses/AddDataLosses';
import AddWeather from './components/add_weathet/AddWeather';
import Footer from './components/footer/Footer';
import OutResult from './components/out_result/OutResult';
import Header from './components/header/Header';
import TableChim from './components/table/TableChim';
import Application from './components/application/Application';
import { Routes, Route } from 'react-router-dom';
import OfflineApp from './components/app_offline/OfflineApp';

const App: React.FC = () => {
  return (

    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <AddDataChemical />
          <AddDataLosses />
          <AddWeather />
        </Col>
        <Col md={6}>
          <Routes>
            <Route path='/' element={<MapCoordinate />} />
            <Route path='/about' element={<About />} />
            <Route path="/table" element={<TableChim />} />
            <Route path="/application" element={<Application />} />
            <Route path="/offline" element={<OfflineApp />} />
          </Routes>
        </Col>
        <Col md={3}>
          <OutResult />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>

      </Row>
    </Container>

  );
}

export default App;
