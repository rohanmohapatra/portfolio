'use client';
import {
  Button,
  CloseButton,
  Dialog,
  Heading,
  HStack,
  RadioCard,
  Stack,
  Text,
  useDisclosure,
  Image
} from '@chakra-ui/react';
import { useState } from 'react';
import { ClockCounterClockwiseIcon } from '@phosphor-icons/react';
import { openUrl } from '@/lib/utils';
import { Divider } from '@/components/shared/divider';

interface VersionCardProps {
  options: string[];
  version: string;
  setVersion: (version: string) => void;
}

const VersionCard = (props: VersionCardProps) => {
  const { options, version, setVersion } = props;
  return (
    <RadioCard.Root value={version} onValueChange={(e) => setVersion(e.value ?? '')}>
      <RadioCard.Label as={Stack} gap="0">
        <Heading size="sm">Version</Heading>
        <Text fontSize="0.75rem" mt="-0.25rem">
          Navigate to a older version
        </Text>
      </RadioCard.Label>
      <HStack align="stretch">
        {options.map((option, index) => (
          <Stack key={index} gap="0">
            <RadioCard.Item value={option}>
              <RadioCard.ItemHiddenInput />
              <RadioCard.ItemControl p="0.2rem">
                <RadioCard.ItemContent>
                  <Image src={`/versions/${option}.png`} alt={String(option)} borderRadius="lg" boxShadow="md" />
                </RadioCard.ItemContent>
              </RadioCard.ItemControl>
            </RadioCard.Item>
            <Heading size="xs">{option.replace('v', 'Version ')}</Heading>
          </Stack>
        ))}
      </HStack>
    </RadioCard.Root>
  );
};

export const GoBackInTimeDialog = () => {
  const [version, setVersion] = useState('');
  const { open, setOpen } = useDisclosure();

  const options = ['v1', 'v2', 'v3'];
  const versionMap: { [key: string]: string } = {
    v1: 'https://v1-rohanmohapatra-portfolio.vercel.app/',
    v2: 'https://v2-rohanmohapatra-portfolio.vercel.app/',
    v3: 'https://v3-rohanmohapatra-portfolio.vercel.app/'
  };

  return (
    <Dialog.Root open={open} placement="center" onOpenChange={(e) => setOpen(e.open)}>
      <Dialog.Trigger asChild>
        <Button onClick={() => setOpen(true)} size={['sm', 'lg']}>
          Go back in time <ClockCounterClockwiseIcon weight="duotone" fontSize="1.2rem" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header flexDirection="column" p="0">
            <Dialog.Title p="1rem">Looking for a different site? Go back in time</Dialog.Title>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="md" />
            </Dialog.CloseTrigger>
            <Divider orientation="horizontal" />
          </Dialog.Header>
          <Dialog.Body>
            <VersionCard version={version} setVersion={setVersion} options={options} />
          </Dialog.Body>

          <Dialog.Footer>
            <Dialog.ActionTrigger asChild>
              <Button variant="subtle">Close</Button>
            </Dialog.ActionTrigger>
            <Button variant="solid" onClick={() => openUrl(versionMap[version])}>
              Go
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
