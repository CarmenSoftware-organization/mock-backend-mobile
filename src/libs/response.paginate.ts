export interface ResponsePaginate<T> {
  data: T[];
  paginate : {
    total: number;
    page: number;
    perpage: number;
    pages: number;
  };
}

export const resSuccessWithPaginate = <T>(data: T[], total: number = 0, page: number = 1, perpage: number = 10, pages: number = 1) => {
  return {
    data: data,
    paginate: {
      total: total,
      page: page,
      perpage: perpage,
      pages: pages,
    },
  };
};
