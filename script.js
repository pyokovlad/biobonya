        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        document
            .querySelectorAll(
                '.section, .quote, .timeline-item, .future-entry'
            )
            .forEach(el => observer.observe(el));


        const header = document.querySelector('.header');


        window.addEventListener('scroll', () => {

            header.classList.toggle(
                'scrolled',
                window.scrollY > 40
            );

        });


        const modal = document.getElementById('dossierModal');

        const modalTitle =
            document.getElementById('modalTitle');

        const modalPeriod =
            document.getElementById('modalPeriod');

        const modalRank =
            document.getElementById('modalRank');

        const modalUnit =
            document.getElementById('modalUnit');

        const modalPart =
            document.getElementById('modalPart');

        const modalStatus =
            document.getElementById('modalStatus');

        const modalDescription =
            document.getElementById('modalDescription');

        const modalPhoto =
            document.getElementById('modalPhoto');

        const modalBadge =
            document.getElementById('modalBadge');


        function openDossier(card) {

            modalTitle.textContent =
                card.dataset.title;

            modalPeriod.textContent =
                card.dataset.period;

            modalRank.textContent =
                card.dataset.rank;

            modalUnit.textContent =
                card.dataset.unit;

            modalPart.textContent =
                card.dataset.part;

            modalStatus.textContent =
                card.dataset.status;

            modalDescription.textContent =
                card.dataset.description;

            modalPhoto.src =
                card.dataset.photo ||
                'assets/character.png';

            modalPhoto.alt =
                card.dataset.title;

            modalBadge.textContent =
                card.classList.contains('current')
                    ? 'CURRENT SERVICE RECORD'
                    : 'ARCHIVED SERVICE RECORD';


            modal.classList.add('open');

            modal.setAttribute(
                'aria-hidden',
                'false'
            );

            document.body.classList.add(
                'modal-open'
            );
        }


        function closeDossier() {

            modal.classList.remove('open');

            modal.setAttribute(
                'aria-hidden',
                'true'
            );

            document.body.classList.remove(
                'modal-open'
            );
        }


        document
            .querySelectorAll('.timeline-open')
            .forEach(card => {

                card.addEventListener(
                    'click',
                    () => openDossier(card)
                );

            });


        document
            .querySelectorAll('[data-close-modal]')
            .forEach(el => {

                el.addEventListener(
                    'click',
                    closeDossier
                );

            });


        document.addEventListener(
            'keydown',
            event => {

                if (
                    event.key === 'Escape' &&
                    modal.classList.contains('open')
                ) {
                    closeDossier();
                }

            }
        );

