import {
  Stack,
  HStack,
  Heading,
  Select,
  Grid,
  GridItem,
  BoxProps
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useState } from 'react';

import { openUrl } from '../lib/utils';
import { Divider } from './shared/divider';

const PDF = dynamic(() => import('./shared/pdf'), {
  ssr: false
});

interface PublicationProps {
  link: string;
  publicationImageSrc: string;
  title: string;
  publicationName: string;
  previewUrl: string;
  year: string;
  abstract: string;
}

const publications: PublicationProps[] = [
  {
    title: 'A New Approach for Momentum Particle Swarm Optimization',
    publicationName:
      'Advances in Machine Learning and Computational Intelligence',
    link: 'https://link.springer.com/chapter/10.1007%2F978-981-15-5243-4_5',
    previewUrl:
      '/pdfs/A New Approach for Momentum Particle Swarm Optimization.pdf',
    publicationImageSrc: '/images/springerlink.svg',
    year: '2020',
    abstract:
      "In this paper, a new approach to momentum particle swarm optimization is proposed. We design a particle swarm optimizer that converges faster than the currently available momentum particle swarm optimizers. This simulates gradient descent with momentum and is inspired from the back-propagation algorithm with momentum in neural networks. The proposed optimizing algorithm constantly gives faster convergence time in all the available test optimization functions (constrained or unconstrained). This paper contains graphs and results that summarize the algorithm's performance in contrast with weighted particle swarm optimizer and momentum particle swarm optimizer"
  },
  {
    title:
      'AdaSwarm: Augmenting Gradient-Based Optimizers in Deep Learning With Swarm Intelligence',
    publicationName:
      'IEEE Transactions on Emerging Topics in Computational Intelligence',
    link: 'https://doi.org/10.1109/TETCI.2021.3083428',
    previewUrl: '/pdfs/adaswarm.pdf',
    publicationImageSrc: '/images/ieee_logo_white.png',
    year: '2021',
    abstract:
      'This paper introduces AdaSwarm, a novel gradient-free optimizer which has similar or even better performance than the Adam optimizer adopted in neural networks. In order to support our proposed AdaSwarm, a novel Exponentially weighted Momentum Particle Swarm Optimizer (EMPSO), is proposed. The ability of AdaSwarm to tackle optimization problems is attributed to its capability to perform good gradient approximations. We show that, the gradient of any function, differentiable or not, can be approximated by using the parameters of EMPSO. This is a novel technique to simulate GD which lies at the boundary between numerical methods and swarm intelligence. Mathematical proofs of the gradient approximation produced are also provided. AdaSwarm competes closely with several state-of-the-art (SOTA) optimizers. We also show that AdaSwarm is able to handle a variety of loss functions during backpropagation, including the maximum absolute error (MAE).'
  },
  {
    title: 'The State of Lithium-Ion Battery Health Prognostics in the CPS Era',
    publicationName: 'ArXiv',
    link: 'https://doi.org/10.48550/arXiv.2403.19816',
    previewUrl: '/pdfs/survey-paper.pdf',
    publicationImageSrc: '/images/ieee_logo_white.png',
    year: '2024',
    abstract:
      'Lithium-ion batteries (Li-ion) have revolutionized energy storage technology, becoming integral to our daily lives by powering a diverse range of devices and applications. Their high energy density, fast power response, recyclability, and mobility advantages have made them the preferred choice for numerous sectors. This paper explores the seamless integration of Prognostics and Health Management within batteries, presenting a multidisciplinary approach that enhances the reliability, safety, and performance of these powerhouses. Remaining useful life (RUL), a critical concept in prognostics, is examined in depth, emphasizing its role in predicting component failure before it occurs. The paper reviews various RUL prediction methods, from traditional models to cutting-edge data-driven techniques. Furthermore, it highlights the paradigm shift toward deep learning architectures within the field of Li-ion battery health prognostics, elucidating the pivotal role of deep learning in addressing battery system complexities. Practical applications of PHM across industries are also explored, offering readers insights into real-world implementations.This paper serves as a comprehensive guide, catering to both researchers and practitioners in the field of Li-ion battery PHM.'
  },
  {
    title:
      'De-SaTE: Denoising Self-attention Transformer Encoders for Li-ion Battery Health Prognostics',
    publicationName: 'IEEE International Conference on Big Data',
    link: 'https://doi.org/10.1109/BigData59044.2023.10386134',
    previewUrl: '/pdfs/de-sate.pdf',
    publicationImageSrc: '/images/ieee_logo_white.png',
    year: '2024',
    abstract:
      'Lithium Ion (Li-ion) batteries have gained widespread popularity across various industries, from powering portable electronic devices to propelling electric vehicles and supporting energy storage systems. A central challenge in managing Li-ion batteries effectively is accurately predicting their Remaining Useful Life (RUL), which is a critical measure for proactive maintenance and predictive analytics. This study presents a novel approach that harnesses the power of multiple denoising modules, each trained to address specific types of noise commonly encountered in battery data. Specifically we use a denoising auto-encoder and a wavelet denoiser to generate encoded/decomposed representations, which are subsequently processed through dedicated self-attention transformer encoders. After extensive experimentation on the NASA and CALCE datasets, we are able to characterize a broad spectrum of health indicator estimations under a set of diverse noise patterns. We find that our reported error metrics on these datasets are on par or better with the best reported in recent literature.'
  },
  {
    title:
      'TFBEST: Dual-Aspect Transformer with Learnable Positional Encoding for Failure Prediction',
    publicationName: 'Submitted to IEEE International Conference on Big Data',
    link: 'https://arxiv.org/abs/2309.02641',
    previewUrl: '/pdfs/tfmast.pdf',
    publicationImageSrc: '/images/ieee_logo_white.png',
    year: '2023',
    abstract:
      'Hard Disk Drive (HDD) failures in datacenters are costly - from catastrophic data loss to a question of goodwill, stakeholders want to avoid it like the plague. An important tool in proactively monitoring against HDD failure is timely estimation of the Remaining Useful Life (RUL). To this end, the Self-Monitoring, Analysis and Reporting Technology employed within HDDs (S.M.A.R.T.) provide critical logs for long-term maintenance of the security and dependability of these essential data storage devices. Data-driven predictive models in the past have used these S.M.A.R.T. logs and CNN/RNN based architectures heavily. However, they have suffered significantly in providing a confidence interval around the predicted RUL values as well as in processing very long sequences of logs. In addition, some of these approaches, such as those based on LSTMs, are inherently slow to train and have tedious feature engineering overheads. To overcome these challenges, in this work we propose a novel transformer architecture - a Temporal-fusion Bi-encoder Self-attention Transformer (TFBEST) for predicting failures in hard-drives. It is an encoder-decoder based deep learning technique that enhances the context gained from understanding health statistics sequences and predicts a sequence of the number of days remaining before a disk potentially fails. In this paper, we also provide a novel confidence margin statistic that can help manufacturers replace a hard-drive within a time frame. Experiments on Seagate HDD data show that our method significantly outperforms the state-of-the-art RUL prediction methods during testing over the exhaustive 10-year data from Backblaze (2013-present). Although validated on HDD failure prediction, the TFBEST architecture is well-suited for other prognostics applications and may be adapted for allied regression problems.'
  },
  {
    title:
      'Large-scale End-of-Life Prediction of Hard Disks in Distributed Datacenters',
    publicationName:
      'IEEE International Conference on Smart Computing (SMARTCOMP)',
    link: 'https://doi.org/10.1109/SMARTCOMP58114.2023.00069',
    publicationImageSrc: '/images/ieee_logo_white.png',
    previewUrl: '/pdfs/smartcomp.pdf',
    year: '2023',
    abstract:
      'On a daily basis, data centers process huge volumes of data backed by the proliferation of inexpensive hard disks. Data stored in these disks serve a range of critical functional needs from financial, and healthcare to aerospace. As such, premature disk failure and consequent loss of data can be catastrophic. To mitigate the risk of failures, cloud storage providers perform condition-based monitoring and replace hard disks before they fail. By estimating the remaining useful life of hard disk drives, one can predict the time-to-failure of a particular device and replace it at the right time, ensuring maximum utilization whilst reducing operational costs. In this work, large-scale predictive analyses are performed using severely skewed health statistics data by incorporating customized feature engineering and a suite of sequence learners. Past work suggests using LSTMs as an excellent approach to predicting remaining useful life. To this end, we present an encoder-decoder LSTM model where the context gained from understanding health statistics sequences aid in predicting an output sequence of the number of days remaining before a disk potentially fails. The models developed in this work are trained and tested across an exhaustive set of all of the 10 years of S.M.A.R.T. health data in circulation from Backblaze and on a wide variety of disk instances. It closes the knowledge gap on what full-scale training achieves on thousands of devices and advances the state-of-the-art by providing tangible metrics for evaluation and generalization for practitioners looking to extend their workflow to all years of health data in circulation across disk manufacturers. The encoder-decoder LSTM posted an RMSE of 0.83 during training and 0.86 during testing over the exhaustive 10 year data while being able to generalize competitively over other drives from the Seagate family.'
  }
];

