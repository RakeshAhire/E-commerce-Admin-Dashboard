import {
    Box,
    Divider,
    Flex,
    Heading,
    IconButton,
    Stack,
    Text,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    VStack,
    FormControl, FormLabel,
} from '@chakra-ui/react';
import { PackageTier } from '../components/Package';
import { AiOutlineFileAdd } from "react-icons/ai";
import { useContext, useState } from 'react';
import axios from 'axios';
import useFetch from '../hooks/useFetch';
import { AuthContext } from '../context/AuthContext';

const options = [
    { id: 1, desc: '1 lorem ipsum' },
    { id: 2, desc: 'Lorem, ipsum dolor.' },
    { id: 3, desc: 'Monthly Updates' },
];


const Subscription = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [info, setInfo] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data } = useFetch("https://erin-tough-viper.cyclic.app/subscription")

    const { state } = useContext(AuthContext);
    const handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            title,
            price: price,
            info: info.split(',').map((item) => item.trim()),
        }

        try {
            const response = await axios.post('https://erin-tough-viper.cyclic.app/subscription/add', payload, {
                headers: { Authorization: state.token }
            })

            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Box py={6} px={5} >
            <Flex w="100%" justifyContent="flex-end" position="sticky"
                top="20px">
                <IconButton
                    onClick={onOpen}
                    icon={<AiOutlineFileAdd />}
                    rounded={'full'}
                    fontSize={'2xl'}
                    bg='green.500'
                    _focus={{
                        bg: 'green.200',
                    }} />
                <Modal
                    isCentered
                    onClose={onClose}
                    isOpen={isOpen}
                    motionPreset='slideInBottom'
                    size={{ base: "xl" }}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Add Plan</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <VStack as="form" spacing={4}>
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
                            </VStack>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                _hover={{
                                    bgColor: "gray.500",
                                    color: "white"
                                }}
                                mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button onClick={handleSubmit} colorScheme='blue'>Save</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
            <Stack spacing={4} width={'100%'} direction={'column'} >
                <Stack
                    p={5}
                    alignItems={'center'}
                    justifyContent={{
                        base: 'flex-start',
                        md: 'space-around',
                    }}
                    direction={{
                        base: 'column',
                        md: 'row',
                    }}>
                    <Stack
                        width={{
                            base: '100%',
                            md: '40%',
                        }}
                        textAlign={'center'}>
                        <Heading size={'lg'}>
                            The Right Plan for <Text color="purple.400">Your Business</Text>
                        </Heading>
                    </Stack>
                    <Stack
                        width={{
                            base: '100%',
                            md: '60%',
                        }}>
                        <Text textAlign={'center'}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                            quod in iure vero. Facilis magnam, sed officiis commodi labore
                            odit.
                        </Text>
                    </Stack>
                </Stack>
                <Divider />
                {data.map((item, i) => (
                    <>
                        <PackageTier title={item.title} typePlan={item.price} options={item.info} />
                        <Divider />
                    </>
                ))}
            </Stack>
        </Box>
    );
};

export default Subscription;