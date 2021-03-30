
export interface GenericResponse<T = unknown>{
  page: number;
  results: T[];
}
