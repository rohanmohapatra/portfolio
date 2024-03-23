import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  RadioProps,
  Stack,
  Text,
  UseDisclosureReturn,
  useColorModeValue,
  useRadio,
  useRadioGroup
} from '@chakra-ui/react';
import { Divider } from '@portfolio/shared';
import { useState } from 'react';
import { PiCheckCircleFill } from 'react-icons/pi';
import { openUrl } from '../lib/utils';

const VersionCard = (props: RadioProps) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  const iconBgColor = useColorModeValue('white', 'gray.1000');

  return (
    <Stack cursor="pointer" as="label" position="relative">
      <input {...input} />
      <Box
        {...checkbox}
        border="3px solid"
        borderRadius="lg"
        borderColor="transparent"
        _checked={{ borderColor: 'red.500' }}
        boxSize="full"
      >
        <Image
          src={`/versions/${props.value}.png`}
          alt={String(props.value)}
          borderRadius="lg"
          boxShadow="md"
          p="0.2rem"
        />
      </Box>
      <Heading size="xs" pl="0.5rem">
        {props.children}
      </Heading>
      {props.isChecked && (
        <Icon
          position="absolute"
          top="-2"
          right="-2"
          as={PiCheckCircleFill}
          color="red.500"
          boxSize="1.5rem"
          bgColor={iconBgColor}
          borderRadius="full"
        />
      )}
    </Stack>
  );
};

export const GoBackInTimeModal = (
  props: Pick<UseDisclosureReturn, 'onClose' | 'isOpen'>
) => {
  const { isOpen, onClose } = props;
  const [version, setVersion] = useState('');

  const options = ['v1', 'v2', 'v3'];
  const versionMap: { [key: string]: string } = {
    v1: 'https://v1-rohanmohapatra-portfolio.vercel.app/',
    v2: 'https://v2-rohanmohapatra-portfolio.vercel.app/',
    v3: 'https://v3-rohanmohapatra-portfolio.vercel.app/'
  };
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'version',
    defaultValue: 'v1',
    onChange: setVersion
  });
  const group = getRootProps();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Looking for a different site? Go back in time</ModalHeader>
        <ModalCloseButton />
        <Divider orientation="horizontal" />
        <ModalBody pt="1rem">
          <Heading size="sm" pl="0.5rem">
            Version
          </Heading>
          <Text fontSize="0.75rem" pl="0.5rem">
            Navigate to a older version
          </Text>

          <HStack {...group} pt="0.75rem">
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <VersionCard key={value} {...radio}>
                  {value.replace('v', 'Version ')}
                </VersionCard>
              );
            })}
          </HStack>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} variant="ghost" onClick={onClose}>
            Close
          </Button>
          <Button
            variant="solid"
            bg="red.500"
            onClick={() => openUrl(versionMap[version])}
          >
            Go
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
