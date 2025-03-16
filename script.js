// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Menu hover effect
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // Dynamic background
    const colors = ['#ffd700', '#ff4500', '#00ff00'];
    setInterval(() => {
        document.documentElement.style.setProperty(
            '--main-color', 
            colors[Math.floor(Math.random() * colors.length)]
        );
    }, 3000);
});
document.addEventListener('DOMContentLoaded', () => {
    const text = "Web design for Trịnh Yến Nhi❤️"; // Nội dung
    const speed = 100; // Tốc độ đánh chữ (ms)
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typewriter").textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect(); // Bắt đầu hiệu ứng khi trang tải xong
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.circle-container');

    function createCircle() {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        // Random vị trí
        const size = Math.random() * 100 + 50; // Kích thước ngẫu nhiên (50px - 150px)
        const posX = Math.random() * window.innerWidth; // Vị trí ngang
        const posY = Math.random() * window.innerHeight; // Vị trí dọc

        // Random màu viền
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffcc00', '#ff00ff', '#00ffff'];
        const borderColor = colors[Math.floor(Math.random() * colors.length)];

        // Gán style cho vòng tròn
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${posX}px`;
        circle.style.top = `${posY}px`;
        circle.style.borderColor = borderColor;

        container.appendChild(circle);

        // Xóa vòng tròn sau khi hoàn tất animation
        setTimeout(() => {
            circle.remove();
        }, 5000);
    }

    // Tạo vòng tròn mỗi 500ms
    setInterval(createCircle, 500);
});
document.addEventListener('click', (event) => {
    // Tạo một span chứa ký tự đặc biệt trái tim
    const heart = document.createElement('span');
    heart.textContent = '❤️'; // Ký tự trái tim
    heart.classList.add('heart');
    document.body.appendChild(heart);

    // Vị trí trái tim xuất hiện (chỗ click)
    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;

    // Xóa ký tự trái tim sau khi hoàn tất animation
    setTimeout(() => {
        heart.remove();
    }, 1000); // 1 giây
});
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    audio.play().catch(error => {
        console.log("Tự động phát không thành công, yêu cầu người dùng tương tác.");
    });
});
const playButton = document.getElementById('play-button');
const audio = document.getElementById('background-music');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = '⏹'; // Thay biểu tượng Pause bằng "II"
    } else {
        audio.pause();
        playButton.textContent = '▶'; // Biểu tượng Play
    }
});


