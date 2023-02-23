import {
  Icon, IconButton, Stack, StackProps,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

import { openUrl } from '../../utils/helpers';

export const IconBar: React.FC<StackProps> = (props) => (
  <Stack spacing="2rem" {...props}>
    <IconButton
      aria-label="Linked In"
      variant="ghost"
      color="red.500"
      icon={<Icon as={FaLinkedin} boxSize="1.5rem" />}
      onClick={() => openUrl('https://www.linkedin.com/in/rohan-mohapatra/')}
    />
    <IconButton
      aria-label="Github"
      variant="ghost"
      color="red.500"
      icon={<Icon as={FaGithub} boxSize="1.5rem" />}
      onClick={() => openUrl('https://github.com/rohanmohapatra')}
    />
    <IconButton
      aria-label="GitLab"
      variant="ghost"
      color="red.500"
      icon={<Icon as={FaGitlab} boxSize="1.5rem" />}
      onClick={() => openUrl('https://gitlab.com/RohanMohapatra')}
    />
    <IconButton
      aria-label="Instagram"
      variant="ghost"
      color="red.500"
      icon={<Icon as={FaInstagram} boxSize="1.5rem" />}
      onClick={() => openUrl('https://www.instagram.com/monodimension')}
    />
    <IconButton
      aria-label="Twitter"
      variant="ghost"
      color="red.500"
      icon={<Icon as={FaTwitter} boxSize="1.5rem" />}
      onClick={() => openUrl('https://twitter.com/rohannmohapatra')}
    />
  </Stack>
);
