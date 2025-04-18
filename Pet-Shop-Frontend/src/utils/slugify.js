export const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/&/g, 'and')            // замінюємо амперсанд
      .replace(/[\s\W-]+/g, '-')       // пробіли/небукви -> тире
      .replace(/^-+|-+$/g, '');        // прибираємо тире з країв
  };