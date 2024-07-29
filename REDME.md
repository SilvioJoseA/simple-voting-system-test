
# Simple Voting System

## Introduction

This project is a Simple Voting System developed using Laravel. It allows users to vote on questions, and administrators can manage questions and view voting statistics.

## Installation

To install and set up the system, follow these steps:

### Prerequisites

- PHP (version compatible with Laravel)
- Composer (for managing PHP dependencies)
- Laravel (you need to install Laravel globally using Composer)

### Steps to Install

1. **Clone the Repository**

   ```bash
   git clone https://github.com/SilvioJoseA/simple-voting-system-test.git

   Navigate to the Project Directory


cd simple-voting-system-test
Navigate to the Backend Folder

The Laravel project and the database dump are located in the backend folder.


cd backend
Install Laravel Dependencies

Use Composer to install Laravel dependencies.


composer install
Set Up Environment

Copy the .env.example file to .env and configure the database and other environment variables.


cp .env.example .env
Generate Application Key

php artisan key:generate
Set Up the Database

Import the database dump located in the backend folder into your MySQL database.


mysql -u your_username -p your_database < database_dump.sql
(Replace your_username, your_database, and database_dump.sql with your actual MySQL username, database name, and the name of your database dump file, respectively.)

Run Migrations

Apply any pending migrations.

php artisan migrate
Start the Laravel Development Server

php artisan serve
