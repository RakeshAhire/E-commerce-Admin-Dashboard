import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PasswordField } from '../components/PasswordField'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const toast = useToast()
  const { loginUser } = useContext(AuthContext)
  const [details, setDetails] = useState({
    email: undefined,
    password: undefined
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { value, id } = e.target;
    setDetails({ ...details, [id]: value })
    // console.log('details: ', details);
  }
  const adminLogin = () => {
    if ((details.email === undefined||null) && (details.password === undefined||null) )  {
    return  toast({
        title: "Error",
        description: "Please fill Details",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    }
    else {
      axios.post("https://erin-tough-viper.cyclic.app/admin/login", details)
        .then(res => {
          console.log(res)
          if (res.data.error) {
            toast({
              title: "Error",
              description: res.data.msg,
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }
          else {
            loginUser(res.data.token);
            navigate("/admin");
            toast({
              title: "Success",
              description: res.data.msg,
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }
        })

        .catch(e => console.log(e))
    }
  }
  return (
    <Container
      maxW="lg"

      py={{
        base: '12',
        md: '24',
      }}
      px={{
        base: '0',
        sm: '8',
      }}
    >

      <Stack spacing="8">
        <Stack spacing="6">
          <Stack
            spacing={{
              base: '2',
              md: '3',
            }}
            textAlign="center"
          >
            <Heading
              size={{
                base: 'xs',
                md: 'sm',
                lg: "md"
              }}
            >
              Log in
            </Heading>

          </Stack>
        </Stack>
        <Box
          py={{
            base: '0',
            sm: '8',
          }}
          px={{
            base: '4',
            sm: '10',
          }}
          bg={{
            base: 'transparent',
            sm: 'bg-surface',
          }}
          boxShadow={{
            base: 'none',
            sm: 'md',
          }}
          borderRadius={{
            base: 'none',
            sm: 'xl',
          }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input onChange={handleChange} id="email" type="email" />
              </FormControl>
              <PasswordField onChange={handleChange} id={"password"} />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Link to="/forgot-password">
                <Button variant="link" colorScheme="blue" size="sm">
                  Forgot password?
                </Button>
              </Link>
            </HStack>
            <Stack spacing="6">
              <Button onClick={adminLogin} colorScheme='blue'>Sign in</Button>
              {/* <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup /> */}
              <HStack spacing="1" justify="center">
                <Text color="muted">Don't have an account?</Text>
                <Button variant="link" colorScheme="blue">
                  Sign up
                </Button>
              </HStack>
            </Stack>
          </Stack>
        </Box>

      </Stack>
    </Container>
  )
}

export default Login
