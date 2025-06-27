import { GeneratorCard } from '@/components/ui/GeneratorCard';
import { useEffect, useState } from 'react';

const charPool = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
};

export function CharactersGeneratorPage() {
  const [characters, setCharacters] = useState<string | null>(null);
  const [targetLength, setTargetLength] = useState(10);
  const [shouldGenerateLowercase, setShouldGenerateLowercase] = useState(true);
  const [shouldGenerateUppercase, setShouldGenerateUppercase] = useState(true);
  const [shouldGenerateDigits, setShouldGenerateDigits] = useState(true);
  const [shouldGenerateSymbols, setShouldGenerateSymbols] = useState(false);

  const generateCharacters = () => {
    const targetPool = [
      ...(shouldGenerateLowercase ? charPool.lowercase.split('') : []),
      ...(shouldGenerateUppercase ? charPool.uppercase.split('') : []),
      ...(shouldGenerateDigits ? charPool.numbers.split('') : []),
      ...(shouldGenerateSymbols ? charPool.symbols.split('') : []),
    ].join('');

    let result = '';
    for (let i = 0; i < targetLength; i++) {
      const randomIndex = Math.floor(Math.random() * targetPool.length);
      result += targetPool[randomIndex];
    }
    setCharacters(result);
  };

  useEffect(() => {
    if (targetLength < 1) {
      setTargetLength(1);
    } else if (targetLength > 255) {
      setTargetLength(255);
    }
  }, [targetLength]);

  return (
    <GeneratorCard
      title='Characters Generator'
      valueToCopy={characters}
      onGenerate={generateCharacters}
    >
      <div>
        <label className='label'>Characters Generator</label>
        <input className='input w-full' defaultValue={characters ?? ''} readOnly />
      </div>

      <div className='flex flex-col gap-0.5'>
        <label className='label'>Length</label>
        <div className='flex gap-2 items-center'>
          <input
            type='range'
            className='range w-full'
            min={1}
            max={255}
            step={1}
            value={targetLength}
            onChange={e => setTargetLength(parseInt(e.target.value) || 1)}
          />
          <input
            className='input h-7 w-12'
            value={targetLength}
            onChange={e => setTargetLength(parseInt(e.target.value) || 1)}
          />
        </div>

        <div className='flex flex-col gap-2 items-stretch'>
          <label className='label'>Character Types</label>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-1'>
            <label className='label'>
              <input
                type='checkbox'
                className='toggle'
                checked={shouldGenerateLowercase}
                onChange={e => setShouldGenerateLowercase(e.target.checked)}
              />
              Lowercase
            </label>
            <label className='label'>
              <input
                type='checkbox'
                className='toggle'
                checked={shouldGenerateUppercase}
                onChange={e => setShouldGenerateUppercase(e.target.checked)}
              />
              Uppercase
            </label>
            <label className='label'>
              <input
                type='checkbox'
                className='toggle'
                checked={shouldGenerateDigits}
                onChange={e => setShouldGenerateDigits(e.target.checked)}
              />
              Digits
            </label>
            <label className='label'>
              <input
                type='checkbox'
                className='toggle'
                checked={shouldGenerateSymbols}
                onChange={e => setShouldGenerateSymbols(e.target.checked)}
              />
              Symbols
            </label>
          </div>
        </div>
      </div>
    </GeneratorCard>
  );
}
