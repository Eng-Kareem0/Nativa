 // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Product Button Click
        document.querySelectorAll('.product-btn').forEach(button => {
            button.addEventListener('click', function() {
                const productCard = this.closest('.product-card');
                const productName = productCard.querySelector('.product-title').textContent;
                
                // Show modal
                document.getElementById('productModal').style.display = 'flex';
                
                // In a real application, you would add the product to cart here
                console.log(`Added to cart: ${productName}`);
            });
        });

        // Close Modal
        function closeModal() {
            document.getElementById('productModal').style.display = 'none';
        }

        document.querySelector('.close-modal').addEventListener('click', closeModal);
        
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('productModal');
            if (event.target === modal) {
                closeModal();
            }
        });

        // Newsletter Form
        document.getElementById('newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if(email) {
                alert('شكراً لاشتراكك في نشرتنا البريدية!');
                this.reset();
            }
        });

        // Contact Form
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if(name && email && subject && message) {
                alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
                this.reset();
            }
        });

        // Header Scroll Effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if(window.scrollY > 100) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
            } else {
                header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            }
        });