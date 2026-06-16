// ✅ Fixes all "string | string[]" errors for req.params
export const getParam = (param: string | string[] | undefined): string => {
  if (Array.isArray(param)) return param[0] ?? "";
  return param ?? "";
};