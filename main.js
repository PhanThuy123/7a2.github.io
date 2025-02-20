const lessonContents = {
    "1-1": {
        title: "Chủ đề 1: Nguyên tử. Nguyên tố hoá học",
        lessons: {
            "1-1-1": { title: "Bài 1: Nguyên tử", video: "https://youtu.be/rk9fzppLvwE?si=IFI7qSGmLEMW0hoS", content: "<h1>Bài 1: Nguyên tử</h1><p>Đây là nội dung bài học về nguyên tử.</p>" },
            "1-1-2": { title: "Bài 2: Nguyên tố hóa học", video: "#", content: "<h1>Bài 2: Nguyên tố hóa học</h1><p>Đây là nội dung bài học về nguyên tố hóa học.</p>" }
        }
    },
    "1-2": {
        title: "Chủ đề 2: Bảng tuần hoàn",
        lessons: {
            "1-2-1": { title: "Bài 3: Cấu trúc bảng tuần hoàn", video: "#", content: "<h1>Bài 3: Cấu trúc bảng tuần hoàn</h1><p>Đây là nội dung về bảng tuần hoàn.</p>" }
        }
    },
    "1-3": {
        title: "Chủ đề 3: Phân tử",
        lessons: {
            "1-3-1": { title: "Bài 4: Cấu trúc phân tử", video: "#", content: "<h1>Bài 4: Cấu trúc phân tử</h1><p>Đây là nội dung về phân tử.</p>" }
        }
    },
    "2-4": {
        title: "Chủ đề 4: Tốc độ",
        lessons: {
            "2-4-1": { title: "Bài 5: Định nghĩa tốc độ", video: "#", content: "<h1>Bài 5: Định nghĩa tốc độ</h1><p>Đây là nội dung về tốc độ.</p>" }
        }
    },
    "2-5": {
        title: "Chủ đề 5: Âm thanh",
        lessons: {
            "2-5-1": { title: "Bài 6: Sóng âm", video: "#", content: "<h1>Bài 6: Sóng âm</h1><p>Đây là nội dung về âm thanh.</p>" }
        }
    },
    "2-6": {
        title: "Chủ đề 6: Ánh sáng",
        lessons: {
            "2-6-1": { title: "Bài 7: Hiện tượng quang học", video: "#", content: "<h1>Bài 7: Hiện tượng quang học</h1><p>Đây là nội dung về ánh sáng.</p>" }
        }
    },
    "3-8": {
        title: "Chủ đề 8: Trao đổi chất",
        lessons: {
            "3-8-1": { title: "Bài 8: Quá trình trao đổi chất", video: "#", content: "<h1>Bài 8: Quá trình trao đổi chất</h1><p>Đây là nội dung về trao đổi chất.</p>" }
        }
    },
    "3-9": {
        title: "Chủ đề 9: Cảm ứng",
        lessons: {
            "3-9-1": { title: "Bài 9: Phản ứng của sinh vật", video: "#", content: "<h1>Bài 9: Phản ứng của sinh vật</h1><p>Đây là nội dung về cảm ứng.</p>" }
        }
    },
    "3-10": {
        title: "Chủ đề 10: Sinh trưởng",
        lessons: {
            "3-10-1": { title: "Bài 10: Quá trình sinh trưởng", video: "#", content: "<h1>Bài 10: Quá trình sinh trưởng</h1><p>Đây là nội dung về sinh trưởng.</p>" }
        }
    }
};

