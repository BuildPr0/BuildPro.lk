// BuildPro.lk - Main JavaScript
// Premium PC Parts Store - Sri Lanka

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== Constants =====
  const WHATSAPP_NUMBER = '94781020385';
  
  // ===== Mobile Menu =====
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuClose = document.querySelector('.menu-close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-panel a');

  function openMobileMenu() {
    if (mobileMenu) {
      mobileMenu.classList.add('active');
      document.body.classList.add('menu-open');
    }
  }

  function closeMobileMenu() {
    if (mobileMenu) {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      if (mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', closeMobileMenu);
  }

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  if (mobileMenu) {
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        closeMobileMenu();
      }
    });
  }

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.desktop-nav a, .mobile-menu-panel a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
  
  // ===== Hero Slider with Responsive Images =====
  const slider = document.querySelector('.hero-slider');
  if (slider) {
    const slides = slider.querySelectorAll('.slider-slide');
    const dots = slider.querySelectorAll('.slider-dot');
    const prevBtn = slider.querySelector('.slider-arrow.prev');
    const nextBtn = slider.querySelector('.slider-arrow.next');
    let currentSlide = 0;
    let slideInterval;
    let currentScreenSize = null;
    
    // Function to load correct image based on screen width
    function updateSliderImages() {
      const isMobile = window.innerWidth <= 768;
      const newSize = isMobile ? 'mobile' : 'desktop';
      
      // Only update if screen size category changed
      if (newSize === currentScreenSize) return;
      currentScreenSize = newSize;
      
      slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img) {
          const src = isMobile ? img.dataset.mobile : img.dataset.desktop;
          if (src && img.src !== src) {
            img.src = src;
          }
        }
      });
    }
    
    function goToSlide(index) {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      currentSlide = index;
    }
    
    function nextSlide() {
      const next = (currentSlide + 1) % slides.length;
      goToSlide(next);
    }
    
    function prevSlide() {
      const prev = (currentSlide - 1 + slides.length) % slides.length;
      goToSlide(prev);
    }
    
    function startAutoPlay() {
      if (slideInterval) clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Controls
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoPlay(); });
    
    // Dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        startAutoPlay();
      });
    });
    
    // Touch support for slider
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        startAutoPlay();
      }
    }, { passive: true });
    
    // Responsive resize handler with debounce
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateSliderImages, 150);
    });
    
    // Initialize
    updateSliderImages();
    startAutoPlay();
  }
  
  // ===== Back to Top Button =====
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
    
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // ===== Category Cards Click (Home) =====
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
      const category = this.dataset.category;
      if (category) {
        window.location.href = 'products.html?category=' + encodeURIComponent(category);
      }
    });
  });
  
  // ===== Build Type Cards Click (Custom Build) =====
  document.querySelectorAll('.build-type-card').forEach(card => {
    card.addEventListener('click', function() {
      const purpose = this.dataset.purpose;
      if (purpose) {
        const purposeSelect = document.getElementById('purpose');
        if (purposeSelect) {
          purposeSelect.value = purpose;
          purposeSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  });
  
  // ===== Custom Build Form Submit =====
  const buildForm = document.getElementById('customBuildForm');
  if (buildForm) {
    buildForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const budget = document.getElementById('budget').value.trim();
      const purpose = document.getElementById('purpose').value;
      const parts = document.getElementById('parts').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !phone || !budget || !purpose) {
        alert('Please fill in all required fields.');
        return;
      }
      
      const whatsappMsg = `*BuildPro.lk - Custom PC Build Request*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Budget:* Rs. ${budget}\n*Purpose:* ${purpose}\n*Required Parts:* ${parts || 'Not specified'}\n*Additional Message:* ${message || 'None'}`;
      
      const encodedMsg = encodeURIComponent(whatsappMsg);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`, '_blank');
    });
  }
  
  // ===== Contact Form (UI only) =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon. Please also reach out to us via WhatsApp for faster response.');
      this.reset();
    });
  }
  
  // ===== WhatsApp Buttons =====
  document.querySelectorAll('.whatsapp-order, .whatsapp-contact').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      let msg = this.dataset.message || this.dataset.msg || 'Hello BuildPro.lk! I would like to know more about your products and services.';
      if (this.dataset.product) {
        msg = `Hi BuildPro.lk! I am interested in: ${this.dataset.product}`;
      }
      if (this.dataset.name && this.dataset.price) {
        msg = `Hi BuildPro.lk! I am interested in:\nProduct: ${this.dataset.name}\nPrice: Rs. ${this.dataset.price}`;
      }
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  });
  
  // ===== WhatsApp Float Button =====
  const whatsappFloat = document.querySelector('.whatsapp-float');
  if (whatsappFloat) {
    whatsappFloat.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello BuildPro.lk! I would like to know more about your products.')}`, '_blank');
    });
  }
  
  // ===== Products Page =====
  const productsGrid = document.getElementById('productsGrid');
  if (productsGrid && typeof products !== 'undefined') {
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sortSelect');
    const productsCount = document.getElementById('productsCount');
    
    let currentCategory = 'All';
    let currentSearch = '';
    let currentSort = 'default';
    let filteredProducts = [...products];
    
    // Get category from URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlCategory = urlParams.get('category');
    if (urlCategory) {
      currentCategory = urlCategory;
      // Set active filter button
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === currentCategory) {
          btn.classList.add('active');
        }
      });
    }
    
    function renderProducts() {
      // Filter
      let temp = [...products];
      
      // By category
      if (currentCategory !== 'All') {
        temp = temp.filter(p => p.category === currentCategory);
      }
      
      // By search
      if (currentSearch.trim()) {
        const search = currentSearch.toLowerCase().trim();
        temp = temp.filter(p => 
          p.name.toLowerCase().includes(search) ||
          p.category.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search)
        );
      }
      
      // Sort
      if (currentSort === 'price-asc') {
        temp.sort((a, b) => a.price - b.price);
      } else if (currentSort === 'price-desc') {
        temp.sort((a, b) => b.price - a.price);
      } else if (currentSort === 'name') {
        temp.sort((a, b) => a.name.localeCompare(b.name));
      }
      
      filteredProducts = temp;
      
      // Update count
      if (productsCount) {
        productsCount.textContent = `Showing ${temp.length} product${temp.length !== 1 ? 's' : ''}`;
      }
      
      // Render
      if (temp.length === 0) {
        productsGrid.innerHTML = `
          <div class="no-products" style="grid-column: 1/-1;">
            <i class="fas fa-search"></i>
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        `;
        return;
      }
      
      productsGrid.innerHTML = temp.map(product => createProductCard(product)).join('');
      
      // Add event listeners to product buttons
      productsGrid.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', function() {
          const id = this.dataset.id;
          window.location.href = 'product-details.html?id=' + id;
        });
      });
      
      productsGrid.querySelectorAll('.whatsapp-order').forEach(btn => {
        btn.addEventListener('click', function() {
          const name = this.dataset.name;
          const price = this.dataset.price;
          const msg = `Hi BuildPro.lk! I am interested in:\nProduct: ${name}\nPrice: Rs. ${price}`;
          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
        });
      });
    }
    
    function createProductCard(product) {
      const imageHtml = product.image 
        ? `<img src="${product.image}" alt="${product.name}" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-microchip placeholder-icon\\'></i>'">`
        : `<i class="fas fa-microchip placeholder-icon"></i>`;
      
      return `
        <div class="product-card">
          <div class="product-image">
            ${imageHtml}
          </div>
          <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description.substring(0, 60)}...</p>
            <div class="product-price">Rs. ${product.price.toLocaleString('en-LK')}</div>
            <div class="product-actions">
              <button class="btn btn-primary view-details" data-id="${product.id}">View Details</button>
              <button class="btn btn-whatsapp whatsapp-order" data-name="${product.name}" data-price="${product.price}">
                <i class="fab fa-whatsapp"></i> Order
              </button>
            </div>
          </div>
        </div>
      `;
    }
    
    // Search
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        currentSearch = this.value;
        renderProducts();
      });
    }
    
    // Filter buttons
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentCategory = this.dataset.filter;
        renderProducts();
      });
    });
    
    // Sort
    if (sortSelect) {
      sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        renderProducts();
      });
    }
    
    // Initial render
    renderProducts();
  }
  
  // ===== Product Details Page =====
  const productDetailsContainer = document.getElementById('productDetails');
  if (productDetailsContainer && typeof products !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
      const product = getProductById(productId);
      
      if (product) {
        document.title = product.name + ' - BuildPro.lk';
        
        const imageHtml = product.image 
          ? `<img src="${product.image}" alt="${product.name}" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-microchip fa-5x placeholder-icon\\'></i>'">`
          : `<i class="fas fa-microchip fa-5x placeholder-icon"></i>`;
        
        const specsHtml = product.specs.map(spec => 
          `<li><strong>${spec.label}:</strong> ${spec.value}</li>`
        ).join('');
        
        productDetailsContainer.innerHTML = `
          <div class="container">
            <div class="product-details-content">
              <div class="product-details-image">
                ${imageHtml}
              </div>
              <div class="product-details-info">
                <h1>${product.name}</h1>
                <span class="category-tag">${product.category}</span>
                <div class="price">Rs. ${product.price.toLocaleString('en-LK')}</div>
                <p class="description">${product.description}</p>
                <h3 class="specs-title">Specifications</h3>
                <ul class="specs-list">
                  ${specsHtml}
                </ul>
                <div class="product-details-actions">
                  <button class="btn btn-whatsapp whatsapp-order" 
                    data-name="${product.name}" 
                    data-price="${product.price}">
                    <i class="fab fa-whatsapp"></i> Order via WhatsApp
                  </button>
                  <a href="products.html" class="btn btn-outline">Back to Products</a>
                </div>
              </div>
            </div>
          </div>
        `;
        
        // Add event listener for whatsapp order
        productDetailsContainer.querySelector('.whatsapp-order').addEventListener('click', function() {
          const name = this.dataset.name;
          const price = this.dataset.price;
          const msg = `Hi BuildPro.lk! I am interested in:\nProduct: ${name}\nPrice: Rs. ${price}\n\nCan you please provide more details and availability?`;
          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
        });
      } else {
        productDetailsContainer.innerHTML = `
          <div class="container">
            <div class="no-products" style="text-align: center; padding: 60px 20px;">
              <i class="fas fa-exclamation-circle" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px;"></i>
              <h2>Product Not Found</h2>
              <p style="color: var(--text-gray); margin: 15px 0;">The product you are looking for does not exist or has been removed.</p>
              <a href="products.html" class="btn btn-primary" style="display: inline-block; margin-top: 10px;">Browse Products</a>
            </div>
          </div>
        `;
      }
    } else {
      productDetailsContainer.innerHTML = `
        <div class="container">
          <div class="no-products" style="text-align: center; padding: 60px 20px;">
            <i class="fas fa-arrow-left" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px;"></i>
            <h2>No Product Selected</h2>
            <p style="color: var(--text-gray); margin: 15px 0;">Please select a product to view details.</p>
            <a href="products.html" class="btn btn-primary" style="display: inline-block; margin-top: 10px;">Browse Products</a>
          </div>
        </div>
      `;
    }
  }
  
  // ===== Featured Products on Home Page =====
  const featuredGrid = document.getElementById('featuredProducts');
  if (featuredGrid && typeof products !== 'undefined') {
    // Show first 8 products as featured
    const featured = products.slice(0, 8);
    
    featuredGrid.innerHTML = featured.map(product => {
      const imageHtml = product.image 
        ? `<img src="${product.image}" alt="${product.name}" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-microchip placeholder-icon\\'></i>'">`
        : `<i class="fas fa-microchip placeholder-icon"></i>`;
      
      return `
        <div class="product-card">
          <div class="product-image">
            ${imageHtml}
          </div>
          <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description.substring(0, 60)}...</p>
            <div class="product-price">Rs. ${product.price.toLocaleString('en-LK')}</div>
            <div class="product-actions">
              <button class="btn btn-primary view-details" data-id="${product.id}">View Details</button>
              <button class="btn btn-whatsapp whatsapp-order" data-name="${product.name}" data-price="${product.price}">
                <i class="fab fa-whatsapp"></i> Order
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
    
    // Add event listeners
    featuredGrid.querySelectorAll('.view-details').forEach(btn => {
      btn.addEventListener('click', function() {
        window.location.href = 'product-details.html?id=' + this.dataset.id;
      });
    });
    
    featuredGrid.querySelectorAll('.whatsapp-order').forEach(btn => {
      btn.addEventListener('click', function() {
        const name = this.dataset.name;
        const price = this.dataset.price;
        const msg = `Hi BuildPro.lk! I am interested in:\nProduct: ${name}\nPrice: Rs. ${price}`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
      });
    });
  }
  
  // ===== Smooth scroll for anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  // ===== Image error handling =====
  document.addEventListener('error', function(e) {
    const target = e.target;
    if (target.tagName === 'IMG') {
      target.style.display = 'none';
      const parent = target.parentElement;
      if (parent && parent.classList.contains('product-image') || parent.classList.contains('product-details-image')) {
        const icon = document.createElement('i');
        icon.className = 'fas fa-microchip placeholder-icon';
        if (parent.classList.contains('product-details-image')) {
          icon.style.fontSize = '5rem';
        }
        parent.appendChild(icon);
      }
    }
  }, true);
  
  console.log('BuildPro.lk - Website loaded successfully!');
});