import { cn } from '@/utils/cn.ts';

interface ContainerCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function ContainerCard({ title, children, className }: ContainerCardProps) {
  return (
    <main className='card bg-base-300 w-[min(500px,80vw)] mt-20 lg:mt-0'>
      <section className={cn('card-body', className)}>
        {title && <h2 className='card-title'>{title}</h2>}
        {children}
      </section>
    </main>
  );
}
