import { Box } from '@chakra-ui/react';
import { Layout } from 'nextra-theme-docs';
import { getPageMap } from 'nextra/page-map';
import { navBarHeight } from '@/lib/size';
import { Footer } from '@/components/layout/footer';

const RootLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="blog">
      <Box ml="4rem" mt={navBarHeight}>
        <Layout
          pageMap={await getPageMap()}
          sidebar={{ toggleButton: false }}
          darkMode={false}
          footer={<Footer />}
          editLink={null}
          feedback={{ content: null }}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </Box>
    </section>
  );
};

export const metadata = {
  title: 'Rohan Mohapatra | Blog',
  description:
    'Read insights, tutorials, and stories from Rohan Mohapatra on software development, technology, and personal growth.'
};

export default RootLayout;
