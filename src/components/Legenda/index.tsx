import React from 'react';

import { Legenda, Topico } from './styles';

interface ValoresProps {
    val1: number;
    val2: number;
    val3: number;
    val4: number;
    val5: number;
    val6: number;
    val7: number;
    val8: number;
    val9: number;
    val10: number;
  }

const Legend: React.FC<ValoresProps> = ({val1, val2, val3, val4, val5, val6, val7, val8, val9, val10}) => {
  return (
    <Legenda>
        <Topico opacidade="0.1"></Topico>
        {val1}-{val2}
        <Topico opacidade="0.2"></Topico>
        {val2}-{val3}
        <Topico opacidade="0.3"></Topico>
        {val3}-{val4}
        <Topico opacidade="0.4"></Topico>
        {val4}-{val5}
        <Topico opacidade="0.5"></Topico>
        {val5}-{val6}
        <Topico opacidade="0.6"></Topico>
        {val6}-{val7}
        <Topico opacidade="0.7"></Topico>
        {val7}-{val8}
        <Topico opacidade="0.8"></Topico>
        {val8}-{val9}
        <Topico opacidade="0.9"></Topico>
        {val9}-{val10}
        <Topico opacidade="1.0"></Topico>
        {val10}
    </Legenda>
  );
};

export default Legend;