// Khởi tạo danh sách bài học khi DOM được tải xong
document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử từ DOM
    const lessonList = document.getElementById("lessonList");
    const lessonTitle = document.getElementById("lessonTitle");
    const lessonContent = document.getElementById("lessonContent");
    const lessonVideo = document.getElementById("lessonVideo");
    const videoContainer = document.getElementById("videoContainer");

    // Kiểm tra xem các phần tử có tồn tại không
    if (!lessonList || !lessonTitle || !lessonContent || !lessonVideo || !videoContainer) {
        console.error("Một hoặc nhiều phần tử không tìm thấy trong DOM!");
        return;
    }
    // Danh sách bài học
    const lessons = [
        { 
            title: "Bài 1: Nguyên tử", 
            content: '<a href="https://gamma.app/docs/Nguyen-Tu-Kham-Pha-The-Gioi-Vi-Mo-wvk51nardvm0nkg" target="_blank">Xem bài giảng</a>',
            video: "https://www.youtube.com/embed/n0YpIEsnVBI"
        },
        { 
            title: "Bài 2: Nguyên tố hóa học", 
            content: '<a href="https://gamma.app/docs/Bai-2-Nguyen-To-Hoa-Hoc-xz1dia5gmm94yeu" target="_blank">Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/tyBO3kLLu5o"
        },
        { 
            title: "Bài 3: Sơ lược về bảng tuần hoàn các nguyên tố hóa học", 
            content: '<a href="https://gamma.app/docs/So-Luoc-Ve-Bang-Tuan-Hoan-9tu2ddfnx3teltd" target="_blank">Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/BiFKWYI-daA"
        },
        { 
            title: "Bài 4: Phân tử, đơn chất, hợp chất", 
            content: '<a href="https://gamma.app/docs/Bai-4-Phan-Tu-on-Chat-Hop-Chat-9uncx2yr0xnm2td" target="_blank">Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/eEvOJCXxX2c"
        },
        { 
            title: "Bài 5: Giới thiệu về liên kết hóa học", 
            content: '<a href="https://gamma.app/docs/Gioi-Thieu-Ve-Lien-Ket-Hoa-Hoc-xb96jcyiyjnjtgt" target="_blank">Xem bài giảng</a>',
            video: "https://www.youtube.com/embed/eEvOJCXxX2c"
        },
        { 
            title: "Bài 6: Sóng âm", 
            content: '<a href="https://gamma.app/docs/BAI-6-SONG-AM-g2i4jlv74e80wmx" target="_blank">Xem bài giảng</a>', 
            video:"https://www.youtube.com/embed/c8YLd9zx5LY"
        },
  
        { 
            title: "Bài 7: Hiện tượng quang học", 
             content: '<a href="https://gamma.app/docs/Bai-7-Hien-Tuong-Quang-Hoc-3n21mr0ih2smlfr" target="_blank"> Xem bài giảng</a>', 
             video: ""
        },
        { 
            title: "Bài 8: Quá trình trao đổi chất", 
            content: '<a href="https://gamma.app/docs/Bai-8-Qua-Trinh-Trao-oi-Chat-5xjc50htzr79gz1" target="_blank">Xem bài giảng</a>',
            video: "https://www.youtube.com/embed/ZYiuUa1Xl6U"
        },
        { 
            title: "Bài 9: Phản ứng của sinh vật", 
            content: '<a href="https://gamma.app/docs/Phan-Ung-Cua-Sinh-Vat-xl9ewxym9jyedkb" target="_blank">Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/zdw87XTXOMg"
        },
        { 
            title: "Bài 10: Quá trình sinh trưởng", 
            content: '<a href="https://gamma.app/docs/Bai-10-Qua-Trinh-Sinh-Truong-tnjhi7pfrg695tf" target="_blank">Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/DL46mlEx088"
        },
        { 
            title: "Bài 11: Phản xạ âm", 
            content: '<a href="https://gamma.app/docs/Bai-11-Phan-xa-am-15cxymk1bvflg6q">Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/KM-QweOcQnE"
        },
        { 
            title: "Bài 12: Ánh sáng và tia sáng", 
            content: '<a href="https://gamma.app/docs/Bai-12-Anh-sang-tia-sang-mfq0xwuh6ok9byb">Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/TkjIfmSTMyI"
        },
        { 
            title: "Bài 13: Sự phản xạ ánh sáng", 
            content: '<a href="https://gamma.app/docs/Bai-13-Su-Phan-Xa-Anh-Sang-musvx5ijbmdz0yi">Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/6tbm7-Q-EBY"
        },
        { 
            title: "Bài 14: Nam châm", 
            content: '<a href="https://gamma.app/docs/Bai-14-Nam-Cham-d1nto1bq0m7ljqh">Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/eYgN-azzTmg"
        },
        { 
            title: "Bài 15: Từ trường", 
            content: '<a href="https://gamma.app/docs/Bai-15-Tu-Truong-vuf2iwxz7wclfxb">Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/wtjjCAHLQWY"
        },
        { 
            title: "Bài 16: Từ trường trái đất", 
            content: '<a href="https://gamma.app/docs/Tu-Truong-Trai-at-6j6jsb5yoy52it6">Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/qwEreybhBcw"
        },
        { 
            title: "Bài 17: Vai của trao đổi chất và chuyển hoá năng lượng ở sinh vật", 
            content: '<a href="https://gamma.app/docs/Vai-tro-cua-Trao-oi-chat-va-Chuyen-hoa-nang-luong-o-Sinh-vat-l9aacrwzaeesqkm"> Xem bài giảng</a>', 
            video: ""
        },
        { 
            title: "Bài 18: Quang hợp ở thực vật", 
            content: '<a href="https://gamma.app/docs/Bai-18-Quang-hop-o-thuc-vat-I-o92hgb4onhm2tlr"> Xem bài giảng</a>', 
            video: ""
        },
        { 
            title: "Bài 19: Các yếu tố ảnh hưởng đến quang hợp", 
            content: '<a href="https://gamma.app/docs/Cac-Yeu-To-Anh-Huong-en-Quang-Hop-83k7o8rl8g2hnuh"> Xem bài giảng</a>', 
            video: ""
        },
        { 
            title: "Bài 20: Thực hành về quang hợp ở cây xanh", 
            content: '<a href="https://gamma.app/docs/Thuc-hanh-ve-Quang-hop-o-Cay-xanh-y4wsmcszcpotdo6"> Xem bài giảng</a>', 
            video: ""
        },
    ];
// Tạo danh sách các bài học
    lessons.forEach((lesson, index) => {
        const button = document.createElement("button");
        button.className = "list-group-item list-group-item-action";
        button.textContent = lesson.title;
        button.onclick = () => loadLesson(index);
        lessonList.appendChild(button);
    });

    // Hàm tải bài học khi người dùng bấm vào
    function loadLesson(index) {
        const lesson = lessons[index];
        lessonTitle.textContent = lesson.title;
        lessonContent.innerHTML = lesson.content;

        if (lesson.video) {
            lessonVideo.src = lesson.video;
            videoContainer.style.display = "block";
        } else {
            videoContainer.style.display = "none";
        }
    }

    // Tải bài học đầu tiên mặc định
    if (lessons.length > 0) {
        loadLesson(0);
    }

    // Chuyển sang bài trước
    prevLesson.onclick = () => {
        if (currentIndex > 0) {
            loadLesson(currentIndex - 1);
        }
    };

    // Chuyển sang bài tiếp theo
    nextLesson.onclick = () => {
        if (currentIndex < lessons.length - 1) {
            loadLesson(currentIndex + 1);
        }
};
