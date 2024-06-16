import {
  UseDisclosureReturn,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Divider,
  ModalBody,
  ModalFooter,
  Button,
  Grid,
  GridItem,
  useDisclosure
} from '@chakra-ui/react';
import { GradeCard, GradeCardProps } from './shared/grade-card';

export const GradeCardModal = (
  props: Pick<UseDisclosureReturn, 'onClose' | 'isOpen'> & {
    grades: GradeCardProps[];
  }
) => {
  const { isOpen, onClose, grades } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Coursework</ModalHeader>
        <ModalCloseButton />
        <Divider orientation="horizontal" />
        <ModalBody pt="1rem">
          <Grid templateColumns="repeat(3, 1fr)" gap={2}>
            {grades.map((grade, index) => (
              <GridItem key={index}>
                <GradeCard {...grade} />
              </GridItem>
            ))}
          </Grid>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export const MastersCoursework = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

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

  return (
    <>
      <Button
        onClick={onOpen}
        variant="link"
        textDecoration="underline"
        fontWeight="500"
        color="black"
      >
        Coursework
      </Button>
      <GradeCardModal isOpen={isOpen} onClose={onClose} grades={masters} />
    </>
  );
};
