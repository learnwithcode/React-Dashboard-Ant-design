import React from 'react';
import { Card } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};


const card = (props) => {
    return (
        <Card.Grid style={gridStyle}>{props.children}</Card.Grid>
    )
};


export default card;