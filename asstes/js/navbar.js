/**
 * ====================================================================================================
 * شركة مسار لنقل العفش بالرياض - النافبار المركزي الموحد (Master Unified Navbar Component)
 * ====================================================================================================
 * 
 * هذا الملف هو المصدر الوحيد والمسؤول عن توليد النافبار (الهيدر وقوائم التصفح) في جميع صفحات الموقع (19 صفحة).
 * بمجرد إضافة أو تعديل أي خدمة في ملف `services-data.js` أو تعديل أي رابط هنا، ينعكس التعديل فوراً
 * وتلقائياً على كل صفحات الموقع بالكامل دون الحاجة لتعديل كل ملف HTML بمفرده.
 * 
 * المزايا المدمجة:
 * 1. تصميم عصري فاخر متجاوب 100% مع تأثير الزجاج الضبابي (Glassmorphism Sticky Header).
 * 2. قائمة منسدلة تفاعلية (Services Dropdown) تفتح بالنقر وبالتمرير (Click & Hover) مع حركة سلسة.
 * 3. قائمة موبايل ذكية مجهزة بقائمة أكورديون فرعية للخدمات وأزرار اتصال مباشر وسريعة.
 * 4. نظام أنماط CSS نقية ومستقلة (Pure Scoped CSS) تضمن التناسق التام دون اعتماد على مكتبات خارجية.
 * 5. كشف تلقائي لمسار الصفحة (Root, Subfolder, Sub-subfolder) لضمان عمل كافة الروابط والصور 100%.
 */

