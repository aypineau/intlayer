import { logger } from '@logger/index';
import type { ResponseWithInformation } from '@middlewares/auth.middleware';
import type { FiltersAndPagination } from '@utils/filtersAndPagination/getFiltersAndPaginationFromBody';
import {
  getOrganizationFiltersAndPagination,
  type OrganizationFilters,
} from '@utils/filtersAndPagination/getOrganizationFiltersAndPagination';
import { HttpStatusCodes } from '@utils/httpStatusCodes';
import {
  formatPaginatedResponse,
  formatResponse,
  type PaginatedResponse,
  type ResponseData,
} from '@utils/responseData';
import type { Request } from 'express';
import {
  findOrganizations as findOrganizationsService,
  countOrganizations as countOrganizationsService,
  createOrganization as createOrganizationService,
  updateOrganizationById as updateOrganizationByIdService,
  deleteOrganizationById as deleteOrganizationByIdService,
  getOrganizationById as getOrganizationByIdService,
} from '@/services/organization.service';
import type {
  Organization,
  OrganizationCreationData,
  OrganizationData,
} from '@/types/organization.types';

export type GetOrganizationsParams = FiltersAndPagination<OrganizationFilters>;
export type GetOrganizationsResult = PaginatedResponse<Organization>;

/**
 * Retrieves a list of organizations based on filters and pagination.
 * @param req - Express request object.
 * @param res - Express response object.
 * @returns Response containing the list of organizations and pagination details.
 */
export const getOrganizations = async (
  req: Request<GetOrganizationsParams>,
  res: ResponseWithInformation<GetOrganizationsResult>
) => {
  const { filters, pageSize, skip, page, getNumberOfPages } =
    getOrganizationFiltersAndPagination(req);

  try {
    const organizations = await findOrganizationsService(
      filters,
      skip,
      pageSize
    );
    const totalItems = await countOrganizationsService(filters);

    const responseData = formatPaginatedResponse<Organization>({
      data: organizations,
      page,
      pageSize,
      totalPages: getNumberOfPages(totalItems),
      totalItems,
    });

    return res.json(responseData);
  } catch (error) {
    const errorMessage: string = (error as Error).message;

    logger.error(errorMessage);

    const responseCode = HttpStatusCodes.INTERNAL_SERVER_ERROR_500;
    const responseData = formatPaginatedResponse<Organization>({
      error: errorMessage,
      status: responseCode,
    });

    return res.status(responseCode).json(responseData);
  }
};

export type GetOrganizationParam = { organizationId: string };
export type GetOrganizationResult = ResponseData<Organization>;

/**
 * Retrieves an organization by its ID.
 * @param req - Express request object.
 * @param res - Express response object.
 * @returns Response containing the organization.
 */
export const getOrganization = async (
  req: Request<GetOrganizationParam, any, any>,
  res: ResponseWithInformation<GetOrganizationResult>
) => {
  const { organizationId } = req.params as Partial<GetOrganizationParam>;

  if (!organizationId) {
    const errorMessage = 'Organization id not found';

    logger.error(errorMessage);

    const responseCode = HttpStatusCodes.BAD_REQUEST_400;
    const responseData = formatResponse<Organization>({
      error: errorMessage,
      status: responseCode,
    });

    return res.status(responseCode).json(responseData);
  }

  try {
    const organization = await getOrganizationByIdService(organizationId);

    const responseData = formatResponse<Organization>({ data: organization });

    return res.json(responseData);
  } catch (error) {
    const errorMessage: string = (error as Error).message;

    logger.error(errorMessage);

    const responseCode = HttpStatusCodes.INTERNAL_SERVER_ERROR_500;
    const responseData = formatResponse<Organization>({
      error: errorMessage,
      status: responseCode,
    });

    return res.status(responseCode).json(responseData);
  }
};

export type AddOrganizationBody = OrganizationCreationData;
export type AddOrganizationResult = ResponseData<Organization>;

/**
 * Adds a new organization to the database.
 * @param req - Express request object.
 * @param res - Express response object.
 * @returns Response containing the created organization.
 */
