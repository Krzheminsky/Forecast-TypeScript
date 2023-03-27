import React, { Component } from "react";
import { useAppSelector, useAppDispatch } from '../hook';

export default class CalculationFirst extends Component {

    lat = useAppSelector(state => state.cloud.lat);
    lng = useAppSelector(state => state.cloud.lng);
    vert = useAppSelector(state => state.cloud.vert);
    prob = useAppSelector(state => state.cloud.prob);
    phis = useAppSelector(state => state.cloud.phis);
    addInput = useAppSelector(state => state.cloud.input);
    density = useAppSelector(state => state.cloud.density);
    molWeight = useAppSelector(state => state.cloud.molWeight);
    toxiCosis = useAppSelector(state => state.cloud.toxiCosis);
    amountNHR = useAppSelector(state => state.cloud.amountNHR);
    windSpeed = useAppSelector(state => state.cloud.windSpeed);
    timeMoment = useAppSelector(state => state.losses.timeMoment);
    coefficient = useAppSelector(state => state.cloud.coefficient);
    directionWind = useAppSelector(state => state.cloud.direction);
    palletHeight = useAppSelector(state => state.cloud.palletHeight);
    coecificHeat = useAppSelector(state => state.cloud.coecificHeat);
    vaporisation = useAppSelector(state => state.cloud.vaporisation);
    boilingPoint = useAppSelector(state => state.cloud.boilingPoint);
    areaAffected = useAppSelector(state => state.losses.areaAffected);
    airTemperature = useAppSelector(state => state.cloud.airTemperature);
    distanceSource = useAppSelector(state => state.losses.distanceSource);
    populationDensity = useAppSelector(state => state.losses.populationDensity);
    coefficientProtection = useAppSelector(state => state.losses.coefficientProtection);

    coeficientA(): number {
        if (!this.addInput) {
            return 0;
        } else {
            return (0.57 * Math.exp(0.86 * this.vert));
        }
    }

    coeficientB1(): number {
        if (!this.addInput) {
            return 0;
        } else {
            return (15.4 * Math.exp(6.96 * this.vert))
        }
    }

    coeficientB2(): number {
        if (!this.addInput) {
            return 0;
        } else {
            return (16.84 * Math.exp(6.87 * this.vert))
        }
    }

    angleF1(): number {
        let result;
        if (!this.prob) {
            return 0;
        }
        if (this.vert === -0.15 && this.prob === 0.5) {
            result = 15;
        }
        else if (this.vert === -0.15 && this.prob === 0.75) {
            result = 25;
        }
        else if (this.vert === -0.15 && this.prob === 0.9) {
            result = 30;
        }
        else if (this.vert === 0 && this.prob === 0.5) {
            result = 12;
        }
        else if (this.vert === 0 && this.prob === 0.75) {
            result = 20;
        }
        else if (this.vert === 0 && this.prob === 0.9) {
            result = 25;
        }
        else if (this.vert === 0.15 && this.prob === 0.5) {
            result = 9;
        }
        else if (this.vert === 0.15 && this.prob === 0.75) {
            result = 15;
        }
        else {
            result = 20;
        }
        return result;
    }

    radiusAccident(): number {
        let result;
        if (!this.amountNHR || !this.boilingPoint) {
            return 0;
        }
        if (this.boilingPoint < 20 && this.amountNHR < 100000) {
            result = 0.5;
        }
        else if (this.boilingPoint < 20 && this.amountNHR >= 100000) {
            result = 1;
        }
        else if (this.boilingPoint >= 20 && this.amountNHR >= 100000) {
            result = 0.5;
        }
        else {
            result = 0.3;
        }
        return result;
    }

    primaryСloud(): number {
        let result;
        if (!this.addInput) {
            return 0;
        } else {
            if (this.phis == 1 && (this.amountNHR * this.coecificHeat * (this.airTemperature - this.boilingPoint) / this.vaporisation > 0)) {
                result = this.amountNHR * this.coecificHeat * (this.airTemperature - this.boilingPoint) / this.vaporisation
            }
            else if (this.phis == 0 && (this.amountNHR * this.coecificHeat * (this.airTemperature - this.boilingPoint) / this.vaporisation > 0)) {
                result = this.amountNHR;
            }
            else {
                result = 0;
            }
        }
        return result;
    }

    secondaryCloud(): number {
        if (!this.addInput) {
            return 0;
        } else {
            return (this.amountNHR - this.primaryСloud());
        }
    }

    diameterArea(): number {
        let result;
        if (!this.addInput) {
            return 0;
        } else {
            if (this.palletHeight === 0) {
                result = 5.04 * (Math.sqrt((this.amountNHR - this.primaryСloud()) / this.density));
            }
            else if (this.palletHeight > 0 && this.amountNHR < 200000) {
                result = 1.22 * (Math.sqrt((this.amountNHR - this.primaryСloud()) / this.density));
            }
            else {
                result = 1.22 / Math.sqrt(this.palletHeight) * (Math.sqrt((this.amountNHR - this.primaryСloud()) / this.density))
            }
        }
        return result;
    }

