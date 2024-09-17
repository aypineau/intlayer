import {
  addOrganization,
  deleteOrganization,
  selectOrganization,
  getOrganizations,
  updateOrganization,
} from '@controllers/organization.controller';
import {
  apiAccessControlMiddleWare,
  AccessRule,
} from '@utils/apiAccessControl';
import { Router } from 'express';

export const organizationRouter: Router = Router();

organizationRouter.get(
  '/',
  apiAccessControlMiddleWare(AccessRule.authenticated),
  getOrganizations
);

organizationRouter.post(
  '/',
  apiAccessControlMiddleWare(AccessRule.authenticated),
  addOrganization
);
organizationRouter.put(
  '/',
  apiAccessControlMiddleWare([
    AccessRule.authenticated,
    AccessRule.hasOrganization,
  ]),
  updateOrganization
);
organizationRouter.delete(
  '/:organizationId',
  apiAccessControlMiddleWare([
    AccessRule.authenticated,
    AccessRule.hasOrganization,
  ]),
  deleteOrganization
);
organizationRouter.put(
  '/:organizationId',
  apiAccessControlMiddleWare([AccessRule.authenticated]),
  selectOrganization
);
