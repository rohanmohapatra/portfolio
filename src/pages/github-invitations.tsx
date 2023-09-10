import React, { useEffect, useState } from 'react';
import { Client, Account } from 'appwrite';
import { Avatar, Button, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import Layout from '@theme/Layout';
import axios from 'axios';
import { openUrl } from '../utils/helpers';

interface Invitation {
  inviteUrl: string;
  inviter: string;
  inviterAvatar: string;
  repoName: string;
}

const GithubInvitations = () => {
  const [account, setAccount] = useState<Account>();
  const [invitations, setInvitations] = useState<Invitation[]>();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const client = new Client();
    client
      .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
      .setProject('64c9d19c24d13267bf33'); // Your project ID
    const account = new Account(client);
    setAccount(account);
  }, []);

  const getInvitations = async () => {
    const session = await account?.getSession('current');
    const accessToken = session?.providerAccessToken;

    console.log(accessToken);
    setIsSignedIn(!!accessToken);

    if (accessToken) {
      const response = await axios.get(
        'https://api.github.com/user/repository_invitations',
        {
          headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${accessToken}`,
            'X-GitHub-Api-Version': '2022-11-28',
          },
        }
      );

      setInvitations(
        response.data.map((invitation) => ({
          inviteUrl: invitation.html_url,
          inviter: invitation.inviter.login,
          inviterAvatar: invitation.inviter.avatar_url,
          repoName: invitation.repository.name,
        }))
      );
    }
  };

  useEffect(() => {
    getInvitations();
  }, [account]);

  const onLogin = () => {
    account?.createOAuth2Session(
      'github',
      'https://rohanmohapatra.github.io/github-invitations',
      undefined,
      ['repo:invite']
    );
  };

  return (
    <Stack
      boxSize="full"
      alignItems="center"
      justify="center"
      p="3rem"
      spacing="6"
    >
      <Heading> View your Github Invitations </Heading>
      <Stack w="40rem" align="center" spacing="10">
        <Button maxW="md" onClick={onLogin}>
          Sign-in with Github
        </Button>
        {!!invitations ? (
          invitations.length ? (
            invitations.map((invitation) => (
              <Stack
                width="full"
                p="1rem"
                borderWidth="3px"
                rounded="md"
                borderColor="red.500"
                spacing={6}
              >
                <HStack>
                  <Avatar
                    size="md"
                    name={invitation.inviter}
                    src={invitation.inviterAvatar}
                    borderWidth="1px"
                    borderColor="gray.800"
                  />
                  <Text>
                    <Text as="span" fontWeight="600">
                      {invitation.inviter}
                    </Text>{' '}
                    has invited you to collaborate in{' '}
                    <Text as="span" fontWeight="600">
                      {invitation.repoName}
                    </Text>{' '}
                    repository
                  </Text>
                </HStack>
                <Button
                  maxW="10rem"
                  onClick={() => openUrl(invitation.inviteUrl)}
                >
                  View invitation
                </Button>
              </Stack>
            ))
          ) : (
            <Heading size="md"> You have no invitations </Heading>
          )
        ) : (
          <Heading size="md"> Loading </Heading>
        )}
      </Stack>
    </Stack>
  );
};

const GithubInvitationsWrapper = () => {
  return (
    <Layout title="Github Invitations">
      <GithubInvitations />
    </Layout>
  );
};

export default GithubInvitationsWrapper;
