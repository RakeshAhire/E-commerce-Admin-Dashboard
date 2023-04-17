import { Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import SearchInput from '../components/SearchInput';
import UserLoader from '../components/UserLoader';
import VendorCard from '../components/VendorCard';
import useFetch from '../hooks/useFetch';

const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  const { data, loading, error, reFetch } = useFetch("https://erin-tough-viper.cyclic.app/vendor");
  console.log(data);


  const handleSearch = (e) => {
    // console.log(e.target.value)
  }
  return (
    <div>
      <SearchInput handleSearch={handleSearch} type="Vendors" />
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={6} w="100%" mt={5}>
        {loading ?
          Array(8).fill(" ").map((item, i) => (
            <UserLoader />
          ))
          : data.map((item, i) => (
            <VendorCard key={i} vendor={item} />
          ))}
      </Grid>
    </div>
  )
}
export default Vendors;