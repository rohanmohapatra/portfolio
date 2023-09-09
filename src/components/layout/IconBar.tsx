import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  StackProps,
  Tooltip,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPlus,
} from 'react-icons/fa';

import { openUrl } from '../../utils/helpers';
import { GoogleScholar } from '../icons/GoogleScholar';

export const IconBar: React.FC<StackProps> = (props) => {
  const showMenu = useBreakpointValue({ base: true, lg: false });
  if (showMenu) {
    return <IconMenu />;
  }
  return (
    <Stack spacing="2rem" {...props}>
      <Tooltip hasArrow placement="right-start" label="Linked In" fontSize="md">
        <IconButton
          aria-label="Linked In"
          variant="ghost"
          color="red.500"
          icon={<Icon as={FaLinkedin} boxSize="1.5rem" />}
          onClick={() =>
            openUrl('https://www.linkedin.com/in/rohan-mohapatra/')
          }
        />
      </Tooltip>
      <Tooltip hasArrow placement="right-start" label="Github" fontSize="md">
        <IconButton
          aria-label="Github"
          variant="ghost"
          color="red.500"
          icon={<Icon as={FaGithub} boxSize="1.5rem" />}
          onClick={() => openUrl('https://github.com/rohanmohapatra')}
        />
      </Tooltip>
      <Tooltip
        hasArrow
        placement="right-start"
        label="Google Scholar"
        fontSize="md"
      >
        <IconButton
          aria-label="Google Scholar"
          variant="ghost"
          color="red.500"
          icon={<Icon as={GoogleScholar} boxSize="1.5rem" />}
          onClick={() =>
            openUrl(
              'https://scholar.google.com/citations?user=9a3mq_oAAAAJ&hl=en'
            )
          }
        />
      </Tooltip>
      <Tooltip hasArrow placement="right-start" label="Instagram" fontSize="md">
        <IconButton
          aria-label="Instagram"
          variant="ghost"
          color="red.500"
          icon={<Icon as={FaInstagram} boxSize="1.5rem" />}
          onClick={() => openUrl('https://www.instagram.com/monodimension')}
        />
      </Tooltip>
      <Tooltip hasArrow placement="right-start" label="Twitter" fontSize="md">
        <IconButton
          aria-label="Twitter"
          variant="ghost"
          color="red.500"
          icon={<Icon as={FaTwitter} boxSize="1.5rem" />}
          onClick={() => openUrl('https://twitter.com/rohannmohapatra')}
        />
      </Tooltip>
    </Stack>
  );
};

const IconMenu = () => {
  return (
    <Menu autoSelect={false}>
      <MenuButton
        as={IconButton}
        aria-label="Icon"
        icon={<Icon as={FaPlus} boxSize="1.5rem" />}
        position="fixed"
        bottom="3%"
        right="5%"
        isRound
        size="md"
      />
      <MenuList minW="0" w="5rem">
        <MenuItem
          onClick={() =>
            openUrl('https://www.linkedin.com/in/rohan-mohapatra/')
          }
        >
          <Icon as={FaLinkedin} color="red.500" boxSize="1.5rem" />
        </MenuItem>
        <MenuItem onClick={() => openUrl('https://github.com/rohanmohapatra')}>
          <Icon as={FaGithub} color="red.500" boxSize="1.5rem" />
        </MenuItem>
        <MenuItem
          onClick={() =>
            openUrl(
              'https://scholar.google.com/citations?user=9a3mq_oAAAAJ&hl=en'
            )
          }
        >
          <Icon as={GoogleScholar} color="red.500" boxSize="1.5rem" />
        </MenuItem>
        <MenuItem
          onClick={() => openUrl('https://www.instagram.com/monodimension')}
        >
          <Icon as={FaInstagram} color="red.500" boxSize="1.5rem" />
        </MenuItem>
        <MenuItem
          onClick={() => openUrl('https://twitter.com/rohannmohapatra')}
        >
          <Icon as={FaTwitter} color="red.500" boxSize="1.5rem" />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
