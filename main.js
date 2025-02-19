const lessonContents = {
    "1-1": {
        title: "Chủ đề 1: Nguyên tử. Nguyên tố hoá học",
        lessons: {
            "1-1-1": { title: "Bài 1: Nguyên tử", video: "#", content: "<h1>Bài 1: Nguyên tử</h1><p>Đây là nội dung bài học về nguyên tử.</p>" },
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
document.addEventListener('DOMContentLoaded', function () {
    const lessonList = document.getElementById('lessonList');
    if (!lessonList) {
        console.error("Không tìm thấy phần tử #lessonList!");
        return;
    }

    let html = '';
    Object.entries(lessonContents).forEach(([topicId, topic]) => {
        html += `<div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#topic-${topicId}">
                    ${topic.title}
                </button>
            </h2>
            <div id="topic-${topicId}" class="accordion-collapse collapse">
                <div class="accordion-body">`;

        Object.entries(topic.lessons).forEach(([lessonId, lesson]) => {
            html += `<div class="lesson-item d-flex align-items-center p-2" data-lesson-id="${lessonId}" style="cursor: pointer;">
                        <i class="bi bi-play-circle me-2"></i> ${lesson.title}
                    </div>`;
        });

        html += `</div></div></div>`;
    });

    lessonList.innerHTML = html;
    console.log("Danh sách bài học được tải thành công:", lessonList.innerHTML);

    // Xử lý sự kiện khi chọn bài học
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', function () {
            const lessonId = this.dataset.lessonId;

            // Tìm bài học theo lessonId
            const lesson = Object.entries(lessonContents)
                .flatMap(([_, t]) => Object.entries(t.lessons))
                .find(([id, _]) => id === lessonId)?.[1];

            if (!lesson) {
                console.error("Không tìm thấy bài học:", lessonId);
                return;
            }

            // Kiểm tra phần tử tồn tại trước khi thay đổi nội dung
            const lessonTitle = document.getElementById('lessonTitle');
            const lessonContent = document.getElementById('lessonContent');

            if (!lessonTitle || !lessonContent) {
                console.error("Không tìm thấy phần tử #lessonTitle hoặc #lessonContent!");
                return;
            }

            // Hiển thị nội dung bài học
            lessonTitle.textContent = lesson.title;
            lessonContent.innerHTML = `
                <p>${lesson.content}</p>
                <p><a href="${lesson.video}" target="_blank" class="btn btn-primary">Xem video</a></p>
            `;
        });
    });
});
