// slugkit — turn arbitrary text into a URL-safe slug.
module.exports = function slugify(input) {
  return String(input)
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};
