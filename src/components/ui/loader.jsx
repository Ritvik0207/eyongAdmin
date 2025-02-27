import * as React from 'react';
import { cn } from '@/lib/utils';

const Loader = React.forwardRef(({ className, ...props }, ref) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={cn('animate-spin', className)}
      {...props}
      ref={ref}
    >
      <path d='M21 12a9 9 0 1 1-6.219-8.56' />
    </svg>
  );
});

Loader.displayName = 'Loader';

export { Loader };
