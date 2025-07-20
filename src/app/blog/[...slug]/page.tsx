import { generateStaticParamsFor, importPage } from 'nextra/pages';
import { Metadata } from 'next';
import { useMDXComponents as getMDXComponents } from '@/mdx-components';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const Wrapper = getMDXComponents().wrapper;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TopContent = ({ metadata }: { metadata: any }) => {
  return (
    <p className="x:mt-4 x:mb-2 x:text-sm x:text-gray-800 x:text-start x:dark:text-gray-400">
      Published on{' '}
      <span>
        {new Date(metadata.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </span>{' '}
      &bull; {metadata.readingTime.text}
    </p>
  );
};

export const generateStaticParams = generateStaticParamsFor('slug');

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { metadata } = await importPage(params.slug);

  return metadata;
}

export default async function Page(props: Props) {
  const params = await props.params;
  const result = await importPage(params.slug);
  const { default: MDXContent, toc, metadata } = result;
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <TopContent metadata={metadata} />
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
