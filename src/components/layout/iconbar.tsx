'use client';
import { Icon, IconButton, Stack, StackProps, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, TwitterLogoIcon } from '@phosphor-icons/react';
import { openUrl } from '@/lib/utils';
import { GoogleScholarIcon } from '@/components/icons/google-scholar';
import { Divider } from '@/components/shared/divider';
import { Tooltip } from '@/components/ui/tooltip';

// const IconMenu = () => {
//   return (
//     <Menu autoSelect={false} matchWidth>
//       <MenuButton
//         as={IconButton}
//         aria-label="Icon"
//         icon={<Icon as={PiPlusBold} boxSize="2rem" />}
//         position="fixed"
//         bottom="3%"
//         right="5%"
//         rounded="lg"
//         size="md"
//         bg="red.500"
//       />
//       <MenuList minW="0">
//         <MenuItem
//           p="0"
//           py="0.5rem"
//           justifyContent="center"
//           onClick={() =>
//             openUrl('https://www.linkedin.com/in/rohan-mohapatra/')
//           }
//         >
//           <Icon as={PiLinkedinLogo} color="red.500" boxSize="1.5rem" />
//         </MenuItem>
//         <MenuItem
//           p="0"
//           py="0.5rem"
//           justifyContent="center"
//           onClick={() => openUrl('https://github.com/rohanmohapatra')}
//         >
//           <Icon as={PiGithubLogo} color="red.500" boxSize="1.5rem" />
//         </MenuItem>
//         <MenuItem
//           p="0"
//           py="0.5rem"
//           justifyContent="center"
//           onClick={() =>
//             openUrl(
//               'https://scholar.google.com/citations?user=9a3mq_oAAAAJ&hl=en'
//             )
//           }
//         >
//           <Icon as={PiGoogleScholarLogo} color="red.500" boxSize="1.5rem" />
//         </MenuItem>
//         <MenuItem
//           p="0"
//           py="0.5rem"
//           justifyContent="center"
//           onClick={() => openUrl('https://www.instagram.com/monodimension')}
//         >
//           <Icon as={PiInstagramLogo} color="red.500" boxSize="1.5rem" />
//         </MenuItem>
//         <MenuItem
//           p="0"
//           py="0.5rem"
//           justifyContent="center"
//           onClick={() => openUrl('https://twitter.com/rohannmohapatra')}
//         >
//           <Icon as={PiTwitterLogo} color="red.500" boxSize="1.5rem" />
//         </MenuItem>
//       </MenuList>
//     </Menu>
//   );
// };

export const IconBar: React.FC<StackProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const showMenu = useBreakpointValue({ base: true, lg: false });
  // if (showMenu) {
  //   return <IconMenu />;
  // }
  return (
    <Stack gap="1rem" height="full" {...props}>
      <Tooltip showArrow positioning={{ placement: 'right' }} content="Linked In">
        <IconButton
          aria-label="Linked In"
          variant="ghost"
          color="red.500"
          onClick={() => openUrl('https://www.linkedin.com/in/rohan-mohapatra/')}
        >
          <Icon asChild boxSize="2rem">
            <LinkedinLogoIcon weight="regular" />
          </Icon>
        </IconButton>
      </Tooltip>
      <Tooltip showArrow positioning={{ placement: 'right' }} content="Github">
        <IconButton
          aria-label="Github"
          variant="ghost"
          color="red.500"
          onClick={() => openUrl('https://github.com/rohanmohapatra')}
        >
          <Icon asChild boxSize="2rem">
            <GithubLogoIcon weight="regular" />
          </Icon>
        </IconButton>
      </Tooltip>
      <Tooltip showArrow positioning={{ placement: 'right' }} content="Google Scholar">
        <IconButton
          aria-label="Google Scholar"
          variant="ghost"
          color="red.500"
          onClick={() => openUrl('https://scholar.google.com/citations?user=9a3mq_oAAAAJ&hl=en')}
        >
          <GoogleScholarIcon boxSize="2rem" />
        </IconButton>
      </Tooltip>
      <Tooltip showArrow positioning={{ placement: 'right' }} content="Instagram">
        <IconButton
          aria-label="Instagram"
          variant="ghost"
          color="red.500"
          onClick={() => openUrl('https://www.instagram.com/monodimension')}
        >
          <Icon asChild boxSize="2rem">
            <InstagramLogoIcon weight="regular" />
          </Icon>
        </IconButton>
      </Tooltip>
      <Tooltip showArrow positioning={{ placement: 'right' }} content="Twitter">
        <IconButton
          aria-label="Twitter"
          variant="ghost"
          color="red.500"
          onClick={() => openUrl('https://twitter.com/rohannmohapatra')}
        >
          <Icon asChild boxSize="2rem">
            <TwitterLogoIcon weight="regular" />
          </Icon>
        </IconButton>
      </Tooltip>
      <Divider orientation="vertical" />
    </Stack>
  );
};
