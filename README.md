# Evaluate News Articles with Natural Language Processing

This project utilizes the Aylien NLP engine to analyze the text of individual news articles. The application sends a url of an article to a NodeJS server, which then submits 3 separate requests to the Aylien API (extract, summarize, and hashtags). The server stores the responses in a variable called `articleInfo` then sends that back to the user as a response to the original submission. Once received, the application updates the `resultsBox` with a formatted version of the data.

The project is also an opportunity to practice:
* Setting up webpack with the necessary loaders and plugins
* Styling with sass
* Leveraging service workers for offline content
