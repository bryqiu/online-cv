export function isUrl(url: string): boolean {
  if (!url || typeof url !== 'string')
    return false

  try {
    const parsed = new URL(url)

    return ['http:', 'https:', 'ftp:'].includes(parsed.protocol)
  }
  catch {
    return false
  }
}
