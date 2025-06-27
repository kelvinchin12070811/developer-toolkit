import { ContainerCard } from '@/components/ui/ContainerCard';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { FaCheck } from 'react-icons/fa6';

interface GeneratorCardProps {
  title: string;
  className?: string;
  children: React.ReactNode;
  onGenerate?: () => void;
  valueToCopy?: string | null;
}

export function GeneratorCard({
  title,
  children,
  className,
  onGenerate,
  valueToCopy,
}: GeneratorCardProps) {
  const [isCopied, setIsCopied] = useState(false);
  const generateBtnRef = useRef<HTMLButtonElement>(null);
  const copyBtnRef = useRef<HTMLButtonElement>(null);

  const handleCopy = async () => {
    if (valueToCopy == null) return;

    setIsCopied(true);
    try {
      await navigator.clipboard.writeText(valueToCopy);
    } catch (error) {
      toast.error('Failed to copy to clipboard');
      console.error(error);
    } finally {
      setTimeout(() => setIsCopied(false), 1000);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        generateBtnRef.current?.click();
      }

      // Prevent default action for Ctrl+C to avoid browser copy
      if (event.ctrlKey && event.key === 'c') {
        event.preventDefault();
        // Call the onCopy function if provided
        if (onGenerate) {
          copyBtnRef.current?.click();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <ContainerCard title={title} className={className}>
      {children}
      <section className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 mt-4'>
        <button className='btn btn-block' onClick={handleCopy} disabled={isCopied} ref={copyBtnRef}>
          {isCopied ? (
            <>
              <FaCheck size={16} /> Copied
            </>
          ) : (
            'Copy'
          )}
        </button>
        <button className='btn btn-primary btn-block' onClick={onGenerate} ref={generateBtnRef}>
          Generate
        </button>
      </section>
    </ContainerCard>
  );
}
