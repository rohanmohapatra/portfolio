'use client';
import { Button, Center, HStack, Image } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { HandWavingIcon } from '@phosphor-icons/react';

import { useColorModeValue } from '@/components/ui/color-mode';
import { openUrl, openUrlInSameTab } from '@/lib/utils';
import { ColorModeSwitch } from '@/components/ui/color-mode-switch';

export const Navbar = () => {
  const router = useRouter();
  const backgroundColor = useColorModeValue('white', 'gray.1000');

  const items = [
    { name: 'Home', selector: '#home', href: '/' },
    { name: 'About', selector: '#about', href: '/' },
    { name: 'Projects', selector: '#projects', href: '/' },
    { name: 'Publications', selector: '#publications', href: '/' },
    { name: 'Résumé', selector: '#', href: '/resume' }
  ];

  return (
    <Center>
      <HStack
        justify="space-between"
        py="0.25rem"
        px="1.5rem"
        rounded="2xl"
        mb="2rem"
        border="0.75px solid"
        borderColor="red.500"
        bg={backgroundColor}
        position="fixed"
        top="1rem"
        width="80%"
        zIndex="1000"
      >
        <HStack align="center" justify="center" gap="0">
          <Image src="/images/avataaars.png" rounded="full" alt="Rohan Logo" boxSize="3rem" />
          {items.map((item) => (
            <Button visual="navigation" onClick={() => router.push(`${item.href}${item.selector}`)} key={item.name}>
              {item.name}
            </Button>
          ))}
          <Button visual="navigation" onClick={() => openUrlInSameTab('/blog')}>
            Blog
          </Button>
        </HStack>
        <HStack>
          <ColorModeSwitch />
          <Button size="md" visual="navigation" onClick={() => openUrl('mailto:rohannmohapatra@gmail.com')}>
            Say Hello! <HandWavingIcon weight="duotone" fontSize="1.2rem" />
          </Button>
        </HStack>
      </HStack>
    </Center>
  );
};
