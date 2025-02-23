// Danh sách bài tập (có thể thay đổi hoặc tải từ tệp JSON)
const exercises = [
    { title: "Bài 1: Nguyên tử", link: "https://quizizz.com/join?gc=08181864" },
    { title: "Bài 2: Nguyên tố hóa học", link: "https://quizizz.com/join?gc=05291368" },
    { title: "Bài 3: Sơ lược về bảng tuần hoàn các nguyên tố hóa học", link: "https://quizizz.com/join?gc=24656744" },
    { title: "Bài 4: Phân tử đơn chất, hợp chất", link: "https://quizizz.com/join?gc=24918888" },
	{ title: "Bài 5: Giới thiệu về liên kết hóa học", link: "https://quizizz.com/join?gc=55196520" },
	{ title: "Bài 6: Sóng âm", link: "https://example.com/bai-4" },
	{ title: "Bài 7: Hiện tượng quang học", link: "https://example.com/bai-4" },
	{ title: "Bài 8: Quá trình trai đổi chất", link: "https://example.com/bai-4" },
	{ title: "Bài 9: Phản ứng của sinh vật", link: "https://example.com/bai-4" },
	{ title: "Bài 10: Quá trình sinh trưởng", link: "https://example.com/bai-4" }
	
];

// Hiển thị danh sách lên trang web
const listContainer = document.getElementById("exercise-list");

exercises.forEach(exercise => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.textContent = exercise.title;
    link.href = exercise.link;
    link.target = "_self"; // Mở trên cùng một trang

    listItem.appendChild(link);
    listContainer.appendChild(listItem);
});