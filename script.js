document.addEventListener('DOMContentLoaded', function() {
    
    const langBtn = document.getElementById('lang-switch');
    const btnGo = document.getElementById('btn-go');
    const startScene = document.getElementById('start-scene');
    const setupScene = document.getElementById('setup-scene');
    
    let currentLang = 'en';

    function switchPage() {
        startScene.classList.add('hidden');
        setupScene.classList.remove('hidden');
    }

    function changeLanguage() {
    // 1. สลับค่าภาษาปัจจุบันก่อน
    if (currentLang === 'en') {
        currentLang = 'th';
    } else {
        currentLang = 'en';
    }

    // 2. อัปเดตตัวอักษรบนปุ่มเปลี่ยนภาษา (หาทุกปุ่มที่มีคลาส .lang-button)
    const allLangBtns = document.querySelectorAll('.lang-button');
    allLangBtns.forEach(function(btn) {
        // ถ้าหน้าจอเป็น th ปุ่มต้องโชว์ EN (เพื่อกดสลับกลับ)
        btn.innerText = (currentLang === 'th') ? 'EN' : 'TH';
    });

    // 3. กวาดหา Element ทั้งหมดที่มี data-th เพื่อเปลี่ยนเนื้อหา
    const elements = document.querySelectorAll('[data-th]');
    
    elements.forEach(function(el) {
        const isTh = (currentLang === 'th');
        
        // เปลี่ยนข้อความหลัก
        el.innerText = isTh ? el.getAttribute('data-th') : el.getAttribute('data-en');
        
        // สลับฟอนต์
        el.style.fontFamily = isTh ? "'Mitr', sans-serif" : "'Rubik', sans-serif";

        // --- ส่วนที่เพิ่มมาใหม่: เปลี่ยน Placeholder ในช่อง Input ---
        if (el.hasAttribute('data-th-ph')) {
            el.placeholder = isTh ? el.getAttribute('data-th-ph') : el.getAttribute('data-en-ph');
        }
    });

    console.log("สลับภาษาเสร็จแล้ว เป็น: " + currentLang);
}

    if (btnGo) { btnGo.addEventListener('click', switchPage); }
    if (langBtn) { langBtn.addEventListener('click', changeLanguage); }

});