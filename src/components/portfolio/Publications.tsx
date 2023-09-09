import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  BoxProps,
  Button,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import * as lodash from 'lodash';

interface PublicationProps {
  link: string;
  publicationImageSrc: string;
  title: string;
  publicationName: string;
  year: string;
  abstract: string;
}

const publications: PublicationProps[] = [
  {
    title: 'A New Approach for Momentum Particle Swarm Optimization',
    publicationName:
      'Advances in Machine Learning and Computational Intelligence',
    link: 'https://link.springer.com/chapter/10.1007%2F978-981-15-5243-4_5',
    publicationImageSrc: '/images/springerlink.svg',
    year: '2020',
    abstract:
      "In this paper, a new approach to momentum particle swarm optimization is proposed. We design a particle swarm optimizer that converges faster than the currently available momentum particle swarm optimizers. This simulates gradient descent with momentum and is inspired from the back-propagation algorithm with momentum in neural networks. The proposed optimizing algorithm constantly gives faster convergence time in all the available test optimization functions (constrained or unconstrained). This paper contains graphs and results that summarize the algorithm's performance in contrast with weighted particle swarm optimizer and momentum particle swarm optimizer",
  },
  {
    title:
      'AdaSwarm: Augmenting Gradient-Based Optimizers in Deep Learning With Swarm Intelligence',
    publicationName:
      'IEEE Transactions on Emerging Topics in Computational Intelligence',
    link: 'https://ieeexplore.ieee.org/document/9472873',
    publicationImageSrc: '/images/ieee_logo_white.png',
    year: '2021',
    abstract:
      'This paper introduces AdaSwarm, a novel gradient-free optimizer which has similar or even better performance than the Adam optimizer adopted in neural networks. In order to support our proposed AdaSwarm, a novel Exponentially weighted Momentum Particle Swarm Optimizer (EMPSO), is proposed. The ability of AdaSwarm to tackle optimization problems is attributed to its capability to perform good gradient approximations. We show that, the gradient of any function, differentiable or not, can be approximated by using the parameters of EMPSO. This is a novel technique to simulate GD which lies at the boundary between numerical methods and swarm intelligence. Mathematical proofs of the gradient approximation produced are also provided. AdaSwarm competes closely with several state-of-the-art (SOTA) optimizers. We also show that AdaSwarm is able to handle a variety of loss functions during backpropagation, including the maximum absolute error (MAE).',
  },
  {
    title:
      'Large-scale End-of-Life Prediction of Hard Disks in Distributed Datacenters',
    publicationName:
      'IEEE International Conference on Smart Computing (SMARTCOMP)',
    link: 'https://ieeexplore.ieee.org/document/10207630',
    publicationImageSrc: '/images/ieee_logo_white.png',
    year: '2023',
    abstract:
      'On a daily basis, data centers process huge volumes of data backed by the proliferation of inexpensive hard disks. Data stored in these disks serve a range of critical functional needs from financial, and healthcare to aerospace. As such, premature disk failure and consequent loss of data can be catastrophic. To mitigate the risk of failures, cloud storage providers perform condition-based monitoring and replace hard disks before they fail. By estimating the remaining useful life of hard disk drives, one can predict the time-to-failure of a particular device and replace it at the right time, ensuring maximum utilization whilst reducing operational costs. In this work, large-scale predictive analyses are performed using severely skewed health statistics data by incorporating customized feature engineering and a suite of sequence learners. Past work suggests using LSTMs as an excellent approach to predicting remaining useful life. To this end, we present an encoder-decoder LSTM model where the context gained from understanding health statistics sequences aid in predicting an output sequence of the number of days remaining before a disk potentially fails. The models developed in this work are trained and tested across an exhaustive set of all of the 10 years of S.M.A.R.T. health data in circulation from Backblaze and on a wide variety of disk instances. It closes the knowledge gap on what full-scale training achieves on thousands of devices and advances the state-of-the-art by providing tangible metrics for evaluation and generalization for practitioners looking to extend their workflow to all years of health data in circulation across disk manufacturers. The encoder-decoder LSTM posted an RMSE of 0.83 during training and 0.86 during testing over the exhaustive 10 year data while being able to generalize competitively over other drives from the Seagate family.',
  },
  {
    title:
      'TFBEST: Dual-Aspect Transformer with Learnable Positional Encoding for Failure Prediction',
    publicationName: 'Submitted to IEEE International Conference on Big Data',
    link: 'https://arxiv.org/abs/2309.02641',
    publicationImageSrc: '/images/ieee_logo_white.png',
    year: '2023',
    abstract:
      'Hard Disk Drive (HDD) failures in datacenters are costly - from catastrophic data loss to a question of goodwill, stakeholders want to avoid it like the plague. An important tool in proactively monitoring against HDD failure is timely estimation of the Remaining Useful Life (RUL). To this end, the Self-Monitoring, Analysis and Reporting Technology employed within HDDs (S.M.A.R.T.) provide critical logs for long-term maintenance of the security and dependability of these essential data storage devices. Data-driven predictive models in the past have used these S.M.A.R.T. logs and CNN/RNN based architectures heavily. However, they have suffered significantly in providing a confidence interval around the predicted RUL values as well as in processing very long sequences of logs. In addition, some of these approaches, such as those based on LSTMs, are inherently slow to train and have tedious feature engineering overheads. To overcome these challenges, in this work we propose a novel transformer architecture - a Temporal-fusion Bi-encoder Self-attention Transformer (TFBEST) for predicting failures in hard-drives. It is an encoder-decoder based deep learning technique that enhances the context gained from understanding health statistics sequences and predicts a sequence of the number of days remaining before a disk potentially fails. In this paper, we also provide a novel confidence margin statistic that can help manufacturers replace a hard-drive within a time frame. Experiments on Seagate HDD data show that our method significantly outperforms the state-of-the-art RUL prediction methods during testing over the exhaustive 10-year data from Backblaze (2013-present). Although validated on HDD failure prediction, the TFBEST architecture is well-suited for other prognostics applications and may be adapted for allied regression problems.',
  },
];