    surfaceArea(): number {
        return (3.1415 * this.diameterArea() * this.diameterArea() / 4)
    }

    evaporationRate(): number {
        let result;
        if (!this.addInput) {
            return 0;
        } else {
            if (this.phis == 0) {
                result = 0;
            } else {
                result = (0.041 * ((this.windSpeed * this.molWeight) / (Math.pow(this.diameterArea(), 0.14) * 273)) * Math.exp((this.vaporisation * this.molWeight / 8.31) * ((1 / (this.boilingPoint + 273)) - (1 / 273))));
            }
        }
        return result;
    }

    evaporationTime(): number {
        let result;
        if (!this.addInput) {
            return 0;
        } else {
            if (this.phis == 0) {
                result = 0;
            } else {

                result = this.secondaryCloud() / (3600 * this.evaporationRate() * this.surfaceArea())
            }
        }
        return result;
    }

    primaCloud(): number {
        let result;
        if (this.primaryСloud() === 0) {
            return 0;
        }
        else if (this.windSpeed > 0) {
            result = (this.coeficientB1() * Math.pow((this.primaryСloud() / (1000 * this.windSpeed * this.toxiCosis)), this.coeficientA()));
        }
        else {
            result = (this.coeficientB1() * Math.pow((this.primaryСloud() / (1000 * 0.6 * this.toxiCosis)), this.coeficientA()));
        }
        return result;
    }

    secCloud(): number {
        let result;
        if (!this.evaporationTime()) {
            return 0;
        } else {
            if (this.phis === 1 && this.evaporationTime() > 24) {
                result = this.coeficientB2() * Math.pow(24, -0.5) * Math.pow((this.secondaryCloud() / (1000 * this.windSpeed * this.toxiCosis)), this.coeficientA());
            }
            else {
                result = this.coeficientB2() * Math.pow(this.evaporationTime(), -0.5) * Math.pow((this.secondaryCloud() / (1000 * this.windSpeed * this.toxiCosis)), this.coeficientA());
            }
        }
        return result;
    }

    angleF2(): number {
        let result;
        if (this.vert === -0.15 && this.prob === 0.5) {
            result = 20;
        }
        else if (this.vert === -0.15 && this.prob === 0.75) {
            result = 35;
        }
        else if (this.vert === -0.15 && this.prob === 0.9) {
            result = 50;
        }
        else if (this.vert === 0 && this.prob === 0.5 && this.evaporationTime() < 6) {
            result = 15;
        }
        else if (this.vert === 0 && this.prob === 0.75 && this.evaporationTime() < 6) {
            result = 25;
        }
        else if (this.vert === 0 && this.prob === 0.9 && this.evaporationTime() < 6) {
            result = 40;
        }
        else if (this.vert === 0 && this.prob === 0.5 && this.evaporationTime() >= 6 && this.evaporationTime() < 12) {
            result = 22;
        }
        else if (this.vert === 0 && this.prob === 0.75 && this.evaporationTime() >= 6 && this.evaporationTime() < 12) {
            result = 37;
        }
        else if (this.vert === 0 && this.prob === 0.9 && this.evaporationTime() >= 6 && this.evaporationTime() < 12) {
            result = 52;
        }
        else if (this.vert === 0 && this.prob === 0.75 && this.evaporationTime() >= 12) {
            result = 50;
        }
        else if (this.vert === 0 && this.prob === 0.9 && this.evaporationTime() >= 12) {
            result = 70;
        }
        else if (this.vert === 0 && this.prob === 0.5 && this.evaporationTime() >= 12) {
            result = 30;
        }
        else if (this.vert === 0.15 && this.prob === 0.5) {
            result = 12;
        }
        else if (this.vert === 0.15 && this.prob === 0.75) {
            result = 20;
        } else {
            result = 30;
        }
        return result;
    }

    areaAccident(): number {
        if (this.radiusAccident() === 0) {
            return 0;
        } else {
            return (3.1415 * Math.pow(this.radiusAccident(), 2))
        }
    }

    primaryDepth(): number {
        let result;
        if (this.primaCloud() > 0) {
            result = (this.coefficient * this.primaCloud());
        } else {
            result = 0;
        }
        return result;
    }

    secondaryDepth(): number {
        let result;
        if (this.secCloud() > 0) {
            result = (this.coefficient * this.secCloud());
        } else {
            result = 0;
        }
        return result;
    }

