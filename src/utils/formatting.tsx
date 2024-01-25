/**
 * returns a string date so it contains only year, moth and day. Ex: 2012-12-02
 * @param {string} date  date to be formatted
 * @returns {string} formatted date
 */

export const trimDate = (date: string): string => {
  return date.slice(0, 10)
}
