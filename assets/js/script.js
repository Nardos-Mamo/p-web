 // Portfolio filtering functionality
 document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');
        
        // Set active class on clicked button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // You would need to add data-category attributes to each portfolio item
        // and then filter based on those categories
      });
    });
    
    // Add a hover effect that hints at clickability
    const portfolioBoxes = document.querySelectorAll('.portfolio-box');
    portfolioBoxes.forEach(box => {
      box.addEventListener('mouseenter', function() {
        // Add a small visual indicator that items are clickable
        this.style.cursor = 'pointer';
        this.querySelector('.portfolio-info').style.opacity = '1';
      });
      
      box.addEventListener('mouseleave', function() {
        this.querySelector('.portfolio-info').style.opacity = '0.9';
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const portfolioItems = document.querySelectorAll('.portfolio-box');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      
      // Remove active class from all buttons and add to current button
      filterButtons.forEach(btn => btn.classList.remove('btn-primary'));
      filterButtons.forEach(btn => btn.classList.add('btn-outline-primary'));
      this.classList.remove('btn-outline-primary');
      this.classList.add('btn-primary');
      
      // Filter portfolio items
      portfolioItems.forEach(item => {
        // Add data-category to each portfolio item in HTML
        if (filterValue === 'all' || 
            (item.closest('[data-category]') && 
             item.closest('[data-category]').getAttribute('data-category') === filterValue)) {
          item.closest('.col-lg-4').style.display = 'block';
        } else {
          item.closest('.col-lg-4').style.display = 'none';
        }
      });
    });
  });
  
  // Add hover effect to portfolio boxes
  const portfolioBoxes = document.querySelectorAll('.portfolio-box');
  portfolioBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
      this.style.cursor = 'pointer';
      this.querySelector('.portfolio-info').style.opacity = '1';
    });
    
    box.addEventListener('mouseleave', function() {
      this.querySelector('.portfolio-info').style.opacity = '0.9';
    });
  });
});