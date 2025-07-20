import { Metadata } from 'next';
import { OnlineResume } from '@/components/blocks/resume';

const Page = () => {
  return (
    <section className="c-reset">
      <OnlineResume />
    </section>
  );
};

export const metadata: Metadata = {
  title: 'Rohan Mohapatra | Résumé',
  description:
    'Résumé of Rohan Mohapatra - Software Developer, Engineer, and Tech Enthusiast. Explore work experience, education, skills, and projects.'
};

export default Page;
