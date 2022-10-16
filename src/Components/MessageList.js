import React, { useEffect, useState, useContext } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import Table from './Table';
import Config from '../Config';
import { UtilsContect } from '../ContectsAPI/ContectsAPI'

export default function MessageList() {
  // for Notification
  const noti = useContext(UtilsContect);
  // set columns 
  const COLUMNS = [
    {
      Header: "Id",
      accessor: (row, index) => index + 1
    },
    {
      Header: "Message",
      accessor: "message"
    },
    {
      Header: "By",
      accessor: "type"
    }
  ]

  //to data store from get api
  const [users, setUsers] = useState([])
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  // festch data from csf_responsemaster table 
  function featchResponse(email) {
    setLoading(true)
    axios.post(`${Config.IP}/chat/chatList`, { email })
      .then((res) => {
        // handle success
        if (res.data === 'E') {
          noti.addNewMessage('Chat Not Exist', 'danger');
        } else {
          setData(res.data?.messages)
          setName(res.data?.firstname + ' ' + res.data?.lastname)
          noti.addNewMessage('Data Loaded', 'success');
          setTimeout(() => {
            setLoading(false)
          }, 300)
        }
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    axios.get(`${Config.IP}/chat/emailList`)
      .then((res) => {
        // handle success
        setUsers(res.data)
        setEmail(res.data[0].email)
        featchResponse(res.data[0].email)
      })
      .catch((err) => console.log(err))
  }, [])

  // on chnaging email 
  const handleEmail = (e) => {
    setEmail(e.target.value)
    featchResponse(e.target.value)
  }
  return <>

    <Navbar />
    <div className='ska-bg'>
      <div className='h2 text-ska-primary ms-5'>Message List</div>
      <div className='row justify-content-center m-0'>
        <div className='col-md-11'>
          <div className='ska-box py-4 position-relative'>
            <div className='position-absolute top-0 start-0 m-1'>
              {name}
            </div>
            <div className='position-absolute top-0 end-0 m-1'>
              <div className="form-check form-check-inline">
                <select className="form-select" value={email} onChange={e => handleEmail(e)}>
                  {users[0] ? users.map(item => (
                    <option key={item.email} value={item.email}>
                      {item.email}
                    </option>
                  )) : ' '}
                </select>
              </div>
            </div>
          </div>
          {!loading && <Table datas={data} COLUMNS={COLUMNS} />}
        </div>
      </div>

    </div>
  </>
}
