// this will handle the logic to submit the article
const submitUrl = async (url) => {
  console.log("submitted!");
  let articleUrl = document.getElementById('articleUrl').value;
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({articleUrl}),
  });
  try {
    const newData = await res.json();
    Client.updateResults(newData);
  }
  catch(error) {
    window.alert("Sorry, please select a different url.")
    console.log('error', error);
  }
};

export{ submitUrl };
