import { setTimeout } from 'node:timers/promises';
import type { DeclarationContent } from 'intlayer';

const fakeFetch = async (): Promise<string> => {
  // Wait for 200ms to simulate a fetch from the server
  return await setTimeout(200).then(
    () => 'This is the content fetched from the server'
  );
};

const asyncFunctionContent: DeclarationContent = {
  id: 'async_function',
  text: fakeFetch,
};

export default asyncFunctionContent;
