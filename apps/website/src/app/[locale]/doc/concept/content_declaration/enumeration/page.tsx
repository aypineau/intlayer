import { DocPageLayout } from '@components/DocPage/DocPageLayout';
import { DocumentationRender } from '@components/DocPage/DocumentationRender';
import { PageLayout } from '@layouts/PageLayout';
import type { NextPageIntlayer } from 'next-intlayer';
import { generateMetadata } from './metadata';

export { generateMetadata };

const Page: NextPageIntlayer = ({ params: { locale } }) => (
  <PageLayout locale={locale} editorEnabled={false}>
    <DocPageLayout
      activeSections={['concept', 'content_declaration', 'enumeration']}
    >
      <DocumentationRender docName="content_declaration__enumeration" />
    </DocPageLayout>
  </PageLayout>
);
export default Page;
