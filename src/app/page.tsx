"use client";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { Heading, Flex, Input, Button, Box } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (e: React.ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value);
  const onClickAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => alert(todoText);

  return (
    <main>
      <Heading as="h1" size="lg" textAlign="center">
        To do
      </Heading>
      <Box padding="2" color="black" maxW="md">
        <Flex alignItems="center">
          <Input placeholder="タスクを入力" value={todoText} onChange={onChangeTodoText} borderRadius="4" size="md" p="2" ml="4" mr="4" />
          <PrimaryButton onClick={onClickAddTodo}>追加</PrimaryButton>
        </Flex>
      </Box>
    </main>
  );
}
