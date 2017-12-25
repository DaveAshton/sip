import * as React from 'react';

import './component.css';
import PriceTileContainer, { Props as TileProps } from "../../price-tile-container/index";
import TenorSelectorContainer from '../../tenor-selector-container/index';

export interface Props {
    id: string;
    symbol: string;
    buy: TileProps;
    sell: TileProps;
}

export const Ticket = (props: Props) => {
    const { id, symbol, buy, sell } = props;
     return (
        <div className='ticket'>
            <div className='ticket-title'>{symbol} - {id}</div>
            <div className='ticket-prices' >
              <PriceTileContainer {...buy} />
              <PriceTileContainer {...sell} />
            </div>
            <TenorSelectorContainer ticketId={id} />
        </div>
    );
};
