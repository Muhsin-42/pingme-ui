// types/index.ts

export interface TimeRange {
  start: string;
  end: string;
}

export interface Url {
  url: string;
  interval: number;
  daysOfWeek: number[];
  timeRange: TimeRange;
  isActive: boolean;
  createdAt: Date;
  _id: string;
}

export interface UrlFormValues {
  url: string;
  interval: number;
  daysOfWeek: number[];
  timeRange: TimeRange;
  isActive?: boolean;
}

export interface DayOfWeek {
  value: number;
  label: string;
}

export interface UrlStore {
  urls: Url[];
  setUrls: (urls: Url[]) => void;
  addUrl: (url: Url) => void;
  updateUrl: (id: string, updatedUrl: Partial<Url>) => void;
  deleteUrl: (id: string) => void;
}
