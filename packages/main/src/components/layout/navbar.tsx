import {
  Button,
  Center,
  HStack,
  Image,
  useColorModeValue
} from '@chakra-ui/react';
import { PiHandWavingBold } from 'react-icons/pi';
import { useRouter } from 'next/router';
import { ColorModeSwitch } from '@portfolio/shared';

import { openUrl } from '../../lib/utils';

export const Navbar = () => {
  const router = useRouter();

  const navigate = async (item: (typeof items)[0]) => {
    // Push Router on demand
    if (router.pathname !== item.href) {
      await router.push(item.href);
    }

    // Scroll only if on main page
    if (item.href === '/') {
      const element = document.querySelector(item.selector);
      element?.scrollIntoView({
        inline: 'nearest',
        block: 'center',
        behavior: 'smooth'
      });
    }
  };

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
        bg={useColorModeValue('white', 'gray.1000')}
        position="fixed"
        top="1rem"
        width="80%"
        zIndex="1000"
      >
        <HStack align="center" justify="center" spacing="0">
          <Image
            src="/images/avataaars.png"
            rounded="full"
            alt="Rohan Logo"
            boxSize="3rem"
          />
          {items.map((item) => (
            <Button
              variant="nav"
              onClick={() => navigate(item)}
              key={item.name}
            >
              {item.name}
            </Button>
          ))}
          <Button variant="nav" onClick={() => window.open('/blog')?.focus()}>
            Blog
          </Button>
        </HStack>
        <HStack>
          <ColorModeSwitch />
          <Button
            size="md"
            variant="nav"
            rightIcon={<PiHandWavingBold fontSize="1.2rem" />}
            onClick={() => openUrl('mailto:rohannmohapatra@gmail.com')}
          >
            Say Hello!
          </Button>
        </HStack>
      </HStack>
    </Center>
  );
};
