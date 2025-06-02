const phrases = [
            "fous du goût",
            "lève-tôt",
            "grinders addicts",
            "mauvais dormeurs",
            "belles matinées",
            "nuits blanches",
            "vrais amateurs"
        ];

        let index = 0;
        let charIndex = 0;
        let isDeleting = false;
        const speed = 100;
        const typedText = document.getElementById('typed-text');

        function type() {
            const currentPhrase = phrases[index];
            if (isDeleting) {
                typedText.textContent = currentPhrase.substring(0, charIndex--);
                if (charIndex < 0) {
                    isDeleting = false;
                    index = (index + 1) % phrases.length;
                }
            } else {
                typedText.textContent = currentPhrase.substring(0, charIndex++);
                if (charIndex > currentPhrase.length) {
                    isDeleting = true;
                    setTimeout(type, 1200);
                    return;
                }
            }
            setTimeout(type, isDeleting ? speed / 2 : speed);
        }

        type();