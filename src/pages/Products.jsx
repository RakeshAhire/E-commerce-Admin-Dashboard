import React, { useEffect, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import SearchInput from '../components/SearchInput';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  Grid,
  Button,
  Flex,
} from '@chakra-ui/react'
import useFetch from '../hooks/useFetch';
import UserLoader from '../components/UserLoader';


const products = [
  {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
]
const Products = () => {
  // const [data, setData] = useState([]);
  let id;
  const [selectedValue, setSelectedValue] = useState('');
  const [url, setUrl] = useState("https://erin-tough-viper.cyclic.app/product/allproductdata")
  const { data, loading, error, reFetch } = useFetch(url);
  console.log('data: ', data);

  useEffect(() => {
    reFetch()
  }, [url]);

  const handleSearch = (e) => {
    if (id) {
      clearTimeout(id)
    }
    id = setTimeout(() => {
      const newUrl = `https://erin-tough-viper.cyclic.app/product/allproductdata?q=${e.target.value}`;
      setUrl(newUrl);
    }, 1000)
  }

  const handleFilter = (e) => {
    setSelectedValue(e)
    const newUrl = `https://erin-tough-viper.cyclic.app/product/allproductdata?category=${e}`;
    setUrl(newUrl);
    // console.log(selectedValue);
    // https://aquamarine-crayfish-tux.cyclic.app/product/allproductdata?category=men
  }

  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center" direction={{base:"column",sm:"column"}}>
        <Menu closeOnSelect={false} >
          <MenuButton as={Button} colorScheme='blue' w={{lg:"8%"}} >
            Filter
          </MenuButton>
          <MenuList minWidth='240px'  >
            <MenuItemOption value='asc' onClick={() => handleFilter('asc')}>Ascending</MenuItemOption>
            <MenuItemOption value='desc' onClick={() => handleFilter('desc')}>Descending</MenuItemOption>
            <MenuItemOption value='men' onClick={() => handleFilter('men')}>Mens</MenuItemOption>
            <MenuItemOption value='phone' onClick={() => handleFilter('phone')}>Phone</MenuItemOption>
            <MenuItemOption value='country' onClick={() => handleFilter('country')}>Country</MenuItemOption>
          </MenuList>
        </Menu>

        <SearchInput handleSearch={handleSearch} type="Products" />

      </Flex>
      <Grid
        mt={5}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={6} >
        {loading ? <UserLoader /> :
          data?.map((property, i) => (
            <ProductCard key={property._id} property={property} />
          ))}
      </Grid>
    </div>
  )
}

export default Products
