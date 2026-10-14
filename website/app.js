/* TGE design prototype — bilingual + view / panel navigation */
(function () {
  "use strict";

  var I18N = {
    ar: {
      brand: "منصة TGE",
      "nav.home": "الرئيسية",
      "nav.sitemap": "خريطة الصفحات",
      "nav.verify": "تحقق الشهادة",
      "nav.offset": "المعوِّض",
      "nav.land": "صاحب الأرض",
      "nav.nursery": "المشتل",
      "nav.admin": "الإدارة",
      "nav.auditor": "المدقق",
      "nav.login": "دخول",
      "hero.eyebrow": "وثيقة متطلبات الأعمال · تصميم واجهات",
      "hero.title": "تشجير موثّق. كربون قابل للتحقق.",
      "hero.sub": "المنصة لا تبيع أرضًا ولا توكنات. تشجّر أرضًا معتمدة، تستلم توكنًا لكل شجرة مزروعة، ثم شهادة تشجير فشهادة كربون.",
      "hero.cta1": "ابدأ كمعوِّض",
      "hero.cta2": "استكشف الفرص",
      "promise.title": "ازرع أولًا. التوكن يأتي بعد التحقق.",
      "promise.sub": "حسب متطلبات الأعمال: لا سكّ قبل اعتماد الزراعة. الأرض تبقى لصاحبها، والمعوِّض يحصل على حق الكربون عبر توكنات الأشجار.",
      "promise.cta": "جرّب مسار المعوِّض",
      "promise.chip1": "ERC-1155 · شجرة",
      "promise.chip2": "شهادة كربون",
      "roles.title": "أدوار تشغيلية",
      "roles.sub": "كل المستخدمين يمرّون بتحقق OTP عبر الإيميل. الصلاحيات تختلف حسب الدور.",
      "roles.land.h": "صاحب الأرض",
      "roles.land.p": "يسجّل أرضًا قابلة للتشجير ويتابع حالتها. الأرض تبقى ملكه.",
      "roles.off.h": "المعوِّض",
      "roles.off.p": "يطلب تشجير أرض معتمدة، يستلم التوكنات والشهادات، ويتداول في السوق الثانوية.",
      "roles.nur.h": "المشتل",
      "roles.nur.p": "يعرض الأشجار المتاحة ويقبل طلبات التوريد ويحدّث حالة التسليم.",
      "roles.adm.h": "الأدمن (TGE)",
      "roles.adm.p": "يعتمد المستخدمين والأراضي والزراعة، ويصدر التوكنات ويدير المنصة.",
      "roles.aud.h": "المدقق",
      "roles.aud.p": "يراجع الأراضي المزروعة ويحدّث عدد الأشجار وأرصدة الكربون.",
      "flow.title": "دورة التشجير باختصار",
      "flow.sub": "لا يُصدر أي توكن أو شهادة قبل اعتماد الزراعة.",
      "flow.1": "تسجيل وتحقق OTP",
      "flow.2": "تسجيل واعتماد الأرض",
      "flow.3": "طلب تشجير",
      "flow.4": "توريد من المشتل",
      "flow.5": "زراعة + توكنات",
      "flow.6": "شهادات + سوق ثانوية",
      "note.h": "خارج النطاق",
      "note.p": "المنصة لا تبيع الأراضي أو أجزاء منها، ولا تبيع التوكنات للمعوِّضين مباشرة (لا سوق أولية). التداول بين المستخدمين فقط عبر السوق الثانوية.",
      "landing.sitemap": "تصفّح كل الصفحات",
      "landing.verify": "تحقق من شهادة QR",
      footer: "تصميم واجهات فقط · حسب وثيقة متطلبات الأعمال — منصة TGE",

      "auth.title": "تسجيل / دخول",
      "auth.sub": "تحقق OTP عبر الإيميل · بدون نفاذ/واثق في المرحلة الأولى",
      "auth.step1": "1 · الحساب",
      "auth.step2": "2 · OTP",
      "auth.step3": "3 · المحفظة",
      "auth.role.off": "معوِّض",
      "auth.role.land": "صاحب أرض",
      "auth.role.nur": "مشتل",
      "auth.role.adm": "أدمن",
      "auth.role.aud": "مدقق",
      "auth.email": "البريد الإلكتروني",
      "auth.type": "نوع الحساب",
      "auth.ind": "فرد",
      "auth.org": "جهة / شركة",
      "auth.cta": "إرسال رمز OTP",
      "auth.fine": "بعد OTP: فحوصات AML وربط المحفظة (MetaMask) قبل العمليات.",
      "auth.otp.title": "تحقق الرمز",
      "auth.otp.sub": "أدخل الرمز المرسل إلى demo@tge.sa",
      "auth.otp.code": "رمز OTP",
      "auth.otp.cta": "تأكيد والمتابعة",
      "auth.otp.back": "رجوع",

      "wallet.title": "ربط المحفظة والدفع",
      "wallet.sub": "MetaMask مطلوبة للعمليات على السلسلة. اختر طريقة الدفع للرسوم.",
      "wallet.mm": "MetaMask",
      "wallet.connect": "ربط المحفظة",
      "wallet.pay": "طريقة الدفع",
      "wallet.gateway": "بوابة دفع",
      "wallet.gateway.s": "بطاقة / تحويل",
      "wallet.onchain": "محفظة",
      "wallet.onchain.s": "دفع على السلسلة",
      "wallet.continue": "متابعة إلى اللوحة",
      "wallet.skip": "تخطّي الآن (تصميم)",

      "verify.title": "تحقق من الشهادة",
      "verify.sub": "امسح رمز QR أو أدخل رقم الشهادة للتحقق العام.",
      "verify.id": "رقم الشهادة",
      "verify.cta": "تحقق",
      "verify.type": "النوع",
      "verify.type.v": "شهادة تشجير",
      "verify.status": "الحالة",
      "verify.ok": "الشهادة صالحة ومرتبطة بتوكنات ERC-1155.",

      "sitemap.title": "خريطة الصفحات",
      "sitemap.sub": "كل شاشات التصميم حسب وثيقة متطلبات الأعمال — تنقّل سريع.",
      "sitemap.public": "عام / مشترك",
      "sitemap.landing": "الصفحة التعريفية",
      "sitemap.auth": "تسجيل + اختيار دور",
      "sitemap.wallet": "المحفظة والدفع",

      "off.user": "شركة النور",
      "off.role": "معوِّض · معتمد",
      "off.nav.dash": "لوحة المعلومات",
      "off.nav.lands": "فرص التشجير",
      "off.nav.req": "طلب تشجير",
      "off.nav.reqs": "طلباتي",
      "off.nav.detail": "تفاصيل الطلب",
      "off.nav.certs": "الشهادات",
      "off.nav.market": "السوق الثانوية",
      "off.nav.sell": "عرض للبيع",
      "off.nav.profile": "الملف والإشعارات",
      "off.dash.h": "لوحة المعوِّض",
      "off.dash.s": "أشجارك الموثّقة وأثر الكربون — بعد اعتماد الزراعة فقط.",
      "off.dash.cta": "طلب تشجير جديد",
      "off.s1": "أشجار موثّقة",
      "off.s2": "CO₂ / سنة",
      "off.s3": "طلبات نشطة",
      "off.s4": "شهادات",
      "off.track": "متابعة الطلبات",
      "off.open": "فتح",
      "off.back": "رجوع",
      "th.id": "الطلب",
      "th.land": "الأرض",
      "th.trees": "أشجار",
      "th.status": "الحالة",
      "th.cap": "الطاقة",
      "th.planted": "مزروع",
      "th.qty": "الكمية",
      "th.price": "السعر",
      "th.species": "النوع",
      "th.zones": "مناطق التوريد",
      "th.type": "النوع",
      "th.item": "البند",
      "land.asir": "مرتفعات عسير",
      "land.ahsa": "واحة الأحساء",
      "land.tabuk": "محمية تبوك",
      "land.new": "قطعة الباحة",
      "land.asir.m": "العرعر · متبقي 3,200 من 10,000",
      "land.ahsa.m": "النخيل · متبقي 8,400 من 20,000",
      "land.tabuk.m": "الطلح · متبقي 1,100 من 5,000",
      "st.supply": "قيد التوريد",
      "st.planted": "زراعة معتمدة",
      "st.approved": "معتمدة",
      "st.review": "قيد المراجعة",
      "st.new": "جديد",
      "off.lands.h": "فرص التشجير",
      "off.lands.s": "أراضٍ معتمدة مع الطاقة المتبقية — قائمة وخريطة.",
      "off.pick": "اختر للتشجير",
      "off.req.h": "طلب تشجير",
      "off.req.s": "اختر الأرض وعدد الأشجار ضمن الطاقة المتبقية. التوكنات تُسكّ بعد اعتماد الزراعة.",
      "off.req.form": "تفاصيل الطلب",
      "off.req.trees": "عدد الأشجار",
      "off.req.calc": "حاسبة التعويض (اختياري)",
      "off.req.hint": "≈ 2.0 كغ لكل شجرة / سنة (مثال توضيحي)",
      "off.req.submit": "إرسال الطلب",
      "off.req.impact": "الأثر التقديري",
      "off.req.treesLbl": "شجرة للزراعة",
      "off.req.co2Lbl": "تعويض تقديري / سنة",
      "off.reqs.h": "طلباتي",
      "off.reqs.s": "جميع طلبات التشجير وحالاتها.",
      "off.detail.h": "تفاصيل الطلب #1042",
      "off.detail.s": "مسار الحالة من الإنشاء حتى شهادة الكربون.",
      "off.detail.info": "ملخص",
      "off.detail.tl": "الخط الزمني",
      "tl.created": "إنشاء",
      "tl.assigned": "تعيين مشتل",
      "tl.supply": "توريد",
      "tl.planted": "مزروع",
      "tl.approved": "اعتماد",
      "tl.tokens": "توكنات",
      "tl.pcert": "شهادة تشجير",
      "tl.carbon": "شهادة كربون",
      "tl.now": "جاري",
      "off.certs.h": "الشهادات",
      "off.certs.s": "شهادة تشجير بعد الزراعة، ثم شهادة كربون بعد التحقق. ديناميكية من رصيد التوكنات.",
      "off.certs.plant": "شهادة التشجير",
      "off.certs.plant.p": "4,000 شجرة · مرتفعات عسير · معتمدة",
      "off.certs.carbon": "شهادة الكربون",
      "off.certs.carbon.p": "8,000 كغ CO₂ / سنة · آخر تدقيق: 2026",
      "off.certs.pdf": "تحميل PDF",
      "off.market.h": "السوق الثانوية",
      "off.market.s": "تداول بين مستخدمين متحقَّق منهم فقط. المنصة لا تبيع التوكنات.",
      "off.market.list": "عرض توكنات للبيع",
      "off.market.buy": "قبول",
      "off.sell.h": "عرض توكنات للبيع",
      "off.sell.s": "أدرج كمية وسعرًا من رصيدك على أرض محددة.",
      "off.sell.submit": "نشر العرض",
      "off.profile.h": "الملف والإشعارات",
      "off.profile.s": "بيانات الحساب وتنبيهات حالة الطلبات.",
      "off.profile.info": "الملف",
      "off.profile.name": "الاسم / الجهة",
      "off.profile.save": "حفظ",
      "off.profile.notif": "الإشعارات",
      "notif.1": "طلب #1042: تم تعيين المشتل",
      "notif.2": "شهادة الكربون جاهزة لـ #1038",
      "notif.3": "عرض سوق منتهي الصلاحية",

      "lo.user": "مزارع السراة",
      "lo.role": "صاحب أرض · معتمد",
      "lo.nav.lands": "أراضيّ",
      "lo.nav.new": "تسجيل أرض",
      "lo.nav.detail": "تفاصيل الأرض",
      "lo.nav.notif": "الإشعارات",
      "lo.h": "أراضيّ المسجّلة",
      "lo.s": "الأرض تبقى ملكك. التوكن (ERC-721) سجل رقمي فقط ولا ينقل الملكية.",
      "lo.cta": "تسجيل أرض جديدة",
      "lo.form": "تسجيل أرض",
      "lo.form.s": "إحداثيات، مساحة، طاقة استيعابية، ووثائق.",
      "lo.name": "اسم / وصف القطعة",
      "lo.coords": "الإحداثيات",
      "lo.area": "المساحة (م²)",
      "lo.capacity": "الطاقة الاستيعابية (أشجار)",
      "lo.docs": "وثائق الملكية / التفويض",
      "lo.submit": "إرسال للاعتماد",
      "lo.detail.s": "الطاقة المتبقية ونشاط التشجير على هذه القطعة.",
      "lo.remain": "متبقي",
      "lo.activity": "نشاط التشجير",
      "lo.notif.s": "تحديثات اعتماد الأراضي ونشاط الزراعة.",
      "lo.n1": "قطعة الباحة قيد المراجعة",
      "lo.n2": "طلب تشجير جديد على مرتفعات عسير",

      "nu.user": "مشتل الجنوب",
      "nu.role": "مشتل · معتمد",
      "nu.nav.stock": "المخزون",
      "nu.nav.species": "إضافة / تعديل نوع",
      "nu.nav.orders": "طلبات التوريد",
      "nu.nav.delivery": "حالة التسليم",
      "nu.nav.proof": "إثبات الزراعة",
      "nu.h": "لوحة المشتل",
      "nu.s": "عرض الأنواع والكميات ومناطق التوريد، وقبول طلبات التشجير.",
      "nu.s1": "أنواع متاحة",
      "nu.s2": "طلبات جديدة",
      "nu.s3": "قيد التجهيز",
      "nu.s4": "تم التسليم",
      "nu.stock": "قائمة الأشجار",
      "nu.orders": "طلبات التوريد",
      "nu.orders.s": "طلبات التشجير المعيّنة لمشتلكم.",
      "nu.accept": "قبول",
      "nu.update": "تحديث",
      "nu.add": "إضافة نوع",
      "nu.edit": "تعديل",
      "nu.species.h": "إضافة / تعديل نوع",
      "nu.species.s": "اسم النوع، الكمية، ومناطق التوريد.",
      "nu.species.save": "حفظ",
      "nu.delivery.h": "تحديث حالة التسليم",
      "nu.delivery.s": "مقبول · قيد التجهيز · تم التسليم",
      "nu.delivery.save": "حفظ الحالة",
      "nu.st.accept": "مقبول",
      "nu.proof.h": "رفع إثبات الزراعة",
      "nu.proof.s": "صور، إحداثيات، تاريخ، وعدد الأشجار المزروعة.",
      "nu.proof.photos": "الصور",
      "nu.proof.date": "تاريخ الزراعة",
      "nu.proof.submit": "رفع الإثبات",
      "sp.juniper": "العرعر",
      "sp.palm": "النخيل",
      "sp.acacia": "الطلح",
      "z.south": "الجنوب",
      "z.east": "الشرقية",
      "z.north": "الشمال",

      "ad.role": "فريق الإدارة",
      "ad.nav.queue": "طابور الاعتماد",
      "ad.nav.users": "المستخدمون",
      "ad.nav.lands": "الأراضي",
      "ad.nav.assign": "تعيين مشتل",
      "ad.nav.market": "ضوابط السوق",
      "ad.nav.audits": "التدقيق",
      "ad.nav.reports": "التقارير",
      "ad.nav.settings": "إعدادات المنصة",
      "ad.h": "لوحة إدارة TGE",
      "ad.s": "اعتماد المستخدمين والأراضي والزراعة · سكّ التوكنات · تقارير.",
      "ad.s1": "مستخدمون بانتظار",
      "ad.s2": "أراضٍ للمراجعة",
      "ad.s3": "زراعة للاعتماد",
      "ad.s4": "أراضٍ معتمدة",
      "ad.queue": "طابور الاعتماد",
      "ad.t.land": "أرض",
      "ad.t.plant": "زراعة",
      "ad.t.user": "جهة",
      "ad.approve": "اعتماد",
      "ad.reject": "رفض",
      "ad.mint": "اعتماد وسكّ",
      "ad.users.h": "إدارة المستخدمين",
      "ad.users.s": "عرض الأدوار وحالة الاعتماد.",
      "ad.lands.h": "إدارة الأراضي",
      "ad.lands.s": "اعتماد / رفض، أو تسجيل أرض نيابة عن المالك.",
      "ad.lands.reg": "تسجيل نيابة",
      "ad.lands.reg.s": "نفس حقول تسجيل الأرض مع اختيار المالك.",
      "ad.owner": "صاحب الأرض",
      "ad.assign.h": "تعيين مشتل لطلب تشجير",
      "ad.assign.s": "اربط طلبًا بمشتل معتمد حسب المنطقة والأنواع.",
      "ad.assign.cta": "تعيين",
      "ad.market.h": "ضوابط السوق الثانوية",
      "ad.market.s": "إيقاف التداول على أرض معينة عند الحاجة.",
      "ad.market.open": "مفتوح",
      "ad.market.paused": "موقوف",
      "ad.market.pause": "إيقاف",
      "ad.market.resume": "استئناف",
      "ad.audits.h": "جدول التدقيق والسجل",
      "ad.audits.s": "جدولة زيارات التدقيق وعرض السجل السابق.",
      "ad.audits.sched": "جدولة",
      "ad.audits.hist": "السجل",
      "ad.audits.save": "حفظ الجدولة",
      "ad.reports.h": "لوحة التقارير",
      "ad.reports.s": "ملخص تشغيل المنصة — أرقام تصميمية.",
      "ad.r1": "أشجار مزروعة",
      "ad.r2": "توكنات مسكوكة",
      "ad.r3": "صفقات سوق",
      "ad.r4": "CO₂ مقدّر",
      "ad.reports.note": "رسوم بيانية وتصدير CSV ستكون في الإصدار التشغيلي — هذا ملخص تصميم.",
      "ad.settings.h": "إعدادات المنصة",
      "ad.settings.s": "معاملات عامة (تصميم فقط).",
      "ad.settings.co2": "كغ CO₂ / شجرة / سنة",
      "ad.settings.fee": "رسوم المنصة %",
      "ad.settings.chain": "الشبكة",

      "au.user": "مدقق مستقل",
      "au.role": "مدقق · معتمد",
      "au.nav.pending": "أراضٍ بانتظار التدقيق",
      "au.nav.submit": "تحديث تدقيق",
      "au.pending.h": "أراضٍ بانتظار التدقيق",
      "au.pending.s": "راجع المواقع المجدولة وقدّم تحديث عدد الأشجار وأرصدة الكربون.",
      "au.start": "بدء التحديث",
      "au.scheduled": "مجدول",
      "au.submit.h": "تحديث تدقيق",
      "au.submit.s": "عدد الأشجار المقاسة وأرصدة الكربون المقدّرة.",
      "au.trees": "عدد الأشجار (عدّ ميداني)",
      "au.carbon": "أرصدة الكربون (كغ CO₂ / سنة)",
      "au.notes": "ملاحظات",
      "au.submit.cta": "إرسال التحديث"
    },
    en: {
      brand: "TGE Platform",
      "nav.home": "Home",
      "nav.sitemap": "Sitemap",
      "nav.verify": "Verify",
      "nav.offset": "Offsetter",
      "nav.land": "Land Owner",
      "nav.nursery": "Nursery",
      "nav.admin": "Admin",
      "nav.auditor": "Auditor",
      "nav.login": "Sign in",
      "hero.eyebrow": "Business Requirements · UI design",
      "hero.title": "Verified planting. Traceable carbon.",
      "hero.sub": "The platform does not sell land or tokens. You fund planting on approved land, receive one token per planted tree, then a planting certificate and a carbon certificate.",
      "hero.cta1": "Start as offsetter",
      "hero.cta2": "Explore lands",
      "promise.title": "Plant first. Tokens after verification.",
      "promise.sub": "Per the BRD: no minting before planting is approved. Land stays with the owner; the offsetter gets carbon rights via tree tokens.",
      "promise.cta": "Try the offsetter flow",
      "promise.chip1": "ERC-1155 · Tree",
      "promise.chip2": "Carbon certificate",
      "roles.title": "Operating roles",
      "roles.sub": "Everyone verifies with email OTP. Permissions differ by role.",
      "roles.land.h": "Land Owner",
      "roles.land.p": "Registers plantable land and tracks status. Land ownership stays with them.",
      "roles.off.h": "Offsetter",
      "roles.off.p": "Requests planting on approved land, receives tokens and certificates, trades on the secondary market.",
      "roles.nur.h": "Nursery",
      "roles.nur.p": "Lists available trees, accepts supply requests, updates delivery status.",
      "roles.adm.h": "Admin (TGE)",
      "roles.adm.p": "Approves users, land and planting; mints tokens and runs the platform.",
      "roles.aud.h": "Auditor",
      "roles.aud.p": "Reviews planted lands and updates tree counts and carbon credits.",
      "flow.title": "Planting cycle at a glance",
      "flow.sub": "No token or certificate is issued before planting is approved.",
      "flow.1": "Sign up & OTP",
      "flow.2": "Register & approve land",
      "flow.3": "Planting request",
      "flow.4": "Nursery supply",
      "flow.5": "Planting + tokens",
      "flow.6": "Certificates + secondary market",
      "note.h": "Out of scope",
      "note.p": "The platform does not sell land or parcels, and does not sell tokens to offsetters (no primary market). Trading is peer-to-peer on the secondary market only.",
      "landing.sitemap": "Browse all pages",
      "landing.verify": "Verify a QR certificate",
      footer: "Design only · Based on TGE Business Requirements Document",

      "auth.title": "Register / Sign in",
      "auth.sub": "Email OTP verification · No Nafath/Wathq in Phase 1",
      "auth.step1": "1 · Account",
      "auth.step2": "2 · OTP",
      "auth.step3": "3 · Wallet",
      "auth.role.off": "Offsetter",
      "auth.role.land": "Land Owner",
      "auth.role.nur": "Nursery",
      "auth.role.adm": "Admin",
      "auth.role.aud": "Auditor",
      "auth.email": "Email",
      "auth.type": "Account type",
      "auth.ind": "Individual",
      "auth.org": "Organization",
      "auth.cta": "Send OTP",
      "auth.fine": "After OTP: AML checks and MetaMask wallet link before operations.",
      "auth.otp.title": "Verify code",
      "auth.otp.sub": "Enter the code sent to demo@tge.sa",
      "auth.otp.code": "OTP code",
      "auth.otp.cta": "Confirm & continue",
      "auth.otp.back": "Back",

      "wallet.title": "Wallet & payment",
      "wallet.sub": "MetaMask is required for on-chain ops. Choose how to pay fees.",
      "wallet.mm": "MetaMask",
      "wallet.connect": "Connect wallet",
      "wallet.pay": "Payment method",
      "wallet.gateway": "Payment gateway",
      "wallet.gateway.s": "Card / transfer",
      "wallet.onchain": "Wallet",
      "wallet.onchain.s": "Pay on-chain",
      "wallet.continue": "Continue to dashboard",
      "wallet.skip": "Skip for now (design)",

      "verify.title": "Verify certificate",
      "verify.sub": "Scan the QR or enter the certificate ID for public verification.",
      "verify.id": "Certificate ID",
      "verify.cta": "Verify",
      "verify.type": "Type",
      "verify.type.v": "Planting certificate",
      "verify.status": "Status",
      "verify.ok": "Certificate is valid and linked to ERC-1155 tokens.",

      "sitemap.title": "Sitemap",
      "sitemap.sub": "All design screens from the BRD — quick navigation.",
      "sitemap.public": "Public / shared",
      "sitemap.landing": "Marketing landing",
      "sitemap.auth": "Sign up + role pick",
      "sitemap.wallet": "Wallet & payment",

      "off.user": "Al Noor Co.",
      "off.role": "Offsetter · Verified",
      "off.nav.dash": "Dashboard",
      "off.nav.lands": "Planting opportunities",
      "off.nav.req": "Planting request",
      "off.nav.reqs": "My requests",
      "off.nav.detail": "Request detail",
      "off.nav.certs": "Certificates",
      "off.nav.market": "Secondary market",
      "off.nav.sell": "List for sale",
      "off.nav.profile": "Profile & notifications",
      "off.dash.h": "Offsetter dashboard",
      "off.dash.s": "Your verified trees and carbon impact — only after planting approval.",
      "off.dash.cta": "New planting request",
      "off.s1": "Verified trees",
      "off.s2": "CO₂ / year",
      "off.s3": "Active requests",
      "off.s4": "Certificates",
      "off.track": "Request tracking",
      "off.open": "Open",
      "off.back": "Back",
      "th.id": "Request",
      "th.land": "Land",
      "th.trees": "Trees",
      "th.status": "Status",
      "th.cap": "Capacity",
      "th.planted": "Planted",
      "th.qty": "Qty",
      "th.price": "Price",
      "th.species": "Species",
      "th.zones": "Supply zones",
      "th.type": "Type",
      "th.item": "Item",
      "land.asir": "Asir Highlands",
      "land.ahsa": "Al-Ahsa Oasis",
      "land.tabuk": "Tabuk Reserve",
      "land.new": "Al-Baha plot",
      "land.asir.m": "Juniper · 3,200 of 10,000 left",
      "land.ahsa.m": "Palm · 8,400 of 20,000 left",
      "land.tabuk.m": "Acacia · 1,100 of 5,000 left",
      "st.supply": "Supplying",
      "st.planted": "Planting approved",
      "st.approved": "Approved",
      "st.review": "In review",
      "st.new": "New",
      "off.lands.h": "Planting opportunities",
      "off.lands.s": "Approved lands with remaining capacity — list and map.",
      "off.pick": "Select to plant",
      "off.req.h": "Planting request",
      "off.req.s": "Choose land and tree count within remaining capacity. Tokens mint after planting approval.",
      "off.req.form": "Request details",
      "off.req.trees": "Number of trees",
      "off.req.calc": "Offset calculator (optional)",
      "off.req.hint": "≈ 2.0 kg per tree / year (illustrative)",
      "off.req.submit": "Submit request",
      "off.req.impact": "Estimated impact",
      "off.req.treesLbl": "trees to plant",
      "off.req.co2Lbl": "estimated offset / year",
      "off.reqs.h": "My requests",
      "off.reqs.s": "All planting requests and their statuses.",
      "off.detail.h": "Request detail #1042",
      "off.detail.s": "Status path from creation through carbon certificate.",
      "off.detail.info": "Summary",
      "off.detail.tl": "Timeline",
      "tl.created": "Created",
      "tl.assigned": "Nursery assigned",
      "tl.supply": "Supply",
      "tl.planted": "Planted",
      "tl.approved": "Approved",
      "tl.tokens": "Tokens",
      "tl.pcert": "Planting cert",
      "tl.carbon": "Carbon cert",
      "tl.now": "In progress",
      "off.certs.h": "Certificates",
      "off.certs.s": "Planting certificate after planting, then carbon certificate after verification. Dynamic from token balance.",
      "off.certs.plant": "Planting certificate",
      "off.certs.plant.p": "4,000 trees · Asir Highlands · approved",
      "off.certs.carbon": "Carbon certificate",
      "off.certs.carbon.p": "8,000 kg CO₂ / year · last audit: 2026",
      "off.certs.pdf": "Download PDF",
      "off.market.h": "Secondary market",
      "off.market.s": "Trading between verified users only. The platform does not sell tokens.",
      "off.market.list": "List tokens for sale",
      "off.market.buy": "Accept",
      "off.sell.h": "List tokens for sale",
      "off.sell.s": "List a quantity and price from your balance on a specific land.",
      "off.sell.submit": "Publish listing",
      "off.profile.h": "Profile & notifications",
      "off.profile.s": "Account details and request status alerts.",
      "off.profile.info": "Profile",
      "off.profile.name": "Name / org",
      "off.profile.save": "Save",
      "off.profile.notif": "Notifications",
      "notif.1": "Request #1042: nursery assigned",
      "notif.2": "Carbon certificate ready for #1038",
      "notif.3": "Market listing expired",

      "lo.user": "Sarawat Farm",
      "lo.role": "Land Owner · Verified",
      "lo.nav.lands": "My lands",
      "lo.nav.new": "Register land",
      "lo.nav.detail": "Land detail",
      "lo.nav.notif": "Notifications",
      "lo.h": "My registered lands",
      "lo.s": "You keep ownership. The ERC-721 land token is a digital record only — it does not transfer title.",
      "lo.cta": "Register new land",
      "lo.form": "Register land",
      "lo.form.s": "Coordinates, area, capacity, and documents.",
      "lo.name": "Plot name / description",
      "lo.coords": "Coordinates",
      "lo.area": "Area (m²)",
      "lo.capacity": "Tree capacity",
      "lo.docs": "Title / authorization documents",
      "lo.submit": "Submit for approval",
      "lo.detail.s": "Remaining capacity and planting activity on this plot.",
      "lo.remain": "Remaining",
      "lo.activity": "Planting activity",
      "lo.notif.s": "Land approval and planting activity updates.",
      "lo.n1": "Al-Baha plot is in review",
      "lo.n2": "New planting request on Asir Highlands",

      "nu.user": "Southern Nursery",
      "nu.role": "Nursery · Verified",
      "nu.nav.stock": "Inventory",
      "nu.nav.species": "Add / edit species",
      "nu.nav.orders": "Supply requests",
      "nu.nav.delivery": "Delivery status",
      "nu.nav.proof": "Planting proof",
      "nu.h": "Nursery panel",
      "nu.s": "List species, quantities and supply zones; accept planting supply requests.",
      "nu.s1": "Species listed",
      "nu.s2": "New requests",
      "nu.s3": "Preparing",
      "nu.s4": "Delivered",
      "nu.stock": "Tree inventory",
      "nu.orders": "Supply requests",
      "nu.orders.s": "Planting requests assigned to your nursery.",
      "nu.accept": "Accept",
      "nu.update": "Update",
      "nu.add": "Add species",
      "nu.edit": "Edit",
      "nu.species.h": "Add / edit species",
      "nu.species.s": "Species name, quantity, and supply zones.",
      "nu.species.save": "Save",
      "nu.delivery.h": "Update delivery status",
      "nu.delivery.s": "Accepted · Preparing · Delivered",
      "nu.delivery.save": "Save status",
      "nu.st.accept": "Accepted",
      "nu.proof.h": "Upload planting proof",
      "nu.proof.s": "Photos, coordinates, date, and planted tree count.",
      "nu.proof.photos": "Photos",
      "nu.proof.date": "Planting date",
      "nu.proof.submit": "Upload proof",
      "sp.juniper": "Juniper",
      "sp.palm": "Palm",
      "sp.acacia": "Acacia",
      "z.south": "South",
      "z.east": "Eastern",
      "z.north": "North",

      "ad.role": "Platform ops",
      "ad.nav.queue": "Approval queue",
      "ad.nav.users": "Users",
      "ad.nav.lands": "Lands",
      "ad.nav.assign": "Assign nursery",
      "ad.nav.market": "Market controls",
      "ad.nav.audits": "Audits",
      "ad.nav.reports": "Reports",
      "ad.nav.settings": "Platform settings",
      "ad.h": "TGE Admin",
      "ad.s": "Approve users, land and planting · mint tokens · reports.",
      "ad.s1": "Users pending",
      "ad.s2": "Lands to review",
      "ad.s3": "Plantings to approve",
      "ad.s4": "Approved lands",
      "ad.queue": "Approval queue",
      "ad.t.land": "Land",
      "ad.t.plant": "Planting",
      "ad.t.user": "Entity",
      "ad.approve": "Approve",
      "ad.reject": "Reject",
      "ad.mint": "Approve & mint",
      "ad.users.h": "User management",
      "ad.users.s": "Roles and verification status.",
      "ad.lands.h": "Land management",
      "ad.lands.s": "Approve / reject, or register land on behalf of an owner.",
      "ad.lands.reg": "Register on behalf",
      "ad.lands.reg.s": "Same land fields with an owner picker.",
      "ad.owner": "Land owner",
      "ad.assign.h": "Assign nursery to planting request",
      "ad.assign.s": "Link a request to an approved nursery by zone and species.",
      "ad.assign.cta": "Assign",
      "ad.market.h": "Secondary market controls",
      "ad.market.s": "Pause trading on a specific land when needed.",
      "ad.market.open": "Open",
      "ad.market.paused": "Paused",
      "ad.market.pause": "Pause",
      "ad.market.resume": "Resume",
      "ad.audits.h": "Audit schedule & history",
      "ad.audits.s": "Schedule audit visits and view past records.",
      "ad.audits.sched": "Schedule",
      "ad.audits.hist": "History",
      "ad.audits.save": "Save schedule",
      "ad.reports.h": "Reports dashboard",
      "ad.reports.s": "Platform ops summary — design figures.",
      "ad.r1": "Trees planted",
      "ad.r2": "Tokens minted",
      "ad.r3": "Market trades",
      "ad.r4": "Est. CO₂",
      "ad.reports.note": "Charts and CSV export belong in the live build — this is a design summary.",
      "ad.settings.h": "Platform settings",
      "ad.settings.s": "Global parameters (design only).",
      "ad.settings.co2": "kg CO₂ / tree / year",
      "ad.settings.fee": "Platform fee %",
      "ad.settings.chain": "Network",

      "au.user": "Independent Auditor",
      "au.role": "Auditor · Verified",
      "au.nav.pending": "Lands pending audit",
      "au.nav.submit": "Submit audit update",
      "au.pending.h": "Lands pending audit",
      "au.pending.s": "Review scheduled sites and submit tree count and carbon credit updates.",
      "au.start": "Start update",
      "au.scheduled": "Scheduled",
      "au.submit.h": "Submit audit update",
      "au.submit.s": "Measured tree count and estimated carbon credits.",
      "au.trees": "Tree count (field)",
      "au.carbon": "Carbon credits (kg CO₂ / year)",
      "au.notes": "Notes",
      "au.submit.cta": "Submit update"
    }
  };

  var lang = "ar";
  var pendingRole = "offsetter";
  var DEFAULT_PANELS = {
    offsetter: "off-dash",
    landowner: "lo-lands",
    nursery: "nu-stock",
    admin: "ad-queue",
    auditor: "au-pending",
    auth: "auth-login"
  };

  function applyI18n() {
    var dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.documentElement.lang = lang === "ar" ? "ar" : "en";
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.getElementById("langToggle").textContent = lang === "ar" ? "EN" : "ع";
    document.title = lang === "ar"
      ? "TGE — منصة التشجير وأرصدة الكربون"
      : "TGE — Afforestation & Carbon Credits";
    recalcImpact();
  }

  function showView(id, panelId) {
    document.querySelectorAll(".view").forEach(function (v) {
      v.classList.toggle("is-active", v.id === "view-" + id);
    });
    document.querySelectorAll(".nav__links button[data-go]").forEach(function (b) {
      b.classList.toggle("is-on", b.getAttribute("data-go") === id);
    });
    var panel = panelId || DEFAULT_PANELS[id];
    if (panel) showPanel(id, panel);
    window.scrollTo(0, 0);
  }

  function viewRoot(viewId) {
    return document.getElementById("view-" + viewId);
  }

  function showPanel(viewId, panelId) {
    var root = viewRoot(viewId);
    if (!root) return;
    root.querySelectorAll("[data-panel-id]").forEach(function (el) {
      el.hidden = el.getAttribute("data-panel-id") !== panelId;
    });
    root.querySelectorAll(".side [data-panel-target]").forEach(function (b) {
      b.classList.toggle("is-on", b.getAttribute("data-panel-target") === panelId);
    });
  }

  function activeViewId() {
    var v = document.querySelector(".view.is-active");
    return v ? v.id.replace(/^view-/, "") : "landing";
  }

  function toast(msg) {
    var t = document.getElementById("toast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function () { t.hidden = true; }, 2800);
  }

  function t(ar, en) {
    return lang === "ar" ? ar : en;
  }

  document.getElementById("langToggle").addEventListener("click", function () {
    lang = lang === "ar" ? "en" : "ar";
    applyI18n();
  });

  document.body.addEventListener("click", function (e) {
    var go = e.target.closest("[data-go]");
    var panelBtn = e.target.closest("[data-panel-target]");

    if (go) {
      e.preventDefault();
      var viewId = go.getAttribute("data-go");
      var deepPanel = panelBtn && panelBtn.hasAttribute("data-go")
        ? panelBtn.getAttribute("data-panel-target")
        : null;
      showView(viewId, deepPanel);
      return;
    }

    if (panelBtn) {
      var target = panelBtn.getAttribute("data-panel-target");
      var view = activeViewId();
      if (target.indexOf("auth-") === 0) view = "auth";
      else if (target.indexOf("off-") === 0) view = "offsetter";
      else if (target.indexOf("lo-") === 0) view = "landowner";
      else if (target.indexOf("nu-") === 0) view = "nursery";
      else if (target.indexOf("ad-") === 0) view = "admin";
      else if (target.indexOf("au-") === 0) view = "auditor";
      if (!viewRoot(view) || !viewRoot(view).classList.contains("is-active")) {
        showView(view);
      }
      showPanel(view, target);
      return;
    }

    var mock = e.target.closest("[data-mock]");
    if (mock) {
      var kind = mock.getAttribute("data-mock");
      var msgs = {
        pdf: [t("تحميل PDF (تصميم)", "PDF download (design)")],
        buy: [t("تم قبول العرض (تصميم)", "Offer accepted (design)")],
        list: [t("تم نشر العرض (تصميم)", "Listing published (design)")],
        save: [t("تم الحفظ (تصميم)", "Saved (design)")],
        land: [t("تم إرسال الأرض للاعتماد (تصميم)", "Land submitted (design)")],
        species: [t("تم حفظ النوع (تصميم)", "Species saved (design)")],
        delivery: [t("تم تحديث التسليم (تصميم)", "Delivery updated (design)")],
        proof: [t("تم رفع الإثبات (تصميم)", "Proof uploaded (design)")],
        approve: [t("تم الاعتماد (تصميم)", "Approved (design)")],
        reject: [t("تم الرفض (تصميم)", "Rejected (design)")],
        mint: [t("اعتماد وسكّ (تصميم)", "Approved & minted (design)")],
        assign: [t("تم تعيين المشتل (تصميم)", "Nursery assigned (design)")],
        pause: [t("تم إيقاف التداول (تصميم)", "Trading paused (design)")],
        resume: [t("تم استئناف التداول (تصميم)", "Trading resumed (design)")],
        audit: [t("تم حفظ الجدولة (تصميم)", "Schedule saved (design)")],
        settings: [t("تم حفظ الإعدادات (تصميم)", "Settings saved (design)")],
        auditSubmit: [t("تم إرسال تحديث التدقيق (تصميم)", "Audit update submitted (design)")]
      };
      if (msgs[kind]) toast(msgs[kind][0]);
    }
  });

  document.getElementById("doLogin").addEventListener("click", function () {
    var roleEl = document.querySelector('input[name="role"]:checked');
    pendingRole = roleEl ? roleEl.value : "offsetter";
    toast(t("تم إرسال رمز OTP (تصميم)", "OTP sent (design mock)"));
    showPanel("auth", "auth-otp");
  });

  document.getElementById("doOtp").addEventListener("click", function () {
    toast(t("تم التحقق · اربط المحفظة", "Verified · connect wallet"));
    showView("wallet");
  });

  document.getElementById("connectWallet").addEventListener("click", function () {
    document.getElementById("walletAddr").textContent = "0x3aF8…9f2c";
    toast(t("تم ربط MetaMask (تصميم)", "MetaMask connected (design)"));
  });

  function enterRoleDashboard() {
    showView(pendingRole || "offsetter");
  }

  document.getElementById("walletContinue").addEventListener("click", enterRoleDashboard);
  document.getElementById("walletSkip").addEventListener("click", enterRoleDashboard);

  document.getElementById("doVerify").addEventListener("click", function () {
    document.getElementById("verifyResult").hidden = false;
    toast(t("الشهادة صالحة", "Certificate valid"));
  });

  var qty = document.getElementById("treeQty");
  function recalcImpact() {
    if (!qty) return;
    var n = Math.max(1, parseInt(qty.value, 10) || 0);
    var treesEl = document.getElementById("impactTrees");
    var co2El = document.getElementById("impactCo2");
    if (treesEl) treesEl.textContent = n.toLocaleString();
    if (co2El) co2El.textContent = (n * 2).toLocaleString() + (lang === "ar" ? " كغ" : " kg");
  }
  if (qty) qty.addEventListener("input", recalcImpact);

  var co2Need = document.getElementById("co2Need");
  if (co2Need) {
    co2Need.addEventListener("input", function () {
      var need = parseFloat(co2Need.value);
      if (!need || need <= 0 || !qty) return;
      qty.value = Math.ceil(need / 2);
      recalcImpact();
    });
  }

  document.getElementById("submitPlant").addEventListener("click", function () {
    toast(t("تم إرسال طلب التشجير (تصميم)", "Planting request submitted (design)"));
    showPanel("offsetter", "off-reqs");
  });

  window.addEventListener("scroll", function () {
    document.querySelector(".nav").classList.toggle("is-scrolled", window.scrollY > 12);
  }, { passive: true });

  applyI18n();
  showPanel("offsetter", "off-dash");
  showPanel("landowner", "lo-lands");
  showPanel("nursery", "nu-stock");
  showPanel("admin", "ad-queue");
  showPanel("auditor", "au-pending");
  showPanel("auth", "auth-login");
})();
