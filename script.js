// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5, 5, 5, 0.95)";
    } else {
        navbar.style.background = "rgba(8, 8, 8, 0.85)";
    }

});


// =========================================
// CODE RAIN
// =========================================

const codeRain = document.querySelector("#code-rain");
const rainContext = codeRain.getContext("2d");
const rainCharacters = "01{}[]<>/=+*const let var function =>;";
let rainColumns = [];
let rainFontSize = 15;

const resizeCodeRain = () => {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    codeRain.width = window.innerWidth * pixelRatio;
    codeRain.height = window.innerHeight * pixelRatio;
    codeRain.style.width = `${window.innerWidth}px`;
    codeRain.style.height = `${window.innerHeight}px`;

    rainContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const columnCount = Math.ceil(window.innerWidth / rainFontSize);
    rainColumns = Array.from({ length: columnCount }, () =>
        Math.random() * -window.innerHeight / rainFontSize
    );
};

const drawCodeRain = () => {
    rainContext.fillStyle = "rgba(8, 8, 8, 0.09)";
    rainContext.fillRect(0, 0, window.innerWidth, window.innerHeight);
    rainContext.font = `${rainFontSize}px monospace`;

    rainColumns.forEach((drop, index) => {
        const character = rainCharacters[
            Math.floor(Math.random() * rainCharacters.length)
        ];
        const xPosition = index * rainFontSize;
        const yPosition = drop * rainFontSize;

        rainContext.fillStyle = Math.random() > 0.92
            ? "rgba(255, 168, 92, 0.85)"
            : "rgba(255, 107, 0, 0.55)";
        rainContext.fillText(character, xPosition, yPosition);

        if (yPosition > window.innerHeight && Math.random() > 0.975) {
            rainColumns[index] = 0;
        } else {
            rainColumns[index] += 0.45;
        }
    });

    window.requestAnimationFrame(drawCodeRain);
};

resizeCodeRain();
window.addEventListener("resize", resizeCodeRain);
drawCodeRain();


// =========================================
// SECTION TRANSITIONS
// =========================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
        const target = document.querySelector(link.getAttribute("href"));

        if (!target || target.classList.contains("hero")) {
            return;
        }

        target.classList.remove("section-focus");
        window.requestAnimationFrame(() => target.classList.add("section-focus"));
    });
});


// =========================================
// SCROLL REVEAL
// =========================================

const elements = document.querySelectorAll(
    ".section-title, .about-text, .about-info, .skill-card, .service-card, .social-media-card, .project-card, .contact-container"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


elements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.7s ease";

    observer.observe(element);

});

// =========================================
// LANGUAGE TOGGLE
// =========================================

