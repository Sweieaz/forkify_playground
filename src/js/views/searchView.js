class SearchView {
  _parantEl = document.querySelector('.search');

  getQuery() {
    const query = this._parantEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parantEl.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this._parantEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
