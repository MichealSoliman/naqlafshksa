/**
 * قائمة خدمات الشركة المركزية لجميع النفيجبارات والصفحات
 * لإضافة أو تعديل أي خدمة في النافبار بالموقع كاملاً، عدل هذه القائمة فقط:
 */
const SITE_SERVICES = [
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
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_SERVICES;
}
