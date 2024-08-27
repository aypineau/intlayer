import {
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  MEMBERS_MIN_LENGTH,
} from '@utils/validation/validateProject';
import { Schema } from 'mongoose';
import type { Project } from '@/types/project.types';

export const projectSchema = new Schema<Project>(
  {
    organizationId: {
      type: Schema.Types.ObjectId,
      ref: 'Organization',
      required: true,
    },
    name: {
      type: String,
      required: true,
      minlength: NAME_MIN_LENGTH,
      maxlength: NAME_MAX_LENGTH,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        minlength: MEMBERS_MIN_LENGTH,
      },
    ],
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);