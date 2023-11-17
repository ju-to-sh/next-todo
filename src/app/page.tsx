"use client";
import { Registration } from "@/components/organisms/Registration";
import { IncompleteTodos } from "@/components/organisms/IncompleteTodos";
import { Heading, StackDivider, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CompleteTodos } from "@/components/organisms/CompleteTodos";
import { WeatherInfoType } from "./types/WeatherInfoType";
import { WeatherInfo } from "@/components/organisms/WeatherInfo";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["プログラミング勉強", "洗濯", "ゴミ捨て"]);
  const [completeTodos, setCompleteTodos] = useState([""]);
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoType | undefined>();

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

  return (
    <main>
      <Heading as="h1" size="xl" textAlign="center" p="4">
        To do
      </Heading>

      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch" justify="center">
        <Registration todoText={todoText} onChange={onChangeTodoText} onClick={onClickAddTodo} />
        <IncompleteTodos incompleteTodos={incompleteTodos} onClickComplete={onClickCompleteTodo} onClickDelete={onClickDeleteTodo} />
        <CompleteTodos completeTodos={completeTodos} onClick={onClickBackTodo} />
      </VStack>
      <WeatherInfo weatherInfo={weatherInfo} />
    </main>
  );
}