(function () {
    'use strict';

    // =========================================================================
    // 1. بيانات وإعدادات النافبار (Navbar Configuration)
    // =========================================================================
    const NAVBAR_CONFIG = {
        company: {
            name: "شركة مسار",
            subtitle: "لنقل العفش بالرياض",
            logoPath: "asstes/img/logo.webp",
            logoAlt: "شعار شركة مسار لنقل العفش بالرياض"
        },
        contact: {
            phone: "0539877874",
            phoneDisplay: "053 987 7874",
            whatsapp: "966539877874",
            whatsappMessage: "السلام عليكم، أحتاج عرض سعر لنقل العفش بالرياض"
        },
        navLinks: [
            { id: "home", title: "الرئيسية", rootUrl: "#home", subUrl: "" },
            { id: "about", title: "من نحن", slug: "about/" },
            { id: "services", title: "خدماتنا", isDropdown: true, slug: "services.html" },
            { id: "areas", title: "أحياء الرياض", slug: "areas/" },
            { id: "portfolio", title: "مشاريعنا", rootUrl: "#portfolio", subUrl: "#portfolio" },
            { id: "blog", title: "المدونة", slug: "blog/" },
            { id: "contact", title: "اتصل بنا", slug: "contact/" }
        ]
    };

    // =========================================================================
    // 2. حقن أنماط الـ CSS المستقلة الخاصة بالنافبار (Pure Scoped CSS)
    // =========================================================================
    function injectNavbarStyles() {
        if (document.getElementById('mn-navbar-styles')) return;

        const style = document.createElement('style');
        style.id = 'mn-navbar-styles';
        style.textContent = `
            /* Header Root */
            .mn-header {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                z-index: 99990 !important;
                background: rgba(14, 30, 50, 0.95) !important;
                backdrop-filter: blur(12px) !important;
                -webkit-backdrop-filter: blur(12px) !important;
                border-bottom: 1px solid rgba(45, 145, 207, 0.25) !important;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2) !important;
                transition: all 0.3s ease !important;
                direction: rtl !important;
                font-family: 'Tajawal', sans-serif !important;
            }

            .mn-header.mn-scrolled {
                background: rgba(10, 22, 38, 0.98) !important;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35) !important;
                border-bottom-color: rgba(45, 145, 207, 0.4) !important;
            }

            .mn-header * {
                box-sizing: border-box !important;
                margin: 0;
                padding: 0;
            }

            .mn-nav-container {
                max-width: 1240px !important;
                margin: 0 auto !important;
                padding: 10px 20px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                transition: padding 0.3s ease !important;
            }

            .mn-header.mn-scrolled .mn-nav-container {
                padding: 7px 20px !important;
            }

            /* Brand / Logo */
            .mn-brand {
                display: flex !important;
                align-items: center !important;
                gap: 12px !important;
                text-decoration: none !important;
                flex-shrink: 0 !important;
            }

            .mn-logo-box {
                width: 54px !important;
                height: 54px !important;
                background: #ffffff !important;
                border-radius: 50% !important;
                padding: 4px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                border: 2px solid #2d91cf !important;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
                transition: transform 0.3s ease !important;
                overflow: hidden !important;
            }

            .mn-brand:hover .mn-logo-box {
                transform: scale(1.05) rotate(3deg) !important;
            }

            .mn-logo-box img {
                max-width: 100% !important;
                max-height: 100% !important;
                object-fit: contain !important;
            }

            .mn-brand-text {
                display: flex !important;
                flex-direction: column !important;
            }

            .mn-brand-name {
                color: #ffffff !important;
                font-size: 20px !important;
                font-weight: 800 !important;
                line-height: 1.2 !important;
            }

            .mn-brand-sub {
                color: #2d91cf !important;
                font-size: 12px !important;
                font-weight: 600 !important;
            }

            /* Desktop Navigation Links */
            .mn-nav-links {
                display: flex !important;
                align-items: center !important;
                gap: 22px !important;
                list-style: none !important;
            }

            .mn-nav-link {
                color: #ffffff !important;
                text-decoration: none !important;
                font-size: 15px !important;
                font-weight: 600 !important;
                padding: 8px 4px !important;
                transition: color 0.25s ease !important;
                display: flex !important;
                align-items: center !important;
                gap: 6px !important;
                position: relative !important;
                cursor: pointer !important;
                background: transparent !important;
                border: none !important;
                font-family: inherit !important;
            }

            .mn-nav-link:hover {
                color: #2d91cf !important;
            }

            .mn-nav-link.mn-active {
                color: #2d91cf !important;
                font-weight: 700 !important;
            }

            .mn-nav-link.mn-active::after {
                content: '' !important;
                position: absolute !important;
                bottom: 0 !important;
                right: 0 !important;
                left: 0 !important;
                height: 2.5px !important;
                background: #2d91cf !important;
                border-radius: 2px !important;
            }

            /* Dropdown Wrapper */
            .mn-dropdown-wrapper {
                position: relative !important;
            }

            .mn-chevron {
                font-size: 11px !important;
                transition: transform 0.3s ease !important;
                color: #2d91cf !important;
            }

            .mn-dropdown-wrapper.mn-open .mn-chevron {
                transform: rotate(180deg) !important;
            }

            /* Dropdown Menu Panel */
            .mn-dropdown-menu {
                position: absolute !important;
                top: calc(100% + 10px) !important;
                right: 0 !important;
                width: 320px !important;
                background: #ffffff !important;
                border-radius: 16px !important;
                box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0,0,0,0.05) !important;
                padding: 10px !important;
                display: none !important;
                opacity: 0 !important;
                transform: translateY(10px) !important;
                transition: opacity 0.25s ease, transform 0.25s ease !important;
                z-index: 99999 !important;
            }

            .mn-dropdown-wrapper.mn-open .mn-dropdown-menu {
                display: block !important;
                opacity: 1 !important;
                transform: translateY(0) !important;
            }

            .mn-dropdown-item {
                display: flex !important;
                align-items: center !important;
                gap: 12px !important;
                padding: 10px 12px !important;
                border-radius: 10px !important;
                text-decoration: none !important;
                transition: background 0.2s ease, transform 0.2s ease !important;
                border-bottom: 1px solid #f1f5f9 !important;
            }

            .mn-dropdown-item:last-of-type {
                border-bottom: none !important;
            }

            .mn-dropdown-item:hover {
                background: #f0f7ff !important;
                transform: translateX(-3px) !important;
            }

            .mn-dropdown-icon {
                width: 36px !important;
                height: 36px !important;
                border-radius: 10px !important;
                background: rgba(45, 145, 207, 0.1) !important;
                color: #2d91cf !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 15px !important;
                flex-shrink: 0 !important;
                transition: background 0.2s ease, color 0.2s ease !important;
            }

            .mn-dropdown-item:hover .mn-dropdown-icon {
                background: #2d91cf !important;
                color: #ffffff !important;
            }

            .mn-dropdown-info {
                display: flex !important;
                flex-direction: column !important;
            }

            .mn-dropdown-title {
                color: #0f172a !important;
                font-size: 13.5px !important;
                font-weight: 700 !important;
                line-height: 1.3 !important;
            }

            .mn-dropdown-desc {
                color: #64748b !important;
                font-size: 11.5px !important;
                margin-top: 2px !important;
                line-height: 1.3 !important;
            }

            .mn-dropdown-footer {
                margin-top: 8px !important;
                padding: 10px !important;
                background: #f8fafc !important;
                border-radius: 10px !important;
                text-align: center !important;
                border-top: 1px solid #e2e8f0 !important;
            }

            .mn-dropdown-footer a {
                color: #153052 !important;
                font-size: 13px !important;
                font-weight: 700 !important;
                text-decoration: none !important;
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
            }

            .mn-dropdown-footer a:hover {
                color: #2d91cf !important;
            }

            /* Header Action Buttons */
            .mn-actions {
                display: flex !important;
                align-items: center !important;
                gap: 12px !important;
            }

            .mn-call-btn {
                background: #2d91cf !important;
                color: #ffffff !important;
                font-weight: 700 !important;
                font-size: 14px !important;
                padding: 9px 18px !important;
                border-radius: 50px !important;
                text-decoration: none !important;
                display: flex !important;
                align-items: center !important;
                gap: 8px !important;
                box-shadow: 0 4px 14px rgba(45, 145, 207, 0.35) !important;
                transition: transform 0.25s ease, background 0.25s ease !important;
            }

            .mn-call-btn:hover {
                background: #ffffff !important;
                color: #153052 !important;
                transform: scale(1.04) !important;
            }

            .mn-wa-btn {
                background: #25D366 !important;
                color: #ffffff !important;
                font-size: 16px !important;
                width: 38px !important;
                height: 38px !important;
                border-radius: 50% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                text-decoration: none !important;
                box-shadow: 0 4px 12px rgba(37, 211, 102, 0.35) !important;
                transition: transform 0.25s ease !important;
            }

            .mn-wa-btn:hover {
                transform: scale(1.1) !important;
            }

            /* Hamburger Button */
            .mn-hamburger {
                display: none !important;
                background: rgba(255, 255, 255, 0.1) !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                color: #ffffff !important;
                width: 42px !important;
                height: 42px !important;
                border-radius: 12px !important;
                cursor: pointer !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 20px !important;
                transition: background 0.2s ease !important;
            }

            .mn-hamburger:hover {
                background: rgba(255, 255, 255, 0.2) !important;
            }

            /* Mobile Menu Panel */
            .mn-mobile-menu {
                display: none !important;
                background: #ffffff !important;
                border-radius: 18px !important;
                margin: 12px 20px 16px 20px !important;
                padding: 16px !important;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
                border: 1px solid #e2e8f0 !important;
                max-height: 80vh !important;
                overflow-y: auto !important;
            }

            .mn-mobile-menu.mn-mobile-open {
                display: block !important;
                animation: mnSlideDown 0.3s ease !important;
            }

            @keyframes mnSlideDown {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }

            .mn-mobile-list {
                list-style: none !important;
                display: flex !important;
                flex-direction: column !important;
                gap: 6px !important;
            }

            .mn-mobile-link {
                color: #1e293b !important;
                text-decoration: none !important;
                font-size: 15px !important;
                font-weight: 600 !important;
                padding: 10px 14px !important;
                border-radius: 10px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                transition: background 0.2s ease, color 0.2s ease !important;
                background: transparent !important;
                border: none !important;
                width: 100% !important;
                font-family: inherit !important;
                text-align: right !important;
                cursor: pointer !important;
            }

            .mn-mobile-link:hover, .mn-mobile-link.mn-active {
                background: #f1f5f9 !important;
                color: #2d91cf !important;
            }

            .mn-mobile-submenu {
                display: none !important;
                background: #f8fafc !important;
                border-radius: 12px !important;
                padding: 8px 10px !important;
                margin: 4px 0 8px 0 !important;
                border: 1px solid #e2e8f0 !important;
            }

            .mn-mobile-submenu.mn-sub-open {
                display: block !important;
                animation: mnSlideDown 0.2s ease !important;
            }

            .mn-mobile-sublink {
                color: #334155 !important;
                text-decoration: none !important;
                font-size: 13.5px !important;
                font-weight: 600 !important;
                padding: 8px 10px !important;
                border-radius: 8px !important;
                display: flex !important;
                align-items: center !important;
                gap: 10px !important;
                border-bottom: 1px solid #edf2f7 !important;
            }

            .mn-mobile-sublink:last-child {
                border-bottom: none !important;
            }

            .mn-mobile-sublink:hover {
                background: #ffffff !important;
                color: #2d91cf !important;
            }

            .mn-mobile-actions {
                margin-top: 14px !important;
                padding-top: 12px !important;
                border-top: 1px solid #e2e8f0 !important;
                display: flex !important;
                flex-direction: column !important;
                gap: 8px !important;
            }

            .mn-mobile-call {
                background: #2d91cf !important;
                color: #ffffff !important;
                font-weight: 700 !important;
                text-align: center !important;
                padding: 12px !important;
                border-radius: 12px !important;
                text-decoration: none !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 8px !important;
            }

            .mn-mobile-wa {
                background: #25D366 !important;
                color: #ffffff !important;
                font-weight: 700 !important;
                text-align: center !important;
                padding: 12px !important;
                border-radius: 12px !important;
                text-decoration: none !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 8px !important;
            }

            /* Responsive Breakpoint */
            @media (max-width: 1024px) {
                .mn-nav-links {
                    display: none !important;
                }

                .mn-call-btn {
                    display: none !important;
                }

                .mn-hamburger {
                    display: flex !important;
                }
            }

            /* Body spacing so fixed header doesn't cover top section */
            body {
                padding-top: 80px !important;
            }
        `;
        document.head.appendChild(style);
    }

    // =========================================================================
    // 3. دالة حساب المسار النسبي الذكي للصفحة (Smart Path Resolver)
    // =========================================================================
    function getBasePath() {
        const scripts = document.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
            const src = scripts[i].getAttribute('src') || '';
            if (src.includes('navbar.js')) {
                const match = src.match(/^(.*?)asstes\/js\/navbar\.js/);
                if (match && match[1] !== undefined) {
                    return match[1];
                }
            }
        }

        const pathname = window.location.pathname.replace(/\\/g, '/');
        const isNestedPage = (pathname.includes('/blog/') && !pathname.endsWith('/blog/') && !pathname.endsWith('/blog/index.html')) ||
                             (pathname.includes('/areas/') && !pathname.endsWith('/areas/') && !pathname.endsWith('/areas/index.html'));
        if (isNestedPage) return '../../';

        const isSubfolder = pathname.includes('/furniture-') || pathname.includes('/blog/') || pathname.includes('/dina-') ||
                            pathname.includes('/wanet-') || pathname.includes('/about/') || pathname.includes('/contact/') ||
                            pathname.includes('/areas/') || pathname.includes('/office-');
        if (isSubfolder) return '../';

        return './';
    }

    function resolveUrl(basePath, linkObj) {
        const isRoot = basePath === './' || basePath === '';
        if (linkObj.rootUrl && isRoot) return linkObj.rootUrl;
        if (linkObj.subUrl && !isRoot) return `${basePath}${linkObj.subUrl}`;
        const slug = linkObj.slug || '';
        if (slug.startsWith('http://') || slug.startsWith('https://') || slug.startsWith('tel:') || slug.startsWith('mailto:')) {
            return slug;
        }
        return `${basePath}${slug}`;
    }

    // =========================================================================
    // 4. توليد الـ HTML الكامل للنافبار (Navbar HTML Builder)
    // =========================================================================
    function buildNavbarHTML(basePath) {
        const c = NAVBAR_CONFIG;
        const logoUrl = `${basePath}${c.company.logoPath}`;
        const brandUrl = (basePath === './' || basePath === '') ? '#home' : basePath;
        const waEncodedText = encodeURIComponent(c.contact.whatsappMessage);
        const waFullLink = `https://wa.me/${c.contact.whatsapp}?text=${waEncodedText}`;
        const telLink = `tel:${c.contact.phone}`;

        // قائمة الخدمات من الملف المركزي SITE_SERVICES
        const servicesList = (typeof window.SITE_SERVICES !== 'undefined' && Array.isArray(window.SITE_SERVICES)) 
            ? window.SITE_SERVICES 
            : [
                { title: "فك وتركيب عفش بالرياض", desc: "فنيون متخصصون لجميع الأثاث", slug: "furniture-disassembly-and-reassembly-in-riyadh/", icon: "fas fa-wrench" },
                { title: "دينا نقل عفش بالرياض", desc: "شاحنات مجهزة بحمولات متنوعة", slug: "dina-furniture-moving-riyadh/", icon: "fas fa-truck" },
                { title: "ونيت نقل عفش بالرياض", desc: "نقل سريع للأحمال الخفيفة", slug: "wanet-furniture-moving-riyadh/", icon: "fas fa-truck-pickup" },
                { title: "تغليف العفش بالرياض", desc: "حماية ضد الخدوش والكسر", slug: "furniture-packaging-wrapping-riyadh/", icon: "fas fa-box-open" },
                { title: "تخزين العفش بالرياض", desc: "مستودعات مؤمنة ومكيفة", slug: "furniture-storage-riyadh/", icon: "fas fa-warehouse" },
                { title: "نقل عفش خارج الرياض", desc: "نقل بين المدن مع الضمان", slug: "furniture-moving-outside-riyadh/", icon: "fas fa-route" },
                { title: "نقل مكاتب وشركات بالرياض", desc: "نقل احترافي لمقرات العمل", slug: "office-commercial-moving-riyadh/", icon: "fas fa-building" }
            ];

        // 1. كود عناصر القائمة لسطح المكتب
        let desktopLinksHtml = '';
        c.navLinks.forEach(link => {
            if (link.isDropdown) {
                // عنصر الخدمات مع القائمة المنسدلة
                let dropdownItemsHtml = '';
                servicesList.forEach(s => {
                    const sUrl = `${basePath}${s.slug}`;
                    dropdownItemsHtml += `
                        <a href="${sUrl}" class="mn-dropdown-item">
                            <div class="mn-dropdown-icon">
                                <i class="${s.icon}"></i>
                            </div>
                            <div class="mn-dropdown-info">
                                <div class="mn-dropdown-title">${s.title}</div>
                                <div class="mn-dropdown-desc">${s.desc}</div>
                            </div>
                        </a>
                    `;
                });

                desktopLinksHtml += `
                    <li class="mn-dropdown-wrapper" id="mn-services-dropdown-wrap">
                        <button type="button" class="mn-nav-link" id="mn-services-btn" aria-haspopup="true" aria-expanded="false">
                            <span>${link.title}</span>
                            <i class="fas fa-chevron-down mn-chevron"></i>
                        </button>
                        <div class="mn-dropdown-menu" id="mn-services-menu" role="menu">
                            ${dropdownItemsHtml}
                            <div class="mn-dropdown-footer">
                                <a href="${basePath}services.html">
                                    <span><i class="fas fa-th-large" style="margin-left:6px; color:#2d91cf;"></i> جميع خدمات نقل العفش</span>
                                    <i class="fas fa-arrow-left" style="font-size:11px;"></i>
                                </a>
                            </div>
                        </div>
                    </li>
                `;
            } else {
                const url = resolveUrl(basePath, link);
                desktopLinksHtml += `
                    <li>
                        <a href="${url}" class="mn-nav-link" data-nav-id="${link.id}">
                            <span>${link.title}</span>
                        </a>
                    </li>
                `;
            }
        });

        // 2. كود عناصر القائمة للموبايل
        let mobileLinksHtml = '';
        c.navLinks.forEach(link => {
            if (link.isDropdown) {
                let mobileSubItemsHtml = '';
                servicesList.forEach(s => {
                    const sUrl = `${basePath}${s.slug}`;
                    mobileSubItemsHtml += `
                        <a href="${sUrl}" class="mn-mobile-sublink">
                            <i class="${s.icon}" style="color:#2d91cf; width:16px; text-align:center;"></i>
                            <span>${s.title}</span>
                        </a>
                    `;
                });

                mobileLinksHtml += `
                    <li>
                        <button type="button" class="mn-mobile-link" id="mn-mobile-services-toggle">
                            <span><i class="fas fa-boxes" style="margin-left:8px; color:#2d91cf;"></i> ${link.title}</span>
                            <i class="fas fa-chevron-down mn-chevron" id="mn-mobile-services-chevron"></i>
                        </button>
                        <div class="mn-mobile-submenu" id="mn-mobile-services-list">
                            ${mobileSubItemsHtml}
                            <a href="${basePath}services.html" class="mn-mobile-sublink" style="color:#2d91cf; font-weight:700;">
                                <i class="fas fa-th-list" style="margin-left:6px;"></i>
                                <span>جميع خدمات نقل العفش &larr;</span>
                            </a>
                        </div>
                    </li>
                `;
            } else {
                const url = resolveUrl(basePath, link);
                mobileLinksHtml += `
                    <li>
                        <a href="${url}" class="mn-mobile-link" data-nav-id="${link.id}">
                            <span>${link.title}</span>
                            <i class="fas fa-chevron-left" style="font-size:10px; color:#94a3b8;"></i>
                        </a>
                    </li>
                `;
            }
        });

        return `
            <header id="site-header" class="mn-header">
                <nav class="mn-nav-container">

                    <!-- الهوية والشعار -->
                    <a href="${brandUrl}" class="mn-brand" aria-label="الصفحة الرئيسية">
                        <div class="mn-logo-box">
                            <img src="${logoUrl}" alt="${c.company.logoAlt}" width="50" height="50">
                        </div>
                        <div class="mn-brand-text">
                            <span class="mn-brand-name">${c.company.name}</span>
                            <span class="mn-brand-sub">${c.company.subtitle}</span>
                        </div>
                    </a>

                    <!-- قائمة التصفح لسطح المكتب -->
                    <ul class="mn-nav-links">
                        ${desktopLinksHtml}
                    </ul>

                    <!-- أزرار التواصل السريع -->
                    <div class="mn-actions">
                        <a href="${telLink}" class="mn-call-btn" aria-label="اتصال هاتفي مباشر">
                            <i class="fas fa-phone-alt"></i>
                            <span dir="ltr">${c.contact.phoneDisplay}</span>
                        </a>
                        <a href="${waFullLink}" target="_blank" rel="noopener noreferrer" class="mn-wa-btn" aria-label="محادثة واتساب مباشرة">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <!-- زر القائمة لشاشات الجوال -->
                        <button type="button" id="mn-hamburger-btn" class="mn-hamburger" aria-label="فتح القائمة">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>

                </nav>

                <!-- لوحة قائمة الموبايل المنسدلة -->
                <div id="mn-mobile-panel" class="mn-mobile-menu">
                    <ul class="mn-mobile-list">
                        ${mobileLinksHtml}
                    </ul>
                    <div class="mn-mobile-actions">
                        <a href="${telLink}" class="mn-mobile-call">
                            <i class="fas fa-phone-alt"></i>
                            <span>اتصل بنا: ${c.contact.phoneDisplay}</span>
                        </a>
                        <a href="${waFullLink}" target="_blank" rel="noopener noreferrer" class="mn-mobile-wa">
                            <i class="fab fa-whatsapp"></i>
                            <span>تواصل عبر واتساب مباشر 24/7</span>
                        </a>
                    </div>
                </div>
            </header>
        `;
    }

    // =========================================================================
    // 5. ربط الأحداث التفاعلية للنافبار (Event Handlers & Interactivity)
    // =========================================================================
    function setupNavbarEvents() {
        const header = document.getElementById('site-header');
        const dropdownWrap = document.getElementById('mn-services-dropdown-wrap');
        const servicesBtn = document.getElementById('mn-services-btn');
        const hamburgerBtn = document.getElementById('mn-hamburger-btn');
        const mobilePanel = document.getElementById('mn-mobile-panel');
        const mobileServicesToggle = document.getElementById('mn-mobile-services-toggle');
        const mobileServicesList = document.getElementById('mn-mobile-services-list');
        const mobileServicesChevron = document.getElementById('mn-mobile-services-chevron');

        // 1. تأثير التمرير (Sticky Scroll Header Effect)
        if (header) {
            window.addEventListener('scroll', function () {
                if (window.pageYOffset > 40) {
                    header.classList.add('mn-scrolled');
                } else {
                    header.classList.remove('mn-scrolled');
                }
            }, { passive: true });
        }

        // 2. تفعيل القائمة المنسدلة لسطح المكتب (فتح بالنقر والتمرير)
        if (dropdownWrap && servicesBtn) {
            // أ. النقر لفتح أو إغلاق الدروب داون
            servicesBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                const isOpen = dropdownWrap.classList.contains('mn-open');
                if (isOpen) {
                    dropdownWrap.classList.remove('mn-open');
                    servicesBtn.setAttribute('aria-expanded', 'false');
                } else {
                    dropdownWrap.classList.add('mn-open');
                    servicesBtn.setAttribute('aria-expanded', 'true');
                }
            });

            // ب. التمرير بالماوس لفتح الدروب داون بسلاسة
            dropdownWrap.addEventListener('mouseenter', function () {
                dropdownWrap.classList.add('mn-open');
                servicesBtn.setAttribute('aria-expanded', 'true');
            });

            dropdownWrap.addEventListener('mouseleave', function () {
                dropdownWrap.classList.remove('mn-open');
                servicesBtn.setAttribute('aria-expanded', 'false');
            });

            // ج. إغلاق الدروب داون عند النقر في أي مكان خارجها
            document.addEventListener('click', function (e) {
                if (!dropdownWrap.contains(e.target)) {
                    dropdownWrap.classList.remove('mn-open');
                    servicesBtn.setAttribute('aria-expanded', 'false');
                }
            });

            // د. إغلاق الدروب داون عند الضغط على زر Escape
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    dropdownWrap.classList.remove('mn-open');
                    servicesBtn.setAttribute('aria-expanded', 'false');
                }
            });
        }

        // 3. فتح وإغلاق قائمة الموبايل (Hamburger Menu)
        if (hamburgerBtn && mobilePanel) {
            hamburgerBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                const isOpen = mobilePanel.classList.contains('mn-mobile-open');
                const icon = hamburgerBtn.querySelector('i');
                if (isOpen) {
                    mobilePanel.classList.remove('mn-mobile-open');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                } else {
                    mobilePanel.classList.add('mn-mobile-open');
                    if (icon) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                    }
                }
            });

            // إغلاق قائمة الموبايل عند النقر على أي رابط بداخلها
            mobilePanel.querySelectorAll('a').forEach(a => {
                a.addEventListener('click', function () {
                    mobilePanel.classList.remove('mn-mobile-open');
                    const icon = hamburgerBtn.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                });
            });
        }

        // 4. تفعيل أكورديون الخدمات داخل قائمة الموبايل
        if (mobileServicesToggle && mobileServicesList) {
            mobileServicesToggle.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                const isOpen = mobileServicesList.classList.contains('mn-sub-open');
                if (isOpen) {
                    mobileServicesList.classList.remove('mn-sub-open');
                    if (mobileServicesChevron) mobileServicesChevron.style.transform = 'rotate(0deg)';
                } else {
                    mobileServicesList.classList.add('mn-sub-open');
                    if (mobileServicesChevron) mobileServicesChevron.style.transform = 'rotate(180deg)';
                }
            });
        }
    }

    // =========================================================================
    // 6. حقن النافبار في الصفحة (Navbar Injection)
    // =========================================================================
    function initSiteNavbar() {
        injectNavbarStyles();
        const basePath = getBasePath();
        const navbarHtml = buildNavbarHTML(basePath);

        let headerTarget = document.getElementById('site-header') ||
                           document.getElementById('header') ||
                           document.querySelector('header');

        if (headerTarget) {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = navbarHtml;
            const newHeader = wrapper.firstElementChild;
            headerTarget.parentNode.replaceChild(newHeader, headerTarget);
        } else {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = navbarHtml;
            const newHeader = wrapper.firstElementChild;
            document.body.insertBefore(newHeader, document.body.firstChild);
        }

        setupNavbarEvents();
    }

    // التنفيذ التلقائي فور جاهزية الـ DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSiteNavbar);
    } else {
        initSiteNavbar();
    }

    window.renderSiteNavbar = initSiteNavbar;
    window.NAVBAR_CONFIG = NAVBAR_CONFIG;

})();
