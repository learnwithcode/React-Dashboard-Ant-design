import React from 'react';
import { Card} from 'antd';


const gridStyle = {
  width: '100%',
  marginBottom: '18px'  
};


const card = (props) => {
    return (
          <Card.Grid style={gridStyle}>
            {props.children}
          </Card.Grid>
    )
};


export default card;



