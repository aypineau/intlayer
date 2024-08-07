'use client';

import { MarkdownRenderer } from '@intlayer/design-system';
import { getDoc, type DocsKeys } from '@intlayer/docs';
import { useLocale } from 'next-intlayer';
import { useTheme } from 'next-themes';
import type { FC } from 'react';

type DocumentationRenderProps = {
  docName: DocsKeys;
};

export const DocumentationRender: FC<DocumentationRenderProps> = ({
  docName,
}) => {
  const theme = useTheme();
  const { locale } = useLocale();
  const doc = getDoc(docName as unknown as DocsKeys, locale);

  const isDarkMode = theme.theme === 'dark';
  return <MarkdownRenderer isDarkMode={isDarkMode}>{doc}</MarkdownRenderer>;
};
