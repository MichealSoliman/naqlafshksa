/**
 * ====================================================================================================
 * قائمة خدمات شركة مسار المركزية (Master Services Data)
 * ====================================================================================================
 * هذا الملف هو المصدر المرجعي لجميع خدمات نقل العفش بالموقع.
 */

const SITE_SERVICES = [
    {
        title: "فك وتركيب عفش بالرياض",
        desc: "فنيون ونجارون متخصصون لجميع أنواع الأثاث والمطابخ والمكيفات",
        slug: "furniture-disassembly-and-reassembly-in-riyadh/",
        icon: "fas fa-wrench",
        badge: "فنيون ماهرون"
    },
    {
        title: "دينا نقل عفش بالرياض",
        desc: "سيارات دينا مغلقة ومجهزة بحمولات متعددة لنقل الأثاث",
        slug: "dina-furniture-moving-riyadh/",
        icon: "fas fa-truck",
        badge: "سيارات مغلقة"
    },
    {
        title: "ونيت نقل عفش بالرياض",
        desc: "نقل سريع للأحمال الخفيفة والأغراض الفردية والكراتين",
        slug: "wanet-furniture-moving-riyadh/",
        icon: "fas fa-truck-pickup",
        badge: "مشاوير سريعة"
    },
    {
        title: "تغليف العفش بالرياض",
        desc: "تغليف وبلاستيك فقاعي لحماية الأثاث ضد الخدش والكسر",
        slug: "furniture-packaging-wrapping-riyadh/",
        icon: "fas fa-box-open",
        badge: "حماية متكاملة"
    },
    {
        title: "تخزين العفش بالرياض",
        desc: "مستودعات تخزين أثاث مجهزة حسب المساحة المطلوبة",
        slug: "furniture-storage-riyadh/",
        icon: "fas fa-warehouse",
        badge: "تخزين مرن"
    },
    {
        title: "نقل عفش شقق بالرياض",
        desc: "نقل أثاث الشقق السكنية مع خدمات الفك والتغليف والتحميل",
        slug: "apartment-furniture-moving-riyadh/",
        icon: "fas fa-door-open",
        badge: "شقق سكنية"
    },
    {
        title: "نقل أثاث فلل بالرياض",
        desc: "نقل محتويات الفلل والمنازل الكبيرة عبر خطط منظمة وتجهيز متعدد",
        slug: "villa-furniture-moving-riyadh/",
        icon: "fas fa-home",
        badge: "فلل ومنازل"
    },
    {
        title: "نقل عفش خارج الرياض",
        desc: "شحن ونقل بين المدن مع الترتيب المسبق ومتابعة المنقولات",
        slug: "furniture-moving-outside-riyadh/",
        icon: "fas fa-route",
        badge: "بين المدن"
    },
    {
        title: "نقل مكاتب وشركات بالرياض",
        desc: "نقل سريع ومنظم لمقرات العمل والمؤسسات والشركات",
        slug: "office-commercial-moving-riyadh/",
        icon: "fas fa-building",
        badge: "للشركات"
    },
    {
        title: "ونش رفع أثاث بالرياض",
        desc: "أوناش لرفع وتنزيل الأثاث للأدوار المرتفعة والمداخل الضيقة",
        slug: "crane-winch-furniture-lifting-riyadh/",
        icon: "fas fa-arrow-up",
        badge: "أوناش رفع"
    },
    {
        title: "أسعار نقل العفش بالرياض",
        desc: "دليل شامل لتكلفة نقل الأثاث والعوامل المؤثرة وحساب الأسعار",
        slug: "furniture-moving-prices-riyadh/",
        icon: "fas fa-calculator",
        badge: "دليل الأسعار"
    }
];

// إتاحة القائمة في النافذة العامة لتعمل مع المتصفحات وبيئات الـ Node
if (typeof window !== 'undefined') {
    window.SITE_SERVICES = SITE_SERVICES;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_SERVICES;
}