const translations = {
    tr: {
        "nav.home": "Ana Sayfa",
        "nav.about": "Hakkımda",
        "nav.skills": "Yetenekler",
        "nav.services": "Hizmetler",
        "nav.projects": "Projeler",
        "nav.social": "Sosyal Medya",
        "nav.contact": "İletişim",
        "nav.cta": "İletişime Geç",
        "hero.greeting": "MERHABA, BEN",
        "hero.role": "Yazılım Geliştirici & Tasarımcı",
        "hero.bio": "Selam, ben Emirhan VARDAR. İstanbul'da yaşıyorum ve dijital platformlarda genellikle “Hangaron” kullanıcı adıyla tanınıyorum.\n\nOkan Üniversitesi 2024-2026 Bilgisayar Destekli Tasarım ve Animasyon Bölümü mezunuyum. Bilişim sektörüne 2015 yılından beri aşinayım. Resmî eğitim sürecime ise 2016-2017 yılları arasında başladım.\n\nKendimi özellikle teknoloji, dijital tasarım, yazılım ve yaratıcı projeler alanlarında geliştirmeye ve farklı projeler üreterek deneyim kazanmaya devam ediyorum.",
        "hero.viewProjects": "Projelerimi Gör",
        "hero.contactMe": "Benimle İletişime Geç",
        "about.label": "01 — HAKKIMDA",
        "about.title": "Biraz <span>Ben</span>",
        "about.heading": "Merhaba, ben Emirhan Vardar.",
        "about.p1": "Teknoloji, yazılım ve dijital tasarım alanlarına ilgi duyan bir geliştiriciyim.",
        "about.p2": "Farklı teknolojiler kullanarak web projeleri, masaüstü uygulamaları, oyunlar ve çeşitli dijital projeler geliştirmeyi seviyorum.",
        "about.p3": "Öğrenmeye, yeni teknolojileri keşfetmeye ve fikirleri çalışan projelere dönüştürmeye odaklanıyorum.",
        "about.fullNameLabel": "Ad Soyad",
        "about.specialtyLabel": "Uzmanlık Alanı",
        "about.specialtyValue": "Software Development",
        "about.locationLabel": "Konum",
        "about.locationValue": "İstanbul, Türkiye",
        "about.emailLabel": "E-posta",
        "skills.label": "02 — YETENEKLER",
        "skills.title": "Kullandığım <span>Teknolojiler</span>",
        "skills.web.title": "Web Development",
        "skills.web.text": "HTML, CSS, JavaScript, React ve modern web teknolojileri.",
        "skills.programming.title": "Programming",
        "skills.programming.text": "C#, Python, JavaScript ve farklı programlama dilleri.",
        "skills.game.title": "Game Development",
        "skills.game.text": "Unity ve çeşitli oyun geliştirme teknolojileri ile projeler.",
        "skills.design.title": "Design",
        "skills.design.text": "Photoshop, Illustrator, Blender ve dijital tasarım araçları.",
        "services.label": "03 — HİZMETLER",
        "services.title": "Sunduğum <span>Hizmetler</span>",
        "services.webDesign.title": "Web Sitesi Tasarımı",
        "services.webDesign.text": "Markanıza özel, modern ve mobil uyumlu web siteleri.",
        "services.dashboard.title": "Yönetim Panelleri",
        "services.dashboard.text": "İş süreçlerinizi kolaylaştıran pratik yönetim arayüzleri.",
        "services.discord.title": "Discord Botları",
        "services.discord.text": "Topluluklarınız için özel komut ve moderasyon botları.",
        "services.telegram.title": "Telegram Botları",
        "services.telegram.text": "Bildirim, destek ve otomasyon ihtiyaçlarına özel botlar.",
        "services.automation.title": "Otomasyon Sistemleri",
        "services.automation.text": "Tekrarlanan görevleri azaltan akıllı ve verimli sistemler.",
        "services.graphic.title": "Grafik Tasarımı",
        "services.graphic.text": "Dijital projeleriniz için özgün görsel kimlik ve tasarımlar.",
        "services.video.title": "Video Kurgu Eğitimi",
        "services.video.text": "Kurgu tekniklerini uygulamalı ve anlaşılır şekilde öğrenin.",
        "services.custom.title": "Özel Yazılım",
        "services.custom.text": "İhtiyaçlarınıza göre planlanan ölçeklenebilir yazılım çözümleri.",
        "projects.label": "04 — PROJELER",
        "projects.title": "Son <span>Çalışmalarım</span>",
        "projects.jarvis.category": "SOFTWARE",
        "projects.jarvis.title": "Jarvis Projesi",
        "projects.jarvis.text": "J.A.R.V.I.S. Core Dashboard, tamamen açık kaynak kodlu olarak geliştirilen, HTML5, CSS3 ve JavaScript teknolojileri üzerine inşa edilmiş siberpunk temalı bir yapay zeka asistanıdır.\n\nGoogle Gemini entegrasyonu, sesli komut desteği ve isteğe bağlı Python Desktop Bridge sistemi sayesinde hem yapay zeka sohbetleri gerçekleştirebilir hem de bilgisayarınızdaki uygulamaları sesli komutlarla kontrol edebilirsiniz.\n\nBu proje, modern fütüristik kullanıcı arayüzleri ve yapay zeka teknolojilerini bir araya getirerek herkesin geliştirebileceği açık kaynaklı bir J.A.R.V.I.S. deneyimi sunmayı amaçlamaktadır.",
        "projects.kazun.category": "Board Game",
        "projects.kazun.title": "Kazun: Hodri Meydan - Kutu Oyunu Projesi",
        "projects.kazun.text": "Kazun: Hodri Meydan, Osmanlı esintileri taşıyan fantastik bir evrende geçen strateji tabanlı bir kutu oyunu konseptidir.\nOyuncular; Padişah, Yeniçeri, Pehlivan Demir ve Gölge Hançer gibi karakterleri kontrol ederek üstünlük mücadelesi verir.\nProje kapsamında oyun kartları, karakter tasarımları, oyun tahtası, logo çalışmaları ve konsept görseller hazırlanmıştır.\nTasarım sürecinde Adobe Photoshop ve yapay zeka destekli görsel üretim araçlarından yararlanılmıştır.\nAmaç; geleneksel tarihi atmosferi mistik ve fantastik unsurlarla birleştirerek özgün bir masaüstü oyun deneyimi oluşturmaktır.",
        "projects.docker.category": "Docker & Python",
        "projects.docker.title": "Docker Security & Protocol Laboratory",
        "projects.docker.text": "Bu depo, modern şifreleme algoritmalarının (AES, RSA, ECC) ve endüstriyel/ağ protokollerinin (MQTT, Modbus, SSH, Telnet) Docker konteynerleri içerisinde izole edilmiş uygulamalarını içerir.",
        "projects.viewProject": "Projeyi İncele →",
        "social.label": "05 — SOSYAL MEDYA",
        "social.title": "Sosyal Medya <span>Hesaplarım</span>",
        "contact.label": "06 — İLETİŞİM",
        "contact.title": "Benimle <span>İletişime Geç</span>",
        "contact.heading": "Bir projen mi var?",
        "contact.text": "Bir proje, iş fırsatı veya sadece iletişim kurmak için bana e-posta gönderebilirsin.",
        "footer.text": "© 2026 Emirhan Vardar. Tüm hakları saklıdır."
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.services": "Services",
        "nav.projects": "Projects",
        "nav.social": "Social",
        "nav.contact": "Contact",
        "nav.cta": "Get in Touch",
        "hero.greeting": "HELLO, I'M",
        "hero.role": "Software Developer & Designer",
        "hero.bio": "Hi, I'm Emirhan VARDAR. I live in Istanbul and am commonly known online as “Hangaron”.\n\nI graduated from Okan University in 2024-2026 in Computer Aided Design and Animation. I have been involved in the IT industry since 2015, and my formal education began in 2016-2017.\n\nI continue to improve myself especially in technology, digital design, software, and creative projects, gaining experience by creating different works.",
        "hero.viewProjects": "View My Projects",
        "hero.contactMe": "Contact Me",
        "about.label": "01 — ABOUT",
        "about.title": "A Bit <span>About Me</span>",
        "about.heading": "Hello, I'm Emirhan Vardar.",
        "about.p1": "I am a developer interested in technology, software, and digital design.",
        "about.p2": "I enjoy creating web projects, desktop applications, games, and various digital projects using different technologies.",
        "about.p3": "I focus on learning, discovering new technologies, and transforming ideas into working projects.",
        "about.fullNameLabel": "Full Name",
        "about.specialtyLabel": "Specialty",
        "about.specialtyValue": "Software Development",
        "about.locationLabel": "Location",
        "about.locationValue": "Istanbul, Turkey",
        "about.emailLabel": "Email",
        "skills.label": "02 — SKILLS",
        "skills.title": "Technologies I <span>Use</span>",
        "skills.web.title": "Web Development",
        "skills.web.text": "HTML, CSS, JavaScript, React, and modern web technologies.",
        "skills.programming.title": "Programming",
        "skills.programming.text": "C#, Python, JavaScript, and different programming languages.",
        "skills.game.title": "Game Development",
        "skills.game.text": "Projects built with Unity and various game development technologies.",
        "skills.design.title": "Design",
        "skills.design.text": "Photoshop, Illustrator, Blender, and digital design tools.",
        "services.label": "03 — SERVICES",
        "services.title": "Services <span>I Offer</span>",
        "services.webDesign.title": "Website Design",
        "services.webDesign.text": "Modern, custom, and mobile-friendly websites tailored to your brand.",
        "services.dashboard.title": "Management Panels",
        "services.dashboard.text": "Practical admin interfaces that simplify your business processes.",
        "services.discord.title": "Discord Bots",
        "services.discord.text": "Custom command and moderation bots for your communities.",
        "services.telegram.title": "Telegram Bots",
        "services.telegram.text": "Bots designed for notifications, support, and automation needs.",
        "services.automation.title": "Automation Systems",
        "services.automation.text": "Smart and efficient systems that reduce repetitive work.",
        "services.graphic.title": "Graphic Design",
        "services.graphic.text": "Original visual identities and design assets for your digital projects.",
        "services.video.title": "Video Editing Training",
        "services.video.text": "Learn editing techniques in a practical and understandable way.",
        "services.custom.title": "Custom Software",
        "services.custom.text": "Scalable software solutions designed around your needs.",
        "projects.label": "04 — PROJECTS",
        "projects.title": "My Recent <span>Work</span>",
        "projects.jarvis.category": "SOFTWARE",
        "projects.jarvis.title": "Jarvis Project",
        "projects.jarvis.text": "J.A.R.V.I.S. Core Dashboard is a cyberpunk-themed AI assistant built entirely with open-source HTML5, CSS3, and JavaScript technologies.\n\nWith Google Gemini integration, voice command support, and an optional Python Desktop Bridge system, it can both chat with AI and control your computer applications through voice commands.\n\nThis project aims to deliver an open-source J.A.R.V.I.S. experience for everyone by combining modern futuristic interfaces with AI technology.",
        "projects.kazun.category": "Board Game",
        "projects.kazun.title": "Kazun: Hodri Meydan - Board Game Project",
        "projects.kazun.text": "Kazun: Hodri Meydan is a strategy-based board game concept set in a fantastical world inspired by the Ottoman era. Players compete for dominance by controlling characters such as the Sultan, Janissary, Pehlivan Demir, and Shadow Hancer.\nThe project includes game cards, character designs, board design, logo work, and concept visuals. Adobe Photoshop and AI-assisted design tools were used during the design process.\nThe goal is to create an original desktop game experience by blending traditional historical atmosphere with mystical and fantastical elements.",
        "projects.docker.category": "Docker & Python",
        "projects.docker.title": "Docker Security & Protocol Laboratory",
        "projects.docker.text": "This repository contains isolated implementations of modern encryption algorithms (AES, RSA, ECC) and industrial/network protocols (MQTT, Modbus, SSH, Telnet) inside Docker containers.",
        "projects.viewProject": "View Project →",
        "social.label": "05 — SOCIAL MEDIA",
        "social.title": "My Social <span>Profiles</span>",
        "contact.label": "06 — CONTACT",
        "contact.title": "Get in <span>Touch</span>",
        "contact.heading": "Do you have a project?",
        "contact.text": "You can email me if you have a project, an opportunity, or just want to connect.",
        "footer.text": "© 2026 Emirhan Vardar. All rights reserved."
    }
};

const languageButtons = document.querySelectorAll(".lang-btn");
const i18nElements = document.querySelectorAll("[data-i18n]");

const applyTranslations = (lang) => {
    const dictionary = translations[lang] || translations.tr;

    i18nElements.forEach((element) => {
        const key = element.dataset.i18n;
        if (dictionary[key]) {
            element.innerHTML = dictionary[key];
        }
    });

    document.documentElement.lang = lang;

    languageButtons.forEach((button) => {
        const isActive = button.dataset.lang === lang;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
};

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        applyTranslations(button.dataset.lang);
    });
});

applyTranslations("tr");