export default {
  getCurrentPageItems(items, pageNumber, pageSize) {
    return items.slice(
      pageNumber * pageSize,
      pageNumber * pageSize + pageSize
    );
  },

  isFirstPage(items, pageNumber, pageSize) {
    return this.lengthOfPage(items, pageNumber - 1, pageSize) === 0
  },

  isLastPage(items, pageNumber, pageSize) {
    return this.lengthOfPage(items, pageNumber + 1, pageSize) === 0
  },

  lengthOfPage(items, pageNumber, pageSize) {
    return this.getCurrentPageItems(items, pageNumber, pageSize).length
  },

  isMultiplePages(items, pageSize) {
    return items.length > pageSize
  }
}
