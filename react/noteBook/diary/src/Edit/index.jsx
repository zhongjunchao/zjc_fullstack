import React, { useState } from 'react';
import './style.css'
import { List, InputItem, TextareaItem, DatePicker } from 'antd-mobile'

const Edit = () => {
  const [date, setDate] = useState()
  
  return (
    <div className="diary-edit">
      <List renderHeader={() => '编辑日记'}>
        <InputItem
          placeholder="请输入标题"
          clear
        >标题</InputItem>

        <TextareaItem
          placeholder="请输入日记内容"
          rows={6}
        />

        <DatePicker
          mode="date"
          title="请选择日期"
          extra="请选择日期"
          value={date}
          onChange={date => setDate(date)}
        >
          <List.Item arrow="horizontal">日期</List.Item>
        </DatePicker>
      </List>
    </div>
  )
}

export default Edit