-- Seed data for categories
INSERT INTO categories (name, description) VALUES
('AI & Machine Learning', 'Products and services related to artificial intelligence and machine learning'),
('Web Development', 'Tools and platforms for web development'),
('Mobile Apps', 'Mobile applications and development tools'),
('DevOps', 'Development operations and infrastructure tools'),
('Productivity', 'Tools to improve productivity and workflow');

-- Seed data for products
INSERT INTO products (name, tagline, description, how_it_works, icon, profile_id, category_id) VALUES
('CodeGenius', 'AI-powered code review assistant', 'Automated code review and suggestions', 'Upload your code and get instant feedback', 'https://example.com/codegenius.png', 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 6),
('DevFlow', 'Streamline your development workflow', 'Project management for developers', 'Track tasks and collaborate with team', 'https://example.com/devflow.png', 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 7),
('AppBuilder', 'No-code mobile app development', 'Create mobile apps without coding', 'Drag and drop interface builder', 'https://example.com/appbuilder.png', 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 8),
('CloudDeploy', 'One-click cloud deployment', 'Deploy applications to cloud easily', 'Connect your repo and deploy', 'https://example.com/clouddeploy.png', 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 9),
('TaskMaster', 'Smart task management', 'AI-powered task organization', 'Create and manage tasks efficiently', 'https://example.com/taskmaster.png', 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 10);

-- Seed data for product_upvotes (composite primary key)
INSERT INTO product_upvotes (product_id, profile_id) VALUES
(16, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
(17, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
(18, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
(19, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
(20, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815');

-- Seed data for reviews
INSERT INTO reviews (product_id, profile_id, rating, review) VALUES
(16, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 5, 'Amazing tool for code review!'),
(17, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 4, 'Great for team collaboration'),
(18, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 3, 'Good for beginners'),
(19, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 5, 'Simplifies deployment process'),
(20, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 4, 'Helps stay organized');

-- Seed data for gpt_ideas
INSERT INTO gpt_ideas (idea, views, claimed_by) VALUES
('AI-powered code documentation generator', 100, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
('Automated test case generator', 75, NULL),
('Smart code refactoring assistant', 120, NULL),
('Real-time collaboration IDE', 90, NULL),
('AI pair programming assistant', 150, NULL);

-- Seed data for gpt_ideas_likes (composite primary key)
INSERT INTO gpt_ideas_likes (gpt_idea_id, profile_id) VALUES
(1, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
(2, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
(3, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
(4, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
(5, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815');

-- Seed data for topics
INSERT INTO topics (name, slug) VALUES
('Web Development', 'web-development'),
('Mobile Development', 'mobile-development'),
('AI & ML', 'ai-ml'),
('DevOps', 'devops'),
('Product Management', 'product-management');

-- Seed data for posts
INSERT INTO posts (title, content, topic_id, profile_id) VALUES
('Best practices for React development', 'Comprehensive guide to React best practices...', 1, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
('Building scalable mobile apps', 'Tips for building scalable mobile applications...', 2, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
('Introduction to machine learning', 'Beginner guide to machine learning concepts...', 3, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
('CI/CD pipeline setup', 'How to set up an efficient CI/CD pipeline...', 4, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
('Product roadmap planning', 'Effective strategies for product roadmap planning...', 5, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815');

-- Seed data for post_upvotes (composite primary key)
INSERT INTO post_upvotes (post_id, profile_id) VALUES
(6, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
(7, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
(8, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
(9, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
(10, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815');

-- Seed data for post_replies
INSERT INTO post_replies (post_id, profile_id, reply) VALUES
(6, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 'Great article! Thanks for sharing.'),
(7, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 'Very helpful tips for mobile development.'),
(8, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 'Clear explanation of ML concepts.'),
(9, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 'This pipeline setup saved me hours!'),
(10, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 'Excellent roadmap planning guide.');

-- Seed data for team
INSERT INTO teams (product_name, team_size, equity_split, product_stage, roles, product_description) VALUES
('CodeGenius', 5, 100, 'product', '2 Developers, 1 Designer, 1 PM, 1 Marketing', 'AI-powered code review platform'),
('DevFlow', 3, 100, 'mvp', '1 Developer, 1 Designer, 1 PM', 'Project management for developers'),
('AppBuilder', 4, 100, 'prototype', '2 Developers, 1 Designer, 1 Marketing', 'No-code mobile app development'),
('CloudDeploy', 2, 100, 'idea', '1 Developer, 1 Designer', 'One-click cloud deployment'),
('TaskMaster', 3, 100, 'mvp', '1 Developer, 1 Designer, 1 PM', 'Smart task management system');

-- Seed data for message_rooms
INSERT INTO message_rooms (created_at) VALUES
(now()),
(now()),
(now()),
(now()),
(now());

-- Seed data for message_room_members (composite primary key)
INSERT INTO message_room_members (message_room_id, profile_id) VALUES
(1, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
(2, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
(3, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
(4, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815'),
(5, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815');

-- Seed data for messages
INSERT INTO messages (message_room_id, sender_id, content) VALUES
(1, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 'Hello, how can I help you?'),
(2, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 'Let discuss the project requirements'),
(3, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 'I have some questions about the API'),
(4, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 'The deployment was successful'),
(5, 'c603f0c3-0ca0-4fd8-99b3-2a528ff66815', 'Thanks for your help!');

