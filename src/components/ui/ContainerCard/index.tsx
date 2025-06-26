interface ContainerCardProps {
  title?: string;
  children: React.ReactNode;
}

export function ContainerCard({ title, children }: ContainerCardProps) {
  return (
    <main className='card bg-base-200 w-[min(500px,80vw)]'>
      <section className='card-body'>
        {title && <h2 className='card-title'>{title}</h2>}
        {children}
      </section>
    </main>
  );
}
