import { Container, MaxHeightSmoother } from '@intlayer/design-system';
import { cn } from '@utils/cn';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { forwardRef, type ComponentProps, type FC } from 'react';
import type { Section } from './docData';

type OptionalLinkProps = ComponentProps<typeof Link>;

const OptionalLink: FC<OptionalLinkProps> = ({ href, ...props }) => {
  if (!href) return <span {...props} />;
  return <Link {...props} href={href} />;
};

type DocNavListProps = {
  docData: Section;
  activeSections: string[];
};

export const DocNavList = forwardRef<HTMLDivElement, DocNavListProps>(
  ({ docData, activeSections }) => (
    <Container
      className="sticky h-full overflow-scroll md:top-14 md:max-h-[calc(100vh-58px)] md:overflow-scroll"
      roundedSize="none"
      transparency="sm"
    >
      <nav className="flex min-w-40 flex-col gap-5 px-32 pb-20 pt-10 md:max-w-80 md:px-6">
        {Object.keys(docData).map((key1) => {
          const section1Data = docData[key1];
          const sectionDefault = section1Data.default;
          const subSections = section1Data.subSections;
          const isActive = key1 === activeSections[0];

          return (
            <div key={key1}>
              <OptionalLink
                href={sectionDefault?.url ?? ''}
                className={cn([
                  'text-neutral hover:text-text dark:hover:text-text-dark text-nowrap text-left font-semibold transition-colors dark:text-neutral-200',
                  isActive && 'text-primary dark:text-primary-dark',
                ])}
              >
                {section1Data.title}
              </OptionalLink>

              {subSections && Object.keys(subSections).length > 0 && (
                <div className="border-neutral dark:border-neutral-dark mt-4 flex flex-col gap-4 border-l-[0.5px] p-1">
                  {Object.keys(subSections).map((key2) => {
                    const section2Data = subSections[key2];
                    const sectionDefault = section2Data.default;
                    const subSections2 = section2Data.subSections;
                    const hasSubsections =
                      subSections2 && Object.keys(subSections2).length > 0;
                    const isActive =
                      key1 === activeSections[0] && key2 === activeSections[1];

                    return (
                      <div key={key2}>
                        <OptionalLink
                          href={sectionDefault?.url ?? ''}
                          className={cn([
                            'text-neutral hover:text-text dark:hover:text-text-dark flex flex-row items-center text-nowrap p-2 text-left text-sm transition-colors dark:text-neutral-200',
                            isActive && 'text-primary dark:text-primary-dark',
                          ])}
                        >
                          {section2Data?.title}
                          {hasSubsections && !isActive && (
                            <ChevronDown className="ml-1 size-4" />
                          )}
                        </OptionalLink>

                        {subSections2 &&
                          Object.keys(subSections2).length > 0 && (
                            <MaxHeightSmoother isHidden={!isActive}>
                              <div className="text-neutral hover:text-text dark:hover:text-text-dark flex flex-col items-start gap-2 p-1 transition-colors">
                                {Object.keys(subSections2).map((key3) => {
                                  const section3Data = subSections2[key3];
                                  const sectionDefault = section3Data.default;

                                  const isActive =
                                    key1 === activeSections[0] &&
                                    key2 === activeSections[1] &&
                                    key3 === activeSections[2];

                                  return (
                                    <OptionalLink
                                      key={key3}
                                      href={sectionDefault?.url ?? ''}
                                      className={cn([
                                        'text-neutral hover:text-text dark:hover:text-text-dark text-nowrap p-2 text-left text-xs transition-colors dark:text-neutral-200',
                                        isActive &&
                                          'text-primary dark:text-primary-dark',
                                      ])}
                                    >
                                      {section3Data.title}
                                    </OptionalLink>
                                  );
                                })}
                              </div>
                            </MaxHeightSmoother>
                          )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </Container>
  )
);

DocNavList.displayName = 'DocNavList';

export default DocNavList;
