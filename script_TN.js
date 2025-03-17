// Danh sách bài tập (có thể thay đổi hoặc tải từ tệp JSON)
const exercises = [
    { title: "Bài 1: Nguyên tử - Mã đề: ucqsd2", link: "https://azota.vn/de-thi/ucqsd2" },
    { title: "Bài 2: Nguyên tố hóa học - Mã đề: dn201f", link: "https://azota.vn/de-thi/dn201f" },
    { title: "Bài 3: Sơ lược về bảng tuần hoàn các nguyên tố hóa học - Mã đề: 8vr3go", link: "https://azota.vn/de-thi/8vr3go" },
	{ title: "Bài tập chủ đề 1, 2 - Mã đề: d2dtl5", link: "https://azota.vn/de-thi/d2dtl5" },
    { title: "Bài 4: Phân tử đơn chất, hợp chất - Mã đề: qbcltg", link: "https://azota.vn/de-thi/qbcltg" },
	{ title: "Bài 5: Giới thiệu về liên kết hóa học - Mã đề: rwvvlb", link: "https://azota.vn/de-thi/rwvvlb" },
	{ title: "Bài 6: Bài 6: Hóa trị, công thức hóa học - Mã đề: gzerc4", link: "https://azota.vn/de-thi/gzerc4" },
	{ title: "Bài 7: Tốc độ của chuyển động - Mã đề: xfk9pc", link: "https://azota.vn/de-thi/xfk9pc" },
	{ title: "Bài 8: Đồ thị quãng đường – thời gian - Mã đề: o6f6ho", link: "https://azota.vn/de-thi/o6f6ho" },
	{ title: "Bài 9: Sự truyền âm - Mã đề: ctekts", link: "https://azota.vn/de-thi/ctekts" },
	{ title: "Bài 10: Biên độ, tần số, độ cao và độ to của âm - Mã đề: 6thl9j", link: "https://azota.vn/de-thi/6thl9j" },
	{ title: "Bài 11: Phản xạ âm - Mã đề: w9pfy0", link: "https://azota.vn/de-thi/w9pfy0" },
	{ title: "Bài 12: Ánh sáng và tia sáng - Mã đề: avseti", link: "https://azota.vn/de-thi/avseti" },
	{ title: "Bài 13: Sự phản xạ ánh sáng - Mã đề: xjl94a", link: "https://azota.vn/de-thi/xjl94a" },
	{ title: "Bài 14: Nam châm - Mã đề: g35loc", link: "https://azota.vn/de-thi/g35loc" },
	{ title: "Bài 15: Từ trường - Mã đề: iqlk6w", link: "https://azota.vn/de-thi/iqlk6w" },
	{ title: "Bài 16: Từ trường trái đất - Mã đề: azbkxa", link: "https://azota.vn/de-thi/azbkxa" },
	{ title: "Bài 17: Vai trò của trao đổi chất và sự chuyển hóa năng lượng - Mã đề: r3sivi", link: "https://azota.vn/de-thi/r3sivi" },
	{ title: "Bài 18: Quang hợp ở thực vật - nlqmwn", link: "https://azota.vn/de-thi/nlqmwn" },
	{ title: "Bài 19: Các yếu tố ảnh hưởng đến quang hợp - Mã đề: lty766", link: "https://azota.vn/de-thi/lty766" },
	{ title: "Bài 20: Thực hành về quang hợp và cây xanh - Mã đề: de-thi/j1x9cg", link: "https://azota.vn/de-thi/j1x9cg" },
	{ title: "Bài 21: Hô hấp tế bào - Mã đề", link: "https://azota.vn/de-thi/lvzgfo" },
	{ title: "Bài 22: Các yếu tố ảnh hưởng đến hô hấp tế bào - Mã đề: h2jbb2", link: "https://azota.vn/de-thi/h2jbb2" },
	{ title: "Bài 23: Trao đổi khí ở sinh vật - Mã đề: etjmc3", link: "https://azota.vn/de-thi/etjmc3" },
	{ title: "Bài 24: Vai trò của nước và các chất dinh dưỡng đối với cơ thể sinh vật - Mã đề: aeaf8n", link: "https://azota.vn/de-thi/aeaf8n" },
	{ title: "Bài 25: Trao đổi nước và các chất dinh dưỡng ở thực vật - Mã đề: lk4nt4", link: "https://azota.vn/de-thi/lk4nt4" },
	{ title: "Bài 26: Trao đổi nước và các chất dinh dưỡng ở động vật  - Mã đề: krvcvm", link: "https://azota.vn/de-thi/krvcvm" },
	{ title: "Bài 27: Khái quát về cảm ứng và cảm ứng ở thực vật  - Mã đề: 5cqsz2", link: "https://azota.vn/de-thi/5cqsz2" },
	{ title: "Bài 28: Cảm ứng ở động vật  - Mã đề: zgoqxl", link: "https://azota.vn/de-thi/zgoqxl" },
	{ title: "Bài 29: Khái quát về sinh trưởng và phát triển ở sinh vật  - Mã đề: 0sybt2", link: "https://azota.vn/de-thi/0sybt2" },
	{ title: "Bài 30: Sinh trưởng và phát triển ở thực vật  - Mã đề: wrbwee", link: "https://azota.vn/de-thi/wrbwee" },
	{ title: "Bài 31: Sinh trưởng và phát triển ở động vật  - Mã đề: 7yc80v", link: "https://azota.vn/de-thi/7yc80v" },
	{ title: "Bài 32: Khái quát về sinh sản và sinh sản vô tính ở sinh vật  - Mã đề: mx2ued", link: "https://azota.vn/de-thi/mx2ued" },
	{ title: "Bài 33: Sinh sản hữu tính ở sinh vật  - Mã đề: rmpxfn", link: "https://azota.vn/de-thi/rmpxfn" },
	{ title: "Bài 34: Các yếu tố ảnh hưởng đến sinh sản và điều khiển sinh sản ở sinh vật  - Mã đề: l9hsir", link: "https://azota.vn/de-thi/l9hsir" },
	{ title: "Bài 35: Sự thống nhất về cấu trúc và các hoạt động sống trong cơ thể sinh vật - Mã đề: wbsv92", link: "https://azota.vn/de-thi/wbsv92" }

	
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
