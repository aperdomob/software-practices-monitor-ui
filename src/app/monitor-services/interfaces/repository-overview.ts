export interface RepositoryOverview {
  name: string;
  metrics: {
    total: number;
    ok: number;
    fail: number;
  };
}
