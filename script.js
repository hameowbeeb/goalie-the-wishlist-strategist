// ฟังก์ชันนี้จะทำงานก็ต่อเมื่อหน้าเว็บโหลดเสร็จแล้ว
document.addEventListener('DOMContentLoaded', function() {

    // 1. ประกาศตัวแปรเพื่อไปจับ Element ใน HTML
    const btnGo = document.querySelector('.btn-start'); // จับปุ่ม LET'S GO
    const startScene = document.getElementById('start-scene'); // จับหน้าแรก
    const setupScene = document.getElementById('setup-scene'); // จับหน้าสอง

    // 2. สร้างฟังก์ชันสำหรับการสลับหน้าจอ
    function switchPage() {
        // เติม class .hidden ให้หน้าแรก (เพื่อซ่อน)
        startScene.classList.add('hidden');
        
        // ดึง class .hidden ออกจากหน้าสอง (เพื่อแสดงผล)
        setupScene.classList.remove('hidden');
        
        console.log("สลับหน้าจอเรียบร้อยแล้ว!");
    }

    // 3. สั่งให้ปุ่ม "ฟัง" เหตุการณ์การคลิก (Event Listener)
    // เมื่อมีการคลิกที่ btnGo ให้ไปเรียกใช้ฟังก์ชัน switchPage
    if (btnGo) {
        btnGo.addEventListener('click', switchPage);
    }

});