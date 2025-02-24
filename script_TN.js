// Danh sách bài tập (có thể thay đổi hoặc tải từ tệp JSON)
const exercises = [
    { title: "Bài 1: Nguyên tử", link: "https://quizizz.com/join?gc=08181864" },
    { title: "Bài 2: Nguyên tố hóa học", link: "https://quizizz.com/join?gc=05291368" },
    { title: "Bài 3: Sơ lược về bảng tuần hoàn các nguyên tố hóa học", link: "https://quizizz.com/join?gc=24656744" },
    { title: "Bài 4: Phân tử đơn chất, hợp chất", link: "https://quizizz.com/join?gc=24918888" },
	{ title: "Bài 5: Giới thiệu về liên kết hóa học", link: "https://quizizz.com/join?gc=55196520" },
	{ title: "Bài 6: Sóng âm", link: "https://quizizz.com/join?gc=33275752" },
	{ title: "Bài 7: Hiện tượng quang học", link: "https://quizizz.com/join?gc=40140648" },
	{ title: "Bài 8: Quá trình trai đổi chất", link: "https://quizizz.com/join?gc=51314536" },
	{ title: "Bài 9: Phản ứng của sinh vật", link: "https://quizizz.com/join?gc=49151848" },
	{ title: "Bài 10: Quá trình sinh trưởng", link: "https://quizizz.com/join?gc=49807208" },
	{ title: "Bài 11: Phản xạ âm", link: "https://quizizz.com/join?gc=43220840" },
	{ title: "Bài 12: Ánh sáng và tia sáng", link: "https://quizizz.com/join?gc=45613288" },
	{ title: "Bài 13: Sự phản xạ ánh sáng", link: "https://quizizz.com/join?gc=08519912" },
	{ title: "Bài 14: Nam châm", link: "https://quizizz.com/join?gc=54132968" },
	{ title: "Bài 15: Từ trường", link: "https://quizizz.com/join?gc=07733480" },
	{ title: "Bài 16: Từ trường trái đất", link: "https://quizizz.com/join?gc=31260904" },
	{ title: "Bài 17: Vai trò của trao đổi chất và sự chuyển hóa năng lượng", link: "https://quizizz.com/join?gc=50004200" },
	{ title: "Bài 18: Quang hợp ở thực vật", link: "https://quizizz.com/join?gc=62619880" },
	{ title: "Bài 19: Các yếu tố ảnh hưởng đến quang hợp", link: "https://quizizz.com/join?gc=60571880" },
	{ title: "Bài 20: Thực hành về quang hợp và cây xanh", link: "https://quizizz.com/join?gc=60571880" },
	{ title: "Bài 21: Hô hấp tế bào", link: "https://quizizz.com/join?gc=01261800" },
	{ title: "Bài 22: Các yếu tố ảnh hưởng đến hô hấp tế bào", link: "https://quizizz.com/join?gc=17252584" },
	{ title: "Bài 23: Trao đổi khí ở sinh vật", link: "https://quizizz.com/join?gc=19874024" },
	{ title: "Bài 24: Vai trò của nước và các chất dinh dưỡng đối với cơ thể sinh vật", link: "https://quizizz.com/join?gc=18399464" },
	{ title: "Bài 25: Trao đổi nước và các chất dinh dưỡng ở thực vật", link: "https://quizizz.com/join?gc=43565288" },
	{ title: "Bài 26: Trao đổi nước và các chất dinh dưỡng ở động vật", link: "" }

	
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
