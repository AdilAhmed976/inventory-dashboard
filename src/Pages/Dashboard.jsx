import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentTab, setCurrentTab] = useState('ACTIVE');
  return (
    <Box>
      <Flex justifyContent={'space-between'} p={'20px'} width={'100%'}>
        <Box sx={{ display: 'flex', flexDir: 'row', gap: '20px' }}>
          <Button
            onClick={() => {
              setCurrentTab('ACTIVE');
            }}
            sx={{
              backgroundColor: currentTab === 'ACTIVE' ? 'blue' : '',
              color: currentTab === 'ACTIVE' ? 'white' : '',
            }}
          >
            Active Sale Orders
          </Button>
          <Button
            onClick={() => {
              setCurrentTab('COMPLETED');
            }}
            sx={{
              backgroundColor: currentTab === 'COMPLETED' ? 'blue' : '',
              color: currentTab === 'COMPLETED' ? 'white' : '',
            }}
          >
            Completed Sale Orders.
          </Button>
        </Box>
        <Button onClick={onOpen} leftIcon={<RiAddLine />}>
          <Text>Sale Order</Text>
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>lknfsaj</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Dashboard;
