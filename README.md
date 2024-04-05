
# Online-Libarary-System-ReactJS-ASP.net

This Online Library System is developed as a project for the Faculty of Computers and Artificial Intelligence at Helwan University. It leverages ReactJS for the frontend and ASP.NET Core Web API for the backend to streamline library operations, serving both librarians and normal users.


## Features

### Librarian
- **Account Management**: Approve or reject user account registrations.
- **Book Management**: Add, update, delete, and list books. Filter books by ISBN and rack number.
- **Borrowing Management**: Handle borrowing requests, set book borrowing limits, and manage return dates.
- **Reporting**: Generate reports on borrowed and available books.

### Normal User
- **Account Registration**: Sign up for an account and await approval from a librarian.
- **Book Search**: Search for books in the library using various criteria.
- **Book Borrowing**: Request to borrow books and view a history of borrowed books.

## Getting Started

### Prerequisites
- Node.js and npm
- .NET 6.0 SDK or later
- SQL Server 2019 or later

### Setup
1. Clone the repository:
- git clone  https://github.com/Abdalla-Elshamy2003/Online-Libarary-System-ReactJS-ASP.net

2. Backend setup:
- Navigate to the `Backend` directory:
  ```
  cd Online-Library-System/Backend
  ```
- Restore dependencies and update the database:
  ```
  dotnet restore
  dotnet ef database update
  ```
- Start the ASP.NET Core Web API:
  ```
  dotnet run
  ```
3. Frontend setup:
- Navigate to the `Frontend` directory:
  ```
  cd Online-Library-System/Frontend
  ```
- Install npm packages and start the React app:
  ```
  npm install
  npm start
  ```

## Usage

The React frontend is accessible at `http://localhost:3000`, and the ASP.NET Core Web API is at `http://localhost:5000`. These endpoints can be used to interact with the application.


## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

## Acknowledgments

- Faculty of Computers and Artificial Intelligence, Helwan University, for the opportunity to work on this project.
- The React and ASP.NET Core teams for their comprehensive documentation and support.
- The wider developer community for their invaluable tools and libraries.
