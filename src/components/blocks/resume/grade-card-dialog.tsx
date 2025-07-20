import { Button, Grid, GridItem, useDisclosure, Dialog, CloseButton, Text } from '@chakra-ui/react';
import { GradeCard, GradeCardProps } from '@/components/shared/grade-card';

export const GradeCardDialog = (props: { grades: GradeCardProps[] }) => {
  const { grades } = props;

  const { open, setOpen } = useDisclosure();

  return (
    <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)} size="cover">
      <Dialog.Trigger asChild>
        <Text textDecoration="underline" fontWeight="500" cursor="pointer">
          Coursework
        </Text>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Coursework</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <Grid templateColumns="repeat(3, 1fr)" gap="0.5rem">
              {grades.map((grade, index) => (
                <GridItem key={index}>
                  <GradeCard {...grade} />
                </GridItem>
              ))}
            </Grid>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.ActionTrigger asChild>
              <Button variant="solid">Close</Button>
            </Dialog.ActionTrigger>
          </Dialog.Footer>
          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm" />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export const MastersCoursework = () => {
  const masters: GradeCardProps[] = [
    {
      course: 'CS 276',
      name: 'Machine Learning on Graphs',
      term: 'Spring',
      year: '2024',
      grade: 'A+'
    },
    {
      course: 'CS 299',
      name: "Master's Thesis",
      term: 'Spring',
      year: '2024',
      grade: 'CR'
    },
    {
      course: 'CS 259',
      name: 'Advanced Parallel Processing',
      term: 'Fall',
      year: '2023',
      grade: 'A-'
    },
    {
      course: 'CS 262',
      name: 'Random Algorithms and Applications',
      term: 'Fall',
      year: '2023',
      grade: 'B+'
    },
    {
      course: 'CS 157C',
      name: 'NoSQL Databases',
      term: 'Spring',
      year: '2023',
      grade: 'A+'
    },
    {
      course: 'CS 249',
      name: 'Distributed Computing',
      term: 'Spring',
      year: '2023',
      grade: 'A-'
    },
    {
      course: 'CS 258',
      name: 'Computer Communication Systems',
      term: 'Spring',
      year: '2023',
      grade: 'A'
    },
    {
      course: 'CS 200W',
      name: 'Graduate Technical Writing',
      term: 'Fall',
      year: '2022',
      grade: 'A'
    },
    {
      course: 'CS 257',
      name: 'Database System Principles',
      term: 'Fall',
      year: '2022',
      grade: 'A+'
    },
    {
      course: 'CS 272',
      name: 'Reinforcement Learning',
      term: 'Fall',
      year: '2022',
      grade: 'A+'
    }
  ];

  return <GradeCardDialog grades={masters} />;
};
