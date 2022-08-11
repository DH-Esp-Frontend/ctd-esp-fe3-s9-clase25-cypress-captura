import { useFieldArray } from "react-hook-form";
import InputField from "../InputField";
import styles from "./UserProfiles.module.css";

const UserProfiles = () => {
  // Inicializamos el hook y obtenemos la propiedad "fields", la cual
  // contendrá un array con nuestros campos
  const { fields, append, remove } = useFieldArray({
    name: "userProfiles",
  });

  // Creamos una función para agregar un nuevo perfil
  const addProfile = () => append({ value: "" });

  // Creamos una función para remover el perfil en base al index
  const removeProfile = (index: number) => remove(index);

  return (
    <div className="inputContainer">
      <p>Perfiles de Usuario:</p>
      {/* Agregamos un botón que nos permite agegar un nuevo perfil
          de usuario y le pasamos nuestra función dentro del evento
          onClick.
        */}
      <button id="add-profile-btn" type="button" onClick={addProfile} className={styles.addButton}>
        +
      </button>
      {/* Hacemos un map del array que se encuentra almacenado en
         la propiedad "fields" y por cada uno renderizamos el input
         junto con el botón para eliminarlo
        */}
      {fields.map((field, index) => (
        // Agregamos la key utilizando el id de cada field que es asignado por
        // la librería
        <div className={styles.profilesContainer} key={field.id}>
          {/* Asignamos dinámicamente el nombre utilizando el mismo valor
            que empleamos como property del hook, más el índice y la propiedad
            "value" que tiene cada elemento. Agregamos un placeholder genérico para todos
            los casos
             */}
          <InputField
            name={`userProfiles.${index}.value`}
            placeholder="Nombre del perfil"
            data-testid="add-profile-input"
          />
          {/* Agregamos un botón al lado del input y llamamos a la función
              pasándole el indice del elemento a remover */}
          <button
            type="button"
            className={styles.removeButton}
            onClick={() => removeProfile(index)}
          >
            x
          </button>
        </div>
      ))}
      <br />
    </div>
  );
};

export default UserProfiles;
