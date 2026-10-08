document.addEventListener('DOMContentLoaded', () => {

    /* ============================================================
       1. TOGGLE MENU MOBILE (HAMBURGER MENU)
       ============================================================ */
    const tombolMenu = document.getElementById('tombol-menu');
    const menuNavigasi = document.getElementById('menu-navigasi');
    const tautanNav = document.querySelectorAll('.tautan-nav');

    if (tombolMenu && menuNavigasi) {
        tombolMenu.addEventListener('click', () => {
            menuNavigasi.classList.toggle('aktif');
            
            const ikon = tombolMenu.querySelector('i');
            if (ikon) {
                ikon.classList.toggle('fa-bars');
                ikon.classList.toggle('fa-xmark');
            }
        });

        // Tutup menu otomatis saat tautan navigasi diklik
        tautanNav.forEach(tautan => {
            tautan.addEventListener('click', () => {
                menuNavigasi.classList.remove('aktif');
                const ikon = tombolMenu.querySelector('i');
                if (ikon) {
                    ikon.classList.add('fa-bars');
                    ikon.classList.remove('fa-xmark');
                }
            });
        });
    }

    /* ============================================================
       2. GANTI TEMA (LIGHT NATURE / DARK FOREST MODE)
       ============================================================ */
    const tombolTema = document.getElementById('tombol-tema');
    
    if (tombolTema) {
        tombolTema.addEventListener('click', () => {
            document.body.classList.toggle('mode-gelap');
            const ikonTema = tombolTema.querySelector('i');
            
            if (ikonTema) {
                if (document.body.classList.contains('mode-gelap')) {
                    ikonTema.classList.remove('fa-moon');
                    ikonTema.classList.add('fa-sun');
                } else {
                    ikonTema.classList.remove('fa-sun');
                    ikonTema.classList.add('fa-moon');
                }
            }
        });
    }

    /* ============================================================
       3. TOMBOL SCROLL TO TOP
       ============================================================ */
    const tombolKeAtas = document.getElementById('tombol-ke-atas');

    if (tombolKeAtas) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                tombolKeAtas.classList.add('aktif');
            } else {
                tombolKeAtas.classList.remove('aktif');
            }
        });

        tombolKeAtas.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});