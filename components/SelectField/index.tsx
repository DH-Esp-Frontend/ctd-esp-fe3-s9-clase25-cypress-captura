import React, { FC } from 'react'

type Props = {options: string[], name: string}

const SelectField: FC<Props> = ({options, name}) => {
  return (
    <select name={name} >
        <option key="default"  value="default" >Seleciona...</option>
        {options.map(op => <option key={op} value={op} >{op}</option>)}
    </select>
  )
}

export default SelectField