    globalDepth(): number {
        let result;
        if (this.primaryDepth() > this.secondaryDepth()) {
            result = (this.primaryDepth() + this.radiusAccident());
        }
        else if (this.primaryDepth() < this.secondaryDepth()) {
            result = (this.secondaryDepth() + this.radiusAccident());
        } else {
            result = 0;
        }
        return result;
    }

    areaZMHZ(): number {
        return (3.1415 * Math.pow(this.globalDepth(), 2))
    }

    areaFirst(): number {
        let result;
        if (this.primaryDepth() === 0) {
            result = 0;
        } else {
            result = Math.pow((this.primaryDepth() + this.radiusAccident()), 2) * this.angleF1() / 60
        }
        return result;
    }

    areaSecond(): number {
        let result;
        if (this.secondaryDepth() === 0) {
            result = 0;
        } else {
            result = Math.pow((this.secondaryDepth() + this.radiusAccident()), 2) * this.angleF2() / 60
        }
        return result;
    }

    areaPZHZ(): number {
        let result!: number;
        if (this.primaryDepth() === 0) {
            result = 0;
        }
        if (this.primaryDepth() > this.secondaryDepth()) {
            result = 3.1415 * ((Math.pow(this.radiusAccident(), 2) * (180 - this.angleF2()) / 180) +
                (Math.pow((this.primaryDepth() + this.radiusAccident()), 2) * this.angleF1() / 180) +
                (Math.pow((this.secondaryDepth() + this.radiusAccident()), 2) * (this.angleF2() - this.angleF1()) / 180));
        } else {
            result = 3.1415 * ((Math.pow(this.radiusAccident(), 2) * (180 - this.angleF2()) / 180) +
                (Math.pow((this.secondaryDepth() + this.radiusAccident()), 2) * this.angleF2() / 180))
        }
        return result;
    }

    populationPZHZ(): number {
        let result;
        if (this.distanceSource === 0) {
            return 0;
        }
        else if (this.distanceSource > this.globalDepth()) {
            result = 0;
        } else {
            result = this.populationDensity * this.areaAffected;
        }
        return result;
    }

    numberAffected(): number {
        return (this.populationPZHZ() * (1 - this.coefficientProtection))
    }

    transferSpeed(): number {
        let result;
        if (!this.evaporationTime()) {
            return 0;
        } else {
            if (this.vert === 0.15) {
                result = this.windSpeed * 5.24;
            }
            else if (this.vert === 0) {
                result = this.windSpeed * 5.8;
            } else {
                result = this.windSpeed * 7;
            }
        }
        return result;
    }

    duration(): number {
        if (!this.evaporationTime()) {
            return 0;
        } else {
            return this.evaporationTime() * 60;
        }
    }

    approachTime(): number {
        if (this.transferSpeed() === 0) {
            return 0;
        } else {
            return ((this.distanceSource / this.transferSpeed()) * 60)
        }
    }

    dissemination(): string | number {
        let result;
        if (!this.evaporationTime()) {
            return `0.000`;
        } else {
            if (this.timeMoment / 60 * this.transferSpeed() < this.globalDepth()) {
                result = (this.timeMoment / 60 * this.transferSpeed()).toFixed(3);
            } else {
                result = "досягла \nмаксимуму"
            }
        }
        return result;
    }

    cloudOne() {
        let latOne;
        let lngOne;
        let result = [];
        if (this.primaryDepth() === 0) {
            latOne = this.lat;
            lngOne = this.lng;
            result.push([latOne, lngOne]);
        } else {
            result.push([this.lat, this.lng]);
            for (let i = (0 - this.angleF1()); i <= this.angleF1(); i++) {
                latOne = this.lat + ((((this.primaryDepth() + this.radiusAccident()) * 1000) * Math.cos((i + this.directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
                lngOne = this.lng + (this.primaryDepth() + this.radiusAccident()) * 1000 * Math.sin((i + this.directionWind) * 3.1415 / 180) / Math.cos(this.lat * 3.1415 / 180) / (6371000 * 3.1415 / 180);
                result.push([latOne, lngOne]);
            }
        }
        return result;
    }

    cloudTwo() {
        let latOne;
        let lngOne;
        let result = [];
        if (this.secondaryDepth() == 0) {
            latOne = this.lat;
            lngOne = this.lng;
            result.push([latOne, lngOne]);
        } else {
            result.push([this.lat, this.lng]);
            for (let i = (0 - this.angleF2()); i <= this.angleF2(); i++) {
                latOne = this.lat + ((((this.secondaryDepth() + this.radiusAccident()) * 1000) * Math.cos((i + this.directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
                lngOne = this.lng + (this.secondaryDepth() + this.radiusAccident()) * 1000 * Math.sin((i + this.directionWind) * 3.1415 / 180) / Math.cos(this.lat * 3.1415 / 180) / (6371000 * 3.1415 / 180);
                result.push([latOne, lngOne]);
            }
        }
        return result;
    }
};