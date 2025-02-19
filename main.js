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
    // Danh sách bài học
    const lessons = [
        { title: "Bài 1: Giới thiệu về AI", content: "AI giúp máy tính thông minh hơn.", video: "https://www.youtube.com/embed/xyz123" },
        { title: "Bài 2: Machine Learning", content: "Học máy giúp AI cải thiện qua dữ liệu.", video: "https://www.youtube.com/embed/abc456" },
        { title: "Bài 3: Lập trình Python", content: "Python là ngôn ngữ phổ biến trong AI.", video: "" } // Không có video
    ];

    let currentIndex = -1; // Chỉ mục bài học hiện tại
    const lessonList = document.getElementById("lessonList");
    const lessonTitle = document.getElementById("lessonTitle");
    const lessonContent = document.getElementById("lessonContent");
    const lessonVideo = document.getElementById("lessonVideo");
    const videoContainer = document.getElementById("videoContainer");
    const prevLesson = document.getElementById("prevLesson");
    const nextLesson = document.getElementById("nextLesson");
    const markComplete = document.getElementById("markComplete");

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
        lessonContent.innerText = lessons[index].content;

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
