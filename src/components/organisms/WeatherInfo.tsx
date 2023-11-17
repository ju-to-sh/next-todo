import { Box, Text, Flex, Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, keyframes } from "@chakra-ui/react";
import { SpinnerIcon, SunIcon } from "@chakra-ui/icons";
import { WeatherInfoType } from "../../app/types/WeatherInfoType";

type Props = {
  weatherInfo: WeatherInfoType | undefined;
};

const FirstTime = 7;
const EndTime = 17;

const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;
const spinAnimation = `${spin} infinite 1s linear`;

const formatDate = (date: string) => {
  return new Date(date).getHours();
};

export const WeatherInfo = ({ weatherInfo }: Props) => {
  return (
    <>
      {weatherInfo ? (
        <TableContainer border="solid #e2e8f0 1px" mt="20px">
          <Table variant="simple" size="sm">
            <TableCaption fontSize="12px">
              <Flex justifyContent="center" alignItems="center">
                <Box display="flex" alignItems="center" mr="5px">
                  <SunIcon boxSize="18px" />
                </Box>
                <Text>今日の天気</Text>
              </Flex>
            </TableCaption>
            <Thead>
              <Tr backgroundColor="gray.200">
                <Th fontSize="12px">項目</Th>
                {weatherInfo.time.map((time, index) => {
                  if (index >= FirstTime && index <= EndTime)
                    return (
                      <Th key={index} fontSize="12px">
                        {formatDate(time)}
                      </Th>
                    );
                })}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td fontSize="12px">気温（℃）</Td>
                {weatherInfo.temperature_2m.map((temperature, index) => {
                  if (index >= FirstTime && index <= EndTime)
                    return (
                      <Td isNumeric key={index} fontSize="12px">
                        {temperature}
                      </Td>
                    );
                })}
              </Tr>
              <Tr>
                <Td fontSize="12px">降水確率（%）</Td>
                {weatherInfo.precipitation_probability.map((probability, index) => {
                  if (index >= FirstTime && index <= EndTime)
                    return (
                      <Td isNumeric key={index} fontSize="12px">
                        {probability}
                      </Td>
                    );
                })}
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Box display="flex" justifyContent="center">
          <SpinnerIcon boxSize="36px" mt="65px" animation={spinAnimation} />
        </Box>
      )}
    </>
  );
};
