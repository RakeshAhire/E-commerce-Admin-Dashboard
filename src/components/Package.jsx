import {
    Button,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Box,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    IconButton
} from '@chakra-ui/react';
import { useState } from 'react';

import { FaCheckCircle } from 'react-icons/fa';
import { FaEdit, FaTrash } from "react-icons/fa";
import EditPlan from './EditPlan';

export const PackageTier = ({ title, options, typePlan, checked = false,id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [editOpen, setEditopen] = useState(false);
    const handleDelete = () => {

    }
    return (
        <Stack
            p={3}
            py={3}
            justifyContent={{
                base: 'flex-start',
                md: 'space-around',
            }}
            direction={{
                base: 'column',
                md: 'row',
            }}
            alignItems={{ md: 'center' }}>
            <Heading size={'md'}>{title}</Heading>
            <List spacing={3} textAlign="start">
                {options.map((desc, id) => (
                    <ListItem key={desc.id}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        {desc}
                    </ListItem>
                ))}
            </List>
            <Heading size={'xl'}>{typePlan}</Heading>

            <Flex justifyContent="space-between" gap={2} direction={{base:"column",sm:"column"}} >
                <IconButton
                    onClick={() => setEditopen(true)}
                    icon={<FaEdit />}
                    rounded={'full'}
                    fontSize={'sm'}
                    _focus={{
                        bg: 'green.200',
                    }}>
                    Edit
                </IconButton>
                {editOpen && <Box
                    w={"100vw"}
                    h={"100vh"}
                    backgroundColor="blackAlpha.400"
                    position="absolute"
                    top="0"
                    left="-15px"
                    zIndex={999}
                    blur='2px'
                     filter='auto'
                >
                    <EditPlan id={id} handleEdit={setEditopen} />
                </Box>
                }


                <IconButton
                onClick={handleDelete}
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
                    Delete
                </IconButton>
                {/* Subscription List */}
                <Button
                    onClick={onOpen}

                    fontSize={'sm'}
                    rounded={'full'}
                    color={'white'}
                    bg={'purple.500'}
                    _hover={{
                        bg: 'purple.500',
                    }}
                    _focus={{
                        bg: 'purple.200',
                    }}>
                    Subscribers
                    <Modal
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Subsciber List</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                Whos subscribe this plan
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Button>
            </Flex>
        </Stack>
    );
};