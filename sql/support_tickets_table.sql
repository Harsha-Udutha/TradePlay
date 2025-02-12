CREATE TABLE support_tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,                      -- If logged in, link to the user (nullable)
    email VARCHAR(100) NOT NULL,      -- User's email
    username VARCHAR(50) NOT NULL,    -- User's name
    issue TEXT NOT NULL,              -- Description of the issue
    status ENUM('Open', 'In Progress', 'Resolved') DEFAULT 'Open',  -- Status of the ticket
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

use Tradeplay;

select * from posts;