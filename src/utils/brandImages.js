/**
 * Brand image resolution utility using import.meta.glob
 */

const brandImageFiles = import.meta.glob(
  '/src/assets/images/brands/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, import: 'default' }
);

/**
 * Resolves a brand image by brand slug and base name.
 * Accepts:
 * - baseName = 'banner': matches 'banner', 'banner-<brand>', or 'banner*'
 * - baseName = card base name ('repair', 'watch-service', etc.): matches exact file base name
 *
 * @param {string} brandSlug - 'rolex', 'cartier', etc.
 * @param {string} baseName - 'banner', 'repair', 'refurbishment-polish', etc.
 * @returns {string|null} - Resolved image URL or null if missing
 */
export function getBrandImage(brandSlug, baseName) {
  if (!brandSlug || !baseName) return null;

  const targetPrefix = `/src/assets/images/brands/${brandSlug.toLowerCase()}/`;

  for (const [filePath, fileUrl] of Object.entries(brandImageFiles)) {
    const normalizedPath = filePath.replace(/\\/g, '/');
    if (!normalizedPath.toLowerCase().startsWith(targetPrefix)) {
      continue;
    }

    const fileNameWithExt = normalizedPath.substring(targetPrefix.length);
    const lastDotIndex = fileNameWithExt.lastIndexOf('.');
    const fileBaseName = (
      lastDotIndex !== -1 ? fileNameWithExt.substring(0, lastDotIndex) : fileNameWithExt
    ).toLowerCase();

    if (baseName.toLowerCase() === 'banner') {
      if (
        fileBaseName === 'banner' ||
        fileBaseName.startsWith('banner-') ||
        fileBaseName.startsWith('banner_') ||
        fileBaseName.startsWith('banner')
      ) {
        return fileUrl;
      }
    } else if (fileBaseName === baseName.toLowerCase()) {
      return fileUrl;
    }
  }

  return null;
}

export default getBrandImage;
