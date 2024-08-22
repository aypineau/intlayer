import { useIntlayer } from 'next-intlayer/server';
import type { FC } from 'react';
import { AnimatedDiv } from './AnimatedDiv';

export const WhyToChoseIntlayerSection: FC = () => {
  const { title, content } = useIntlayer('why-to-chose-intlayer-section');

  return (
    <section className="my-10 flex w-full flex-col items-center justify-center">
      <h2 className="text-neutral dark:text-neutral-dark">{title}</h2>

      <div className="m-auto mt-3 flex flex-wrap justify-evenly gap-x-2 gap-y-10 px-3 py-2 md:gap-x-10 md:px-10 xl:gap-x-28">
        {content.map((asset, index) => (
          <AnimatedDiv
            className="flex max-w-[180px] flex-col items-center gap-3 text-center md:max-w-[200px]"
            key={index}
          >
            <span className="flex size-12 items-center justify-center rounded-full border-4 border-lime-300 text-2xl text-lime-800 dark:border-lime-900 dark:text-lime-600">
              {index + 1}
            </span>
            <strong className="text-md font-semibold md:text-lg">
              {asset.title}
            </strong>
            <AnimatedDiv>
              <p className="text-neutral dark:text-neutral-dark text-xs">
                {asset.descrition}
              </p>
            </AnimatedDiv>
          </AnimatedDiv>
        ))}
      </div>
    </section>
  );
};
