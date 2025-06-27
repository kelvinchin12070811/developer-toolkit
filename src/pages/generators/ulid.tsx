import { ulid } from 'ulid';
import { useState } from 'react';
import { GeneratorCard } from '@/components/ui/GeneratorCard';

export function ULIDGeneratorPage() {
  const [ulidValue, setUlidValue] = useState('');

  const generateUlid = () => {
    return ulid();
  };

  return (
    <GeneratorCard
      title='ULID Generator'
      valueToCopy={ulidValue || null}
      onGenerate={() => {
        setUlidValue(generateUlid());
      }}
    >
      <div>
        <label className='label'>ULID Generator</label>
        <input className='input w-full' defaultValue={ulidValue} readOnly />
      </div>
    </GeneratorCard>
  );
}
