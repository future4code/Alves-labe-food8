import React, { useState } from 'react'
import { FilterByCategory, FilterTitle} from './Styled'

const Filter = (props) => {

  const categories = ["Todos", "Hamburguer", "Asiática", "Italiana" ,"Árabe", "Mexicana", "Baiana", "Carnes", "Petiscos", "Sorvetes" ]

  const [placeholder, setPlaceholder] = useState("Busca em Todos")

  const onClickCategory = (category) => {
    props.changeCategory(category)
    setPlaceholder(`Busca em ${category}`)
  }

  const categoriesMenu = categories.map((category) => {
    return (
      <FilterTitle key={category} onClick={() => onClickCategory(category)}>{category}</FilterTitle>
    )
  })
  
  return (
    <div>
      <input
        onChange={props.changeName}
        value={props.filterName}
        placeholder={placeholder}
      />
      <FilterByCategory>
        {categoriesMenu}
      </FilterByCategory>
    </div>
  )
}
export default Filter