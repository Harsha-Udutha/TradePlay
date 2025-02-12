document.addEventListener("DOMContentLoaded", function () {
    const chatButtons = document.querySelectorAll(".chat-btn");

    chatButtons.forEach(button => {
        button.addEventListener("click", function () {
            const sellerId = this.getAttribute("data-seller-id");
            window.location.href = `chats.html?seller_id=${sellerId}`;
        });
    });
});
