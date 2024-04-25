export const pathValidate = (pathname: string): boolean => {
  const regex1 = /\/products\/.*/;
  const regex2 = /\/blog\/.*/;
  const product = regex1.test(pathname);
  const post = regex2.test(pathname);
  return !(product || post);
};