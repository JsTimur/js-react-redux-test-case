import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { updatePersonal } from '../../redux/actions'
import * as PropTypes from 'prop-types'

function ModalUpdatePersonal (props) {
  const dispatch = useDispatch()
  const positions = useSelector(state => state.position.items)
  const [person, setPerson] = useState({ ...props.item })

  const submitValue = () => {
    dispatch(updatePersonal(person))
    // eslint-disable-next-line react/prop-types
    props.onHide()
  }

  useEffect(() => {
    setPerson(props.item)
  }, [props.item])

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
          Изменить сотрудника
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          ID #{props.item.id}
        </p>
        <Form.Group>
          <Form.Label>Имя</Form.Label>
          <Form.Control type="text" defaultValue={props.item.name} onChange={ (e) => {
            setPerson({ ...person, name: e.target.value })
          }}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control type="text" defaultValue={props.item.secondName} onChange={ (e) => {
            setPerson({ ...person, secondName: e.target.value })
          }}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Должность</Form.Label>
          <Form.Control as="select" defaultValue={props.item.position} onChange={ (e) => {
            setPerson({ ...person, position: e.target.value })
          }}>
            {Object.values(positions).map((value) =>
              <option key={value.id} value={value.id}>{ value.name }</option>
            )}
          </Form.Control>
        </Form.Group>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Закрыть</Button>
        <Button variant="success" onClick={submitValue}>Сохранить</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalUpdatePersonal

ModalUpdatePersonal.propTypes = {
  onHide: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.number,
    position: PropTypes.number,
    secondName: PropTypes.string,
    name: PropTypes.string
  })
}
