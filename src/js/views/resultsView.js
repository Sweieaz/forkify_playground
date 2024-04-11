import View from './view.js';
import previewView from './previewView.js';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe found for your query! Pleased try again';
  _message = '';

  // _generateMarkup() {
  //   console.log(_data);
  //   return this._data.map(this._generateMarkupReview).join('');
  // }

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultView();
