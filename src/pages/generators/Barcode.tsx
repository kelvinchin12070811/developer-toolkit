import { GeneratorCard } from '@/components/ui/GeneratorCard';
import { useState } from 'react';
import { ColourInput } from '@/components/ui/ColourInput';

export function BarcodeGenerator() {
  const [text, setText] = useState<string>('');
  const [barcodeType, setBarcodeType] = useState<string>('qr-code');
  const [foregroundColor, setForegroundColor] = useState<string>('#000000');
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');

  return (
    <GeneratorCard title='Barcode Generator' noCopy>
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
          <option value='qr-code'>QR Code</option>
          <option value='data-matrix'>Data Matrix</option>
        </select>
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-1'>
        <div>
          <label className='label'>Scale</label>
          <input type='number' className='input w-full' min={1} max={255} />
        </div>
        <div>
          <label className='label'>Padding Size</label>
          <input type='number' className='input w-full' min={1} max={255} />
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
    </GeneratorCard>
  );
}
