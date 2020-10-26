import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { addPersonal } from '../../redux/actions'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import useStoreLoaded from '../../hooks/useStoreLoaded'
import LoadingSpinner from '../LoadingSpinner'

function ModalAddPersonal (props) {
  const dispatch = useDispatch()
  const personal = useSelector(state => state.personal.items)
  const positions = useSelector(state => state.position.items)

  const isLoaded = useStoreLoaded()
  const [person, setPerson] = useState({ name: '', secondName: '' })

  useEffect(() => {
    if (isLoaded) {
      setPerson({ ...person, position: positions[Object.keys(positions)[0]]?.id })
    }
  }, [isLoaded])

  const submitValue = () => {
    // check length of person.name and person.secondName fields
    if (person.name.length <= 1 || person.secondName.length <= 1) {
      alert('Длина полей Имя и Фамилия должна быть более 1 символа')
      return false
    }
    const newId = Math.max(...personal.map(user => user.id), 0) + 1
    dispatch(addPersonal({ ...person, id: newId }))
    props.onHide()
  }

  if (!isLoaded) {
    return <LoadingSpinner/>
  } else {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                        Добавить сотрудника
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Имя</Form.Label>
            <Form.Control type="text" onChange={ (e) =>
              setPerson({ ...person, name: e.target.value })
            }/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control type="text" onChange={ (e) =>
              setPerson({ ...person, secondName: e.target.value })
            }/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Должность</Form.Label>
            <Form.Control as="select" onChange={ (e) =>
              setPerson({ ...person, position: e.target.value })
            }>
              {Object.values(positions).map((value) =>
                <option key={value.id} value={value.id} >{ value.name }</option>
              )}
            </Form.Control>
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant={'danger'} onClick={props.onHide}>Закрыть</Button>
          <Button variant={'success'} onClick={submitValue}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ModalAddPersonal