const Publication = ({
  previewUrl,
  title,
  publicationName,
  link
}: PublicationProps) => {
  return (
    <Stack align="center" spacing="3rem" onClick={() => openUrl(link)}>
      <PDF file={previewUrl} maxWidth={150} />
      <Stack align="center">
        <Heading size="1.2rem" w="60%" textAlign="center">
          {title}
        </Heading>
        <Heading variant="code" w="50%" size="xs" textAlign="center">
          {publicationName}
        </Heading>
      </Stack>
    </Stack>
  );
};

export const Publications = (props: BoxProps) => {
  const [filter, setFilter] = useState('all');
  return (
    <Stack h="full" w="full" spacing="3rem" {...props}>
      <HStack w="45%" alignSelf="flex-end" pr="10rem">
        <Divider orientation="horizontal" />
        <Heading variant="code" size="lg">
          03.
        </Heading>
        <Heading size="lg" mr="1rem">
          Publications
        </Heading>
      </HStack>
      <Stack align="center" w="full" spacing="6rem">
        <Select
          size="lg"
          w="10rem"
          variant="flushed"
          defaultValue="all"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option value="all">All</option>
          {publications
            .map((publication) => parseInt(publication.year))
            .sort((a, b) => b - a)
            .unique()
            .map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </Select>

        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={3}
          w="full"
          justifyContent="center"
          alignItems="center"
        >
          {publications
            .filter((publication) =>
              filter === 'all' ? publication : publication.year === filter
            )
            .sort((a, b) => (a.year < b.year ? 1 : -1))
            .map((publication, index) => (
              <GridItem key={index} w="100%" h="full" py="0.5rem">
                <Publication key={index} {...publication} />
              </GridItem>
            ))}
        </Grid>
      </Stack>
    </Stack>
  );
};
