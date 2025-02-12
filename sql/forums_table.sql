CREATE TABLE forums (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,  -- Forum name (e.g., "PlayStation Gamers")
    description TEXT,                   -- Forum description
    creator_id INT NOT NULL,            -- User who created the forum
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (creator_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE forum_members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    forum_id INT NOT NULL,  -- The forum they joined
    user_id INT NOT NULL,   -- The user who joined
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (forum_id) REFERENCES forums(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE forum_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    forum_id INT NOT NULL,   -- The forum where the message was sent
    user_id INT NOT NULL,    -- Who sent the message
    message TEXT NOT NULL,   -- Message content
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (forum_id) REFERENCES forums(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
