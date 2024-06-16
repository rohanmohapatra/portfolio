import { HStack, Heading, Icon, Stack } from '@chakra-ui/react';
import { PiStudentDuotone } from 'react-icons/pi';

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
        <Icon as={PiStudentDuotone} boxSize="3rem" />
      </Stack>
      <Stack>
        <Stack spacing="0">
          <Heading size="xs">Course</Heading>
          <Heading variant="code" size="sm">
            {course}
          </Heading>
        </Stack>
        <Stack spacing="0" width="12.5rem">
          <Heading size="xs">Name</Heading>
          <Heading variant="code" size="sm">
            {name}
          </Heading>
        </Stack>
      </Stack>

      <Stack>
        <Stack spacing="0">
          <Heading size="md">{term}</Heading>
          <Heading variant="code" size="md">
            {year}
          </Heading>
        </Stack>
        <Stack spacing="0">
          <Heading size="xs">Grade</Heading>
          <Heading variant="code" size="lg">
            {grade}
          </Heading>
        </Stack>
      </Stack>
    </HStack>
  );
};
