import React, { useState } from 'react'
import { Stack, Text, Box, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Filter = (props) => {

  const categories = ["Todos", "Hamburguer", "Asiática", "Italiana", "Árabe", "Mexicana", "Baiana", "Carnes", "Petiscos", "Sorvetes"]

  const [placeholder, setPlaceholder] = useState("Busca em Todos")

  const onClickCategory = (category) => {
    props.changeCategory(category)
    setPlaceholder(`Busca em ${category}`)
  }

  const categoriesMenu = categories.map((category) => {
    return (
      <Box key={category}>
        <Text onClick={() => onClickCategory(category)}>{category}</Text>
      </Box>
    )
  })

  return (
    <div>
      <InputGroup p='5px'>
        <InputLeftElement
          pointerEvents='none'
          h={'100%'}
          children={<SearchIcon color='gray.300' />}
        />
        <Input 
          onChange={props.changeName}
          value={props.filterName}
          placeholder={placeholder} 
        />
      </InputGroup>
      <Stack 
      spacing={8} 
      maxW='100vw' 
      p={'5px'} 
      direction='row' 
      flexWrap={'nowrap'} 
      overflow={{ base: 'scroll', md: 'auto', lg: 'auto' }}>
      {categoriesMenu}
      </Stack>
    </div>
  )
}
export default Filter