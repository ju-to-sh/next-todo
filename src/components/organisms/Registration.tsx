import { PrimaryButton } from "../atoms/PrimaryButton";
import { Box, Heading, Flex, Input } from "@chakra-ui/react";

type Props = {
  todoText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};

export const Registration = ({ todoText, onChange, onClick }: Props) => {
  return (
    <Box padding="4" color="black" maxW="md" bg="#e2e8f0" minWidth="400px" minH="100px" margin="0 auto">
      <Heading as="h2" size="md" mb="4" textAlign="center">
        タスク登録
      </Heading>
      <Flex alignItems="center">
        <Input placeholder="タスクを入力" value={todoText} onChange={onChange} borderColor="black" focusBorderColor="lime" borderRadius="4" size="sm" p="2" mr="4" />
        <PrimaryButton onClick={onClick}>追加</PrimaryButton>
      </Flex>
    </Box>
  );
};
