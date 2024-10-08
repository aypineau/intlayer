import type { ObjectId } from 'mongoose';
import type { User } from './user.types';

export type OrganizationCreationData = {
  name: Organization['name'];
};

export type OrganizationData = {
  name: string;
  members: User['_id'][];
};

export type Organization = OrganizationData & {
  _id: ObjectId;
  creatorId: User['_id'];
  createdAt: number;
  updatedAt: number;
};
