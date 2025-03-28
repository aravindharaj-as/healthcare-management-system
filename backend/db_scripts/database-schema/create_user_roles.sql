-- Drop table if it already exists
DROP TABLE IF EXISTS UserRoles CASCADE;

-- Create USER_ROLES table
CREATE TABLE UserRoles (
	id SERIAL PRIMARY KEY,
	role_name VARCHAR(30) NOT NULL UNIQUE
)