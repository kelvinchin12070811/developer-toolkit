import { GeneratorCard } from '@/components/ui/GeneratorCard';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export function TimestampGeneratorPage() {
  const [timestamp, setTimestamp] = useState('');
  const [timestampFormat, setTimestampFormat] = useState('iso8601');

  const generateTimestamp = () => {
    const timestamp = dayjs();
    if (timestampFormat === 'iso8601') {
      setTimestamp(timestamp.format('YYYY-MM-DDTHH:mm:ss'));
    } else if (timestampFormat === 'iso8601_file') {
      setTimestamp(timestamp.format('YYYYMMDDTHHmmss'));
    } else {
      setTimestamp(timestamp.unix().toString());
    }
  };

  useEffect(generateTimestamp);

  return (
    <GeneratorCard
      title='Timestamp Generator'
      valueToCopy={timestamp || null}
      onGenerate={generateTimestamp}
    >
      <div>
        <label className='label'>Timestamp Generator</label>
        <input className='input w-full' defaultValue={timestamp} readOnly />
      </div>

      <div>
        <label className='label'>Format</label>
        <select
          className='select w-full'
          value={timestampFormat}
          onChange={e => setTimestampFormat(e.target.value)}
        >
          <option value='iso8601'>Local ISO8601</option>
          <option value='iso8601_file'>Filename compatible local ISO8601</option>
          <option value='unix'>UNIX Timestamp</option>
        </select>
      </div>
    </GeneratorCard>
  );
}
