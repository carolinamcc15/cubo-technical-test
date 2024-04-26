export interface IResponse<T> {
  results: T[];
  meta: IResponseMeta;
}

export interface IResponseMeta {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;
  nextPage: number;
  pageCount: number;
  previousPage: null;
  totalCount: number;
}
