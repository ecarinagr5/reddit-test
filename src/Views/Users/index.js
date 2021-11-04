import React, { useEffect } from  'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  actionCreators as usersActions,
  selector as usersSelector,
} from '../../Redux/features/users'

import { Table } from 'antd';


const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => usersSelector(state))

  useEffect(()=>{
    dispatch(usersActions.list());
  }, [dispatch]);

      const dataSource = users.dataList
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'User Name',
          dataIndex: 'username',
        },
        {
          title: 'Email',
          dataIndex: 'email',
        }
      ];
      
    return (
      <Table 
        dataSource={dataSource} 
        columns={columns} 
        loading={users.isLoading}
        rowKey={users.id}
        key={users.id}
      />
    )
}

export default Users;