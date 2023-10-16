export const mapUrlToId = (url: string): string => {
  //not very robust regex, kind of an assumption
  const idPattern = /\/(\d+)$/;
  const match = url.match(idPattern);

  if (!match) {
    throw new Error('Cannot map the URL to id, pattern not recognized');
  }

  return match?.[1];
};
