const lessonContents = {
    "1-1": {
        title: "Chủ đề 1: Nguyên tử. Nguyên tố hoá học",
        lessons: {
            "1-1-1": { title: "Bài 1: Nguyên tử", video: "https://youtu.be/rk9fzppLvwE?si=IFI7qSGmLEMW0hoS", content: "<h1>Bài 1: Nguyên tử</h1><p>Đây là nội dung bài học về nguyên tử.</p>" },
            "1-1-2": { title: "Bài 2: Nguyên tố hóa học", video: "#", content: "<h1>Bài 2: Nguyên tố hóa học</h1><p>Đây là nội dung bài học về nguyên tố hóa học.</p>" }
        }
    },
    "1-2": {
        title: "Chủ đề 2: Sơ lược về bảng tuần hoàn các nguyên tố hóa học",
        lessons: {
            "1-2-1": { title: "Bài 3: Sơ lược về bảng tuần hoàn các nguyên tố hóa học", video: "#", content: "<h1>Bài 3: Sơ lược về bảng tuần hoàn các nguyên tố hóa học</h1><p>Đây là nội dung về bảng tuần hoàn.</p>" }
        }
    },
    "1-3": {
        title: "Chủ đề 3: Phân tử",
        lessons: {
            "1-3-1": { title: "Bài 4: Phân tử, đơn chất, hợp chất", video: "#", content: "<h1>Bài 4: Phân tử, đơn chất, hợp chất</h1><p>Đây là nội dung về phân tử.</p>" },
            "1-3-2": { title: "Bài 5: Giới thiệu về liên kết hóa học", video: "#", content: "<h1>Bài 5: Giới thiệu về liên kết hóa học</h1><p>Đây là nội dung về tốc độ.</p>" },
            "1-3-3": { title: "Bài 6: Hóa trị, công thức hóa học", video: "#", content: "<h1>Bài 6: Hóa trị, công thức hóa học</h1><p>Đây là nội dung về âm thanh.</p>" }
            
        }
    },
    "2-4": {
        title: "Chủ đề 4: Tốc độ",
        lessons: {
            "2-4-1": { title: "Bài 7: Tốc độ của chuyển động", video: "#", content: "<h1>Bài 7: Tốc độ của chuyển động</h1><p>Đây là nội dung về tốc độ.</p>" },
            "2-4-2": { title: "Bài 8: Đồ thị quãng đường – thời gian", video: "#", content: "<h1>Bài 8: Đồ thị quãng đường – thời gian</h1><p>Đây là nội dung về đồ thị quãng đường.</p>" },
            "2-4-3": { title: "Bài 9: Sự truyền âm", video: "#", content: "<h1>Bài 9: Sự truyền âm</h1><p>Đây là nội dung về âm thanh.</p>" },
            "2-4-4": { title: "Bài 10: Biên độ, tần số, độ cao và độ to của âm", video: "#", content: "<h1>Bài 10: Biên độ, tần số, độ cao và độ to của âm</h1><p>Đây là nội dung về truyền âm.</p>" },
            "2-4-5": { title: "Bài 11: Phản xạ âm", video: "#", content: "<h1>Bài 11: Phản xạ âm</h1><p>Đây là nội dung về phản xạ âm.</p>" }
        }
    }
    
};

