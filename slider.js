    document.addEventListener("DOMContentLoaded", function() {

      const sliderContainer = document.querySelector('.slider-container');
      const reviewCon = document.querySelector('.review');
      const next = document.querySelector('.next');
      const prev = document.querySelector('.prev');
      const img = document.querySelector('.author-img-container');
      const name = document.querySelector('.author-name');
      const title = document.querySelector('.author-title');

      const text = '{ "authors" : [ { "pageNumber": 0, "authorName" : "Tanya Sinclair", "authorTitle" : "UX Engineer", "imgSource": "images/image-tanya.jpg", "review" : "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”" }, { "pageNumber": 1, "authorName" : "John Tarkpor", "authorTitle" : "Junior Front-end Developer", "imgSource": "images/image-john.jpg", "review" : "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”" } ] }';
      const obj = JSON.parse(text);
      const authors = obj['authors'];
      const authorsLength = Number(authors.length);

      next.addEventListener('click', function() {    
          let pageNumber = Number(sliderContainer.id);
          if (pageNumber < authorsLength - 1) {
            reviewCon.textContent = authors[pageNumber + 1].review;
            name.textContent = authors[pageNumber + 1].authorName;
            title.textContent = authors[pageNumber + 1].authorTitle;
            img.textContent = '';
            let imgElement = document.createElement('img');
            imgElement.setAttribute('src', authors[pageNumber + 1].imgSource);
            imgElement.setAttribute('class', 'author-img');
            img.append(imgElement);
            sliderContainer.setAttribute('id', authors[pageNumber + 1].pageNumber);
          }
      });

      prev.addEventListener('click', function() {
          let pageNumber = Number(sliderContainer.id);
          if (pageNumber > 0) {
            reviewCon.textContent = authors[pageNumber - 1].review;
            name.textContent = authors[pageNumber - 1].authorName;
            title.textContent = authors[pageNumber - 1].authorTitle;
            img.textContent = '';
            let imgElement = document.createElement('img');
            imgElement.setAttribute('src', authors[pageNumber - 1].imgSource);
            imgElement.setAttribute('class', 'author-img');
            img.append(imgElement);
            sliderContainer.setAttribute('id', authors[pageNumber - 1].pageNumber);
          }
      });
    });