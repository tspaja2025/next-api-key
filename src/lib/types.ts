export interface ApiKey {
  id: string;
  name: string;
  key_prefix: string;
  created_at: string;
  last_used_at: string | null;
  expires_at: string | null;
  is_active: boolean;
}

export interface ApiKeysTableProps {
  apiKeys: ApiKey[];
  onDelete: (id: string) => void;
}