export const addOrganization = async (
  req: Request<any, any, AddOrganizationBody>,
  res: ResponseWithInformation<AddOrganizationResult>
) => {
  const { user } = res.locals;
  const organization = req.body;

  if (!organization) {
    const errorMessage = 'Organization not found';

    logger.error(errorMessage);

    const responseCode = HttpStatusCodes.BAD_REQUEST_400;
    const responseData = formatResponse<Organization>({
      error: errorMessage,
      status: responseCode,
    });

    return res.status(responseCode).json(responseData);
  }

  try {
    const newOrganization = await createOrganizationService(
      organization,
      user._id
    );

    const responseData = formatResponse<Organization>({
      data: newOrganization,
    });

    return res.json(responseData);
  } catch (error) {
    const errorMessage: string = (error as Error).message;

    logger.error(errorMessage);

    const responseCode = HttpStatusCodes.INTERNAL_SERVER_ERROR_500;
    const responseData = formatResponse<Organization>({
      error: errorMessage,
      status: responseCode,
    });

    return res.status(responseCode).json(responseData);
  }
};

export type UpdateOrganizationBody = Partial<Organization>;
export type UpdateOrganizationResult = ResponseData<Organization>;

/**
 * Updates an existing organization in the database.
 * @param req - Express request object.
 * @param res - Express response object.
 * @returns Response containing the updated organization.
 */
export const updateOrganization = async (
  req: Request<undefined, undefined, UpdateOrganizationBody>,
  res: ResponseWithInformation<UpdateOrganizationResult>
) => {
  const organization = req.body;

  if (!organization) {
    const errorMessage = 'Organization not found';

    logger.error(errorMessage);

    const responseCode = HttpStatusCodes.BAD_REQUEST_400;
    const responseData = formatResponse<Organization>({
      error: errorMessage,
      status: responseCode,
    });

    return res.status(responseCode).json(responseData);
  }

  if (typeof organization._id === 'undefined') {
    const errorMessage = 'Organization id not found';

    logger.error(errorMessage);

    const responseCode = HttpStatusCodes.BAD_REQUEST_400;
    const responseData = formatResponse<Organization>({
      error: errorMessage,
      status: responseCode,
    });

    return res.status(responseCode).json(responseData);
  }

  try {
    const updatedOrganization = await updateOrganizationByIdService(
      organization._id,
      organization
    );

    const responseData = formatResponse<Organization>({
      data: updatedOrganization,
    });

    return res.json(responseData);
  } catch (error) {
    const errorMessage: string = (error as Error).message;

    logger.error(errorMessage);

    const responseCode = HttpStatusCodes.INTERNAL_SERVER_ERROR_500;
    const responseData = formatResponse<Organization>({
      error: errorMessage,
      status: responseCode,
    });

    return res.status(responseCode).json(responseData);
  }
};

export type DeleteOrganizationParam = { organizationId: string };
export type DeleteOrganizationResult = ResponseData<Organization>;

/**
 * Deletes an organization from the database by its ID.
 * @param req - Express request object.
 * @param res - Express response object.
 * @returns Response confirming the deletion.
 */
export const deleteOrganization = async (
  req: Request<DeleteOrganizationParam>,
  res: ResponseWithInformation
) => {
  const { organizationId } = req.params as Partial<DeleteOrganizationParam>;

  if (!organizationId) {
    const errorMessage = 'Organization id not found';

    logger.error(errorMessage);

    const responseCode = HttpStatusCodes.BAD_REQUEST_400;
    const responseData = formatResponse<Organization>({
      error: errorMessage,
      status: responseCode,
    });

    return res.status(responseCode).json(responseData);
  }

  try {
    const deletedOrganization =
      await deleteOrganizationByIdService(organizationId);

    logger.info(`Organization deleted: ${deletedOrganization._id}`);

    const responseData = formatResponse<Organization>({
      data: deletedOrganization,
    });

    return res.json(responseData);
  } catch (error) {
    const errorMessage: string = (error as Error).message;

    logger.error(errorMessage);

    const responseCode = HttpStatusCodes.INTERNAL_SERVER_ERROR_500;
    const responseData = formatResponse<Organization>({
      error: errorMessage,
      status: responseCode,
    });

    return res.status(responseCode).json(responseData);
  }
};
