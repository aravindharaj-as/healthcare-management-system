-- Drop table if it already exists
DROP TABLE IF EXISTS user_roles CASCADE;

-- Create USER_ROLES table
CREATE TABLE user_roles (
	user_role_id SERIAL PRIMARY KEY,
	role_name VARCHAR(30) NOT NULL UNIQUE
)