# AngularJS User Manager

## Description
Single-page application for user management. Implemented on AngularJS 1.x without a server side (data storage emulation).

## Functionality
- User list page
- View user information
- Add / Edit / Delete
- Form validation via custom directive
- Data storage in `localStorage`
- Fallback pages `403` and `404`
- Custom styling + BEM

## Structure

project-root/
├── index.html
├── styles.css
├── README.md
└── app/
    ├── app.js
    ├── routes.js
    ├── services/
    │   └── userService.js
    ├── directives/
    │   └── userValidation.js
    └── components/
        ├── user-list/
        │   ├── user-list.controller.js
        │   └── user-list.html
        ├── user-form/
        │   ├── user-form.controller.js
        │   └── user-form.html
        ├── user-view/
        │   ├── user-view.controller.js
        │   └── user-view.html
        └── errors/
            ├── 403.html
            └── 404.html

## Run

1. Open the project folder in Visual Studio Code.
2. Make sure the Live Server extension is installed.
3. Right-click on index.html → select “Open with Live Server”.
4. The app will open in your browser at http://127.0.0.1:5500 or similar.
5. Navigate to #!/users to view the user list.

The app is fully client-side — no backend or external server is required.