import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Flex,
  Button,
  Box,
} from "@chakra-ui/react";
import { PoolsData } from "./data";
import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Token1Logo from '@/public/icons/bnb.png'
import Token2Logo from "@/public/icons/eth.png";
import Image from "next/image";

const PoolTable = () => {
  const [more, setMore] = useState(10);
  const handleLoadMore = () => {
    setMore((prev) => prev + 10);
  };
  return (
    <>
      <TableContainer borderTopRadius="10px" mt="2rem">
        <Table variant="unstyled">
          <Thead color="white" bg="brand.lightBg">
            <Tr textTransform="capitalize" fontSize="28px" fontWeight="600">
              <Th
                textTransform="capitalize"
                fontSize="22px"
                fontWeight="600"
                py="2rem"
              >
                Pool
              </Th>
              <Th textTransform="capitalize" fontSize="22px" fontWeight="600">
                Pool Value
              </Th>
              <Th
                textTransform="capitalize"
                fontSize="22px"
                fontWeight="600"
                isNumeric
              >
                Volume (24h)
              </Th>
              <Th textTransform="capitalize" fontSize="22px" fontWeight="600">
                APR
              </Th>
            </Tr>
          </Thead>
          <Tbody color="brand.lighterText" bg="brand.darkgreen">
            {PoolsData.slice(0, more).map((pool, idx) => (
              <Tr key={idx}>
                <Td>
                  <Flex gap={2}>
                    <Image
                      style={{ width: "24px", height: "24px" }}
                      src={Token1Logo}
                      alt="Token 1 logo"
                    />
                    <Image
                      style={{ width: "24px", height: "24px" }}
                      src={Token2Logo}
                      alt="Token 2 logo"
                    />
                    <Text>
                      {pool?.token1}
                      {`(${pool?.token1Percentage}%)`}
                    </Text>
                    <Text>
                      {pool?.token2}
                      {`(${pool?.token2Percentage}%)`}
                    </Text>
                  </Flex>{" "}
                </Td>
                <Td>{pool?.poolValue.toLocaleString("en-US")} </Td>
                <Td>{pool?.volume24h.toLocaleString("en-US")} </Td>
                <Td>{pool?.apr}%</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        {more <= PoolsData?.length && (
          <Button
            bg="brand.lightBg"
            color="white"
            py="26px"
            _hover={{ opacity: 0.85 }}
            w="100%"
            onClick={() => {
              handleLoadMore();
            }}
            rightIcon={<AiOutlineArrowDown />}
          >
            Load more....
          </Button>
        )}
      </TableContainer>
    </>
  );
};

export default PoolTable;
