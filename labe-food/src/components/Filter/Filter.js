import React from 'react'
import { FilterByCategory, FilterTitle} from './Styled'

const Filter = (props) => {
  return (
    <div>
      <input
        onChange={props.changeName}
        value={props.filterName}
        placeholder='Busca'
      />

      <FilterByCategory>
        <FilterTitle>Burguer</FilterTitle>
        <FilterTitle>Asiática</FilterTitle>
        <FilterTitle>Italiana</FilterTitle>
        <FilterTitle>Árabe</FilterTitle>
        <FilterTitle>Mexicana</FilterTitle>
        <FilterTitle>Baiana</FilterTitle>
        <FilterTitle>Carnes</FilterTitle>
        <FilterTitle>Petiscos</FilterTitle>
        <FilterTitle>Sorvetes</FilterTitle>
      </FilterByCategory>

    </div>
  )
}

export default Filter



// CATEGORIAS:
// Árabe, Asiática, Hamburguer, Italiana, Sorvetes, Carnes, Baiana, Petiscos, Mexicana

