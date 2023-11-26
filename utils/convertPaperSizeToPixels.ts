enum PaperSize {
  A1 = 'A1',
  A2 = 'A2',
  A3 = 'A3',
  A4 = 'A4',
  A5 = 'A5',
}

type PaperDimensions = {
  widthMM: number;
  heightMM: number;
};

const paperDimensions: Record<PaperSize, PaperDimensions> = {
  [PaperSize.A1]: { widthMM: 594, heightMM: 841 },
  [PaperSize.A2]: { widthMM: 420, heightMM: 594 },
  [PaperSize.A3]: { widthMM: 297, heightMM: 420 },
  [PaperSize.A4]: { widthMM: 210, heightMM: 297 },
  [PaperSize.A5]: { widthMM: 148, heightMM: 210 },
};

const PPI = 96; // Pixels Per Inch
const MILLIMETERS_PER_INCH = 25.4;

function convertMMToPixels(mm: number): number {
  return (mm / MILLIMETERS_PER_INCH) * PPI;
}

export default function convertPaperSizeToPixels(size: PaperSize): {
  width: number;
  height: number;
} {
  const dimensions = paperDimensions[size];
  if (!dimensions) {
    throw new Error(`Invalid paper size: ${size}`);
  }

  return {
    width: convertMMToPixels(dimensions.widthMM),
    height: convertMMToPixels(dimensions.heightMM),
  };
}
