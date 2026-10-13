// Initialize AOS (Animate On Scroll) if available
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}

/**
 * دالة إنشاء وتحديث قائمة "خدماتنا" في النافبار لجميع الصفحات تلقائياً (سطح المكتب والموبايل)
 */
function renderServicesDropdown() {
    const servicesList = (typeof SITE_SERVICES !== 'undefined') ? SITE_SERVICES : [
        {
            title: "فك وتركيب عفش بالرياض",
            desc: "فنيون متخصصون لجميع الأثاث",
            slug: "furniture-disassembly-and-reassembly-in-riyadh/",
            icon: "fas fa-wrench"
        },
        {
            title: "دينا نقل عفش بالرياض",
            desc: "شاحنات مجهزة بحمولات متنوعة",
            slug: "dina-furniture-moving-riyadh/",
            icon: "fas fa-truck"
        },
        {
            title: "تغليف العفش بالرياض",
            desc: "حماية ضد الخدوش والكسر",
            slug: "furniture-packaging-wrapping-riyadh/",
            icon: "fas fa-box-open"
        },
        {
            title: "تخزين العفش بالرياض",
            desc: "مستودعات مؤمنة ومكيفة",
            slug: "furniture-storage-riyadh/",
            icon: "fas fa-warehouse"
        },
        {
            title: "نقل عفش خارج الرياض",
            desc: "نقل بين المدن مع الضمان",
            slug: "furniture-moving-outside-riyadh/",
            icon: "fas fa-route"
        },
        {
            title: "نقل مكاتب وشركات بالرياض",
            desc: "نقل احترافي لمقرات العمل والمؤسسات",
            slug: "office-commercial-moving-riyadh/",
            icon: "fas fa-building"
        }
    ];

    // تحديد مسار البداية بدقة لمنع أخطاء 404 سواء على الخادم المباشر أو المعاينة المحلية
    const pathname = window.location.pathname.replace(/\\/g, '/');
    let basePath = '/';
    if (window.location.protocol === 'file:') {
        const isBlogArticle = pathname.includes('/blog/') && !pathname.endsWith('/blog/') && !pathname.endsWith('/blog/index.html');
        const isSubfolder = pathname.includes('/furniture-') || pathname.includes('/blog/') || pathname.includes('/dina-') || pathname.includes('/about/') || pathname.includes('/contact/') || pathname.includes('/areas/') || pathname.includes('/office-');
        basePath = isBlogArticle ? '../../' : (isSubfolder ? '../' : './');
    }

    // القوائم لسطح المكتب والموبايل
    const desktopContainers = document.querySelectorAll('.desktop-services-dropdown, #desktop-services-dropdown, [data-services-dropdown]');
    const mobileContainers = document.querySelectorAll('.mobile-submenu, #mobile-services-dropdown, [data-services-mobile-dropdown]');

    // كود القائمة المنسدلة لسطح المكتب (Desktop HTML)
    let desktopHtml = '';
    servicesList.forEach(service => {
        desktopHtml += `
            <a href="${basePath}${service.slug}"
                class="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 hover:text-secondary transition font-medium text-right border-b border-gray-50">
                <div class="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <i class="${service.icon}"></i>
                </div>
                <div>
                    <div class="font-bold text-sm text-[#153052]">${service.title}</div>
                    <div class="text-xs text-gray-500">${service.desc}</div>
                </div>
            </a>
        `;
    });
    desktopHtml += `
        <a href="${basePath}services.html"
            class="flex items-center justify-between px-5 py-3 bg-gray-50 hover:bg-secondary hover:text-white transition font-bold text-sm text-primary rounded-b-xl mt-1">
            <span>جميع الخدمات</span>
            <i class="fas fa-arrow-left text-xs"></i>
        </a>
    `;

    // كود القائمة المنسدلة للموبايل (Mobile HTML)
    let mobileHtml = '';
    servicesList.forEach(service => {
        mobileHtml += `
            <a href="${basePath}${service.slug}"
                class="flex items-center gap-3 text-gray-700 hover:text-secondary text-right text-sm py-2.5 px-3.5 rounded-xl hover:bg-white transition font-medium">
                <i class="${service.icon} text-secondary text-base w-5 text-center flex-shrink-0"></i>
                <span>${service.title}</span>
            </a>
        `;
    });
    mobileHtml += `
        <a href="${basePath}services.html"
            class="flex items-center justify-between text-secondary font-bold text-right text-sm py-2.5 px-3.5 border-t border-gray-200 mt-1">
            <span><i class="fas fa-th-list ml-2"></i> جميع خدمات نقل العفش</span>
            <i class="fas fa-arrow-left text-xs"></i>
        </a>
    `;

    // تحديث المحتوى في كل النفيجبارات بالموقع
    desktopContainers.forEach(container => {
        container.innerHTML = desktopHtml;
    });

    mobileContainers.forEach(container => {
        container.innerHTML = mobileHtml;
    });
}

/**
 * نظام فتح وإغلاق قائمة الموبايل بنظام التفويض (Event Delegation) 
 * لضمان العمل 100% على كافة الشاشات والمتصفحات
 */
