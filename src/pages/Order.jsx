import { Select } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useState, useEffect } from 'react'
import OrdersTable from '../components/OrdersTable';
import { AuthContext } from '../context/AuthContext';
import useFetch from '../hooks/useFetch';
const products = [
  { id: 1, img: "https://cdn.shopify.com/s/files/1/0587/1625/8481/products/weightgain2.jpg?v=1667028435", title: "Muscel Power", price: 200, qty: 10 },
  { id: 2, img: "https://cdn.shopify.com/s/files/1/0602/2440/5694/products/WeightPlus-02_540x.jpg?v=1676976580", title: "Weight Plus", price: 200, qty: 10 },
  { id: 3, img: "https://cdn.shopify.com/s/files/1/0587/1625/8481/products/weightgain2.jpg?v=1667028435", title: "Muscel Power", price: 200, qty: 10 },
  { id: 4, img: "https://cdn.shopify.com/s/files/1/0602/2440/5694/products/WeightPlus-02_540x.jpg?v=1676976580", title: "Weight Plus", price: 200, qty: 10 },
  { id: 5, img: "https://cdn.shopify.com/s/files/1/0587/1625/8481/products/weightgain2.jpg?v=1667028435", title: "Muscel Power", price: 200, qty: 10 },
  { id: 6, img: "https://cdn.shopify.com/s/files/1/0602/2440/5694/products/WeightPlus-02_540x.jpg?v=1676976580", title: "Weight Plus", price: 200, qty: 10 },
  { id: 7, img: "https://cdn.shopify.com/s/files/1/0587/1625/8481/products/weightgain2.jpg?v=1667028435", title: "Muscel Power", price: 200, qty: 10 },
  { id: 8, img: "https://cdn.shopify.com/s/files/1/0602/2440/5694/products/WeightPlus-02_540x.jpg?v=1676976580", title: "Weight Plus", price: 200, qty: 10 },
];
const Order = () => {
  const [data, setData] = useState([])
  const { state } = useContext(AuthContext);
  const [selectedValue, setSelectedValue] = useState('');

  // "https://erin-tough-viper.cyclic.app/order/vendororder" for vendor side
  const fetchData = async () => {
    await axios.get(`https://erin-tough-viper.cyclic.app/order/totalorder?status=${selectedValue}`, {
      headers: { Authorization: state.token }
    })
      .then(res => {

        setData(res.data.data)
      })
      .catch(e => console.log(e));
  }

  useEffect(() => {
    fetchData()
  }, [selectedValue])

  const handleStatus = (value) => {
    console.log('value: ', value);
    // setSelectedValue(value);
    // console.log(selectedValue);
  };

  const handleFilter = async(e) => {
    let type = e.target.value;
    if (type !== "") {
      setSelectedValue(type)
      }
  };

  // console.log(data);
  // console.log(selectedValue);
  return (
    <div>
      <Select placeholder='Filter option' variant="filled" onChange={handleFilter} mb={4}>
        <option value='Pending'>Pending Orders</option>
        <option value='Dispatch'>Dispatched Orders</option>
        <option value='Delivere'>Delivered Orders</option>
        <option value='Cancel'>Cancel Orders</option>
      </Select>
      <OrdersTable data={data} handleStatus={handleStatus} />
    </div>
  )
}

export default Order
