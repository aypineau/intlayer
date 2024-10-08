'use client';

import type { FC, ReactNode } from 'react';

import { Button } from '../Button';
import { useNavActions } from './useNavigation';
import type { NavSection } from '.';

type DesktopNavbarProps = {
  logo: ReactNode;
  sections: NavSection[];
  rightItems?: ReactNode;
};

export const DesktopNavbar: FC<DesktopNavbarProps> = ({
  logo,
  sections,
  rightItems,
}) => {
  const { activeSection, onClickSection } = useNavActions();

  return (
    <nav className="bg-card/80 dark:bg-card-dark/80 sticky top-0 z-50 flex w-screen items-center px-4 py-3 shadow-[0_0_10px_-15px_rgba(0,0,0,0.3)] backdrop-blur">
      {logo}
      <div
        className="text-neutral dark:text-neutral-dark ml-[10vw] flex flex-row gap-6 tracking-wide"
        role="tablist"
        aria-orientation="horizontal"
        aria-multiselectable="false"
      >
        {sections?.map(({ id, url, label, title, onClick }) => (
          <Button
            key={id}
            role="tab"
            variant="invisible-link"
            color="text"
            aria-selected={activeSection === id}
            label={label}
            onClick={(e) => {
              onClickSection(id, url);
              onClick(e);
            }}
          >
            {title}
          </Button>
        ))}
      </div>
      <div className="mr-4 flex w-full items-center justify-end gap-2 md:gap-4">
        {rightItems}
      </div>
    </nav>
  );
};
