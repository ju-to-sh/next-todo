"use client";
import { Registration } from "@/components/organisms/Registration";
import { IncompleteTodos } from "@/components/organisms/IncompleteTodos";
import { Heading, StackDivider, VStack, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CompleteTodos } from "@/components/organisms/CompleteTodos";
import { WeatherInfo } from "./types/WeatherInfo";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["プログラミング勉強", "洗濯", "ゴミ捨て"]);
  const [completeTodos, setCompleteTodos] = useState([""]);
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | undefined>();

  const url = "https://api.open-meteo.com/v1/forecast?latitude=32.7748&longitude=130.7477&hourly=temperature_2m,precipitation_probability&timezone=Asia%2FTokyo&forecast_days=1";

  const getWeatherInfo = async () => {
    const res = await fetch(url);
    return await res.json();
  };

  useEffect(() => {
    (async () => {
      const res = await getWeatherInfo();
      setWeatherInfo(res.hourly);
    })();
  }, []);

  console.log(weatherInfo);

  const onChangeTodoText = (e: React.ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value);
  const onClickAddTodo = () => {
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDeleteTodo = (index: number) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickCompleteTodo = (index: number) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBackTodo = (index: number) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const formatDate = (date: string) => {
    return new Date(date).getHours();
  };

  return (
    <main>
      <Heading as="h1" size="xl" textAlign="center" p="4">
        To do
      </Heading>
      {weatherInfo && (
        <TableContainer border="solid black 1px">
          <Table variant="simple" size="sm">
            <TableCaption fontSize="12px">今日の天気</TableCaption>
            <Thead>
              <Tr backgroundColor="gray.100">
                <Th fontSize="12px">項目</Th>
                {weatherInfo.time.map((time, index) => {
                  if (index >= 5 && index <= 19)
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
                  if (index >= 5 && index <= 19)
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
                  if (index >= 5 && index <= 19)
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
      )}

      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
        <Registration todoText={todoText} onChange={onChangeTodoText} onClick={onClickAddTodo} />
        <IncompleteTodos incompleteTodos={incompleteTodos} onClickComplete={onClickCompleteTodo} onClickDelete={onClickDeleteTodo} />
        <CompleteTodos completeTodos={completeTodos} onClick={onClickBackTodo} />
      </VStack>
    </main>
  );
}
