// إنشاء غرفة جديدة
document.getElementById('createBtn').addEventListener('click', () => {
    const roomCode = generateRoomCode();
    localStorage.setItem('roomCode', roomCode);
    window.location.href = `game.html?room=${roomCode}&role=host`;
});

// الانضمام إلى غرفة
document.getElementById('joinBtn').addEventListener('click', () => {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('joinSection').classList.remove('hidden');
});

// تأكيد الانضمام
document.getElementById('confirmJoin').addEventListener('click', () => {
    const code = document.getElementById('roomCode').value;
    if (code) {
        window.location.href = `game.html?room=${code}&role=guest`;
    }
});

// توليد رمز غرفة عشوائي
function generateRoomCode() {
    return Math.random().toString(36).substring(2, 7).toUpperCase();
}