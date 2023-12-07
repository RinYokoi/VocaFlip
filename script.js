let currentPage = 0;
const totalPages = 22;

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        loadPage(currentPage);
    } else {
        alert("end");
    }
}

function loadPage(pageNumber) {
    const pageElement = document.getElementById('page');
    pageElement.innerHTML = `
        <h1>ページ${pageNumber}</h1>
        <!-- 画像の拡張子を修正 -->
        <img src="img/page${String(pageNumber).padStart(2, '0')}.jpg" alt="ページ${pageNumber}の絵">
        <p>ここにテキストが入ります。</p>
        <button onclick="nextPage()">次へ</button>
    `;
}

// 初期ページの読み込み
loadPage(currentPage);
