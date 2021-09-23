import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table, Avatar } from 'antd';
const columns = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key'
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '内容',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: '作者',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex'
  },
  {
    title: 'ZIP',
    dataIndex: 'zip',
    key: 'zip'
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    key: 'avatar',
    render: avatar => <Avatar src={avatar}/>
  }
];

const HookInfos = () => {
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('/infos')
    .then(res => {
      setLoading(false)
      setInfos(res.data.data)
    })
  }, [])

  return (
    <div>
      {
        loading?<div>Loading</div>:<Table columns={columns} dataSource={infos} />
      }
      
    </div>
  )
}

export default HookInfos;