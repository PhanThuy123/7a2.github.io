const lessonContents = {
    "1-1": {
        title: "Chủ đề 1: Nguyên tử. Nguyên tố hoá học",
        lessons: {
            "1-1-1": {
                title: "Bài 1: Nguyên tử",
                video: "https://www.youtube.com/watch?v=tyBO3kLLu5o",
                content: `<h1>Bài 1: Nguyên tử</h1><p>Đây là nội dung bài học về nguyên tử.</p>`
            },
            "1-1-2": {
                title: "Bài 2: Nguyên tố hóa học",
                video: "https://www.youtube.com/watch?v=eEvOJCXxX2c",
                content: "<h1>Bài 2: Nguyên tố hóa học</h1><p>Đây là nội dung bài học về nguyên tố hóa học.</p>"
            }
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
