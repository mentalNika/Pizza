import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditPizzaForm from "./EditPizzaForm";
import Pizza from "../models/Pizza";

interface SinglePizzaProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({
  pizza,
  updatePizza,
  deletePizza,
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggeEdit = () => {
    setEdit(!edit);
  };

  const handleDelete = () => {
    deletePizza(pizza.id);
  };

  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt="pizza.title"></img>
      <h2>
        <Link to={`/pizza/${pizza.id}`}>{pizza.title}</Link>
      </h2>
      <span>{pizza.price} ₽</span>

      <div className="pizza-controls">
        <AiFillEdit onClick={handleToggeEdit} />
        <AiFillDelete onClick={handleDelete} />
      </div>

      {edit ? (
        <EditPizzaForm
          data={pizza}
          updatePizza={updatePizza}
          handleToggeEdit={handleToggeEdit}
        />
      ) : null}
    </div>
  );
};

export default SinglePizza;
