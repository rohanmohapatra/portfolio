'use client';
import { Box, List, Text } from '@chakra-ui/react';
import { useState } from 'react';

type Course = {
  course: string;
  name: string;
  term: string;
  year: string;
  grade: string;
};

const masters: Course[] = [
  { course: 'CS 276', name: 'Machine Learning on Graphs', term: 'Spring', year: '2024', grade: 'A+' },
  { course: 'CS 299', name: "Master's Thesis", term: 'Spring', year: '2024', grade: 'CR' },
  { course: 'CS 259', name: 'Advanced Parallel Processing', term: 'Fall', year: '2023', grade: 'A-' },
  { course: 'CS 262', name: 'Random Algorithms and Applications', term: 'Fall', year: '2023', grade: 'B+' },
  { course: 'CS 157C', name: 'NoSQL Databases', term: 'Spring', year: '2023', grade: 'A+' },
  { course: 'CS 249', name: 'Distributed Computing', term: 'Spring', year: '2023', grade: 'A-' },
  { course: 'CS 258', name: 'Computer Communication Systems', term: 'Spring', year: '2023', grade: 'A' },
  { course: 'CS 200W', name: 'Graduate Technical Writing', term: 'Fall', year: '2022', grade: 'A' },
  { course: 'CS 257', name: 'Database System Principles', term: 'Fall', year: '2022', grade: 'A+' },
  { course: 'CS 272', name: 'Reinforcement Learning', term: 'Fall', year: '2022', grade: 'A+' }
];

export const MastersCoursework = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Text textDecoration="underline" fontWeight="500" cursor="pointer" display="inline-block">
        Coursework
      </Text>
      {open && (
        <List.Root pl="1.5rem" mt="0.25rem">
          {masters.map((c) => (
            <List.Item key={c.course}>
              <Text as="span" fontWeight="500">
                {c.course}
              </Text>{' '}
              &mdash; {c.name} ({c.term} {c.year}) &mdash;{' '}
              <Text as="span" fontWeight="500">
                {c.grade}
              </Text>
            </List.Item>
          ))}
        </List.Root>
      )}
    </Box>
  );
};
