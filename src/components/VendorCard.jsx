import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    IconButton,
  } from '@chakra-ui/react';
  import { FaEdit, FaTrash } from "react-icons/fa";

const VendorCard = ({vendor}) => {
    const {city,img,name,address,total_products,todays_order,state}=vendor;
  return (
    
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src="https://img.lovepik.com/photo/40027/7318.jpg_wh300.jpg"
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={img}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {name}
            </Heading>
            <Text color={'gray.500'}>{state}</Text>
            <Text >State : <span style={{color:'gray'}}> {address}</span></Text>
            <Text >City :<span style={{color:'gray'}}>{city}</span></Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{total_products}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
              Total Products
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{todays_order}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
              Todays Orders
              </Text>
            </Stack>
          </Stack>

          <Flex mt={8} justifyContent="space-between">
                    <IconButton
                        icon={<FaEdit />}
                        fontSize={'sm'}
                        rounded={'full'}
                        _focus={{
                            bg: 'green.200',
                        }}>
                        Edit
                    </IconButton>
                    <Button
                        fontSize={'sm'}
                        rounded={'full'}
                        color={'white'}
                        bg={'blue.400'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.200',
                        }}>
                        Orders
                    </Button>
                    <IconButton
                        icon={<FaTrash />}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'red.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'red.500',
                        }}
                        _focus={{
                            bg: 'red.500',
                        }}>
                        Remove
                    </IconButton>
                </Flex>
        </Box>
      </Box>
    
  )
}

export default VendorCard
