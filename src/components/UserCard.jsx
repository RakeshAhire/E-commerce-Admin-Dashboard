import {
    Heading,
    Avatar,
    Box,
    Text,
    Flex,
    Button,
    useColorModeValue,
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
import { EditUser } from './EditUser';
import { FaEdit, FaTrash } from "react-icons/fa";


export const UserCard = ({ user }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [editOpen, setEditopen] = useState(false);
    return (

        <Box
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
            <Avatar
                size={["sm", "md", 'xl']}
                src={user.img}
                alt={'Avatar Alt'}
                mb={4}
                pos={'relative'}
                _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                }}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
                {user.name}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
                {user.email}
            </Text>
            <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}>
                {user.address}
            </Text>

            {/* <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #art
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #photography
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #music
                    </Badge>
                </Stack> */}

            <Flex mt={8} justifyContent="space-between" >
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
                    backgroundColor="blackAlpha.300"
                    position="absolute"
                    top="0"
                    left="-15px"
                    zIndex={999}
                >
                    <EditUser handleEdit={setEditopen} />
                </Box>
                }
                <Button
                    onClick={onOpen}

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
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Orders</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>

                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
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
                    Delete
                </IconButton>
            </Flex>
        </Box>

    );
}