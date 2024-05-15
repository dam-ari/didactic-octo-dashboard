console.log('search.js is loaded');
document.addEventListener('DOMContentLoaded', function() {
  console.log('search.js is loaded');

  document.querySelectorAll('.search').forEach(function(element) {
      element.addEventListener('click', function() {
          console.log('Search button clicked');
          document.body.style.overflow = 'hidden';
          const siteSearch = document.getElementById('search');
          if (siteSearch) {
              siteSearch.style.display = 'block'; // Ensure this is displayed
              console.log('Search container is displayed');
              siteSearch.classList.add('shrinkIn');
              document.querySelector('.search-input').focus();
          }
      });
  });

  document.querySelectorAll('.close-btn').forEach(function(element) {
      element.addEventListener('click', function() {
          console.log('Close button clicked');
          document.body.style.overflow = '';
          const siteSearch = document.getElementById('search');
          if (siteSearch) {
              siteSearch.style.display = 'none';
              siteSearch.classList.remove('shrinkIn');
          }
      });
  });

  window.addEventListener('keyup', function(event) {
      if (event.key === 'Escape') {
          console.log('Escape key pressed');
          document.body.style.overflow = '';
          const siteSearch = document.getElementById('search');
          if (siteSearch) {
              siteSearch.style.display = 'none';
              siteSearch.classList.remove('shrinkIn');
          }
      }
  });
});
