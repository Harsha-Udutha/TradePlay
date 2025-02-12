CREATE TABLE search_filters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,       -- User who performed the search
    category VARCHAR(50),       -- Category of the search
    date_range VARCHAR(20),     -- Search date filter (e.g., Today, Last Week)
    location VARCHAR(100),      -- Search location
    searched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