const Publication: React.FC<PublicationProps> = (props) => {
  const { link, publicationImageSrc, title, publicationName, abstract } = props;
  return (
    <Stack
      alignItems="flex-start"
      bg="red.500"
      p="1rem"
      rounded="md"
      color="white"
    >
      {/* <Image src={publicationImageSrc} h="1.5rem" /> */}
      <Stack whiteSpace="normal" spacing="0.2rem">
        <Heading fontSize="md" wordBreak="break-word">
          {title}
        </Heading>
        <Text fontSize="sm" fontWeight="normal" wordBreak="break-word">
          {publicationName}
        </Text>
      </Stack>
      <HStack>
        <Accordion allowToggle w="80%">
          <AccordionItem border="0">
            <AccordionButton
              color="red.500"
              bg="white"
              fontWeight="600"
              fontSize="sm"
              rounded="md"
              _hover={{ bg: 'whiteAlpha.900' }}
            >
              Abstract
            </AccordionButton>
            <AccordionPanel
              fontSize={{ base: '0.6rem', md: '1rem' }}
              textAlign="justify"
            >
              {abstract}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Button variant="outline" size="sm" onClick={() => window.open(link)}>
          View
        </Button>
      </HStack>
    </Stack>
  );
};

export const Publications: React.FC<BoxProps> = (props) => {
  const image = './images/publication.svg';
  const groups = lodash.groupBy(publications, 'year');
  const dividerColor = useColorModeValue('black', 'white');
  return (
    <Stack
      justify="center"
      alignItems="center"
      h="100%"
      w="full"
      pb="5rem"
      {...props}
    >
      <Heading fontSize="2xl">Publications</Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        w={{ base: '90%', md: '70%' }}
        pt="2rem"
        spacing="5rem"
      >
        <Stack
          width={{ base: 'full', md: 'full' }}
          spacing={{ base: '1rem', md: '1rem' }}
        >
          {Object.entries(groups)
            .sort((a, b) => (a[0] < b[0] ? 1 : -1))
            .map(([key, publications]) => (
              <Stack spacing="2">
                <Stack spacing="0">
                  <Heading size="md">{key}</Heading>
                  <Divider
                    bg={dividerColor}
                    h="0.1rem"
                    orientation="horizontal"
                  />
                </Stack>
                {publications.map((publication) => (
                  <Publication {...publication} />
                ))}
              </Stack>
            ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
