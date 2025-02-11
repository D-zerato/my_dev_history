export interface ListResultModel<T> {
  page: {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
  content: T[];
}
