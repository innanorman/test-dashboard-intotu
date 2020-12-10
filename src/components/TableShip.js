import React, { useEffect, useState } from 'react';
import UserService from '../services/user.services';
import { Table } from 'react-bootstrap';
import * as Icon from "react-icons/ai";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../custom.css';

function TableShip() {
  const [isOpen, setIsOpen] = useState(false);
  const [dataShipping, setDataShipping] = useState()

  const showToggle = (e) => setIsOpen(!isOpen)
  useEffect(() => {
    UserService.getShippingList().then(
      (response) => {
        console.log('isi response table', response.data)
        setDataShipping(response.data)
        console.log('isi dataShipping', dataShipping)
      }
    )
  }, {})

  const columns = [
    {
      text: 'ID'
    },
    {
      text: 'Data Pengirim'
    },
    {
      text: 'Data Penerima'
    },
    {
      text: 'Detail Barang'
    },
    {
      text: 'Status'
    },
    {
      text: 'Aksi'
    },
  ]
  return (
    <div className="table-ship">
      <Table>
        <thead>
          <tr>
            {columns.map((item, key) => (
              <th key={key}>{item.text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataShipping && dataShipping.data.map(data => (
            <tr>
              <td>
                {data.id}
              </td>
              <td>
                <Icon.AiOutlineCaretRight onClick={(e) => showToggle(e)} className={isOpen ? 'icon-direction' : 'icon-direction rotate'}/>
                {data.senderName}
                <div className={isOpen ? 'text-expand' : 'text-expand show'}>
                  <div className="row-content">
                    <p>Alamat:</p>
                    <p>{data.senderAddress}</p>
                  </div>
                  Email: {data.senderEmail}
                </div>                
              </td>
              <td>
                <Icon.AiOutlineCaretRight onClick={(e) => showToggle(e)} className={isOpen ? 'icon-direction' : 'icon-direction rotate'}/>
                {data.receiverName}
                <div className={isOpen ? 'text-expand' : 'text-expand show'}>
                  <div className="row-content">
                    <p>Alamat:</p>
                    <p>{data.receiverAddress}</p>
                  </div>
                  Email: {data.receiverEmail}
                </div>
              </td>
              <td>
                {data.goodsDetail}
              </td>
              <td>
                {data.status}
              </td>
              <td>
                aksi
              </td>
            </tr>
          ))}
          
        </tbody>
      </Table>
      Total {dataShipping.totalData} items
    </div>
  )
}

export default TableShip
