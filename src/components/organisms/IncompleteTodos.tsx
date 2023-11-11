import { Box, Heading, UnorderedList, Flex, Text, ListItem } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { SecondaryButton } from "../atoms/SecondaryButton";

type Props = {
  incompleteTodos: string[];
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
};

export const IncompleteTodos = ({ incompleteTodos, onClickComplete, onClickDelete }: Props) => {
  return (
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
                <PrimaryButton onClick={() => onClickComplete(index)}>完了</PrimaryButton>
                <SecondaryButton onClick={() => onClickDelete(index)}>削除</SecondaryButton>
              </Flex>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
};
