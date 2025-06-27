import { GeneratorCard } from '@/components/ui/GeneratorCard';
import { useState } from 'react';
import * as uuid from 'uuid';

export function UUIDGeneratorPage() {
  const [uuidVersion, setUuidVersion] = useState('v4');
  const [uuidValue, setUuidValue] = useState('');

  const generateUuid = () => {
    switch (uuidVersion) {
      case 'v1':
        return uuid.v1();
      case 'v4':
        return uuid.v4();
      case 'v7':
        return uuid.v7();
      default:
        return '';
    }
  };

  return (
    <GeneratorCard
      title='UUID Generator'
      valueToCopy={uuidValue || null}
      onGenerate={() => {
        setUuidValue(generateUuid());
      }}
    >
      <div>
        <label className='label'>UUID</label>
        <input className='input w-full' defaultValue={uuidValue} />
      </div>

      <div>
        <label className='label'>Type</label>
        <select
          className='select w-full'
          value={uuidVersion}
          onChange={e => setUuidVersion(e.target.value)}
        >
          <option value='v1'>Version 1 (Time-based)</option>
          <option value='v4'>Version 4 (Random)</option>
          <option value='v7'>Version 7 (Unix Epoch Time)</option>
        </select>
      </div>
    </GeneratorCard>
  );
}
