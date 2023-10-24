

const FormEditarCat = ({ value, setValue, handleEdit }) => {

  return (
    <>
      <form className="mb-3" onSubmit={handleEdit}>
        <label htmlFor="nombreCat form-label">Categoría a editar</label>
        <p>
          <input
            className="inputCrearCat me-2"
            type="text"
            name="nombreCat"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button type="submit" className="botonCrearCat">
            Editar
          </button>
        </p>
      </form>
    </>
  );
};

export default FormEditarCat;
