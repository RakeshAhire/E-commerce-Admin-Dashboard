import React, { useState } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    IconButton,
    Box,
    Flex,
    Text,
    Menu, MenuButton, MenuList, MenuItemOption, Button
} from "@chakra-ui/react";


const OrdersTable = ({ data, handleStatus }) => {
    // console.log('data: ', data);

    const fields = ["Total Items", "Total Amount", "Delivery Adress", "Status", "Change Status"];

    return (
        <Table variant="simple">
            <Thead>
                <Tr>
                    {fields.map((field) => (
                        <Th key={field} backgroundColor="blue.400" color="white">{field}</Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {data?.map((item, i) => (
                    <Tr key={item._id}>
                        <Td>{item.products.length}</Td>
                        <Td>{item.totalprice}</Td>
                        <Td>{item.shippingAddress}</Td>
                        <Td>
                            <Flex alignItems="center" gap={5}>
                                {item.orderStatus}
                                <Box p={2} w={1} h={1} borderRadius="full"
                                    bgColor={item.orderStatus == "Pending" ? "yellow.500"
                                        : item.orderStatus == "dispatched" ? "blue.500"
                                            : item.orderStatus == "Cancel" ? "red.500"
                                                : "green.500"}
                                ></Box>
                            </Flex>
                        </Td>
                        <Td>
                            <Menu closeOnSelect={false}>
                                <MenuButton as={Button} colorScheme='blue' w='auto'>
                                    Update Status
                                </MenuButton>
                                <MenuList w="max-content">
                                    <MenuItemOption value='Pending' onClick={() => handleStatus('Pending')}>
                                        Recieved
                                    </MenuItemOption>
                                    <MenuItemOption value='Dispatch' onClick={() => handleStatus('Dispatch')}>
                                        Dispatch
                                    </MenuItemOption>
                                    <MenuItemOption value='Deliver' onClick={() => handleStatus('Deliver')}>
                                        Delivered
                                    </MenuItemOption>
                                    <MenuItemOption value='Cancel' onClick={() => handleStatus('Cancel')}>
                                        Canceled
                                    </MenuItemOption>
                                </MenuList>
                            </Menu>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default OrdersTable;