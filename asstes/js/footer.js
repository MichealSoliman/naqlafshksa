/**
 * ====================================================================================================
 * شركة مسار لنقل العفش بالرياض - الفوتر المركزي الموحد (Master Unified Footer Component)
 * ====================================================================================================
 * تصميم مخصص عالي التناسق والاحترافية، مبني بأنماط CSS نقية ومستقلة 100% (Pure Scoped CSS)
 * لضمان دقة الترتيب والتناسق التام على كافة الأجهزة والشاشات دون أي اعتماد على مكتبات خارجية.
 * 
 * أي تعديل في هذا الملف ينعكس فوراً وتلقائياً على جميع صفحات الموقع الـ 19!
 */

(function () {
    'use strict';

    // =========================================================================
    // 1. بيانات وإعدادات الفوتر (Footer Configuration Data)
    // =========================================================================
    const FOOTER_CONFIG = {
        company: {
            name: "شركة مسار لنقل العفش بالرياض",
            shortName: "شركة مسار لنقل العفش",
            slogan: "نقل آمن • فك وتركيب احترافي • تغليف خماسي • ضمان شامل 100%",
            description: "شركة رائدة ومعتمدة متخصصة في نقل وتغليف وتخزين الأثاث بالرياض. نوفر أسطول سيارات دينا وونيت مجهز بصناديق مقفلة ومبطنة، مع كوادر فنية مدربة من نجارين وفنيي تكييف لضمان حماية عفش منزلك ومكتبك بأعلى معايير الأمان والسرعة.",
            crNumber: "1010894723",
            taxNumber: "310485962100003",
            license: "ترخيص نقل بري معتمد - الهيئة العامة للنقل",
            maroofBadge: "موثق بمنصة معروف الرسمية",
            logoPath: "asstes/img/logo.webp",
            logoAlt: "شعار شركة مسار لنقل العفش بالرياض"
        },

        contact: {
            phone: "0539877874",
            phoneDisplay: "053 987 7874",
            whatsapp: "966539877874",
            whatsappMessage: "السلام عليكم، أحتاج عرض سعر لخدمة نقل العفش بالرياض",
            email: "info@naqlafshksa.com",
            address: "مدينة الرياض، المملكة العربية السعودية",
            workingHours: "متاحون على مدار 24 ساعة / طوال أيام الأسبوع (24/7)",
            mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.837983982045!2d46.67529531500032!3d24.71355198409114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038f6ed1b9ef%3A0x7a4c2a68f1bbd4c1!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1697047634567!5m2!1sen!2ssa",
            mapDirectionsUrl: "https://maps.google.com/?q=Riyadh,Saudi+Arabia"
        },

        trustHighlights: [
            {
                icon: "fas fa-shield-alt",
                title: "ضمان شامل 100%",
                desc: "عقد رسمي وضمان معتمد ضد أي خدوش أو تلفيات أثناء النقل."
            },
            {
                icon: "fas fa-user-tie",
                title: "نجارون وفنيون متخصصون",
                desc: "فك وتركيب متقن لغرف النوم والمطابخ والمكيفات وأثاث إيكيا."
            },
            {
                icon: "fas fa-truck-moving",
                title: "دينا وونيت مجهز ومغلق",
                desc: "شاحنات مبطنة لحماية الأثاث من أتربة وحرارة الجو وتقلبات الطقس."
            },
            {
                icon: "fas fa-clock",
                title: "سرعة استجابة 24/7",
                desc: "وصول سريع خلال 20 - 30 دقيقة لكافة أحياء الرياض وضواحيها."
            }
        ],

        services: [
            { title: "فك وتركيب عفش بالرياض", slug: "furniture-disassembly-and-reassembly-in-riyadh/", icon: "fas fa-tools", badge: "محترفون" },
            { title: "دينا نقل عفش بالرياض", slug: "dina-furniture-moving-riyadh/", icon: "fas fa-truck", badge: "مجهزة" },
            { title: "ونيت نقل عفش بالرياض", slug: "wanet-furniture-moving-riyadh/", icon: "fas fa-truck-pickup", badge: "سريع" },
            { title: "تغليف العفش الاحترافي", slug: "furniture-packaging-wrapping-riyadh/", icon: "fas fa-box-open", badge: "حماية" },
            { title: "تخزين عفش بمستودعات مؤمنة", slug: "furniture-storage-riyadh/", icon: "fas fa-warehouse", badge: "مكيفة" },
            { title: "نقل عفش خارج الرياض بين المدن", slug: "furniture-moving-outside-riyadh/", icon: "fas fa-route", badge: "ضمان" },
            { title: "نقل مكاتب وشركات ومؤسسات", slug: "office-commercial-moving-riyadh/", icon: "fas fa-building", badge: "شامل" },
            { title: "أسعار نقل العفش بالرياض", slug: "furniture-moving-prices-riyadh/", icon: "fas fa-calculator", badge: "دليل شامل" }
        ],

        riyadhRegions: {
            north: {
                label: "شمال الرياض",
                areas: [
                    { name: "حي الملقا", slug: "areas/furniture-moving-hayu-almalqa-riyadh/" },
                    { name: "حي الياسمين", slug: "areas/hayu-alyasmeen/" },
                    { name: "حي النرجس", slug: "areas/" },
                    { name: "حي الصحافة", slug: "areas/" },
                    { name: "حي حطين", slug: "areas/" },
                    { name: "حي العارض", slug: "areas/" },
                    { name: "حي الربيع", slug: "areas/" },
                    { name: "حي العقيق", slug: "areas/" }
                ]
            },
            east: {
                label: "شرق الرياض",
                areas: [
                    { name: "حي الروضة", slug: "areas/" },
                    { name: "حي اليرموك", slug: "areas/" },
                    { name: "حي المونسية", slug: "areas/" },
                    { name: "حي قرطبة", slug: "areas/" },
                    { name: "حي النسيم", slug: "areas/" },
                    { name: "حي الحمراء", slug: "areas/" }
                ]
            },
            westCentral: {
                label: "وسط وغرب وجنوب الرياض",
                areas: [
                    { name: "حي العليا", slug: "areas/" },
                    { name: "حي السليمانية", slug: "areas/" },
                    { name: "حي الملك فهد", slug: "areas/" },
                    { name: "حي ظهرة لبن", slug: "areas/" },
                    { name: "حي السويدي", slug: "areas/" },
                    { name: "حي الشفا", slug: "areas/" }
                ]
            }
        },

        quickLinks: [
            { title: "الرئيسية", slug: "" },
            { title: "من نحن", slug: "about/" },
            { title: "خدماتنا المتكاملة", slug: "services.html" },
            { title: "أحياء وتغطية الرياض", slug: "areas/" },
            { title: "مشاريعنا وسوابق أعمالنا", slug: "#portfolio" },
            { title: "مدونة نصائح النقل", slug: "blog/" },
            { title: "اتصل بنا", slug: "contact/" },
            { title: "سياسة الخصوصية", slug: "privacy-policy.html" }
        ],

        blogArticles: [
            {
                title: "أفضل طرق نقل العفش في الرياض بدون تلف أو خدوش",
                slug: "blog/move-furniture-riyadh-without-damage/",
                icon: "fas fa-shield-alt"
            },
            {
                title: "دليل شامل لأفضل مواد تغليف الأثاث المنزلي لحمايته",
                slug: "blog/furniture-packaging-materials-riyadh/",
                icon: "fas fa-box"
            },
            {
                title: "كيف تختار أفضل شركة نقل عفش بالرياض ذات موثوقية عالية؟",
                slug: "blog/how-to-choose-best-furniture-moving-company-riyadh/",
                icon: "fas fa-star"
            }
        ],

        seoKeywords: [
            { text: "شركة نقل عفش بالرياض", slug: "" },
            { text: "دينا نقل عفش بالرياض", slug: "dina-furniture-moving-riyadh/" },
            { text: "ونيت نقل عفش بالرياض", slug: "wanet-furniture-moving-riyadh/" },
            { text: "ارخص شركة نقل عفش بالرياض", slug: "services.html" },
            { text: "نقل اثاث مع الفك والتركيب", slug: "furniture-disassembly-and-reassembly-in-riyadh/" },
            { text: "تغليف عفش بالرياض", slug: "furniture-packaging-wrapping-riyadh/" },
            { text: "تخزين اثاث بالرياض", slug: "furniture-storage-riyadh/" },
            { text: "نقل عفش خارج الرياض", slug: "furniture-moving-outside-riyadh/" },
            { text: "نقل عفش شمال الرياض", slug: "areas/" },
            { text: "نقل عفش حي الملقا", slug: "areas/furniture-moving-hayu-almalqa-riyadh/" },
            { text: "نقل عفش شرق الرياض", slug: "areas/" },
            { text: "سيارات نقل عفش مغلقة", slug: "dina-furniture-moving-riyadh/" },
            { text: "نجار فك وتركيب غرف نوم", slug: "furniture-disassembly-and-reassembly-in-riyadh/" },
            { text: "اسعار نقل العفش بالرياض", slug: "contact/" },
            { text: "افضل شركة نقل اثاث بالرياض", slug: "about/" }
        ],

        paymentMethods: [
            { name: "مدى Mada", icon: "fas fa-credit-card" },
            { name: "فيزا Visa", icon: "fab fa-cc-visa" },
            { name: "ماستركارد Mastercard", icon: "fab fa-cc-mastercard" },
            { name: "Apple Pay", icon: "fab fa-apple-pay" },
            { name: "تحويل بنكي", icon: "fas fa-university" },
            { name: "دفع نقدي كاش", icon: "fas fa-money-bill-wave" }
        ],

        socialLinks: [
            { platform: "واتساب", icon: "fab fa-whatsapp", url: "https://wa.me/966539877874", bg: "#25D366" },
            { platform: "تويتر / X", icon: "fab fa-x-twitter", url: "https://twitter.com/", bg: "#1DA1F2" },
            { platform: "إنستغرام", icon: "fab fa-instagram", url: "https://instagram.com/", bg: "#E1306C" },
            { platform: "فيسبوك", icon: "fab fa-facebook-f", url: "https://facebook.com/", bg: "#1877F2" },
            { platform: "تيك توك", icon: "fab fa-tiktok", url: "https://tiktok.com/", bg: "#000000" },
            { platform: "يوتيوب", icon: "fab fa-youtube", url: "https://youtube.com/", bg: "#FF0000" }
        ]
    };

    // =========================================================================
    // 2. حقن أنماط الـ CSS النقية المستقلة (Self-Contained Injected Styles)
    //    تضمن التنسيق والتجاوب والترتيب 100% دون الاعتماد على أي CSS خارجي
    // =========================================================================
    function injectFooterStyles() {
        if (document.getElementById('mf-injected-styles')) return;

        const style = document.createElement('style');
        style.id = 'mf-injected-styles';
        style.textContent = `
            /* Container & General Reset */
            .mf-root {
                background: linear-gradient(180deg, #0e1e32 0%, #081321 100%) !important;
                color: #e2e8f0 !important;
                font-family: 'Tajawal', sans-serif !important;
                direction: rtl !important;
                text-align: right !important;
                position: relative !important;
                width: 100% !important;
                box-sizing: border-box !important;
                margin-top: 60px !important;
                padding-top: 50px !important;
                padding-bottom: 30px !important;
                border-top: 4px solid #2d91cf !important;
                overflow: hidden !important;
            }

            .mf-root * {
                box-sizing: border-box !important;
                margin: 0;
                padding: 0;
            }

            .mf-root a {
                color: #cbd5e1 !important;
                text-decoration: none !important;
                transition: all 0.25s ease !important;
                display: inline-block;
            }

            .mf-root a:hover {
                color: #2d91cf !important;
            }

            .mf-container {
                max-width: 1220px !important;
                margin-left: auto !important;
                margin-right: auto !important;
                padding-left: 20px !important;
                padding-right: 20px !important;
                width: 100% !important;
            }

            /* Section 1: Trust Highlights Grid */
            .mf-trust-grid {
                display: grid !important;
                grid-template-columns: repeat(4, 1fr) !important;
                gap: 16px !important;
                margin-bottom: 28px !important;
            }

            .mf-trust-card {
                background: rgba(255, 255, 255, 0.04) !important;
                border: 1px solid rgba(255, 255, 255, 0.08) !important;
                border-radius: 14px !important;
                padding: 16px !important;
                display: flex !important;
                align-items: center !important;
                gap: 14px !important;
                transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease !important;
            }

            .mf-trust-card:hover {
                transform: translateY(-3px) !important;
                background: rgba(255, 255, 255, 0.08) !important;
                border-color: rgba(45, 145, 207, 0.4) !important;
            }

            .mf-trust-icon {
                width: 44px !important;
                height: 44px !important;
                border-radius: 12px !important;
                background: rgba(45, 145, 207, 0.15) !important;
                color: #2d91cf !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 20px !important;
                flex-shrink: 0 !important;
                border: 1px solid rgba(45, 145, 207, 0.3) !important;
            }

            .mf-trust-title {
                color: #ffffff !important;
                font-size: 15px !important;
                font-weight: 700 !important;
                margin-bottom: 3px !important;
            }

            .mf-trust-desc {
                color: #94a3b8 !important;
                font-size: 12px !important;
                line-height: 1.4 !important;
            }

            /* Section 2: CTA Banner */
            .mf-cta-banner {
                background: linear-gradient(135deg, #1b4965 0%, #2d91cf 50%, #153052 100%) !important;
                border-radius: 16px !important;
                padding: 22px 28px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                gap: 20px !important;
                margin-bottom: 45px !important;
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4) !important;
                border: 1px solid rgba(255, 255, 255, 0.15) !important;
            }

            .mf-cta-content h3 {
                color: #ffffff !important;
                font-size: 22px !important;
                font-weight: 800 !important;
                margin-bottom: 6px !important;
            }

            .mf-cta-content p {
                color: rgba(255, 255, 255, 0.9) !important;
                font-size: 14px !important;
            }

            .mf-cta-buttons {
                display: flex !important;
                align-items: center !important;
                gap: 12px !important;
                flex-shrink: 0 !important;
            }

            .mf-btn-phone {
                background: #ffffff !important;
                color: #153052 !important;
                font-weight: 700 !important;
                padding: 12px 22px !important;
                border-radius: 12px !important;
                font-size: 14px !important;
                display: inline-flex !important;
                align-items: center !important;
                gap: 8px !important;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
            }

            .mf-btn-phone:hover {
                background: #f1f5f9 !important;
                color: #0e1e32 !important;
                transform: scale(1.03) !important;
            }

            .mf-btn-wa {
                background: #25D366 !important;
                color: #ffffff !important;
                font-weight: 700 !important;
                padding: 12px 22px !important;
                border-radius: 12px !important;
                font-size: 14px !important;
                display: inline-flex !important;
                align-items: center !important;
                gap: 8px !important;
                box-shadow: 0 4px 12px rgba(37,211,102,0.3) !important;
            }

            .mf-btn-wa:hover {
                background: #1ebc59 !important;
                color: #ffffff !important;
                transform: scale(1.03) !important;
            }

            /* Section 3: Main 4 Columns Grid */
            .mf-main-grid {
                display: grid !important;
                grid-template-columns: 1.4fr 1.1fr 1.2fr 1.1fr !important;
                gap: 32px !important;
                padding-bottom: 35px !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
            }

            .mf-col-title {
                color: #ffffff !important;
                font-size: 17px !important;
                font-weight: 700 !important;
                margin-bottom: 18px !important;
                display: flex !important;
                align-items: center !important;
                gap: 10px !important;
                position: relative !important;
                padding-bottom: 8px !important;
                border-bottom: 2px solid #2d91cf !important;
                width: max-content !important;
            }

            .mf-col-title i {
                color: #2d91cf !important;
                font-size: 16px !important;
            }

            /* Col 1: Brand Info */
            .mf-brand-header {
                display: flex !important;
                align-items: center !important;
                gap: 14px !important;
                margin-bottom: 14px !important;
            }

            .mf-brand-logo {
                width: 58px !important;
                height: 58px !important;
                background: #ffffff !important;
                border-radius: 14px !important;
                padding: 6px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                border: 2px solid #2d91cf !important;
                flex-shrink: 0 !important;
            }

            .mf-brand-logo img {
                max-width: 100% !important;
                max-height: 100% !important;
                object-contain: contain !important;
            }

            .mf-brand-title {
                color: #ffffff !important;
                font-size: 18px !important;
                font-weight: 800 !important;
                line-height: 1.2 !important;
            }

            .mf-brand-slogan {
                color: #2d91cf !important;
                font-size: 12px !important;
                font-weight: 600 !important;
                margin-top: 3px !important;
            }

            .mf-brand-desc {
                color: #cbd5e1 !important;
                font-size: 13px !important;
                line-height: 1.7 !important;
                margin-bottom: 16px !important;
                text-align: justify !important;
            }

            .mf-badges-box {
                background: rgba(255, 255, 255, 0.03) !important;
                border: 1px solid rgba(255, 255, 255, 0.08) !important;
                border-radius: 12px !important;
                padding: 12px 14px !important;
                margin-bottom: 18px !important;
            }

            .mf-badge-item {
                font-size: 12px !important;
                color: #cbd5e1 !important;
                display: flex !important;
                align-items: center !important;
                gap: 8px !important;
                margin-bottom: 6px !important;
            }

            .mf-badge-item:last-child {
                margin-bottom: 0 !important;
            }

            .mf-badge-item i {
                color: #2d91cf !important;
            }

            .mf-social-list {
                display: flex !important;
                align-items: center !important;
                gap: 8px !important;
            }

            .mf-social-btn {
                width: 36px !important;
                height: 36px !important;
                border-radius: 10px !important;
                background: rgba(255, 255, 255, 0.08) !important;
                color: #ffffff !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 14px !important;
                transition: transform 0.25s ease, background 0.25s ease !important;
            }

            .mf-social-btn:hover {
                transform: translateY(-3px) scale(1.08) !important;
                color: #ffffff !important;
            }

            /* Col 2: Services List */
            .mf-services-list {
                list-style: none !important;
            }

            .mf-service-link {
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                padding: 7px 0 !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.04) !important;
                font-size: 13.5px !important;
            }

            .mf-service-link:hover {
                padding-right: 6px !important;
            }

            .mf-service-left {
                display: flex !important;
                align-items: center !important;
                gap: 8px !important;
            }

            .mf-service-badge {
                font-size: 11px !important;
                background: rgba(255, 255, 255, 0.06) !important;
                border: 1px solid rgba(255, 255, 255, 0.08) !important;
                padding: 2px 7px !important;
                border-radius: 6px !important;
                color: #94a3b8 !important;
            }

            /* Col 3: Areas & Neighborhoods */
            .mf-area-group {
                margin-bottom: 12px !important;
            }

            .mf-area-header {
                font-size: 13px !important;
                font-weight: 700 !important;
                color: #2d91cf !important;
                margin-bottom: 5px !important;
                display: flex !important;
                align-items: center !important;
                gap: 6px !important;
            }

            .mf-area-links {
                font-size: 12.5px !important;
                line-height: 1.8 !important;
                color: #94a3b8 !important;
            }

            .mf-area-links a {
                color: #cbd5e1 !important;
                padding: 0 3px !important;
            }

            .mf-area-links a:hover {
                text-decoration: underline !important;
            }

            /* Col 4: Contact & Map */
            .mf-contact-info {
                margin-bottom: 14px !important;
            }

            .mf-contact-row {
                display: flex !important;
                align-items: flex-start !important;
                gap: 10px !important;
                margin-bottom: 10px !important;
                font-size: 13px !important;
            }

            .mf-contact-row i {
                color: #2d91cf !important;
                margin-top: 3px !important;
                width: 16px !important;
                text-align: center !important;
            }

            .mf-contact-label {
                color: #94a3b8 !important;
                font-size: 11px !important;
                margin-bottom: 2px !important;
            }

            .mf-contact-val {
                color: #ffffff !important;
                font-weight: 700 !important;
            }

            .mf-map-wrapper {
                border-radius: 12px !important;
                overflow: hidden !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
                height: 110px !important;
                background: #000000 !important;
                margin-bottom: 6px !important;
            }

            .mf-map-wrapper iframe {
                width: 100% !important;
                height: 100% !important;
                border: 0 !important;
            }

            .mf-directions-link {
                font-size: 11.5px !important;
                color: #2d91cf !important;
                display: inline-flex !important;
                align-items: center !important;
                gap: 5px !important;
            }

            /* Section 4: Secondary Grid (Quick Links & Blog Posts) */
            .mf-secondary-grid {
                display: grid !important;
                grid-template-columns: 1fr 1.3fr !important;
                gap: 32px !important;
                padding: 24px 0 !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
            }

            .mf-quick-grid {
                display: grid !important;
                grid-template-columns: 1fr 1fr !important;
                gap: 8px 16px !important;
            }

            .mf-quick-grid a {
                font-size: 13px !important;
                padding: 4px 0 !important;
            }

            .mf-quick-grid a i {
                font-size: 10px !important;
                color: #2d91cf !important;
                margin-left: 6px !important;
            }

            .mf-blog-list {
                list-style: none !important;
            }

            .mf-blog-item {
                margin-bottom: 10px !important;
                padding-bottom: 8px !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.04) !important;
            }

            .mf-blog-item:last-child {
                margin-bottom: 0 !important;
                border-bottom: none !important;
            }

            .mf-blog-link {
                font-size: 13px !important;
                line-height: 1.5 !important;
                display: flex !important;
                align-items: flex-start !important;
                gap: 8px !important;
            }

            .mf-blog-link i {
                color: #2d91cf !important;
                margin-top: 3px !important;
                font-size: 12px !important;
            }

            /* Section 5: SEO Keywords Cloud */
            .mf-seo-box {
                padding: 20px 0 !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
            }

            .mf-seo-title {
                font-size: 12.5px !important;
                font-weight: 700 !important;
                color: #94a3b8 !important;
                margin-bottom: 10px !important;
                display: flex !important;
                align-items: center !important;
                gap: 6px !important;
            }

            .mf-seo-tags {
                display: flex !important;
                flex-wrap: wrap !important;
                gap: 7px !important;
            }

            .mf-seo-tag {
                background: rgba(255, 255, 255, 0.04) !important;
                border: 1px solid rgba(255, 255, 255, 0.08) !important;
                color: #cbd5e1 !important;
                font-size: 12px !important;
                padding: 4px 10px !important;
                border-radius: 8px !important;
                transition: all 0.2s ease !important;
            }

            .mf-seo-tag:hover {
                background: rgba(45, 145, 207, 0.15) !important;
                border-color: rgba(45, 145, 207, 0.4) !important;
                color: #ffffff !important;
            }

            /* Section 6: Bottom Bar */
            .mf-bottom-bar {
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                flex-wrap: wrap !important;
                gap: 16px !important;
                padding-top: 24px !important;
            }

            .mf-copy-text {
                font-size: 13px !important;
                color: #94a3b8 !important;
            }

            .mf-copy-text strong {
                color: #ffffff !important;
            }

            .mf-copy-sub {
                font-size: 11.5px !important;
                color: #64748b !important;
                margin-top: 4px !important;
            }

            .mf-payments-list {
                display: flex !important;
                align-items: center !important;
                gap: 6px !important;
                flex-wrap: wrap !important;
            }

            .mf-payment-badge {
                font-size: 11.5px !important;
                background: rgba(255, 255, 255, 0.05) !important;
                border: 1px solid rgba(255, 255, 255, 0.08) !important;
                padding: 4px 8px !important;
                border-radius: 6px !important;
                color: #cbd5e1 !important;
                display: inline-flex !important;
                align-items: center !important;
                gap: 5px !important;
            }

            .mf-scroll-top {
                width: 40px !important;
                height: 40px !important;
                border-radius: 12px !important;
                background: rgba(255, 255, 255, 0.08) !important;
                color: #ffffff !important;
                border: 1px solid rgba(255, 255, 255, 0.12) !important;
                cursor: pointer !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                transition: all 0.25s ease !important;
            }

            .mf-scroll-top:hover {
                background: #2d91cf !important;
                border-color: #2d91cf !important;
                transform: translateY(-3px) !important;
                box-shadow: 0 4px 14px rgba(45, 145, 207, 0.4) !important;
            }

            /* Responsive Adjustments */
            @media (max-width: 1024px) {
                .mf-trust-grid {
                    grid-template-columns: repeat(2, 1fr) !important;
                }

                .mf-main-grid {
                    grid-template-columns: repeat(2, 1fr) !important;
                    gap: 28px !important;
                }

                .mf-secondary-grid {
                    grid-template-columns: 1fr !important;
                }
            }

            @media (max-width: 768px) {
                .mf-root {
                    padding-bottom: 95px !important; /* مساحة أمان للشريط السفلي للجوال */
                }

                .mf-trust-grid {
                    grid-template-columns: 1fr !important;
                }

                .mf-cta-banner {
                    flex-direction: column !important;
                    text-align: center !important;
                    padding: 20px !important;
                }

                .mf-cta-buttons {
                    width: 100% !important;
                    flex-direction: column !important;
                }

                .mf-cta-buttons a {
                    width: 100% !important;
                    justify-content: center !important;
                }

                .mf-main-grid {
                    grid-template-columns: 1fr !important;
                    gap: 24px !important;
                }

                .mf-bottom-bar {
                    flex-direction: column !important;
                    text-align: center !important;
                    justify-content: center !important;
                }

                .mf-payments-list {
                    justify-content: center !important;
                }
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
            if (src.includes('footer.js')) {
                const match = src.match(/^(.*?)asstes\/js\/footer\.js/);
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

    function resolveUrl(basePath, slug) {
        if (!slug || slug === '') return basePath === '' ? './' : basePath;
        if (slug.startsWith('http://') || slug.startsWith('https://') || slug.startsWith('tel:') || slug.startsWith('mailto:')) {
            return slug;
        }
        if (slug.startsWith('#')) {
            return `${basePath}${slug}`;
        }
        return `${basePath}${slug}`;
    }

    // =========================================================================
    // 4. بناء هيكل الـ HTML فائق الدقة والتناسق (Pixel-Perfect Clean HTML)
    // =========================================================================
    function buildFooterHTML(basePath) {
        const c = FOOTER_CONFIG;
        const currentYear = new Date().getFullYear();
        const logoUrl = resolveUrl(basePath, c.company.logoPath);
        const waEncodedText = encodeURIComponent(c.contact.whatsappMessage);
        const waFullLink = `https://wa.me/${c.contact.whatsapp}?text=${waEncodedText}`;
        const telLink = `tel:${c.contact.phone}`;

        // 1. بطاقات الثقة
        let trustHtml = '';
        c.trustHighlights.forEach(card => {
            trustHtml += `
                <div class="mf-trust-card">
                    <div class="mf-trust-icon"><i class="${card.icon}"></i></div>
                    <div>
                        <div class="mf-trust-title">${card.title}</div>
                        <div class="mf-trust-desc">${card.desc}</div>
                    </div>
                </div>
            `;
        });

        // 2. قائمة الخدمات
        let servicesHtml = '';
        const footerServices = (typeof window.SITE_SERVICES !== 'undefined' && Array.isArray(window.SITE_SERVICES) && window.SITE_SERVICES.length > 0)
            ? window.SITE_SERVICES
            : c.services;

        footerServices.forEach(item => {
            const url = resolveUrl(basePath, item.slug);
            const icon = item.icon || 'fas fa-truck';
            const badge = item.badge || 'خدمة مميزة';
            servicesHtml += `
                <li>
                    <a href="${url}" class="mf-service-link">
                        <span class="mf-service-left">
                            <i class="${icon}" style="color:#2d91cf; width:16px; text-align:center;"></i>
                            <span>${item.title}</span>
                        </span>
                        <span class="mf-service-badge">${badge}</span>
                    </a>
                </li>
            `;
        });

        // 3. الأحياء
        let northAreas = c.riyadhRegions.north.areas.map(a => `<a href="${resolveUrl(basePath, a.slug)}">${a.name}</a>`).join(' • ');
        let eastAreas = c.riyadhRegions.east.areas.map(a => `<a href="${resolveUrl(basePath, a.slug)}">${a.name}</a>`).join(' • ');
        let westAreas = c.riyadhRegions.westCentral.areas.map(a => `<a href="${resolveUrl(basePath, a.slug)}">${a.name}</a>`).join(' • ');

        // 4. السوشيال
        let socialHtml = '';
        c.socialLinks.forEach(s => {
            socialHtml += `
                <a href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.platform}" class="mf-social-btn" style="background:${s.bg};">
                    <i class="${s.icon}"></i>
                </a>
            `;
        });

        // 5. روابط سريعة
        let quickHtml = '';
        c.quickLinks.forEach(l => {
            quickHtml += `<a href="${resolveUrl(basePath, l.slug)}"><i class="fas fa-chevron-left"></i> ${l.title}</a>`;
        });

        // 6. مقالات المدونة
        let blogHtml = '';
        c.blogArticles.forEach(b => {
            blogHtml += `
                <li class="mf-blog-item">
                    <a href="${resolveUrl(basePath, b.slug)}" class="mf-blog-link">
                        <i class="${b.icon}"></i>
                        <span>${b.title}</span>
                    </a>
                </li>
            `;
        });

        // 7. كلمات السيو
        let seoHtml = '';
        c.seoKeywords.forEach(k => {
            seoHtml += `<a href="${resolveUrl(basePath, k.slug)}" class="mf-seo-tag">${k.text}</a>`;
        });

        // 8. طرق الدفع
        let paymentHtml = '';
        c.paymentMethods.forEach(p => {
            paymentHtml += `
                <span class="mf-payment-badge">
                    <i class="${p.icon}" style="color:#2d91cf;"></i>
                    <span>${p.name}</span>
                </span>
            `;
        });

        return `
            <footer id="master-footer" class="mf-root" itemscope itemtype="https://schema.org/WPFooter">
                <div class="mf-container">

                    <!-- شريط مميزات الثقة والضمان (Pre-Footer Trust Bar) -->
                    <div class="mf-trust-grid">
                        ${trustHtml}
                    </div>

                    <!-- شريط الحجز وعرض السعر الفوري (Callout Action Banner) -->
                    <div class="mf-cta-banner">
                        <div class="mf-cta-content">
                            <h3>جاهز لنقل عفشك بدون قلق وبأفضل سعر في الرياض؟</h3>
                            <p>تواصل مع فريق مسار الآن للحصول على معاينة مجانية وخصم حصري يصل إلى 25% اليوم.</p>
                        </div>
                        <div class="mf-cta-buttons">
                            <a href="${telLink}" class="mf-btn-phone">
                                <i class="fas fa-phone-alt"></i>
                                <span>اتصل: ${c.contact.phoneDisplay}</span>
                            </a>
                            <a href="${waFullLink}" target="_blank" rel="noopener noreferrer" class="mf-btn-wa">
                                <i class="fab fa-whatsapp" style="font-size:18px;"></i>
                                <span>واتساب مباشر 24/7</span>
                            </a>
                        </div>
                    </div>

                    <!-- شبكة الأعمدة الأربعة الرئيسية المتوازنة (Main 4 Columns) -->
                    <div class="mf-main-grid">

                        <!-- العمود 1: هوية الشركة وسلطتها الرسمية -->
                        <div>
                            <div class="mf-brand-header">
                                <a href="${resolveUrl(basePath, '')}" class="mf-brand-logo">
                                    <img width="50" height="50" src="${logoUrl}" alt="${c.company.logoAlt}">
                                </a>
                                <div>
                                    <div class="mf-brand-title">${c.company.name}</div>
                                    <div class="mf-brand-slogan">${c.company.slogan}</div>
                                </div>
                            </div>

                            <p class="mf-brand-desc">${c.company.description}</p>

                            <div class="mf-badges-box">
                                <div class="mf-badge-item">
                                    <i class="fas fa-check-circle" style="color:#22c55e;"></i>
                                    <span><strong>السجل التجاري:</strong> ${c.company.crNumber} (وزارة التجارة)</span>
                                </div>
                                <div class="mf-badge-item">
                                    <i class="fas fa-shield-alt" style="color:#2d91cf;"></i>
                                    <span><strong>التراخيص:</strong> ${c.company.license}</span>
                                </div>
                                <div class="mf-badge-item">
                                    <i class="fas fa-certificate" style="color:#eab308;"></i>
                                    <span>${c.company.maroofBadge} • رقم ضريبي: ${c.company.taxNumber}</span>
                                </div>
                            </div>

                            <div>
                                <div style="font-size:11.5px; color:#94a3b8; font-weight:700; margin-bottom:8px;">تابعنا وتواصل معنا:</div>
                                <div class="mf-social-list">
                                    ${socialHtml}
                                </div>
                            </div>
                        </div>

                        <!-- العمود 2: خدمات نقل العفش المتخصصة -->
                        <div>
                            <div class="mf-col-title">
                                <i class="fas fa-cubes"></i>
                                <span>خدمات نقل العفش</span>
                            </div>
                            <ul class="mf-services-list">
                                ${servicesHtml}
                            </ul>
                            <div style="margin-top:14px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.06);">
                                <a href="${resolveUrl(basePath, 'services.html')}" style="font-size:12.5px; font-weight:700; color:#2d91cf;">
                                    استعراض كافة خدمات النقل وتفاصيل الأسعار &larr;
                                </a>
                            </div>
                        </div>

                        <!-- العمود 3: تغطية أحياء الرياض (Local SEO) -->
                        <div>
                            <div class="mf-col-title">
                                <i class="fas fa-map-marked-alt"></i>
                                <span>تغطية أحياء الرياض</span>
                            </div>

                            <div class="mf-area-group">
                                <div class="mf-area-header"><i class="fas fa-compass"></i> ${c.riyadhRegions.north.label}:</div>
                                <div class="mf-area-links">${northAreas}</div>
                            </div>

                            <div class="mf-area-group">
                                <div class="mf-area-header"><i class="fas fa-compass"></i> ${c.riyadhRegions.east.label}:</div>
                                <div class="mf-area-links">${eastAreas}</div>
                            </div>

                            <div class="mf-area-group">
                                <div class="mf-area-header"><i class="fas fa-compass"></i> ${c.riyadhRegions.westCentral.label}:</div>
                                <div class="mf-area-links">${westAreas}</div>
                            </div>

                            <div style="margin-top:14px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.06);">
                                <a href="${resolveUrl(basePath, 'areas/')}" style="font-size:12.5px; font-weight:700; color:#2d91cf;">
                                    دليل تغطية أكثر من 50 حي في الرياض &larr;
                                </a>
                            </div>
                        </div>

                        <!-- العمود 4: بيانات الاتصال والموقع والخريطة -->
                        <div>
                            <div class="mf-col-title">
                                <i class="fas fa-headset"></i>
                                <span>اتصل بنا والموقع</span>
                            </div>

                            <div class="mf-contact-info">
                                <div class="mf-contact-row">
                                    <i class="fas fa-phone-alt"></i>
                                    <div>
                                        <div class="mf-contact-label">الهاتف المباشر:</div>
                                        <a href="${telLink}" class="mf-contact-val" dir="ltr">${c.contact.phoneDisplay}</a>
                                    </div>
                                </div>

                                <div class="mf-contact-row">
                                    <i class="fab fa-whatsapp" style="color:#25D366;"></i>
                                    <div>
                                        <div class="mf-contact-label">واتساب خدمة العملاء:</div>
                                        <a href="${waFullLink}" target="_blank" rel="noopener noreferrer" class="mf-contact-val" style="color:#25D366;">محادثة فورية 24/7</a>
                                    </div>
                                </div>

                                <div class="mf-contact-row">
                                    <i class="fas fa-clock"></i>
                                    <div>
                                        <div class="mf-contact-label">أوقات العمل:</div>
                                        <div style="font-size:12px; color:#ffffff;">${c.contact.workingHours}</div>
                                    </div>
                                </div>

                                <div class="mf-contact-row">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div>
                                        <div class="mf-contact-label">المقر الرئيسي:</div>
                                        <div style="font-size:12px; color:#cbd5e1;">${c.contact.address}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="mf-map-wrapper">
                                <iframe
                                    title="موقع شركة مسار لنقل العفش على خرائط جوجل"
                                    src="${c.contact.mapEmbedUrl}"
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                            <div style="text-align:center;">
                                <a href="${c.contact.mapDirectionsUrl}" target="_blank" rel="noopener noreferrer" class="mf-directions-link">
                                    <i class="fas fa-directions"></i>
                                    <span>الاتجاهات على خرائط Google</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    <!-- القسم الإضافي: روابط سريعة + مقالات المدونة -->
                    <div class="mf-secondary-grid">
                        <div>
                            <div style="font-size:14.5px; font-weight:700; color:#ffffff; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
                                <i class="fas fa-link" style="color:#2d91cf;"></i>
                                <span>روابط سريعة وهامة</span>
                            </div>
                            <div class="mf-quick-grid">
                                ${quickHtml}
                            </div>
                        </div>

                        <div>
                            <div style="font-size:14.5px; font-weight:700; color:#ffffff; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
                                <i class="fas fa-book-open" style="color:#2d91cf;"></i>
                                <span>أحدث نصائح وإرشادات نقل الأثاث من المدونة</span>
                            </div>
                            <ul class="mf-blog-list">
                                ${blogHtml}
                            </ul>
                        </div>
                    </div>

                    <!-- سحابة الكلمات المفتاحية لتعزيز السيو (SEO Keywords Cloud) -->
                    <div class="mf-seo-box">
                        <div class="mf-seo-title">
                            <i class="fas fa-search" style="color:#2d91cf;"></i>
                            <span>أهم كلمات البحث والخدمات المطلوبة لنقل العفش بالرياض:</span>
                        </div>
                        <div class="mf-seo-tags">
                            ${seoHtml}
                        </div>
                    </div>

                    <!-- شريط الحقوق وطرق الدفع والزر العلوي (Bottom Bar) -->
                    <div class="mf-bottom-bar">
                        <div>
                            <div class="mf-copy-text">
                                &copy; <span id="mf-year">${currentYear}</span> <strong>${c.company.name}</strong>. جميع الحقوق محفوظة.
                                <span style="margin:0 8px; color:rgba(255,255,255,0.2);">|</span>
                                <a href="${resolveUrl(basePath, 'privacy-policy.html')}" style="color:#94a3b8; text-decoration:underline !important;">سياسة الخصوصية</a>
                                <span style="margin:0 8px; color:rgba(255,255,255,0.2);">|</span>
                                <a href="${resolveUrl(basePath, 'sitemap.xml')}" style="color:#94a3b8; text-decoration:underline !important;">خريطة الموقع XML</a>
                            </div>
                            <div class="mf-copy-sub">
                                صُمم ونُفّذ وفق أعلى معايير الجودة والأمان الرقمي في المملكة العربية السعودية.
                            </div>
                        </div>

                        <div class="mf-payments-list">
                            ${paymentHtml}
                        </div>

                        <div>
                            <button type="button" id="mf-scroll-top-btn" class="mf-scroll-top" aria-label="الصعود لأعلى الصفحة">
                                <i class="fas fa-arrow-up"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </footer>
        `;
    }

    // =========================================================================
    // 5. تفعيل الفوتر وربط الأحداث (Injection & Activation)
    // =========================================================================
    function initSiteFooter() {
        // حقن الـ CSS المنفصل أولاً
        injectFooterStyles();

        const basePath = getBasePath();
        const footerHtml = buildFooterHTML(basePath);

        let footerTarget = document.getElementById('site-footer') ||
                           document.getElementById('master-footer') ||
                           document.querySelector('footer.mf-root') ||
                           document.querySelector('footer');

        if (footerTarget) {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = footerHtml;
            const newFooter = wrapper.firstElementChild;
            footerTarget.parentNode.replaceChild(newFooter, footerTarget);
        } else {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = footerHtml;
            const newFooter = wrapper.firstElementChild;

            const mobileCta = document.querySelector('.mobile-cta');
            if (mobileCta && mobileCta.parentNode) {
                mobileCta.parentNode.insertBefore(newFooter, mobileCta);
            } else {
                document.body.appendChild(newFooter);
            }
        }

        // تفعيل زر الصعود لأعلى الصفحة
        const scrollBtn = document.getElementById('mf-scroll-top-btn');
        if (scrollBtn) {
            scrollBtn.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // تحديث التاريخ
        const yearEl = document.getElementById('mf-year');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }
    }

    // التنفيذ التلقائي فور جاهزية الـ DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSiteFooter);
    } else {
        initSiteFooter();
    }

    window.renderSiteFooter = initSiteFooter;
    window.FOOTER_CONFIG = FOOTER_CONFIG;

})();
