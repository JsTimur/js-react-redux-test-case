import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import useStoreLoaded from '../../hooks/useStoreLoaded'
import ModalUpdatePersonal from '../ModalUpdatePersonal/ModalUpdatePersonal'
import Button from 'react-bootstrap/Button'
import { deletePersonal, updatePersonalSort } from '../../redux/actions'
import ModalAddPersonal from '../ModalAddPersonal/ModalAddPersonal'
import sortArrayOfObjectsByFieldAndType from '../../helpers/sortArrayOfObjectsByFieldAndType'
import LoadingSpinner from '../LoadingSpinner'
import { FaEdit, FaTrashAlt, FaSortAmountDown, FaSortAmountUp, FaSortAlphaUp, FaSortAlphaDown } from 'react-icons/fa'
import Badge from 'react-bootstrap/Badge'

function PersonalTable () {
  const dispatch = useDispatch()
  const storePersonal = useSelector(state => state.personal)
  const storePositions = useSelector(state => state.position)

  const [personal, setPersonal] = useState([])
  const [modalAddShow, setModalAddShow] = useState(false)
  const [modalUpdateShow, setModalUpdateShow] = useState(false)
  const [modalUpdateItem, setModalUpdateItem] = useState({})
  const [sort, setSort] = useState({ field: null, type: null })
  const [lastSortField, setLastSortField] = useState(null)
  const [isReversed, setIsReversed] = useState(false)
  const isLoaded = useStoreLoaded()

  useEffect(() => {
    setPersonal(storePersonal.items)
  }, [storePersonal])

  useEffect(() => {
    if (sort.field !== null) {
      sortPersonalList()
    }
  }, [sort])

  const sortPersonalList = () => {
    const sortedPersonal = sortArrayOfObjectsByFieldAndType(personal, sort.field, sort.type)

    if (lastSortField !== null && lastSortField === sort.field) {
      setIsReversed(!isReversed)
      if (!isReversed) {
        sortedPersonal.reverse()
      }
    } else {
      setIsReversed(false)
    }

    dispatch(updatePersonalSort(sortedPersonal))
    setLastSortField(sort.field)
  }

  if (!isLoaded) {
    return (
      <LoadingSpinner/>
    )
  } else {
    return (
      <>
        <Button variant="success" className="float-right mb-2" onClick={() => { setModalAddShow(true) }}>
                    Добавить сотрудника
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: '20%' }}>ID</th>
              <th style={{ width: '20%' }} >Фамилия</th>
              <th style={{ width: '20%', cursor: 'pointer' }} onClick={() => setSort({ field: 'name', type: 'string' })}>
                            Имя
                <Badge className="ml-1" variant="info">sort</Badge>
                {sort.field === 'name' && !isReversed && <FaSortAlphaDown className="float-right mt-1"/>}
                {sort.field === 'name' && isReversed && <FaSortAlphaUp className="float-right mt-1"/>}
              </th>
              <th style={{ width: '20%', cursor: 'pointer' }} onClick={() => setSort({ field: 'position', type: 'number' })}>
                            Должность
                <Badge className="ml-1" variant="info">sort</Badge>
                {sort.field === 'position' && !isReversed && <FaSortAmountDown className="float-right mt-1"/>}
                {sort.field === 'position' && isReversed && <FaSortAmountUp className="float-right mt-1"/>}
              </th>
              <th style={{ width: '20%' }}>Действия</th>
            </tr>
          </thead>
          <tbody>
            {personal.map((data) =>
              <tr key={data.id}>
                <td>
                  {data.id}

                </td>
                <td>{data.secondName}</td>
                <td>{data.name}</td>
                <td>{storePositions.items[data.position]?.name}</td>
                <td className="text-center">
                  <Button className="btn-sm pb-2" variant="info" onClick={() => {
                    setModalUpdateItem(data)
                    setModalUpdateShow(true)
                  }}>
                    <FaEdit/>
                  </Button>
                  <Button className="ml-2 btn-sm pb-2" variant="danger" onClick={() => {
                    if (window.confirm('Вы уверены?')) dispatch(deletePersonal(data.id))
                  }}>
                    <FaTrashAlt/>
                  </Button>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <ModalUpdatePersonal
          show={modalUpdateShow}
          item={modalUpdateItem}
          onHide={() => setModalUpdateShow(false)}
        />
        <ModalAddPersonal
          show={modalAddShow}
          onHide={() => setModalAddShow(false)}
        />
      </>
    )
  }
}

export default PersonalTable
