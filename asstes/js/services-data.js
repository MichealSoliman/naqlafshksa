/**
 * ====================================================================================================
 * قائمة خدمات شركة مسار المركزية (Master Services Data)
 * ====================================================================================================
 * هذا الملف هو المصدر الوحيد لجميع خدمات نقل العفش بالموقع بالكامل.
 * لإضافة أي خدمة جديدة أو تعديل أي رابط أو أيقونة أو وصف، قم بالتعديل في هذه القائمة فقط:
 * وسيقوم النافبار والفوتر وقوائم الخدمات في جميع الصفحات بتحديث نفسها تلقائياً وبشكل فوري!
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
        desc: "شاحنات دينا مغلقة ومبطنة مجهزة بحمولات متعددة",
        slug: "dina-furniture-moving-riyadh/",
        icon: "fas fa-truck",
        badge: "شاحنات مقفلة"
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
        desc: "تغليف خماسي وبلاستيك فقاعي لحماية ضد الخدش والكسر",
        slug: "furniture-packaging-wrapping-riyadh/",
        icon: "fas fa-box-open",
        badge: "حماية تامة"
    },
    {
        title: "تخزين العفش بالرياض",
        desc: "مستودعات آمنة مكيفة ومعزولة ضد الرطوبة والحشرات",
        slug: "furniture-storage-riyadh/",
        icon: "fas fa-warehouse",
        badge: "مستودعات مؤمنة"
    },
    {
        title: "نقل عفش خارج الرياض",
        desc: "شحن ونقل بين المدن (جدة، الدمام، القصيم، مكة) مع الضمان",
        slug: "furniture-moving-outside-riyadh/",
        icon: "fas fa-route",
        badge: "بين المدن"
    },
    {
        title: "نقل مكاتب وشركات بالرياض",
        desc: "نقل احترافي وسريع لمقرات العمل والمؤسسات والشركات",
        slug: "office-commercial-moving-riyadh/",
        icon: "fas fa-building",
        badge: "للشركات"
    }
];

// إتاحة القائمة في النافذة العامة لتعمل مع المتصفحات وبيئات الـ Node
if (typeof window !== 'undefined') {
    window.SITE_SERVICES = SITE_SERVICES;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_SERVICES;
}
