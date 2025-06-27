interface ColourInputProps {
  value: string;
  onChange: (value: string) => void;
}
export function ColourInput({ value, onChange }: ColourInputProps) {
  return (
    <main className='flex items-center gap-2'>
      <input
        type='color'
        className='w-7 h-7 cursor-pointer'
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <label>{value}</label>
    </main>
  );
}
