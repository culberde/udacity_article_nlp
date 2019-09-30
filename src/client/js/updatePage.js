// this will update the page with the API results
function updateResults(data) {
  let d = data.date;
  let newDate = d;
  document.getElementById('resultsBox').innerHTML =
  `<ul>
    <li><strong>Title:</strong> ${data.title}</li>
    <li><strong>Author:</strong> ${data.author}</li>
    <li><strong>Date:</strong> ${newDate}</li>
    <li><strong>Summary:</strong> ${data.summary.join(' ')}</li>
    <li><strong>Suggested Hashtags:</strong> ${data.hashtags.join(' ')}</li>
  </ul>`;
}

export{ updateResults };
