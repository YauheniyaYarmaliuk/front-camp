    const result = fetch('https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=5c16623f895c44948812458d23c5396e')

    result.then((response) => response.json()
    ).then((json) => generateNews(json)
    ).catch((ex) => console.error('failed', ex));

    const generateNews = (json) => {
        const news = document.getElementById("hacker-news");
        const articles = json.articles;
        const HTML = articles.map((article) => {
            const author = article.author ? `<h5 class="author">${article.author}</h5>` : '';
            const img = article.urlToImage ?  `<img class="image-to-logo" src="${article.urlToImage }" />`: '';
            const description = article.description ? `<p class="description">${article.description}</p>`: '';
            const url = article.url ? `<a href="${article.url}">more</a>`: '';
            let time = article.publishedAt ? `<time>${new Date(article.publishedAt).toLocaleString('en-US').split(', ')}</time>`: '';
            const element = (
            `<div>
                ${author}
                ${img}
                <h3 class="title">${article.title}</h3>
                ${description}
                ${url}
                ${time}
            </div>`
            );
            return element;
        }).join('');
       news.innerHTML=HTML;
    }