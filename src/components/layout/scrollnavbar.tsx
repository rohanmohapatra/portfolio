'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Text, Box, HStack, Stack } from '@chakra-ui/react';

export const ScrollNavBar = ({ sections }: { sections: string[] }) => {
  const [activeSection, setActiveSection] = useState(sections[0].toLowerCase());
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)?.target.id;
        if (visibleSection) {
          setActiveSection(visibleSection);
        }
      },
      {
        threshold: 0.5
      }
    );

    const sectionElements = sections.map((section) => document.getElementById(section.toLowerCase()));

    sectionElements.forEach((section) => {
      if (section) observer.current?.observe(section);
    });

    return () => {
      sectionElements.forEach((section) => {
        if (section) observer.current?.unobserve(section);
      });
      observer.current?.disconnect();
    };
  }, [sections]);

  const activeColor = 'white';
  const inactiveColor = 'whiteAlpha.500';
  const activeTextColor = 'white';

  return (
    <Stack
      as="nav"
      position="fixed"
      top="50%"
      right={8}
      transform="translateY(-50%)"
      gap={4}
      alignItems="flex-start"
      zIndex="sticky"
    >
      {sections.map((section) => {
        const id = section.toLowerCase();
        const isActive = activeSection === id;

        return (
          <HStack key={id} justify="flex-end" align="center" gap="0.5rem">
            <Box
              as="span"
              height="4px"
              rounded="full"
              bg={isActive ? activeColor : inactiveColor}
              width={isActive ? '1.5rem' : '0.8rem'}
              transition="width 0.3s ease-in-out, background-color 0.3s ease-in-out"
            />
            <Text
              fontWeight={isActive ? 'bold' : 'normal'}
              color={isActive ? activeTextColor : inactiveColor}
              transition="font-weight 0.3s ease-in-out, color 0.3s ease-in-out"
            >
              {section}
            </Text>
          </HStack>
        );
      })}
    </Stack>
  );
};
