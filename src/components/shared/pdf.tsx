import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { pdfjs, Document, Thumbnail } from 'react-pdf';
import { useColorModeValue } from '@/components/ui/color-mode';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

type PDFFile = string | File | null;
const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
  length: 1
};

const PDF = ({ file, maxWidth }: { file: PDFFile; maxWidth: number }) => {
  const [dimensions, setDimensions] = useState({ width: maxWidth, height: 0 });
  return (
    <Flex height={dimensions.height} ml={dimensions.width / 2}>
      <Document file={file} options={options}>
        <Box position="absolute">
          <Box
            position="relative"
            bottom="0"
            left="0"
            bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.500')}
            width={dimensions.width}
            height={dimensions.height}
            transform="rotate(15deg)"
            rounded="sm"
          />
          <Box
            position="absolute"
            bottom="0"
            left="0"
            bg={useColorModeValue('blackAlpha.300', 'whiteAlpha.700')}
            width={dimensions.width}
            height={dimensions.height}
            transform="rotate(7deg)"
            rounded="sm"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            rounded="sm"
            border="1px solid"
            color={useColorModeValue('black', 'none')}
          >
            <Thumbnail
              pageIndex={0}
              width={maxWidth}
              onLoadSuccess={(page) =>
                setDimensions({ width: page.width, height: page.height })
              }
            />
          </Box>
        </Box>
      </Document>
    </Flex>
  );
};

export default PDF;
