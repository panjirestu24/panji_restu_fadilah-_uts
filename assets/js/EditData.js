// Data postingan (Sama dengan data yang di 'index.html', atau bisa menggunakan penyimpanan server/database jika ada)
let posts = [
    {
        id: 1,
        title: 'Pembelajaran Bahasa',
        content: 'Ini adalah postingan tentang pembelajaran bahasa.',
        date: '19/09/2024',
        comments: ['Sangat informatif!', 'Terima kasih.']
    },
    {
        id: 2,
        title: 'Teknologi Terbaru',
        content: 'Teknologi terbaru terus berkembang dengan pesat...',
        date: '20/09/2024',
        comments: ['Artikel yang menarik.']
    },
    {
        id: 3,
        title: 'Tips Kesehatan',
        content: 'Berikut adalah beberapa tips menjaga kesehatan...',
        date: '21/09/2024',
        comments: []
    }
];

// Ambil ID dari URL
const params = new URLSearchParams(window.location.search);
const postId = parseInt(params.get('id'), 10); // Konversi ID ke angka

// Temukan postingan berdasarkan ID
const post = posts.find(p => p.id === postId);

// Tampilkan data postingan jika ditemukan
if (post) {
    document.getElementById('postTitle').value = post.title;
    document.getElementById('postContent').value = post.content;
}

// Fungsi untuk menyimpan perubahan
document.getElementById('editForm').onsubmit = function(e) {
    e.preventDefault();
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    const date = new Date().toLocaleDateString();

    // Update data postingan
    post.title = title;
    post.content = content;
    post.date = date;

    // Redirect kembali ke halaman utama setelah edit selesai
    window.location.href = 'index.html';
};
