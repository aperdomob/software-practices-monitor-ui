export interface RepositoryOverview {
  name: string;
  fullName: string;
  link: string;
  metrics: {
    total: number;
    ok: number;
    fail: number;
  };
}
