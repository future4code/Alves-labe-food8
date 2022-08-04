import React, { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  FormLabel,
  ModalFooter
} from '@chakra-ui/react'

export default function InitialFocus(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  const [quantity, setQuantity] = useState(0)

  const onClickModal = e => {
    props.handleQuantity(quantity)
    setQuantity(0)
    console.log(quantity)
    alert(`Você adicionou ${quantity} ao carrinho!`)
    // props.handleQuantity()
    // setQuantity(e.target.value)
  }

  // const handleEvent = e => {
  //   e.preventDefault()
  // }
  const handleInput = e => {
    setQuantity(e.target.value)
  }
  return (
    <>
      <Button onClick={onOpen}>Adicionar</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Selecione a Quantidade</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Adicionar a Quantidade</FormLabel>
              <form>
                <input
                  list="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={handleInput}
                  placeholder="0"
                />
                <datalist id="quantity">
                  <option value={1} />
                  <option value={2} />
                  <option value={3} />
                  <option value={4} />
                  <option value={5} />
                  <option value={6} />
                  <option value={7} />
                  <option value={8} />
                  <option value={9} />
                  <option value={10} />
                </datalist>
              </form>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancelar</Button>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onClickModal}
              ref={finalRef}
              type="submit"
            >
              Adicionar ao Carrinho
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}