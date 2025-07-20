import { HStack, Heading, Stack } from '@chakra-ui/react';
import { StudentIcon } from '@phosphor-icons/react';

export type GradeCardProps = {
  course: string;
  name: string;
  term: string;
  year: string;
  grade: string;
};
export const GradeCard = (props: GradeCardProps) => {
  const { course, name, term, year, grade } = props;

  return (
    <HStack
      bg="white"
      border="1px solid"
      borderColor="gray.300"
      width="25rem"
      justify="space-between"
      rounded="md"
      p="1rem"
    >
      <Stack>
        <StudentIcon weight="duotone" size="3rem" />
      </Stack>
      <Stack>
        <Stack gap="0">
          <Heading size="xs">Course</Heading>
          <Heading code size="sm">
            {course}
          </Heading>
        </Stack>
        <Stack gap="0" width="12.5rem">
          <Heading size="xs">Name</Heading>
          <Heading code size="sm">
            {name}
          </Heading>
        </Stack>
      </Stack>

      <Stack>
        <Stack gap="0">
          <Heading size="md">{term}</Heading>
          <Heading code size="md">
            {year}
          </Heading>
        </Stack>
        <Stack gap="0">
          <Heading size="xs">Grade</Heading>
          <Heading code size="lg">
            {grade}
          </Heading>
        </Stack>
      </Stack>
    </HStack>
  );
};
