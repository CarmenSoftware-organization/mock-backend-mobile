// =============== TB_USER_PROFILE TABLE ===============

import { TbUserProfile } from './types';
import { generateUuid } from './utils';

// Mock User Profiles Table (tb_user_profile)
export let mockTbUserProfile: TbUserProfile[] = [
  {
    user_id: '1bfdb891-58ee-499c-8115-34a964de8122',
    firstname: 'staff',
    middlename: '',
    lastname: 'staff',
    bio: {}
  },
  {
    user_id: '550e8400-e29b-41d4-a716-446655440002',
    firstname: 'department',
    middlename: '',
    lastname: 'manager',
    bio: {}
  },
  {
    user_id: '550e8400-e29b-41d4-a716-446655440003',
    firstname: 'financial',
    middlename: '',
    lastname: 'manager',
    bio: {}
  },
  {
    user_id: '550e8400-e29b-41d4-a716-446655440004',
    firstname: 'purchasing',
    middlename: '',
    lastname: 'staff',
    bio: {}
  },
  {
    user_id: '550e8400-e29b-41d4-a716-446655440005',
    firstname: 'counter',
    middlename: '',
    lastname: 'staff',
    bio: {}
  },
  {
    user_id: '550e8400-e29b-41d4-a716-446655440006',
    firstname: 'chef',
    middlename: '',
    lastname: 'staff',
    bio: {}
  }
];

// =============== TB_USER_PROFILE CRUD ===============

export const tbUserProfileCrud = {
  // Create
  create: (data: Omit<TbUserProfile, 'user_id'> & { user_id?: string }): TbUserProfile => {
    const userProfile: TbUserProfile = {
      user_id: data.user_id || generateUuid(),
      firstname: data.firstname,
      middlename: data.middlename || '',
      lastname: data.lastname,
      bio: data.bio || {}
    };
    mockTbUserProfile.push(userProfile);
    return userProfile;
  },

  // Read (Find by user_id)
  findByUserId: (userId: string): TbUserProfile | null => {
    return mockTbUserProfile.find(profile => profile.user_id === userId) || null;
  },

  // Read All
  findAll: (): TbUserProfile[] => {
    return [...mockTbUserProfile];
  },

  // Update
  update: (userId: string, data: Partial<Omit<TbUserProfile, 'user_id'>>): TbUserProfile | null => {
    const index = mockTbUserProfile.findIndex(profile => profile.user_id === userId);
    if (index === -1) return null;

    mockTbUserProfile[index] = {
      ...mockTbUserProfile[index],
      ...data
    };
    return mockTbUserProfile[index];
  },

  // Delete
  delete: (userId: string): boolean => {
    const index = mockTbUserProfile.findIndex(profile => profile.user_id === userId);
    if (index === -1) return false;

    mockTbUserProfile.splice(index, 1);
    return true;
  }
};
