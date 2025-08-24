import { TbUserLoginSession } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

// =============== MOCK TB_USER_LOGIN_SESSION DATA ===============
export let mockTbUserLoginSession: TbUserLoginSession[] = [
  // Admin user active sessions
  {
    id: "session-001",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItMDAxIiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AY2FybWVuc29mdHdhcmUuY29tIiwiaWF0IjoxNzM0NjEyMDAwLCJleHAiOjE3MzQ2OTg0MDB9.test-token-1",
    token_type: "access_token",
    user_id: "user-001",
    expired_on: "2024-12-21T16:00:00.000Z"
  },
  {
    id: "session-002",
    token: "refresh_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItMDAxIiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AY2FybWVuc29mdHdhcmUuY29tIiwiaWF0IjoxNzM0NjEyMDAwLCJleHAiOjE3MzUyMTY4MDB9.test-refresh-1",
    token_type: "refresh_token",
    user_id: "user-001",
    expired_on: "2024-12-27T16:00:00.000Z"
  },

  // John Doe sessions
  {
    id: "session-003",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItMDAyIiwidXNlcm5hbWUiOiJqb2huLmRvZSIsImVtYWlsIjoiam9obi5kb2VAY2FybWVuc29mdHdhcmUuY29tIiwiaWF0IjoxNzM0NjEwMDAwLCJleHAiOjE3MzQ2OTY0MDB9.test-token-2",
    token_type: "access_token",
    user_id: "user-002",
    expired_on: "2024-12-21T15:30:00.000Z"
  },
  {
    id: "session-004",
    token: "refresh_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItMDAyIiwidXNlcm5hbWUiOiJqb2huLmRvZSIsImVtYWlsIjoiam9obi5kb2VAY2FybWVuc29mdHdhcmUuY29tIiwiaWF0IjoxNzM0NjEwMDAwLCJleHAiOjE3MzUyMTQ4MDB9.test-refresh-2",
    token_type: "refresh_token",
    user_id: "user-002",
    expired_on: "2024-12-27T15:30:00.000Z"
  },

  // Jane Smith sessions
  {
    id: "session-005",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItMDAzIiwidXNlcm5hbWUiOiJqYW5lLnNtaXRoIiwiZW1haWwiOiJqYW5lLnNtaXRoQGNhcm1lbnNvZnR3YXJlLmNvbSIsImlhdCI6MTczNDYwODAwMCwiZXhwIjoxNzM0Njk0NDAwfQ.test-token-3",
    token_type: "access_token",
    user_id: "user-003",
    expired_on: "2024-12-21T15:00:00.000Z"
  },

  // Michael Chen (Hotel Manager) sessions
  {
    id: "session-006",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItMDA0IiwidXNlcm5hbWUiOiJtaWNoYWVsLmNoZW4iLCJlbWFpbCI6Im1pY2hhZWwuY2hlbkByb3lhbGdyYW5kaG90ZWwuY29tIiwiaWF0IjoxNzM0NjA2MDAwLCJleHAiOjE3MzQ2OTI0MDB9.test-token-4",
    token_type: "access_token",
    user_id: "user-004",
    expired_on: "2024-12-21T14:30:00.000Z"
  },

  // Developer sessions
  {
    id: "session-007",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItMDEwIiwidXNlcm5hbWUiOiJkZXZlbG9wZXIiLCJlbWFpbCI6ImRldkBjYXJtZW5zb2Z0d2FyZS5jb20iLCJpYXQiOjE3MzQ2MTUwMDAsImV4cCI6MTczNDcwMTQwMH0.test-token-dev",
    token_type: "access_token",
    user_id: "user-010",
    expired_on: "2024-12-21T17:00:00.000Z"
  },
  {
    id: "session-008",
    token: "refresh_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItMDEwIiwidXNlcm5hbWUiOiJkZXZlbG9wZXIiLCJlbWFpbCI6ImRldkBjYXJtZW5zb2Z0d2FyZS5jb20iLCJpYXQiOjE3MzQ2MTUwMDAsImV4cCI6MTczNTIxOTgwMH0.test-refresh-dev",
    token_type: "refresh_token",
    user_id: "user-010",
    expired_on: "2024-12-27T17:00:00.000Z"
  },

  // Expired sessions (for testing cleanup)
  {
    id: "session-009",
    token: "expired_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItMDA1IiwidXNlcm5hbWUiOiJzYXJhaC5qb2huc29uIiwiZW1haWwiOiJzYXJhaC5qb2huc29uQHJveWFsZ3JhbmRob3RlbC5jb20iLCJpYXQiOjE3MzQ1MjAwMDAsImV4cCI6MTczNDYwNjQwMH0.expired-token",
    token_type: "access_token",
    user_id: "user-005",
    expired_on: "2024-12-20T14:00:00.000Z" // Expired
  },

  // Multiple sessions for same user (mobile + web)
  {
    id: "session-010",
    token: "mobile_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItMDA2IiwidXNlcm5hbWUiOiJkYXZpZC5sZWUiLCJlbWFpbCI6ImRhdmlkLmxlZUBzcGljZWdhcmRlbi5jby50aCIsInBsYXRmb3JtIjoibW9iaWxlIiwiaWF0IjoxNzM0NjEyMDAwLCJleHAiOjE3MzQ2OTg0MDB9.mobile-token",
    token_type: "access_token",
    user_id: "user-006",
    expired_on: "2024-12-21T16:00:00.000Z"
  },
  {
    id: "session-011",
    token: "web_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItMDA2IiwidXNlcm5hbWUiOiJkYXZpZC5sZWUiLCJlbWFpbCI6ImRhdmlkLmxlZUBzcGljZWdhcmRlbi5jby50aCIsInBsYXRmb3JtIjoid2ViIiwiaWF0IjoxNzM0NjEwMDAwLCJleHAiOjE3MzQ2OTY0MDB9.web-token",
    token_type: "access_token",
    user_id: "user-006",
    expired_on: "2024-12-21T15:30:00.000Z"
  }
];

