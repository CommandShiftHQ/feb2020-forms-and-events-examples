import React from 'react';
import { useState } from 'react'

const Box = props => {
    const [hover, setHover] = useState(false);
    const style = {
        backgroundColor: hover ? '#FFFFFF' : props.color,
        width: '50px',
        height: '50px'
      }
      return (
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        on
        style={style}
      >
      </div>
    );
}

export default Box
