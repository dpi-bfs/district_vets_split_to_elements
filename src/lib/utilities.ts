export default function getLastUrlSegment(url: string): string{
  return url.substring(url.lastIndexOf("/") + 1);
}; 