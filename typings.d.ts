// types/index.ts

export interface TimeRange {
  start: string;
  end: string;
}

export interface Url {
  id: string;
  url: string;
  interval: number;
  daysOfWeek: number[];
  timeRange: TimeRange;
  isActive: boolean;
  createdAt: Date;
}

export interface UrlFormValues {
  url: string;
  interval: number;
  daysOfWeek: number[];
  timeRange: TimeRange;
}

export interface DayOfWeek {
  value: number;
  label: string;
}

export interface UrlStore {
  urls: Url[];
  addUrl: (url: UrlFormValues) => void;
  updateUrl: (id: string, updatedUrl: UrlFormValues) => void;
  deleteUrl: (id: string) => void;
}
