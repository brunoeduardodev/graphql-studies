export const getResponseActions = (dataField: string) => {
  const success = (data: any) => {
    return {
      [dataField]: data,
      errors: [],
    };
  };

  const error = (errors: string[]) => {
    return {
      [dataField]: null,
      errors: errors.map((error) => ({ message: error })),
    };
  };

  return { success, error };
};
