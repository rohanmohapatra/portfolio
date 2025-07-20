import { getPageMap } from 'nextra/page-map';
import { Link as CLink, Code, Grid, Heading, Stack } from '@chakra-ui/react';
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
    .filter((item) => item.frontMatter && item.route?.startsWith('/blog/'))
    .sort((a, b) => b.frontMatter?.date ?? 0 - a.frontMatter?.date ?? 0);

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
          py="4rem"
          my="1rem"
        >
          <Heading size="xl" color="white">
            The Log (of Thoughts, Mostly Useless)
          </Heading>

          <Stack gap="0" color="whiteAlpha.900">
            <Heading size="xs">Why did the Python dev go hungry?</Heading>
            <Heading size="sm">
              Because <Code>food = None</Code>, and they forgot to check <Code>if food is not None:</Code> before
              dinner.
            </Heading>
          </Stack>
        </Stack>
        <Heading>Some of my ramblings...</Heading>

        <Grid templateColumns="repeat(3, 1fr)" gap="1rem">
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
