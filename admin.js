    // JavaScript to handle navigation between sections without page reload
    window.addEventListener('hashchange', function() {
      // Hide all content divs
      const contentDivs = document.querySelectorAll('.content');
      contentDivs.forEach(function(div) {
        div.classList.remove('active');
      });

      // Show content corresponding to the current hash
      const activeContent = document.querySelector(location.hash);
      if (activeContent) {
        activeContent.classList.add('active');
      }
    });

    // Trigger hashchange event to show the initial section
    if (location.hash) {
      window.dispatchEvent(new Event('hashchange'));
    }