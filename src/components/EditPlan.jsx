import {
    Box, Button, Flex, Input,
    VStack,
    FormControl, FormLabel, HStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'

const EditPlan = ({ handleEdit,id }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [info, setInfo] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            title,
            price: price,
            info: info.split(',').map((item) => item.trim()),
        }
        console.log('data: ', data);
        // try {
        //     const response = await axios.patch('https://example.com/plans/id', data)

        //     console.log(response.data)
        // } catch (error) {
        //     console.error(error)
        // }
    }

    return (
        <Flex
            h={'100vh'}
            alignItems="center"
            justifyContent={"center"}
        >
            <Box background={"white"} p={"15px 40px"} width={{base:"100%",lg:"30%",md:"30%"}} borderRadius={5}>
                <VStack as="form" onSubmit={handleSubmit} spacing={4}>
                    <FormControl id="title">
                        <FormLabel>Title</FormLabel>
                        <Input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                    </FormControl>
                    <FormControl id="price">
                        <FormLabel>Price</FormLabel>
                        <Input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
                    </FormControl>
                    <FormControl id="info">
                        <FormLabel>Info</FormLabel>
                        <Input type="text" value={info}
                            placeholder="Add Comma After each point"
                            onChange={(event) => setInfo(event.target.value)}
                        />
                    </FormControl>
                    <Flex w="100%" justifyContent="flex-end" gap={2}>
                        <Button onClick={() => handleEdit(false)} >Cancel</Button>
                        <Button colorScheme="blue" type="submit">Save</Button>
                    </Flex>
                </VStack>
            </Box>
        </Flex>
    )
}

export default EditPlan
