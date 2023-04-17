import React, { useEffect, useState } from 'react';
import { Grid } from '@chakra-ui/react';
import { UserCard } from "../components/UserCard"
import SearchInput from '../components/SearchInput';
import useFetch from '../hooks/useFetch';
import UserLoader from '../components/UserLoader';
const user = [
  {
    name: "Lindsey James",
    img: 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
  },
  {
    name: "Lindsey James",
    img: 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
  },
  {
    name: "Lindsey James",
    img: 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
  },
  {
    name: "Lindsey James",
    img: 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
  },
  {
    name: "Lindsey James",
    img: 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
  },
  {
    name: "Lindsey James",
    img: 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
  },
  {
    name: "Lindsey James",
    img: 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
  },
  {
    name: "Lindsey James",
    img: 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
  },
  {
    name: "Lindsey James",
    img: 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
  },
  {
    name: "Lindsey James",
    img: 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
  },
]
const Users = () => {
  const [users, setUsers] = useState([]);
  const { data, loading, error, reFetch } = useFetch();

  useEffect(() => {
    setUsers(user)
  }, [])

  const handleSearch = (e) => {
    // console.log(e.target.value)
  }
  return (
    <div >
      <SearchInput handleSearch={handleSearch} type="Users" />
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={6} mt={3}>
        {!loading ?
          Array(8).fill(" ").map((item, i) => (
            <UserLoader />
          ))
          : users.map((item, i) => (
            <UserCard key={i} user={item} />
          ))}
      </Grid>
    </div>
  )
}

export default Users
