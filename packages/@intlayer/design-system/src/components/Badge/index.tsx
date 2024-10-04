import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export const badgeVariants = cva(
  'focus:ring-ring inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      color: {
        primary:
          'border-primary bg-primary text-primary hover:bg-primary-500 dark:border-primary-dark dark:bg-primary-dark dark:text-primary-dark hover:dark:bg-primary-300',
        secondary:
          'border-secondary bg-secondary text-secondary hover:bg-secondary-300 dark:border-secondary-dark dark:bg-secondary-dark dark:text-secondary-dark hover:dark:bg-secondary-100',
        destructive:
          'border-destructive bg-destructive text-destructive hover:bg-destructive-500 dark:border-destructive-dark dark:bg-destructive-dark hover:dark:bg-destructive-200',
        neutral:
          'border-neutral bg-neutral text-neutral hover:bg-neutral-600 dark:border-neutral-dark dark:bg-neutral-dark dark:text-neutral-dark hover:dark:bg-neutral-400',
        light: 'border-white bg-white text-white hover:bg-neutral-500',
        dark: 'border-neutral-800 bg-neutral-800 text-neutral-800 hover:bg-neutral-900 dark:hover:bg-neutral-700',
        text: 'border-text bg-text text-text hover:opacity-80 dark:border-text-dark dark:bg-text-dark dark:text-text-dark',
        custom: '',
      },
      variant: {
        default: 'rounded-lg text-text-opposite dark:text-text-opposite-dark',
        none: 'border-none bg-opacity-0 text-inherit hover:bg-opacity-0 dark:bg-opacity-0 dark:text-inherit dark:hover:bg-opacity-0',
        outline:
          'rounded-lg border-[1.5px] bg-opacity-0 hover:bg-opacity-30 dark:bg-opacity-0',
        hoverable:
          'rounded-lg border-none bg-opacity-0 transition hover:bg-opacity-10 dark:border-none dark:bg-opacity-0 dark:hover:bg-opacity-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      color: 'primary',
    },
  }
);

export type BadgeProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

export const Badge = ({ className, variant, color, ...props }: BadgeProps) => (
  <div
    className={cn(badgeVariants({ variant, color }), className)}
    {...props}
  />
);
