import type { ActiveDebate, AppBootstrap, DebateSetup } from '@/types';

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, {
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    ...init,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function getBootstrap() {
  return request<AppBootstrap>('/api/bootstrap');
}

export function login(email: string) {
  return request<AppBootstrap['session']>('/api/session/login', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}

export function logout() {
  return request<{ ok: true }>('/api/session/logout', {
    method: 'POST',
  });
}

export function createDebate(payload: DebateSetup) {
  return request<ActiveDebate>('/api/debates', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function sendDebateMessage(content: string) {
  return request<ActiveDebate>('/api/debates/current/messages', {
    method: 'POST',
    body: JSON.stringify({ content }),
  });
}
