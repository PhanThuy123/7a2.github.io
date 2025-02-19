// Import styles
import './style.css';
import 'bootstrap';

// Lesson content data
const lessonContents = {
    "1-1": {
        title: "Chủ đề 1: Nguyên tử. Nguyên tố hoá học",
        lessons: {
            "1-1-1": {
                title: "Bài 1: Nguyên tử",
                video: "https://www.youtube.com/watch?v=tyBO3kLLu5o",
                content: `
                    <div class="lesson-content">
                        <h1 class="display-4 mb-4">BÀI 1: NGUYÊN TỬ</h1>
                        
                        <div class="mb-4">
                            <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/tyBO3kLLu5o" 
                                        title="Bài 1: Nguyên tử" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen>
                                </iframe>
                            </div>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">1. Nguyên tử là gì?</h2>
                            <ul class="list-unstyled">
                                <li class="mb-2">🔹 Nguyên tử là đơn vị nhỏ nhất của vật chất, không thể chia nhỏ hơn trong các phản ứng hóa học thông thường.</li>
                                <li class="mb-2">🔹 Mỗi nguyên tử thuộc một nguyên tố hóa học cụ thể.</li>
                            </ul>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">2. Cấu tạo nguyên tử</h2>
                            <ul class="list-unstyled">
                                <li class="mb-3">
                                    🔹 Hạt nhân nằm ở trung tâm, gồm:
                                    <ul class="list-unstyled ms-4 mt-2">
                                        <li class="mb-2">Proton (p⁺): Hạt mang điện tích dương.</li>
                                        <li>Neutron (n⁰): Hạt không mang điện.</li>
                                    </ul>
                                </li>
                                <li class="mb-2">
                                    🔹 Vỏ nguyên tử gồm:
                                    <ul class="list-unstyled ms-4 mt-2">
                                        <li>Electron (e⁻): Hạt mang điện tích âm, chuyển động quanh hạt nhân.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">3. Sự sắp xếp electron trong nguyên tử</h2>
                            <ul class="list-unstyled">
                                <li class="mb-2">🔹 Electron di chuyển theo từng lớp quanh hạt nhân.</li>
                                <li class="mb-2">🔹 Lớp trong cùng chứa tối đa 2 electron, lớp tiếp theo chứa tối đa 8 electron, v.v.</li>
                                <li class="mb-2">🔹 Ví dụ: Nguyên tử Oxy (O) có 8 electron → Phân bố: 2 electron ở lớp thứ nhất, 6 electron ở lớp thứ hai.</li>
                            </ul>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">4. Khối lượng nguyên tử</h2>
                            <ul class="list-unstyled">
                                <li class="mb-2">🔹 Khối lượng nguyên tử chủ yếu tập trung ở hạt nhân (do proton và neutron có khối lượng lớn hơn electron rất nhiều).</li>
                            </ul>
                        </div>

                        <div class="lesson-section bg-light p-4 rounded-3 mt-4">
                            <h3 class="fw-bold mb-3">📌 Tóm lại:</h3>
                            <ul class="list-unstyled">
                                <li class="mb-2">✔ Nguyên tử gồm hạt nhân (chứa proton & neutron) và electron chuyển động xung quanh.</li>
                                <li class="mb-2">✔ Electron được sắp xếp theo từng lớp.</li>
                                <li class="mb-2">✔ Proton quyết định nguyên tố hóa học của nguyên tử.</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            "1-1-2": {
                title: "Bài 2: Nguyên tố hóa học",
                video: "https://www.youtube.com/watch?v=tyBO3kLLu5o",
                content: `
                    <div class="lesson-content">
                        <h1 class="display-4 mb-4">BÀI 2: NGUYÊN TỐ HÓA HỌC</h1>
                        
                        <div class="mb-4">
                            <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/tyBO3kLLu5o" 
                                        title="Bài 2: Nguyên tố hóa học" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen>
                                </iframe>
                            </div>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">1. Nguyên tố hóa học là gì?</h2>
                            <ul class="list-unstyled">
                                <li class="mb-2">🔹 Nguyên tố hóa học là tập hợp những nguyên tử cùng loại, có cùng số proton trong hạt nhân.</li>
                                <li class="mb-3">🔹 Ví dụ:
                                    <ul class="list-unstyled ms-4">
                                        <li>Nguyên tố Oxy (O) có 8 proton.</li>
                                        <li>Nguyên tố Hydro (H) có 1 proton.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">2. Ký hiệu nguyên tố hóa học</h2>
                            <ul class="list-unstyled">
                                <li class="mb-2">🔹 Mỗi nguyên tố có ký hiệu hóa học riêng (viết tắt bằng chữ cái).</li>
                                <li class="mb-2">🔹 Một số ký hiệu nguyên tố phổ biến:
                                    <ul class="list-unstyled ms-4 mt-2">
                                        <li>H (Hydro)</li>
                                        <li>O (Oxy)</li>
                                        <li>C (Carbon)</li>
                                        <li>Na (Natri)</li>
                                        <li>Fe (Sắt)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">3. Phân loại nguyên tố hóa học</h2>
                            <ul class="list-unstyled">
                                <li class="mb-4">🔹 Nguyên tố hóa học được chia thành 3 nhóm chính:
                                    <div class="card-group mt-3">
                                        <div class="card border-0 bg-light me-2">
                                            <div class="card-body">
                                                <h5 class="card-title">Kim loại</h5>
                                                <p class="card-text">Dẫn điện, dẫn nhiệt tốt</p>
                                                <p class="card-text"><small class="text-muted">Ví dụ: Sắt (Fe), Nhôm (Al), Đồng (Cu)</small></p>
                                            </div>
                                        </div>
                                        <div class="card border-0 bg-light me-2">
                                            <div class="card-body">
                                                <h5 class="card-title">Phi kim</h5>
                                                <p class="card-text">Không dẫn điện, tồn tại dưới nhiều dạng</p>
                                                <p class="card-text"><small class="text-muted">Ví dụ: Oxy (O₂), Carbon (C)</small></p>
                                            </div>
                                        </div>
                                        <div class="card border-0 bg-light">
                                            <div class="card-body">
                                                <h5 class="card-title">Khí hiếm</h5>
                                                <p class="card-text">Rất ít phản ứng hóa học</p>
                                                <p class="card-text"><small class="text-muted">Ví dụ: Helium (He), Neon (Ne)</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">4. Ứng dụng của nguyên tố hóa học</h2>
                            <ul class="list-unstyled">
                                <li class="mb-2">🔹 Nguyên tố hóa học xuất hiện khắp nơi trong cuộc sống:
                                    <ul class="list-unstyled ms-4 mt-2">
                                        <li>Sắt (Fe) dùng trong xây dựng, chế tạo máy móc.</li>
                                        <li>Oxy (O₂) giúp con người và động vật hô hấp.</li>
                                        <li>Natri (Na) có trong muối ăn.</li>
                                        <li>Khí Neon (Ne) dùng trong đèn quảng cáo.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div class="lesson-section bg-light p-4 rounded-3 mt-4">
                            <h3 class="fw-bold mb-3">📌 Tóm lại:</h3>
                            <ul class="list-unstyled">
                                <li class="mb-2">✔ Nguyên tố hóa học là tập hợp những nguyên tử cùng loại, có cùng số proton.</li>
                                <li class="mb-2">✔ Mỗi nguyên tố có ký hiệu hóa học riêng.</li>
                                <li class="mb-2">✔ Nguyên tố được chia thành kim loại, phi kim, khí hiếm.</li>
                                <li class="mb-2">✔ Nguyên tố có vai trò quan trọng trong đời sống con người.</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        }
    },
    "1-2": {
        title: "Chủ đề 2: Bảng tuần hoàn",
        lessons: {
            "1-2-1": {
                title: "Bài 3: Sơ lược về bảng tuần hoàn các nguyên tố hóa học",
                video: "https://www.youtube.com/watch?v=BiFKWYI-daA",
                content: `
                    <div class="lesson-content">
                        <h1 class="display-4 mb-4">BÀI 3: SƠ LƯỢC VỀ BẢNG TUẦN HOÀN CÁC NGUYÊN TỐ HÓA HỌC</h1>
                        
                        <div class="mb-4">
                            <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/BiFKWYI-daA" 
                                        title="Bài 3: Sơ lược về bảng tuần hoàn các nguyên tố hóa học" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen>
                                </iframe>
                            </div>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">1. Bảng tuần hoàn là gì?</h2>
                            <ul class="list-unstyled">
                                <li class="mb-2">🔹 Bảng tuần hoàn các nguyên tố hóa học là công cụ sắp xếp các nguyên tố hóa học theo tính chất hóa học và số hiệu nguyên tử (số proton trong hạt nhân).</li>
                                <li class="mb-2">🔹 Nhà khoa học Dmitri Mendeleev là người đầu tiên xây dựng bảng tuần hoàn vào năm 1869.</li>
                            </ul>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">2. Cấu trúc bảng tuần hoàn</h2>
                            <div class="card bg-light mb-3">
                                <div class="card-body">
                                    <h5 class="card-title">📌 Bảng tuần hoàn gồm:</h5>
                                    <ul class="list-unstyled">
                                        <li class="mb-2">✔ Ô nguyên tố: Mỗi ô đại diện cho một nguyên tố, chứa số hiệu nguyên tử, ký hiệu hóa học và nguyên tử khối.</li>
                                        <li class="mb-2">✔ Chu kỳ: Các hàng ngang trong bảng tuần hoàn (có 7 chu kỳ), thể hiện số lớp electron của nguyên tử.</li>
                                        <li class="mb-2">✔ Nhóm nguyên tố: Các cột dọc (có 18 nhóm), tập hợp các nguyên tố có số electron lớp ngoài cùng giống nhau, dẫn đến tính chất hóa học tương tự nhau.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">3. Phân loại nguyên tố trong bảng tuần hoàn</h2>
                            <div class="card bg-light mb-3">
                                <div class="card-body">
                                    <h5 class="card-title">📌 Dựa vào vị trí trong bảng tuần hoàn, nguyên tố được chia thành:</h5>
                                    <div class="row mt-3">
                                        <div class="col-md-4">
                                            <div class="card border-success">
                                                <div class="card-body">
                                                    <h6 class="card-title text-success">🟢 Kim loại</h6>
                                                    <p class="card-text">Thường nằm ở bên trái và giữa bảng tuần hoàn</p>
                                                    <small class="text-muted">Ví dụ: Na, Fe, Cu</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card border-danger">
                                                <div class="card-body">
                                                    <h6 class="card-title text-danger">🔴 Phi kim</h6>
                                                    <p class="card-text">Nằm ở bên phải bảng tuần hoàn</p>
                                                    <small class="text-muted">Ví dụ: O, N, Cl</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card border-warning">
                                                <div class="card-body">
                                                    <h6 class="card-title text-warning">🟡 Khí hiếm</h6>
                                                    <p class="card-text">Thuộc nhóm VIII A (cột cuối cùng)</p>
                                                    <small class="text-muted">Ví dụ: He, Ne, Ar</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="lesson-section bg-light p-4 rounded-3 mt-4">
                            <h3 class="fw-bold mb-3">📌 Tóm lại:</h3>
                            <ul class="list-unstyled">
                                <li class="mb-2">✅ Bảng tuần hoàn giúp ta biết nguyên tố nào có tính chất tương tự nhau.</li>
                                <li class="mb-2">✅ Nhóm nguyên tố có số electron ngoài cùng giống nhau nên có tính chất hóa học giống nhau.</li>
                                <li class="mb-2">✅ Dựa vào vị trí nguyên tố trong bảng, ta có thể dự đoán tính chất của chúng.</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        }
    },
    "1-3": {
        title: "Chủ đề 3: Phân tử",
        lessons: {
            "1-3-1": {
                title: "Bài 4: Phân tử, đơn chất, hợp chất",
                video: "https://www.youtube.com/watch?v=eEvOJCXxX2c",
                content: `
                    <div class="lesson-content">
                        <h1 class="display-4 mb-4">BÀI 4: PHÂN TỬ, ĐƠN CHẤT, HỢP CHẤT</h1>
                        
                        <div class="mb-4">
                            <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/eEvOJCXxX2c" 
                                        title="Bài 4: Phân tử, đơn chất, hợp chất" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen>
                                </iframe>
                            </div>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">1. Phân tử là gì?</h2>
                            <ul class="list-unstyled">
                                <li class="mb-2">🔹 Phân tử là hạt nhỏ nhất của chất, gồm một số nguyên tử liên kết với nhau bằng liên kết hóa học.</li>
                                <li class="mb-2">🔹 Phân tử có đầy đủ tính chất hóa học của chất đó.</li>
                                <li class="mb-3">
                                    <div class="card bg-light">
                                        <div class="card-body">
                                            <h6 class="card-title">🟢 Ví dụ về phân tử:</h6>
                                            <ul class="list-unstyled">
                                                <li>Phân tử nước (H₂O): Gồm 2 nguyên tử Hidro (H) và 1 nguyên tử Oxy (O).</li>
                                                <li>Phân tử khí Oxy (O₂): Gồm 2 nguyên tử Oxy liên kết với nhau.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">2. Đơn chất và hợp chất</h2>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">📌 Đơn chất</h5>
                                            <p class="card-text">Là chất được tạo thành từ một loại nguyên tử duy nhất.</p>
                                            <div class="bg-light p-3 rounded">
                                                <h6>🟢 Ví dụ:</h6>
                                                <ul class="list-unstyled">
                                                    <li>Sắt (Fe): Chỉ có nguyên tử sắt.</li>
                                                    <li>Khí Oxy (O₂): Gồm các nguyên tử Oxy giống nhau.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">📌 Hợp chất</h5>
                                            <p class="card-text">Là chất được tạo thành từ hai hay nhiều nguyên tố hóa học khác nhau.</p>
                                            <div class="bg-light p-3 rounded">
                                                <h6>🟠 Ví dụ:</h6>
                                                <ul class="list-unstyled">
                                                    <li>Nước (H₂O): Gồm Hidro (H) và Oxy (O).</li>
                                                    <li>Muối ăn (NaCl): Gồm Natri (Na) và Clo (Cl).</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">3. Khối lượng phân tử</h2>
                            <div class="card bg-light mb-3">
                                <div class="card-body">
                                    <h5 class="card-title">📌 Khối lượng phân tử là tổng khối lượng của các nguyên tử trong phân tử, được tính bằng đơn vị u.</h5>
                                    <div class="mt-3">
                                        <h6>🟠 Ví dụ:</h6>
                                        <div class="bg-white p-3 rounded">
                                            <p class="fw-bold">Khối lượng phân tử nước (H₂O):</p>
                                            <ul class="list-unstyled">
                                                <li>Hidro (H): 2 nguyên tử × 1u = 2u</li>
                                                <li>Oxy (O): 1 nguyên tử × 16u = 16u</li>
                                                <li class="fw-bold mt-2">Tổng khối lượng H₂O = 2 + 16 = 18u</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card bg-light">
                                <div class="card-body">
                                    <h5 class="card-title">📌 Ứng dụng của khối lượng phân tử:</h5>
                                    <ul class="list-unstyled">
                                        <li>✅ Giúp so sánh khối lượng của các chất.</li>
                                        <li>✅ Dùng trong tính toán hóa học (ví dụ: tính lượng chất trong phản ứng hóa học).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="lesson-section bg-light p-4 rounded-3 mt-4">
                            <h3 class="fw-bold mb-3">📌 Kết luận:</h3>
                            <ul class="list-unstyled">
                                <li class="mb-2">✅ Phân tử là hạt nhỏ nhất của chất, mang đầy đủ tính chất của chất đó.</li>
                                <li class="mb-2">✅ Đơn chất chỉ gồm một loại nguyên tử, hợp chất gồm hai hay nhiều nguyên tử khác nhau.</li>
                                <li class="mb-2">✅ Khối lượng phân tử là tổng nguyên tử khối của các nguyên tử trong phân tử.</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            "1-3-2": {
                title: "Bài 5: Giới thiệu về liên kết hóa học",
                video: "https://www.youtube.com/watch?v=MbGv37rOWcY",
                content: `
                    <div class="lesson-content">
                        <h1 class="display-4 mb-4">BÀI 5: GIỚI THIỆU VỀ LIÊN KẾT HÓA HỌC</h1>
                        
                        <div class="mb-4">
                            <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/MbGv37rOWcY" 
                                        title="Bài 5: Giới thiệu về liên kết hóa học" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen>
                                </iframe>
                            </div>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">1. Liên kết hóa học là gì?</h2>
                            <ul class="list-unstyled">
                                <li class="mb-2">🔹 Liên kết hóa học là lực hút giữa các nguyên tử giúp chúng liên kết với nhau để tạo thành phân tử hoặc hợp chất.</li>
                                <li class="mb-2">🔹 Nhờ liên kết hóa học, các nguyên tử không tồn tại riêng lẻ mà kết hợp lại để tạo thành các chất ổn định trong tự nhiên.</li>
                                <li class="mb-3">
                                    <div class="card bg-light">
                                        <div class="card-body">
                                            <h6 class="card-title">📌 Ví dụ:</h6>
                                            <ul class="list-unstyled">
                                                <li>Các nguyên tử Hidro (H) liên kết với Oxy (O) để tạo ra phân tử nước H₂O.</li>
                                                <li>Nguyên tử Natri (Na) kết hợp với Clo (Cl) để tạo ra muối ăn NaCl.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">2. Các loại liên kết hóa học</h2>
                            <div class="card bg-light mb-4">
                                <div class="card-body">
                                    <h5 class="card-title">📌 Có 2 loại liên kết hóa học chính:</h5>
                                 Continuing the main.js file content exactly where it left off:

                                    <div class="row mt-3">
                                        <div class="col-md-6 mb-3">
                                            <div class="card h-100">
                                                <div class="card-body">
                                                    <h6 class="card-title">✅ Liên kết ion</h6>
                                                    <p class="card-text">Xảy ra khi một nguyên tử cho đi electron và nguyên tử khác nhận electron, tạo ra các ion trái dấu hút nhau.</p>
                                                    <div class="bg-light p-3 rounded">
                                                        <h6>🔸 Ví dụ:</h6>
                                                        <p>Natri (Na) cho 1 electron cho Clo (Cl) → tạo thành Na⁺ và Cl⁻, kết hợp thành NaCl (muối ăn).</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="card h-100">
                                                <div class="card-body">
                                                    <h6 class="card-title">✅ Liên kết cộng hóa trị</h6>
                                                    <p class="card-text">Xảy ra khi hai nguyên tử chia sẻ electron để đạt cấu hình bền vững.</p>
                                                    <div class="bg-light p-3 rounded">
                                                        <h6>🔸 Ví dụ:</h6>
                                                        <p>Hidro (H) và Oxy (O) chia sẻ electron để tạo ra H₂O (nước).</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card bg-light mb-4">
                                <div class="card-body">
                                    <h5 class="card-title">📌 So sánh nhanh:</h5>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Đặc điểm</th>
                                                <th>Liên kết Ion</th>
                                                <th>Liên kết Cộng hóa trị</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Bản chất</td>
                                                <td>Cho và nhận electron</td>
                                                <td>Chia sẻ electron</td>
                                            </tr>
                                            <tr>
                                                <td>Ví dụ</td>
                                                <td>NaCl (muối ăn)</td>
                                                <td>H₂O (nước)</td>
                                            </tr>
                                            <tr>
                                                <td>Tính chất</td>
                                                <td>Dẫn điện khi hòa tan</td>
                                                <td>Không dẫn điện</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="lesson-section bg-light p-4 rounded-3 mt-4">
                            <h3 class="fw-bold mb-3">📌 Tóm lại:</h3>
                            <ul class="list-unstyled">
                                <li class="mb-2">✅ Liên kết hóa học giúp nguyên tử kết hợp tạo thành các chất ổn định.</li>
                                <li class="mb-2">✅ Liên kết ion là sự cho và nhận electron, còn liên kết cộng hóa trị là sự chia sẻ electron.</li>
                                <li class="mb-2">✅ Nhờ liên kết hóa học, chúng ta có nước, muối ăn, khí oxy và nhiều chất khác trong cuộc sống.</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            "1-3-3": {
                title: "Bài 6: Hóa trị, công thức hóa học",
                video: "https://www.youtube.com/watch?v=4SMLVn2pUBk",
                content: `
                    <div class="lesson-content">
                        <h1 class="display-4 mb-4">BÀI 6: HÓA TRỊ, CÔNG THỨC HÓA HỌC</h1>
                        
                        <div class="mb-4">
                            <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/4SMLVn2pUBk" 
                                        title="Bài 6: Hóa trị, công thức hóa học" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen>
                                </iframe>
                            </div>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">1. Hóa trị là gì?</h2>
                            <ul class="list-unstyled">
                                <li class="mb-2">🔹 Hóa trị là khả năng liên kết của một nguyên tử với các nguyên tử khác để tạo thành phân tử hoặc hợp chất.</li>
                                <li class="mb-2">🔹 Mỗi nguyên tố có một giá trị hóa trị xác định, dựa vào số electron lớp ngoài cùng.</li>
                                <li class="mb-3">
                                    <div class="card bg-light">
                                        <div class="card-body">
                                            <h6 class="card-title">📌 Ví dụ:</h6>
                                            <ul class="list-unstyled">
                                                <li>Hidro (H) có hóa trị I, vì chỉ có 1 electron hóa trị.</li>
                                                <li>Oxy (O) có hóa trị II, vì có thể nhận 2 electron khi liên kết.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div class="card bg-light mb-4">
                                <div class="card-body">
                                    <h5 class="card-title">📌 Bảng hóa trị của một số nguyên tố phổ biến:</h5>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Nguyên tố</th>
                                                <th>Ký hiệu</th>
                                                <th>Hóa trị</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr><td>Hidro</td><td>H</td><td>I</td></tr>
                                            <tr><td>Oxy</td><td>O</td><td>II</td></tr>
                                            <tr><td>Cacbon</td><td>C</td><td>IV</td></tr>
                                            <tr><td>Natri</td><td>Na</td><td>I</td></tr>
                                            <tr><td>Clo</td><td>Cl</td><td>I</td></tr>
                                            <tr><td>Canxi</td><td>Ca</td><td>II</td></tr>
                                            <tr><td>Nhôm</td><td>Al</td><td>III</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="lesson-section">
                            <h2 class="fw-bold mb-3">2. Công thức hóa học</h2>
                            <div class="card bg-light mb-4">
                                <div class="card-body">
                                    <h5 class="card-title">📌 Công thức hóa học là cách biểu diễn thành phần nguyên tố trong một chất.</h5>
                                    <p>📌 Để viết đúng công thức hóa học, ta cần biết hóa trị của các nguyên tố và quy tắc hóa trị:</p>
                                    <div class="alert alert-info">
                                        <strong>✅ Quy tắc hóa trị:</strong> Tổng hóa trị của các nguyên tử trong phân tử phải bằng nhau.
                                    </div>
                                </div>
                            </div>

                            <div class="card bg-light mb-4">
                                <div class="card-body">
                                    <h5 class="card-title">📌 Ví dụ:</h5>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h6 class="card-title">Nước (H₂O):</h6>
                                                    <ul class="list-unstyled">
                                                        <li>Hidro có hóa trị I, Oxy có hóa trị II.</li>
                                                        <li>Để tổng hóa trị cân bằng, ta cần 2 nguyên tử H kết hợp với 1 nguyên tử O → H₂O.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h6 class="card-title">Muối ăn (NaCl):</h6>
                                                    <ul class="list-unstyled">
                                                        <li>Natri (Na) có hóa trị I, Clo (Cl) có hóa trị I.</li>
                                                        <li>Vì hóa trị bằng nhau, nên công thức là NaCl.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card bg-light mb-4">
                                <div class="card-body">
                                    <h5 class="card-title">📌 Một số công thức hóa học quan trọng:</h5>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Chất</th>
                                                <th>Công thức</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr><td>Nước</td><td>H₂O</td></tr>
                                            <tr><td>Muối ăn</td><td>NaCl</td></tr>
                                            <tr><td>Carbon dioxide</td><td>CO₂</td></tr>
                                            <tr><td>Axit sunfuric</td><td>H₂SO₄</td></tr>
                                            <tr><td>Canxi clorua</td><td>CaCl₂</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="lesson-section bg-light p-4 rounded-3 mt-4">
                            <h3 class="fw-bold mb-3">📌 Tóm lại:</h3>
                            <ul class="list-unstyled">
                                <li class="mb-2">✅ Hóa trị cho biết khả năng liên kết của nguyên tử trong hợp chất.</li>
                                <li class="mb-2">✅ Công thức hóa học thể hiện thành phần nguyên tố trong hợp chất.</li>
                                <li class="mb-2">✅ Quy tắc hóa trị giúp xác định đúng số lượng nguyên tử trong công thức hóa học.</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        }
    }
};

// Initialize lesson list
document.addEventListener('DOMContentLoaded', function() {
    const lessonList = document.getElementById('lessonList');
    if (lessonList) {
        let html = '';
        Object.entries(lessonContents).forEach(([topicId, topic]) => {
            html += `
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#topic-${topicId}">
                            ${topic.title}
                        </button>
                    </h2>
                    <div id="topic-${topicId}" class="accordion-collapse collapse">
                        <div class="accordion-body">
            `;

            Object.entries(topic.lessons).forEach(([lessonId, lesson]) => {
                html += `
                    <div class="lesson-item" data-lesson-id="${lessonId}">
                        <div class="lesson-title">
                            <i class="bi bi-play-circle me-2"></i>
                            ${lesson.title}
                        </div>
                        <div class="lesson-actions">
                            <i class="bi bi-check-circle-fill text-success"></i>
                        </div>
                    </div>
                `;
            });

            html += `
                        </div>
                    </div>
                </div>
            `;
        });
        lessonList.innerHTML = html;

        // Add click event listeners to lesson items
        document.querySelectorAll('.lesson-item').forEach(item => {
            item.addEventListener('click', function() {
                const lessonId = this.dataset.lessonId;
                const [topicId, subtopicId, lessonNum] = lessonId.split('-');
                const lesson = lessonContents[`${topicId}-${subtopicId}`].lessons[lessonId];
                
                // Update lesson content
                document.getElementById('lessonTitle').textContent = lesson.title;
                document.getElementById('lessonContent').innerHTML = lesson.content;
                
                // Update active state
                document.querySelectorAll('.lesson-item').forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                
                // Show/hide navigation buttons
                updateNavigationButtons(lessonId);
                
                // Show complete button
                document.getElementById('markComplete').style.display = 'block';
            });
        });
    }
});

// Navigation buttons functionality
function updateNavigationButtons(currentLessonId) {
    const [topicId, subtopicId, lessonNum] = currentLessonId.split('-');
    const currentTopic = lessonContents[`${topicId}-${subtopicId}`];
    const lessonIds = Object.keys(currentTopic.lessons);
    const currentIndex = lessonIds.indexOf(currentLessonId);
    
    const prevButton = document.getElementById('prevLesson');
    const nextButton = document.getElementById('nextLesson');
    
    if (currentIndex > 0) {
        prevButton.style.display = 'inline-block';
        prevButton.onclick = () => {
            document.querySelector(`[data-lesson-id="${lessonIds[currentIndex - 1]}"]`).click();
        };
    } else {
        prevButton.style.display = 'none';
    }
    
    if (currentIndex < lessonIds.length - 1) {
        nextButton.style.display = 'inline-block';
        nextButton.onclick = () => {
            document.querySelector(`[data-lesson-id="${lessonIds[currentIndex + 1]}"]`).click();
        };
    } else {
        nextButton.style.display = 'none';
    }
}

// Mark lesson as complete
document.getElementById('markComplete')?.addEventListener('click', function() {
    const activeLesson = document.querySelector('.lesson-item.active');
    if (activeLesson) {
        activeLesson.querySelector('.lesson-actions .bi-check-circle-fill').style.opacity = '1';
        this.disabled = true;
        this.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Đã hoàn thành';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Chat button click handler
document.getElementById('chatButton')?.addEventListener('click', function() {
    window.location.href = 'https://www.coze.com/s/Zs8U7jJsP/';
});

// Add animation to cards on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});