// =============== TB_USER_LOGIN_SESSION CRUD FUNCTIONS ===============
export const tbUserLoginSessionCrud = {
  // Create new login session
  create: (data: Omit<TbUserLoginSession, 'id'>): TbUserLoginSession => {
    const newSession: TbUserLoginSession = {
      id: generateUuid(),
      token_type: 'access_token',
      ...data
    };
    mockTbUserLoginSession.push(newSession);
    return newSession;
  },

  // Find by ID
  findById: (id: string): TbUserLoginSession | null => {
    return mockTbUserLoginSession.find(session => session.id === id) || null;
  },

  // Find by token
  findByToken: (token: string): TbUserLoginSession | null => {
    return mockTbUserLoginSession.find(session => session.token === token) || null;
  },

  // Find by user ID
  findByUserId: (userId: string): TbUserLoginSession[] => {
    return mockTbUserLoginSession
      .filter(session => session.user_id === userId)
      .sort((a, b) => (b.expired_on || '').localeCompare(a.expired_on || ''));
  },

  // Find active sessions by user ID
  findActiveByUserId: (userId: string): TbUserLoginSession[] => {
    const now = new Date().toISOString();
    return mockTbUserLoginSession
      .filter(session => 
        session.user_id === userId && 
        session.expired_on && 
        session.expired_on > now
      )
      .sort((a, b) => (b.expired_on || '').localeCompare(a.expired_on || ''));
  },

  // Find by token type
  findByTokenType: (tokenType: 'access_token' | 'refresh_token'): TbUserLoginSession[] => {
    return mockTbUserLoginSession
      .filter(session => session.token_type === tokenType)
      .sort((a, b) => (b.expired_on || '').localeCompare(a.expired_on || ''));
  },

  // Find all sessions
  findAll: (): TbUserLoginSession[] => {
    return mockTbUserLoginSession.sort((a, b) => 
      (b.expired_on || '').localeCompare(a.expired_on || '')
    );
  },

  // Find active sessions
  findActive: (): TbUserLoginSession[] => {
    const now = new Date().toISOString();
    return mockTbUserLoginSession
      .filter(session => session.expired_on && session.expired_on > now)
      .sort((a, b) => (b.expired_on || '').localeCompare(a.expired_on || ''));
  },

  // Find expired sessions
  findExpired: (): TbUserLoginSession[] => {
    const now = new Date().toISOString();
    return mockTbUserLoginSession
      .filter(session => session.expired_on && session.expired_on <= now)
      .sort((a, b) => (b.expired_on || '').localeCompare(a.expired_on || ''));
  },

  // Validate token
  validateToken: (token: string): { valid: boolean; session?: TbUserLoginSession; reason?: string } => {
    const session = tbUserLoginSessionCrud.findByToken(token);
    
    if (!session) {
      return { valid: false, reason: 'Token not found' };
    }

    const now = new Date().toISOString();
    if (session.expired_on && session.expired_on <= now) {
      return { valid: false, session, reason: 'Token expired' };
    }

    return { valid: true, session };
  },

  // Create session pair (access + refresh tokens)
  createSessionPair: (userId: string, accessTokenData: Omit<TbUserLoginSession, 'id' | 'user_id' | 'token_type'>, refreshTokenData: Omit<TbUserLoginSession, 'id' | 'user_id' | 'token_type'>): { accessSession: TbUserLoginSession; refreshSession: TbUserLoginSession } => {
    const accessSession = tbUserLoginSessionCrud.create({
      user_id: userId,
      token_type: 'access_token',
      ...accessTokenData
    });

    const refreshSession = tbUserLoginSessionCrud.create({
      user_id: userId,
      token_type: 'refresh_token',
      ...refreshTokenData
    });

    return { accessSession, refreshSession };
  },

  // Refresh access token
  refreshAccessToken: (refreshToken: string, newAccessTokenData: Omit<TbUserLoginSession, 'id' | 'user_id' | 'token_type'>): TbUserLoginSession | null => {
    const validation = tbUserLoginSessionCrud.validateToken(refreshToken);
    
    if (!validation.valid || !validation.session || validation.session.token_type !== 'refresh_token') {
      return null;
    }

    return tbUserLoginSessionCrud.create({
      user_id: validation.session.user_id,
      token_type: 'access_token',
      ...newAccessTokenData
    });
  },

  // Revoke session (delete)
  revokeSession: (token: string): boolean => {
    const index = mockTbUserLoginSession.findIndex(session => session.token === token);
    if (index === -1) return false;
    
    mockTbUserLoginSession.splice(index, 1);
    return true;
  },

  // Revoke all sessions for user
  revokeAllUserSessions: (userId: string): number => {
    const initialLength = mockTbUserLoginSession.length;
    mockTbUserLoginSession = mockTbUserLoginSession.filter(session => session.user_id !== userId);
    return initialLength - mockTbUserLoginSession.length;
  },

  // Revoke all sessions except current
  revokeOtherSessions: (userId: string, currentToken: string): number => {
    const initialLength = mockTbUserLoginSession.length;
    mockTbUserLoginSession = mockTbUserLoginSession.filter(session => 
      session.user_id !== userId || session.token === currentToken
    );
    return initialLength - mockTbUserLoginSession.length;
  },

  // Clean up expired sessions
  cleanupExpiredSessions: (): number => {
    const initialLength = mockTbUserLoginSession.length;
    const now = new Date().toISOString();
    mockTbUserLoginSession = mockTbUserLoginSession.filter(session => 
      !session.expired_on || session.expired_on > now
    );
    return initialLength - mockTbUserLoginSession.length;
  },

  // Clean up old sessions (keep only N most recent per user)
  cleanupOldSessions: (keepCount: number = 5): number => {
    const userSessions = mockTbUserLoginSession.reduce((acc, session) => {
      if (!acc[session.user_id]) {
        acc[session.user_id] = [];
      }
      acc[session.user_id].push(session);
      return acc;
    }, {} as Record<string, TbUserLoginSession[]>);

    let removedCount = 0;
    const sessionsToKeep: TbUserLoginSession[] = [];

    Object.values(userSessions).forEach(sessions => {
      // Sort by expiration date (most recent first)
      sessions.sort((a, b) => (b.expired_on || '').localeCompare(a.expired_on || ''));
      
      // Keep only the most recent sessions
      const toKeep = sessions.slice(0, keepCount);
      const toRemove = sessions.slice(keepCount);
      
      sessionsToKeep.push(...toKeep);
      removedCount += toRemove.length;
    });

    mockTbUserLoginSession = sessionsToKeep;
    return removedCount;
  },

  // Get session statistics
  getStats: () => {
    const allSessions = mockTbUserLoginSession;
    const now = new Date().toISOString();
    const activeSessions = allSessions.filter(session => 
      session.expired_on && session.expired_on > now
    );
    const expiredSessions = allSessions.filter(session => 
      session.expired_on && session.expired_on <= now
    );

    return {
      total: allSessions.length,
      active: activeSessions.length,
      expired: expiredSessions.length,
      byType: {
        access_token: allSessions.filter(s => s.token_type === 'access_token').length,
        refresh_token: allSessions.filter(s => s.token_type === 'refresh_token').length
      },
      byUser: activeSessions.reduce((acc, session) => {
        acc[session.user_id] = (acc[session.user_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      sessionsPerUser: activeSessions.length / new Set(activeSessions.map(s => s.user_id)).size,
      oldestActive: activeSessions.reduce((oldest, session) => {
        if (!oldest || (session.expired_on && oldest.expired_on && session.expired_on < oldest.expired_on)) {
          return session;
        }
        return oldest;
      }, null as TbUserLoginSession | null)
    };
  },

  // Delete session (hard delete)
  delete: (id: string): boolean => {
    const index = mockTbUserLoginSession.findIndex(session => session.id === id);
    if (index === -1) return false;
    
    mockTbUserLoginSession.splice(index, 1);
    return true;
  }
};
