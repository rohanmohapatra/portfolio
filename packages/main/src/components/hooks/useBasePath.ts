import { useRouter } from 'next/router';

export const useBasePath = () => {
  const router = useRouter();

  const getResolvedPath = (path: string) => {
    return `${router.basePath}${path}`;
  };

  return {
    getResolvedPath
  };
};