// Khởi tạo danh sách bài học khi DOM được tải xong
document.addEventListener("DOMContentLoaded", function () {
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
            video:"https://www.youtube.com/embed/tyBO3kLLu5o"
            
         },
        { 
            title: "Bài 3: Sơ lược về bảng tuần hoàn các nguyên tố hóa học", 
            content: '<a href="https://gamma.app/docs/So-Luoc-Ve-Bang-Tuan-Hoan-9tu2ddfnx3teltd" target="_blank">Xem bài giảng</a>', 
            video:"https://www.youtube.com/embed/BiFKWYI-daA"
         },
        { 
            title: "Bài 4: Phân tử,  đơn chất, hợp chất", 
            content: '<a href="https://gamma.app/docs/Bai-4-Phan-Tu-on-Chat-Hop-Chat-9uncx2yr0xnm2td" target="_blank">Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/eEvOJCXxX2c" 
         },
        { 
            title: "Bài 5: Giới thiệu về liên kết hóa học", 
            content: '<a href="https://gamma.app/docs/Gioi-Thieu-Ve-Lien-Ket-Hoa-Hoc-xb96jcyiyjnjtgt" target="_blank"> Xem bài giảng</a>',
            video: "https://www.youtube.com/embed/eEvOJCXxX2c"
        },
        { 
            title: "Bài 6: Hóa trị, công thức hóa học", 
            content: '<a href="https://gamma.app/docs/Bai-6-Hoa-tri-Cong-thuc-hoa-hoc-b08lgseo1tbphft" target="_blank"> Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/c8YLd9zx5LY"
         },
        { 
            title: "Bài 7: Tốc độ của chuyển động", 
            content: '<a href="https://gamma.app/docs/Bai-7-Toc-o-cua-chuyen-ong-ju9e5g661nle7g8" target="_blank"> Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/9V5j1l906Nk" 
        },
        { 
            title: "Bài 8: Đồ thị quãng đường – thời gian", 
            content: '<a href="https://gamma.app/docs/Bai-8-o-thi-quang-uong-thoi-gian-95bxxf5fb01jlr3" target="_blank"> Xem bài giảng</a>',
            video: "https://www.youtube.com/embed/ZYiuUa1Xl6U" 
        },
        { 
            title: "Bài 9: Sự truyền âm", 
            content: '<a href="https://gamma.app/docs/Bai-9-Su-truyen-am-gbadgt2li3e8ks5" target="_blank"> Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/zdw87XTXOMg"
        },
        { 
            title: "Bài 10: Biên độ, tần số, độ cao và độ to của âm", 
            content: '<a href="https://gamma.app/docs/Bai-10-Bien-o-tan-so-o-cao-va-o-to-cua-am-9m6hbkibovtjzgv" target="_blank"> Xem bài giảng</a>', 
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
            video: "https://www.youtube.com/embed/ET1uUjzZpJM"
        },
        { 
            title: "Bài 18: Quang hợp ở thực vật", 
            content: '<a href="https://gamma.app/docs/Bai-18-Quang-hop-o-thuc-vat-I-o92hgb4onhm2tlr"> Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/Q84YfUFbpcY"
        },
        { 
            title: "Bài 19: Các yếu tố ảnh hưởng đến quang hợp", 
            content: '<a href="https://gamma.app/docs/Cac-Yeu-To-Anh-Huong-en-Quang-Hop-83k7o8rl8g2hnuh"> Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/OZHPL2SJkRk"
        },
        { 
            title: "Bài 20: Thực hành về quang hợp ở cây xanh", 
            content: '<a href="https://gamma.app/docs/Thuc-hanh-ve-Quang-hop-o-Cay-xanh-y4wsmcszcpotdo6"> Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/utq-p_xvK0s"
        },
        { 
            title: "Bài 21: Hô hấp tế bào", 
            content: '<a href="https://gamma.app/docs/Ho-Hap-Te-Bao-Nguon-Nang-Luong-Cho-Su-Song-p075gdmafr8rfim"> Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/UE2VFYdeuas"
        },
        { 
            title: "Bài 22: Các yếu tố ảnh hưởng đến hô hấp tế bào", 
            content: '<a href="https://gamma.app/docs/BAI-22-CAC-YEU-TO-ANH-HUONG-EN-HO-HAP-TE-BAO-zj0u6kdkl4zwxzh"> Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/l_KPmvO5PvY"
        },
        { 
            title: "Bài 23: Trao đổi khí ở sinh vật", 
            content: '<a href="https://gamma.app/docs/BAI-23-TRAO-OI-KHI-O-SINH-VAT-9kjk6w7i3po5sjp"> Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/Et-6TKozHAE"
        },
        { 
            title: "Bài 24: Vai trò của nước và các chất dinh dưỡng đối với cơ thể sinh vật", 
            content: '<a href="https://gamma.app/docs/Vai-Tro-Cua-Nuoc-va-Dinh-Duong-ou5a1b28dwt4jwi"> Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/-Mt69Ewj7rs"
        },
        { 
            title: "Bài 25: Trao đổi nước và các chất dinh dưỡng ở thực vật", 
            content: '<a href="https://gamma.app/docs/Trao-oi-Nuoc-va-Chat-Dinh-Duong-o-Thuc-Vat-1nxnrrr0ub81mq9"> Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/rIP2gGxqzCI"
        },
        { 
            title: "Bài 26: Trao đổi nước và các chất dinh dưỡng ở động vật", 
            content: '<a href="https://gamma.app/docs/Trao-oi-Nuoc-va-Chat-Dinh-Duong-o-ong-Vat-y2fqd8qon6822y3"> Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/vKR7SviK6r8"
        },
        { 
            title: "Bài 27: Khái quát về cảm ứng và cảm ứng ở thực vật", 
            content: '<a href="https://gamma.app/docs/KHTN-7-Canh-dieu-Bai-27-Khai-quat-ve-cam-ung-va-cam-ung-o-thuc--0kcwormmvf9o05p"> Xem bài giảng</a>', 
            video: ""
        },
        { 
            title: "Bài 28: Cảm ứng ở động vật", 
            content: '<a href="https://gamma.app/docs/Bai-28-Cam-Ung-o-ong-Vat-2zwo4chiw9u70ur"> Xem bài giảng</a>', 
            video: "https://www.youtube.com/embed/emn3UPly9zQ"
        },
        { 
            title: "Bài 29: Khái quát về sinh trưởng và phát triển ở sinh vật", 
            content: '<a href="https://gamma.app/docs/KHTN-7-Bai-29-Sinh-Truong-va-Phat-Trien-o-Sinh-Vat-l2l1venpasi1z12"> Xem bài giảng</a>', 
            video: ""
        },
        { 
            title: "Bài 30: Sinh trưởng và phát triển ở thực vật", 
            content: '<a href="https://gamma.app/docs/KHTN-7-Bai-30-Sinh-Truong-va-Phat-Trien-o-Thuc-Vat-uge0l1va8g8jnpg"> Xem bài giảng</a>', 
            video: ""
        },
        { 
            title: "Bài 31: Sinh trưởng và phát triển ở động vật", 
            content: '<a href="https://gamma.app/docs/KHTN-7-Canh-dieu-Bai-31-Sinh-truong-va-Phat-trien-o-ong-vat-mug5mzvtpxj1vtq"> Xem bài giảng</a>', 
            video: ""
        },
        { 
            title: "Bài 32: Khái quát về sinh sản và sinh sản vô tính ở sinh vật", 
            content: '<a href="https://gamma.app/docs/KHTN-7-Canh-dieu-Bai-32-Khai-quat-ve-Sinh-san-va-Sinh-san-Vo-ti-x974wd7eq8w61gj"> Xem bài giảng</a>', 
            video: ""
        },
         { 
            title: "Bài 33: Sinh sản hữu tính ở sinh vật", 
            content: '<a href="https://gamma.app/docs/Bai-33-Sinh-San-Huu-Tinh-o-Sinh-Vat-vcbf6tuma4l63u0"> Xem bài giảng</a>', 
            video: ""
        },
        { 
            title: "Bài 34: Các yếu tố ảnh hưởng đến sinh sản và điều khiển sinh sản ở sinh vật", 
            content: '<a href="https://gamma.app/docs/KHTN-7-Canh-dieu-Bai-34-Cac-Yeu-To-Anh-Huong-en-Sinh-San-va-ieu-vxvich757fqkbbo"> Xem bài giảng</a>', 
            video: ""
        },
        { 
            title: "Bài 35: Sự thống nhất về cấu trúc và các hoạt động sống trong cơ thể sinh vật", 
            content: '<a href="https://gamma.app/docs/KHTN-7-Canh-dieu-Bai-35-Su-thong-nhat-ve-cau-truc-va-cac-hoat-ong-en2dljy5be1q7gd"> Xem bài giảng</a>', 
            video: ""
        },
    ];
    let currentIndex = -1;
    const lessonList = document.getElementById("lessonList");
    const lessonTitle = document.getElementById("lessonTitle");
    const lessonContent = document.getElementById("lessonContent");
    const lessonVideo = document.getElementById("lessonVideo");
    const videoContainer = document.getElementById("videoContainer");
    const prevLesson = document.getElementById("prevLesson");
    const nextLesson = document.getElementById("nextLesson");
    const markComplete = document.getElementById("markComplete");

    // Kiểm tra nếu lessonList không tồn tại
    if (!lessonList) {
        console.error("Không tìm thấy phần tử lessonList!");
        return;
    }

    // Tạo danh sách bài học
    lessons.forEach((lesson, index) => {
        const button = document.createElement("button");
        button.className = "list-group-item list-group-item-action";
        button.textContent = lesson.title;
        button.onclick = () => loadLesson(index);
        lessonList.appendChild(button);
    });

    // Hàm tải bài học
    function loadLesson(index) {
        currentIndex = index;
        lessonTitle.innerText = lessons[index].title;
        lessonContent.innerHTML = lessons[index].content; // Sử dụng innerHTML để hiển thị thẻ <a>

        // Hiển thị video nếu có
        if (lessons[index].video) {
            lessonVideo.src = lessons[index].video;
            videoContainer.classList.remove("d-none");
        } else {
            lessonVideo.src = "";
            videoContainer.classList.add("d-none");
        }

        // Hiển thị nút điều hướng
        prevLesson.classList.toggle("d-none", index === 0);
        nextLesson.classList.toggle("d-none", index === lessons.length - 1);
        markComplete.classList.remove("d-none");
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
});
