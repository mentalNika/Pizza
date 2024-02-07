import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import Pizza from "../models/Pizza";
import "./styles.css";
import { title } from "process";

interface EditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleToggeEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, updatePizza, handleToggeEdit }) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditPizza({
      ...editPizza,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = editPizza;

    if (title && price && img) {
      updatePizza(editPizza);
      handleToggeEdit();
    }
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={editPizza.title}
      ></input>

      <input
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={editPizza.price}
      ></input>

      <input
        name="img"
        type="text"
        placeholder="Изображение"
        onChange={handleChange}
        value={editPizza.img}
      ></input>

      <button type="submit">Подтвердить изменения</button>
    </form>
  );
};

export default EditPizzaForm;
