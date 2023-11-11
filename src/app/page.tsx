"use client";
import { Registration } from "@/components/organisms/Registration";
import { IncompleteTodos } from "@/components/organisms/IncompleteTodos";
import { Heading, StackDivider, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { CompleteTodos } from "@/components/organisms/CompleteTodos";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["task1", "task2"]);
  const [completeTodos, setCompleteTodos] = useState(["complete"]);
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
      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
        <Registration todoText={todoText} onChange={onChangeTodoText} onClick={onClickAddTodo} />
        <IncompleteTodos incompleteTodos={incompleteTodos} onClickComplete={onClickCompleteTodo} onClickDelete={onClickDeleteTodo} />
        <CompleteTodos completeTodos={completeTodos} onClick={onClickBackTodo} />
      </VStack>
    </main>
  );
}
