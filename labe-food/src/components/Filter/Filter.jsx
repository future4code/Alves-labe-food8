import React from 'react'
import { FilterByCategory, FilterTitle} from './Styled'

const Filter = (props) => {

  const categories = ["Todos", "Hamburguer", "Asiática", "Italiana" ,"Árabe", "Mexicana", "Baiana", "Carnes", "Petiscos", "Sorvetes" ]

  const categoriesMenu = categories.map((category) => {
    return (
      <FilterTitle onClick={() => props.changeCategory(category)}>{category}</FilterTitle>
    )
  })

  return (
    <div>
      <input
        onChange={props.changeName}
        value={props.filterName}
        // onClick={() => props.changeCategory("Todos")}
        placeholder='Busca'
      />

      <FilterByCategory>
        {categoriesMenu}
      </FilterByCategory>

      

    </div>
  )
}

export default Filter



// CATEGORIAS:
// Árabe, Asiática, Hamburguer, Italiana, Sorvetes, Carnes, Baiana, Petiscos, Mexicana

