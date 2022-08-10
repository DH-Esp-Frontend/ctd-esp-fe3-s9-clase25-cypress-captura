import type { NextPage } from 'next'
import Head from 'next/head'
import InputField from '../components/InputField'
import SelectField from '../components/SelectField'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const handleSubmit = ()=>alert("Tu cuenta se ha registrado exitosamente!")

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>

      <h1>
        Crea tu usuario para que comiences tu membresía.
      </h1>
        <form onSubmit={handleSubmit}>
          <InputField placeholder='Email' autocomplete={['@gmail.com', '@hotmail.com']} />
          <InputField placeholder='Nombre'/>
          <InputField placeholder='Apellido'/>
          <SelectField name='plan' options={["Basico", "Estandar", "Premium"]}/>
          <button>Siguiente</button>
        </form>
    </div>
  )
}

export default Home
