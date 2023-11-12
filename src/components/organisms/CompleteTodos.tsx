import { Box, Heading, UnorderedList, Flex, Text, ListItem } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/PrimaryButton";

type Props = {
  completeTodos: string[];
  onClick: (index: number) => void;
};

export const CompleteTodos = ({ completeTodos, onClick }: Props) => {
  return (
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
                {todo && <PrimaryButton onClick={() => onClick(index)}>戻す</PrimaryButton>}
              </Flex>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
};
