import React, { useState } from "react";

const Create = props => {
  const reset = { name: "", email: "", role: "" };
  const [newCard, setNewCard] = useState(reset);

  const handleChange = event => {
    setNewCard({
      ...newCard,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!newCard.name || !newCard.email || !newCard.role) {
      alert("Please fill out all fields!");
    } else {
      props.newCard([newCard, ...props.card]);
      resetForm();
    }
  };

  const resetForm = () => {
    setNewCard(reset);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={newCard.name}
      />
      <input
        name="email"
        placeholder="E-Mail"
        onChange={handleChange}
        value={newCard.email}
      />
      <input
        name="role"
        placeholder="Role"
        onChange={handleChange}
        value={newCard.role}
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

export default Create;
