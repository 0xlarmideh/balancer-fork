import { FilledButton } from '@/components/_common/Buttons'
import { MediumText } from '@/components/_common/Typography'
import { Box, Divider, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
import { CiSearch } from "react-icons/ci"
import { AiOutlinePlus } from "react-icons/ai";
import PoolTable from './PoolTable'

const Pools = () => {
  return (
    <Box pb='12rem'>
      <MediumText text="OpBnB pools" />
      <Divider my="24px" />
      <Flex color="brand.darkerText" justify="space-between">
        <InputGroup rounded={"8px"} maxW="240px" bg="white">
          <InputLeftElement py="20px">
            {/* <Search */}
            <CiSearch fontSize="22px" />
          </InputLeftElement>
          <Input
            py="20px"
            fontWeight='400'
            color="brand.darkerText"
            placeholder="Filter by token"
            onChange={() => {
              // Function goes here
            }}
          />
        </InputGroup>
        <FilledButton text='Create a pool' px='24px' leftIcon={<AiOutlinePlus />} />
      </Flex>
      <PoolTable />
    </Box>
  );
}

export default Pools