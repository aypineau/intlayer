import type { Model } from 'mongoose';
import type { User } from './user.type';

export type Organization = Document & {
  _id: string;
  name: string;
  description: string;
  members: User[];
  creatorId: User['_id'];
  createdAt: number;
};

export type OrganizationModel = Model<Organization>;
