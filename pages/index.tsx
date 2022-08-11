import type { NextPage } from "next";
import Head from "next/head";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import UserProfiles from "../components/UserProfiles";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const methods = useForm({mode: "onChange"});
  const onSubmit = methods.handleSubmit((data) => {
    alert("Tu cuenta se ha registrado exitosamente!");
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>

      <h1>Crea tu usuario para que comiences tu membresía.</h1>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <InputField
            name="Email"
            autocomplete={["@gmail.com", "@hotmail.com"]}
          />
          <InputField name="Nombre" />
          <InputField name="Apellido" />
          <SelectField
            name="plan"
            options={["Basico", "Estandar", "Premium"]}
          />
          {/* Agregamos el componente al formulario */}
          <UserProfiles />
          <button disabled={!methods.formState.isValid} >Siguiente</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Home;
