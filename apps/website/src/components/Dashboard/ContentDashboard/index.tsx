'use client';

import {
  Button,
  DictionariesSelector,
  Loader,
  Modal,
  useEditionPanelStore,
} from '@intlayer/design-system';
import { useGetAllDictionaries } from '@intlayer/design-system/hooks';
import { ChevronRight, Plus } from 'lucide-react';
import { useIntlayer, useLocale } from 'next-intlayer';
import { Suspense, useState, type FC } from 'react';
import { DictionaryCreationForm } from './DictionaryCreationForm';

export const ContentDashboardContent: FC = () => {
  const { focusedContent, setFocusedContent } = useEditionPanelStore((s) => ({
    focusedContent: s.focusedContent,
    setFocusedContent: s.setFocusedContent,
  }));
  const { locale } = useLocale();
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  const { noDictionaryView, createDictionaryButton } =
    useIntlayer('dictionary-form');
  const { online, isLoading } = useGetAllDictionaries();
  const dictionaries = Object.values(online) ?? [];

  if (isLoading) return <Loader />;

  if (!focusedContent) {
    if (dictionaries.length === 0) {
      return (
        <div className="flex flex-1 flex-col items-center justify-center gap-10">
          <span className="text-neutral-dark dark:text-neutral-dark text-sm">
            {noDictionaryView.title}
          </span>
          <Button
            label={createDictionaryButton.ariaLabel.value}
            IconRight={Plus}
            variant="default"
            color="text"
            onClick={() => setIsCreationModalOpen(true)}
          >
            {createDictionaryButton.text}
          </Button>
          <Modal
            isOpen={isCreationModalOpen}
            onClose={() => setIsCreationModalOpen(false)}
          >
            <DictionaryCreationForm />
          </Modal>
        </div>
      );
    }

    return (
      <div className="flex max-w-[40rem] flex-1 flex-col gap-2">
        {dictionaries.map((dictionary) => (
          <Button
            key={String(dictionary._id)}
            label="Select dictionary"
            IconRight={ChevronRight}
            variant="hoverable"
            color="text"
            onClick={() =>
              setFocusedContent({
                dictionaryId: dictionary.id,
                keyPath: [],
                dictionaryPath: undefined,
              })
            }
          >
            {dictionary.id}
          </Button>
        ))}
      </div>
    );
  }

  return <DictionariesSelector locale={locale} />;
};

export const ContentDashboard: FC = () => (
  <Suspense fallback={<Loader />}>
    <ContentDashboardContent />
  </Suspense>
);
