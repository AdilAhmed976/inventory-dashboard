import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    if (data.email === 'example@gmail.com' && data.password === '12345678') {
      localStorage.setItem('authenticated', 'true');
    } else {
      alert('Wrong Email / password');
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            email: example@gmail.com , password : 12345678
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          border={"1px solid lightgray"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <Text sx={{ marginBottom: '10px' }} fontSize="2xl">
                  Email
                </Text>
                <Input
                  isInvalid={errors.email}
                  errorBorderColor="red.600"
                  marginBottom={'10px'}
                  {...register('email', { required: true })}
                />
                <Box sx={{ height: '30px' }}>
                  {errors.email && (
                    <span style={{ color: 'red' }}>
                      * This field is required
                    </span>
                  )}
                </Box>
              </Box>

              <Box>
                <Text sx={{ marginBottom: '10px' }} fontSize="2xl">
                  Password
                </Text>
                <Input
                  isInvalid={errors.password}
                  errorBorderColor="red.600"
                  marginBottom={'10px'}
                  {...register('password', { required: true })}
                />
                <Box sx={{ height: '30px' }}>
                  {errors.password && (
                    <span style={{ color: 'red' }}>
                      * This field is required
                    </span>
                  )}
                </Box>
              </Box>
              <Button
                type="submit"
                width={'100%'}
                colorScheme="teal"
                variant="solid"
              >
                login
              </Button>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
