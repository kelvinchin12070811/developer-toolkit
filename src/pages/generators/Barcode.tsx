import { GeneratorCard } from '@/components/ui/GeneratorCard';
import { useState } from 'react';
import { ColourInput } from '@/components/ui/ColourInput';
import bwipjs from '@bwip-js/browser';

export function BarcodeGenerator() {
  const [text, setText] = useState<string>('');
  const [barcodeType, setBarcodeType] = useState<string>('qrcode');
  const [foregroundColor, setForegroundColor] = useState<string>('#000000');
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [scale, setScale] = useState<number>(2);
  const [paddingSize, setPaddingSize] = useState<number>(2);
  const [generatedBarcode, setGeneratedBarcode] = useState<string | null>(null);

  const onGenerateBarcode = () => {
    if (!text) {
      setGeneratedBarcode(null);
      return;
    }

    const canvas = document.createElement('canvas');
    bwipjs.toCanvas(canvas, {
      bcid: barcodeType,
      text: text,
      scale: scale,
      backgroundcolor: backgroundColor,
      paddingwidth: paddingSize,
      paddingheight: paddingSize,
      barcolor: foregroundColor,
    });

    setGeneratedBarcode(canvas.toDataURL());
  };

  const openInNewTab = () => {
    if (!generatedBarcode) return;

    window.open(generatedBarcode);
  };

  return (
    <GeneratorCard title='Barcode Generator' noCopy onGenerate={onGenerateBarcode}>
      <div>
        <label className='label'>Text</label>
        <input
          className='input w-full'
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder='Text to encode'
        />
      </div>
      <div>
        <label className='label'>Barcode Type</label>
        <select
          className='select w-full'
          value={barcodeType}
          onChange={e => setBarcodeType(e.target.value)}
        >
          <option value='qrcode'>QR Code</option>
          <option value='datamatrix'>Data Matrix</option>
          <option value='datamatrixrectangularextension'>Data Matrix Rectangular Extension</option>
        </select>
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-1'>
        <div>
          <label className='label'>Scale</label>
          <input
            type='number'
            className='input w-full'
            min={1}
            max={255}
            value={scale}
            onChange={e => setScale(Number.parseInt(e.target.value) || 0)}
          />
        </div>
        <div>
          <label className='label'>Padding Size</label>
          <input
            type='number'
            className='input w-full'
            min={1}
            max={255}
            value={paddingSize}
            onChange={e => setPaddingSize(Number.parseInt(e.target.value) || 0)}
          />
        </div>
        <div>
          <label className='label'>Foreground Color</label>
          <ColourInput value={foregroundColor} onChange={setForegroundColor} />
        </div>
        <div>
          <label className='label'>background Color</label>
          <ColourInput value={backgroundColor} onChange={setBackgroundColor} />
        </div>
      </div>
      {generatedBarcode && (
        <div>
          <label className='label mt-4'>Result</label>
          <div
            className='flex justify-center bg-base-200 rounded p-4 cursor-pointer'
            onClick={openInNewTab}
            title='Click to open in new tab'
          >
            <img src={generatedBarcode} className='max-h-40' alt='Generated Barcode' />
          </div>
        </div>
      )}
    </GeneratorCard>
  );
}
