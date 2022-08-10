import React, { FC } from 'react'
import styles from "./input.module.css"

type Props = {placeholder: string, autocomplete?: string[]}

const InputField: FC<Props> = ({placeholder, autocomplete}) => {
  return (
    <>
    <div className={styles.inputContainer} >
        <input className={styles.input} list={placeholder} placeholder={placeholder} />
    </div>
      {autocomplete?.length ? (
        <datalist id={placeholder} >
          {autocomplete.map(op => <option value={op} key={op}></option> )}
        </datalist>
      )
      : null}
    </>
    
  )
}

export default InputField