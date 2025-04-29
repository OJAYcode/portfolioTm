document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded"); // Debug statement
    
    // ============ Dark mode functionality ============
    const themeToggle = document.getElementById('theme-toggle');
    console.log("Theme toggle:", themeToggle); // Debug statement
    
    if (themeToggle) {
        const body = document.body;
        const icon = themeToggle.querySelector('i');
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-theme');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
        
        // Handle theme toggle click
        themeToggle.addEventListener('click', function() {
            console.log("Theme toggle clicked");
            
            // Toggle dark theme class
            document.body.classList.toggle('dark-theme');
            
            // Update icon
            const icon = themeToggle.querySelector('i');
            if (document.body.classList.contains('dark-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });
    } else {
        console.error("Theme toggle button not found");
    }
    
    // ============ Mobile menu functionality ============
    const hamburger = document.getElementById('hamburger');
    console.log("Hamburger button:", hamburger); // Debug statement
    
    if (hamburger) {
        const mobileNavLinks = document.querySelector('.nav-links');
        
        if (!mobileNavLinks) {
            console.error("Nav links container not found");
            return;
        }
        
        hamburger.addEventListener('click', function() {
            console.log("Hamburger clicked"); // Debug statement
            mobileNavLinks.classList.toggle('show');
            
            // Change hamburger icon to X when menu is open
            const hamburgerIcon = hamburger.querySelector('i');
            if (mobileNavLinks.classList.contains('show')) { // This line had the wrong variable name
                hamburgerIcon.classList.remove('fa-bars');
                hamburgerIcon.classList.add('fa-times');
            } else {
                hamburgerIcon.classList.remove('fa-times');
                hamburgerIcon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when a link is clicked
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                mobileNavLinks.classList.remove('show');
                const hamburgerIcon = hamburger.querySelector('i');
                hamburgerIcon.classList.remove('fa-times');
                hamburgerIcon.classList.add('fa-bars');
            });
        });
    } else {
        console.error("Hamburger button not found");
    }

    // ============ Portfolio filtering ============
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show/hide portfolio items based on filter
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.add('show');
                    setTimeout(() => {
                        item.style.display = 'block';
                    }, 300);
                } else {
                    item.classList.remove('show');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Initialize portfolio - show all items
    portfolioItems.forEach(item => {
        item.classList.add('show');
    });

    // ============ Smooth scrolling ============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,  // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============ Active navigation highlighting ============
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // ============ Navbar scroll effect ============
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ============ Skills animation ============
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkills() {
        skillBars.forEach(bar => {
            const parent = bar.parentElement.parentElement;
            const percent = parent.getAttribute('data-percent');
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = percent + '%';
                bar.style.transition = 'width 1s ease';
            }, 200);
        });
    }
    
    // Trigger skill animation when skills section is in view
    const skillsSection = document.getElementById('skills');
    
    function checkSkills() {
        const skillsPosition = skillsSection.getBoundingClientRect();
        if (skillsPosition.top < window.innerHeight - 100 && skillsPosition.bottom > 0) {
            animateSkills();
            window.removeEventListener('scroll', checkSkills);
        }
    }
    
    window.addEventListener('scroll', checkSkills);
    // Check once on load in case skills are already in view
    checkSkills();
    
    // ============ Contact form submission ============
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[placeholder="Your Name"]').value;
            const email = this.querySelector('input[placeholder="Your Email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea').value;
            
            // Here you would typically send this data to a server
            // For now, we'll just simulate a successful submission
            console.log({name, email, subject, message});
            
            // Show success message
            const formContainer = this.parentElement;
            this.style.display = 'none';
            
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <h3>Message Sent!</h3>
                <p>Thank you for contacting me. I will get back to you soon!</p>
                <button class="btn btn-secondary">Send Another Message</button>
            `;
            formContainer.appendChild(successMessage);
            
            // Reset form for future submissions
            this.reset();
            
            // Allow sending another message
            const resetBtn = successMessage.querySelector('button');
            resetBtn.addEventListener('click', function() {
                successMessage.remove();
                contactForm.style.display = 'block';
            });
        });
    }
});