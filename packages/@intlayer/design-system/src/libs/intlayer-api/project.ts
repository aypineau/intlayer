import type {
  AddProjectBody,
  AddProjectResult,
  DeleteProjectParam,
  DeleteProjectResult,
  GetProjectsParams,
  GetProjectsResult,
  UpdateProjectBody,
  UpdateProjectResult,
} from '@intlayer/backend';
import { getConfiguration } from '@intlayer/config/client';
import { fetcher, type FetcherOptions } from './fetcher';

const backendURL = getConfiguration().editor.backendURL;
const PROJECT_API_ROUTE = `${backendURL}/api/project`;

export const getProjectAPI = (authAPIOptions: FetcherOptions = {}) => {
  /**
   * Retrieves a list of projects based on filters and pagination.
   * @param filters - Filters and pagination options.
   */
  const getProjects = async (
    filters?: GetProjectsParams,
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<GetProjectsResult>(
      PROJECT_API_ROUTE,
      authAPIOptions,
      otherOptions,
      {
        params: filters,
      }
    );

  /**
   * Adds a new project to the database.
   * @param project - Project data.
   */
  const addProject = async (
    project: AddProjectBody,
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<AddProjectResult>(
      `${PROJECT_API_ROUTE}`,
      authAPIOptions,
      otherOptions,
      {
        method: 'POST',
        body: project,
      }
    );

  /**
   * Updates an existing project in the database.
   * @param project - Updated project data.
   */
  const updateProject = async (
    project: UpdateProjectBody,
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<UpdateProjectResult>(
      `${PROJECT_API_ROUTE}`,
      authAPIOptions,
      otherOptions,
      {
        method: 'PUT',
        body: project,
      }
    );

  /**
   * Deletes a project from the database by its ID.
   * @param id - Project ID.
   */
  const deleteProject = async (
    id: DeleteProjectParam['projectId'],
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<DeleteProjectResult>(
      `${PROJECT_API_ROUTE}`,
      authAPIOptions,
      otherOptions,
      {
        method: 'DELETE',
        body: { id },
      }
    );

  return {
    getProjects,
    addProject,
    updateProject,
    deleteProject,
  };
};

export const projectAPI = getProjectAPI();