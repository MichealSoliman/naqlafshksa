/**
 * ====================================================================================================
 * شركة مسار لنقل العفش بالرياض - سكربتات الصفحة الرئيسية (Homepage Scripts)
 * ====================================================================================================
 * ملف موحد ونظيف مجمّع للصفحة الرئيسية بدون أخطاء ولا تبعيات خارجية زائدة.
 */

(function () {
    'use strict';

    // =========================================================================
    // 1. تصفية معرض الأعمال السابقة (Works Portfolio Filter)
    // =========================================================================
    function initWorksFilter() {
        const filterButtons = document.querySelectorAll('.works-filter-btn');
        const workItems = document.querySelectorAll('.works-work-item');

        if (!filterButtons.length || !workItems.length) return;

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => {
                    btn.classList.remove('works-filter-active', 'bg-primary', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-primary');
                });

                button.classList.add('works-filter-active', 'bg-primary', 'text-white');
                button.classList.remove('bg-gray-200');

                const filterValue = button.getAttribute('data-filter');

                workItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeInUp 0.4s ease-in-out';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // =========================================================================
    // 2. البحث في الأحياء وتفاعلات المودال (Neighborhoods & Search)
    // =========================================================================
    function initNeighborhoodSearch() {
        const searchInput = document.getElementById('neighborhood-search');
        if (!searchInput) return;

        searchInput.addEventListener('input', function () {
            const searchTerm = this.value.trim().toLowerCase();
            const cards = document.querySelectorAll('.neighborhood-card-item');

            cards.forEach(card => {
                const name = card.getAttribute('data-name') || card.textContent || '';
                if (name.toLowerCase().includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    window.showAllNeighborhoods = function () {
        const modal = document.getElementById('neighborhoods-modal');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeNeighborhoodsModal = function () {
        const modal = document.getElementById('neighborhoods-modal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    };

    // =========================================================================
    // 3. عداد الإحصائيات (Stat Counters)
    // =========================================================================
    function initStatCounters() {
        const counters = document.querySelectorAll('.stat-number');
        if (!counters.length) return;

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count') || '0', 10);
            if (target === 0) return;
            const isPercent = counter.getAttribute('data-percent') === 'true';
            let current = 0;
            const increment = Math.max(1, Math.ceil(target / 40));

            const update = () => {
                if (current < target) {
                    current = Math.min(target, current + increment);
                    counter.textContent = current + (isPercent ? '%' : '+');
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target + (isPercent ? '%' : '+');
                }
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        update();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

            observer.observe(counter);
        });
    }

    // =========================================================================
    // 4. وظائف الاتصال والمودال والنسخ (Contact & Modals)
    // =========================================================================
    window.copyToClipboard = function (text) {
        if (!navigator.clipboard) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('تم نسخ الرقم: ' + text);
            return;
        }
        navigator.clipboard.writeText(text).then(() => {
            alert('تم نسخ الرقم: ' + text);
        }).catch(err => {
            console.error('Error copying text: ', err);
        });
    };

    window.openServiceModal = function (serviceName) {
        const modal = document.getElementById('contactModal');
        const serviceTitle = document.getElementById('modalService');
        if (serviceTitle) serviceTitle.textContent = serviceName;
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = function () {
        const modal = document.getElementById('contactModal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    };

    window.quickContact = function (serviceName) {
        window.openServiceModal(serviceName);
    };

    window.requestCallBack = function () {
        const serviceName = document.getElementById('modalService')?.textContent || 'نقل العفش';
        const message = `مرحبا، أود الاستفسار عن خدمة ${serviceName} بالرياض`;
        const whatsappUrl = `https://wa.me/966539877874?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        window.closeModal();
    };

    // =========================================================================
    // 5. عارض الصور (Lightbox)
    // =========================================================================
    window.openLightbox = function (imgElement) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        if (lightbox && lightboxImg && imgElement) {
            lightboxImg.src = imgElement.src;
            lightboxImg.alt = imgElement.alt || 'معاينة صورة نقل العفش';
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeLightbox = function () {
        const lightbox = document.getElementById('lightbox');
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    };

    // =========================================================================
    // 6. تشغيل التهيئة عند تحميل المستند
    // =========================================================================
    document.addEventListener('DOMContentLoaded', function () {
        initWorksFilter();
        initNeighborhoodSearch();
        initStatCounters();

        // إغلاق المودالات عند النقر خارجها
        const contactModal = document.getElementById('contactModal');
        if (contactModal) {
            contactModal.addEventListener('click', function (e) {
                if (e.target === this) window.closeModal();
            });
        }

        const neighborhoodsModal = document.getElementById('neighborhoods-modal');
        if (neighborhoodsModal) {
            neighborhoodsModal.addEventListener('click', function (e) {
                if (e.target === this) window.closeNeighborhoodsModal();
            });
        }

        const lightbox = document.getElementById('lightbox');
        if (lightbox) {
            lightbox.addEventListener('click', function (e) {
                if (e.target === this) window.closeLightbox();
            });
        }
    });

})();

