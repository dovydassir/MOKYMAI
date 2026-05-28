//1uzd. 

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: "John", age: 30});
    }, 2000);
});

promise.then((data) => {
    console.log(data);
});

//2uzd

const getData = async () => {
    const data = await promise;
    console.log(data);
};  

getData();

//3uzd. 

const url = 'https://jsonplaceholder.typicode.com/comments';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  
  //4uzd.

  fetch(url)
  .then(response => response.json())
  .then(data => {
    const filteredData = data.filter(post => post.userId === 1);
    const sortedData = filteredData.sort((a, b) => b.id - a.id);
    const transformedData = sortedData.map(post => ({
      id: post.id,
      title: post.title,
      body: post.body
    }));
    console.log(transformedData);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  //uzd 5  

  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
        console.log(filteredData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });

  //uzd. 6 

  const fetchDataButton = document.getElementById('fetchDataButton');

  fetchDataButton.addEventListener('click', () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });   

  //uzd. 7 

  const generateHTML = (data) => {
    const html = data.map(post => `
      <div class="post">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `).join('');
    return html;
  };    

  fetch(url)
  .then(response => response.json())
  .then(data => {
    const html = generateHTML(data);
    document.getElementById('postsContainer').innerHTML = html;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


