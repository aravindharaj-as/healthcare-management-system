-- Drop table if it already exists
DROP TABLE IF EXISTS users CASCADE;

-- Create Users Table
CREATE TABLE users (
	user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	username VARCHAR(30) NOT NULL UNIQUE,
	password VARCHAR(30) NOT NULL,
	phone_number VARCHAR(15),
	is_active BOOLEAN DEFAULT TRUE,
	role_id INT REFERENCES user_roles(id) ON DELETE SET NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);