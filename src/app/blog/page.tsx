import { getPageMap } from 'nextra/page-map';
import { Link as CLink, Code, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import { Link } from 'nextra-theme-docs';
import { useMDXComponents as getMDXComponents } from '@/mdx-components';

type PageMapItem = {
  name?: string;
  route?: string;
  title?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frontMatter?: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Record<string, any>;
};

const Wrapper = getMDXComponents().wrapper;

export default async function Page() {
  const rootPageMap: PageMapItem[] = await getPageMap('/blog');

  const posts = rootPageMap
    .filter((item) => item.frontMatter && item.route && item.route.startsWith('/blog/'))
    .sort((a, b) => {
      const dateA = a.frontMatter?.date ?? 0;
      const dateB = b.frontMatter?.date ?? 0;
      return dateB - dateA;
    });

  return (
    <Wrapper toc={[]} metadata={{ title: 'Blog Home', filePath: 'src/app/page.tsx' }}>
      <Stack>
        <Stack
          rounded="md"
          backdropFilter="blur(15px)"
          bgImage="url(/images/blog-v2.jpg)"
          bgSize="cover"
          bgPos="center"
          p="2rem"
          py="2rem"
          my="1rem"
        >
          <Heading size="2xl" color="white">
            &gt; The Log (of Thoughts, Mostly Useless)
          </Heading>
        </Stack>

        <Stack gap="0" fontSize="0.9rem" color="whiteAlpha.900" mt="1rem">
          <Heading code size="sm" color="#ffc09f">
            commit bR41nDUMP_9000 (
            <Text as="span" color="#7bf1a8">
              HEAD -&gt;
            </Text>{' '}
            <Text as="span" color="red.400">
              main
            </Text>
            )
          </Heading>
          <Heading code size="sm" color="blackAlpha.500" _dark={{ color: 'whiteAlpha.700' }}>
            Author &mdash; RM
          </Heading>
          <Heading code size="sm" color="blackAlpha.500" _dark={{ color: 'whiteAlpha.700' }}>
            Commit Message &mdash; chore: initialize brain dump
          </Heading>
        </Stack>

        <Stack gap="0" color="zinc.950" _dark={{ color: 'whiteAlpha.900' }} ml="2rem">
          <Heading>Why did the Python Developer go hungry?</Heading>
          <Heading>
            Because <Code variant="solid">food = None</Code>, and they forgot to check{' '}
            <Code variant="solid">if food is not None:</Code> before dinner.
          </Heading>
        </Stack>

        <Stack gap="0" fontSize="0.9rem" color="whiteAlpha.900" mt="1.5rem">
          <Heading code size="sm" color="#ffc09f">
            commit ex1st3nt1al_k3yb0ard
          </Heading>
          <Heading code size="sm" color="blackAlpha.500" _dark={{ color: 'whiteAlpha.700' }}>
            Author &mdash; RM
          </Heading>
          <Heading code size="sm" color="blackAlpha.500" _dark={{ color: 'whiteAlpha.700' }}>
            Commit Message &mdash; feat: adds ramblings
          </Heading>
        </Stack>

        <Grid templateColumns="repeat(3, 1fr)" gap="1rem" ml="2rem" mt="0.5rem">
          {posts.map((page, index) => (
            <Stack
              key={index}
              rounded="md"
              border="1px solid"
              p="1rem"
              pr="2rem"
              borderColor={{ base: 'zinc.950', _dark: 'zinc.50' }}
            >
              <Heading size="lg">{page.title}</Heading>
              <Heading size="xs" mt="-0.5rem">
                {new Date(page.frontMatter?.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Heading>
              <CLink asChild fontSize="0.9rem" mt="1rem">
                <Link href={page.route}> Read more →</Link>
              </CLink>
            </Stack>
          ))}
        </Grid>
      </Stack>
    </Wrapper>
  );
}
