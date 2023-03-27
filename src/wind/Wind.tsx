import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import "./Wind.css"
import { useAppDispatch, useAppSelector } from '../hook';
import { addDirectionWind } from '../store/cloudeSlice';

const Wind = () => {
    const dispatch = useAppDispatch();

    const defaultWindDirection = useAppSelector(state => state.cloud.direction);

    return (
        <div className='wind'>
            <CircularSlider
                label=""
                min={1}
                max={360}
                width={50}
                direction={1}
                knobSize={10}
                trackSize={4}
                dataIndex={defaultWindDirection - 1}
                progressSize={4}
                knobPosition="top"
                knobColor="tomato"
                appendToValue="°"
                valueFontSize="12px"
                labelFontSize='10px'
                verticalOffset='4px'
                progressColorFrom="grey"
                progressColorTo="grey"
                onChange={(directionWind: number) => {
                    dispatch(addDirectionWind(directionWind))
                }}
            />
        </div>
    )
};

export default Wind;