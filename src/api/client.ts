export const API_BASE = 'https://vibe.cyk666.top';
const TIMEOUT_MS = 8000;

export type ApiStatus = 'checking' | 'connected' | 'failed';

export type MeResult = {
  status: ApiStatus;
  detail: string;
};

function withTimeout(ms: number): { signal: AbortSignal; done: () => void } {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return { signal: controller.signal, done: () => clearTimeout(timer) };
}

export async function fetchGuestStatus(): Promise<MeResult> {
  const { signal, done } = withTimeout(TIMEOUT_MS);
  try {
    const res = await fetch(`${API_BASE}/api/auth/me`, { signal });
    if (!res.ok) {
      return { status: 'failed', detail: `后端连通失败（状态码 ${res.status}）` };
    }
    const data: unknown = await res.json();
    const guest =
      typeof data === 'object' && data !== null && 'guest' in data
        ? (data as { guest: unknown }).guest
        : undefined;
    if (guest === true) {
      return { status: 'connected', detail: '后端连通（访客态 guest:true）' };
    }
    return { status: 'connected', detail: '后端连通（已登录态）' };
  } catch (err) {
    const reason = err instanceof Error ? err.message : '未知错误';
    return { status: 'failed', detail: `后端连通失败（${reason}）` };
  } finally {
    done();
  }
}
