import { submitUrl } from './js/nlpSubmit.js';
import { updateResults } from './js/updatePage.js';
import './styles/footer.scss';
import './styles/base.scss';
import './styles/results.scss';
import './styles/header.scss';
import './styles/button.scss';
import './styles/url.scss';

document.getElementById('submit').addEventListener('click', function() {submitUrl('http://localhost:8082/article')});

export {
  submitUrl,
  updateResults
}
