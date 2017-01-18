Place your queries below
SELECT * FROM `users` WHERE `username`='Juan'
UPDATE `users` SET `email`='sloan@sloanawesome.com' WHERE `username`='sloan'
INSERT INTO `users` SET `username`='Vernon', `email`='vernonate@burninate.com', `password`=sha1('vernon')
DELETE FROM `users` WHERE `username`='Vernon'
-- Set 2
-- Select all todo_items made by 1 user of your choice
SELECT * FROM `todo_items` WHERE `user_id`='1'
-- Insert a new to do item into the table by that same user
INSERT INTO `todo_items` SET `id`='11', `title`='Elevens', `details`='Elevensih', `timestamp`= '12345678901', `user_id`='1'
-- Delete a to do item by that user
DELETE FROM `todo_items` WHERE `title`='Elevens'
-- Update a to do item by that user with data of your choice
UPDATE `todo_items` SET `details`='change it up' WHERE `id`='1'
-- Perform a select to get all information from `users` by using the user's id
SELECT * FROM `users` WHERE `id`='1'