document.addEventListener('click', function(e) {
    // 1. الضغط على زر المنيو في الموبايل
    const mobileBtn = e.target.closest('#mobile-menu-btn, #menuBtn, .mobile-menu-btn');
    if (mobileBtn) {
        e.preventDefault();
        e.stopPropagation();
        const mobileMenu = document.getElementById('mobile-menu') || document.getElementById('mobileMenu') || document.querySelector('.mobile-menu');
        if (mobileMenu) {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
            }

            const icon = mobileBtn.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }
        }
        return;
    }

    // 2. الضغط خارج القائمة لإغلاقها تلقائياً
    const openMenu = document.querySelector('#mobile-menu:not(.hidden), #mobileMenu:not(.hidden)');
    if (openMenu) {
        const activeBtn = document.querySelector('#mobile-menu-btn, #menuBtn, .mobile-menu-btn');
        if (!openMenu.contains(e.target) && (!activeBtn || !activeBtn.contains(e.target))) {
            openMenu.classList.add('hidden');
            if (activeBtn) {
                const icon = activeBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    }
});

// Mobile Submenu Toggle Function
window.toggleMobileSubmenu = function(button) {
    const parent = button.closest('li') || button.closest('div') || button.parentElement;
    const submenu = parent ? (parent.querySelector('.mobile-submenu') || parent.querySelector('#mobile-services-dropdown')) : button.nextElementSibling;
    const icon = button.querySelector('.fa-chevron-down') || button.querySelector('i');
    
    if (submenu) {
        const isHidden = submenu.classList.contains('hidden');
        if (isHidden) {
            submenu.classList.remove('hidden');
        } else {
            submenu.classList.add('hidden');
        }
        if (icon) {
            icon.classList.toggle('rotate-180', !submenu.classList.contains('hidden'));
        }
    }
};

// Global FAQ Accordion Toggle Function
window.toggleFAQ = function(button) {
    const item = button.closest('.faq-item') || button.parentElement;
    const answer = item ? item.querySelector('.faq-answer') : button.nextElementSibling;
    const icon = button.querySelector('i') || button.querySelector('span:last-child') || button.querySelector('span');
    
    // Close other FAQ items
    document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
        if (otherAnswer !== answer) {
            otherAnswer.style.display = 'none';
            otherAnswer.classList.remove('open');
            const parentItem = otherAnswer.closest('.faq-item') || otherAnswer.parentElement;
            if (parentItem) parentItem.classList.remove('active');
            const parentBtn = otherAnswer.previousElementSibling;
            if (parentBtn && parentBtn.classList.contains('faq-question')) {
                parentBtn.setAttribute('aria-expanded', 'false');
                const otherIcon = parentBtn.querySelector('i') || parentBtn.querySelector('span:last-child') || parentBtn.querySelector('span');
                if (otherIcon) {
                    if (otherIcon.tagName === 'I') otherIcon.style.transform = 'rotate(0deg)';
                    else otherIcon.textContent = '+';
                }
            }
        }
    });
    
    // Toggle active state
    if (answer) {
        const isHidden = answer.style.display === 'none' || getComputedStyle(answer).display === 'none';
        if (isHidden) {
            if (item) item.classList.add('active');
            answer.classList.add('open');
            answer.style.display = 'block';
            button.setAttribute('aria-expanded', 'true');
            if (icon) {
                if (icon.tagName === 'I') icon.style.transform = 'rotate(180deg)';
                else icon.textContent = '−';
            }
        } else {
            if (item) item.classList.remove('active');
            answer.classList.remove('open');
            answer.style.display = 'none';
            button.setAttribute('aria-expanded', 'false');
            if (icon) {
                if (icon.tagName === 'I') icon.style.transform = 'rotate(0deg)';
                else icon.textContent = '+';
            }
        }
    }
};

// Event listener delegation for FAQ buttons loaded dynamically or static
document.addEventListener('click', function(e) {
    const faqBtn = e.target.closest('.faq-question');
    if (faqBtn && !faqBtn.hasAttribute('onclick')) {
        window.toggleFAQ(faqBtn);
    }
});

// Typing Animation for Hero Section
function initTypingText() {
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;
    const phrases = [
        "نقل عفش آمن ومضمون",
        "فك وتركيب جميع أنواع الأثاث",
        "تغليف ضد الخدوش والكسر",
        "تخزين مكيف ومؤمن ضد الحريق",
        "أسعار شفافة ومنافسة",
        "فريق مدرب ومتخصص"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }
        
        setTimeout(typeWriter, typingSpeed);
    }
    typeWriter();
}

// Sticky Header on Scroll (Passive Listener for better INP)
const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }, { passive: true });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerHeight = header ? header.offsetHeight : 80;
            const targetPosition = target.offsetTop - headerHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Run Initialization
document.addEventListener('DOMContentLoaded', function() {
    renderServicesDropdown();
    initTypingText();
});

// Run render immediately if DOM is already loaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    renderServicesDropdown();
    initTypingText();
}
