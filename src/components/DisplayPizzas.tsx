import React, {FC} from 'react';
import Pizza from '../models/Pizza';

interface DisplayPizzasProps {
  pizzasList: Pizza[];
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList}) => {
  return (
    <div className='container'>
      {pizzasList.map((pizza) => {
        return pizza.title;
      })}
    </div>
  )
}

export default DisplayPizzas;