import {
  Avatar,
  Button,
  HStack,
  Heading,
  Icon,
  Stack,
  useColorModeValue,
  Text
} from '@chakra-ui/react';
import Link from 'next/link';
import { PiGithubLogo } from 'react-icons/pi';

type InvitationCardProps = {
  inviteUrl: string;
  inviter: string;
  inviterProfileUrl: string;
  inviterAvatar: string;
  repoName: string;
};

export const InvitationCard = (props: InvitationCardProps) => {
  const { inviteUrl, inviter, inviterProfileUrl, inviterAvatar, repoName } =
    props;
  return (
    <Stack
      p="1.5rem"
      backgroundColor={useColorModeValue('white', 'gray.900')}
      w="35rem"
      rounded="lg"
      spacing="1rem"
      border="1px solid"
      borderColor="gray.300"
      shadow="md"
    >
      <HStack spacing="1rem">
        <Avatar size="md" name={inviter} src={inviterAvatar} />
        <Heading size="sm" color="red.500">
          <Link href={inviterProfileUrl}>{inviter}</Link>
          <Text
            as="span"
            fontWeight="600"
            color={useColorModeValue('black', 'white')}
          >
            {' '}
            invited you to collaborate.
          </Text>
        </Heading>
      </HStack>

      <Stack spacing="0">
        <Heading size="xs" color={useColorModeValue('gray.600', 'gray.400')}>
          Repository
        </Heading>
        <Heading size="lg" mt="-0.2rem">
          {repoName}
        </Heading>
      </Stack>

      <HStack w="full" justify="space-between" align="flex-end">
        <Button bg="red.500" size="md">
          View invitation
        </Button>
        <Icon as={PiGithubLogo} color="red.500" boxSize="5.25rem" />
      </HStack>
    </Stack>
  );
};
