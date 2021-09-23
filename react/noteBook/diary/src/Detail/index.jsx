import React, { useEffect, useState } from 'react';
import { NavBar, Icon, List } from 'antd-mobile';
import { getQueryString } from '../utils'
import { useHistory, Link } from 'react-router-dom'
import axios from '../utils/axios'

const Detail = () => {
  const id = getQueryString('id')
  console.log(id);
  const history = useHistory()

  const [detail, setDetail] = useState({})
  useEffect(() => {
    axios.post(`/detail/${id}`).then(({data}) => {
      console.log(data);
    })
  }, [])
  
  return (
    <div className="diary-detail">
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.goBack()}
        rightContent={[
          <Link to={{ pathname: 'edit' }}>
            <Icon key="1" type="ellipsis" />
          </Link>
        ]}
      >
        明天跟小米一起吃饭{id}
      </NavBar>

      <List renderHeader={() => '2021-01-09'} className="my-list">
        <List.Item wrap>
          单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。
          eg：联系人列表。当你需要一个 infinite scroll 列表时，请使用 ListView。
          一般由主要信息、主要操作、次要信息、次要操作组成。
          主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边
        </List.Item>
      </List>
    </div>
  )
}

export default Detail