"use client";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { Heading, Flex, Input, Box, ListItem, UnorderedList, Text, StackDivider, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["task1", "task2"]);
  const [completeTodos, setCompleteTodos] = useState(["complete"]);
  const onChangeTodoText = (e: React.ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value);
  const onClickAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
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

  // const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

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
        <Box padding="4" color="black" maxW="md" bg="#eee" minWidth="400px">
          <Heading as="h2" size="md" mb="4" textAlign="center">
            タスク登録
          </Heading>
          <Flex alignItems="center">
            <Input placeholder="タスクを入力" value={todoText} onChange={onChangeTodoText} borderColor="black" focusBorderColor="lime" borderRadius="4" size="sm" p="2" mr="4" />
            <PrimaryButton onClick={onClickAddTodo}>追加</PrimaryButton>
          </Flex>
        </Box>
        <Box padding="4" color="black" maxW="md" minH="200px">
          <Heading as="h2" size="md" mb="4" textAlign="center">
            未完了のタスク
          </Heading>
          <UnorderedList>
            {incompleteTodos.map((todo, index) => {
              return (
                <ListItem key={index} display="flex" justifyContent="center" p="1">
                  <Flex alignItems="center">
                    <Text fontSize="sm" mr="4">
                      {todo}
                    </Text>
                    <PrimaryButton onClick={() => onClickCompleteTodo(index)}>完了</PrimaryButton>
                    <SecondaryButton onClick={() => onClickDeleteTodo(index)}>削除</SecondaryButton>
                  </Flex>
                </ListItem>
              );
            })}
          </UnorderedList>
        </Box>
        <Box padding="4" color="black" maxW="md" minH="200px" bg="#eee">
          <Heading as="h2" size="md" mb="4" textAlign="center">
            完了のタスク
          </Heading>
          <UnorderedList>
            {completeTodos.map((todo, index) => {
              return (
                <ListItem key={index} display="flex" justifyContent="center" p="1">
                  <Flex alignItems="center">
                    <Text fontSize="sm" mr="4">
                      {todo}
                    </Text>
                    <PrimaryButton onClick={() => onClickBackTodo(index)}>戻す</PrimaryButton>
                  </Flex>
                </ListItem>
              );
            })}
          </UnorderedList>
        </Box>
      </VStack>
    </main>
  );
}
