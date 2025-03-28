-- Drop table if it already exists
DROP TABLE IF EXISTS Users CASCADE;

-- Create Users Table
CREATE TABLE Users (
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	username VARCHAR(30) NOT NULL UNIQUE,
	password VARCHAR(30) NOT NULL,
	phone_number VARCHAR(15),
	is_active BOOLEAN DEFAULT TRUE,
	role_id INT REFERENCES UserRoles(id) ON DELETE SET NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);