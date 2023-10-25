import React, {MouseEventHandler, ReactElement} from 'react';

export enum IconColor {
    Primary = 'primary',
    Secondary = 'secondary'
}

export interface BaseIconProps {
    path: string;
    color: IconColor;
    dataTestId?: string;
    onClick?: MouseEventHandler<SVGElement>;
}

const handleColor = (color: IconColor) => {
    if (color === IconColor.Primary) {
        return { fill: 'orange', color: 'orange'};
    }

    return { fill: 'red', color: 'red'};
}

export const BaseIcon = ({ path, color, dataTestId, onClick }: BaseIconProps) => {
    return <svg
        style={{ width: '24px', height: '24px' , ...handleColor(color) }}
        viewBox="0 0 24 24"
        onClick={onClick}
        data-testid={dataTestId}
    >
        <g fillRule="evenodd">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d={path} />
        </g>
    </svg>;
};