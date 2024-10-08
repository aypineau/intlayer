import { getAuthAPI } from './auth';
import { getDictionaryAPI } from './dictionary';
import type { FetcherOptions } from './fetcher';
import { getOrganizationAPI } from './organization';
import { getProjectAPI } from './project';
import { getUserAPI } from './user';

export const getIntlayerAPI = (authAPIOptions: FetcherOptions = {}) => ({
  organization: getOrganizationAPI(authAPIOptions),
  project: getProjectAPI(authAPIOptions),
  user: getUserAPI(authAPIOptions),
  auth: getAuthAPI(authAPIOptions),
  dictionary: getDictionaryAPI(authAPIOptions),
});

export const intlayerAPI = getIntlayerAPI();
