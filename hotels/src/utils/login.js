export function LoginService(user, pass) {

    if (user === "admin" && pass === "admin123") {
        return {
            name: "Administrator",
            lastname: "Admin",
            role: "admin",
            image: ""
        };
    } else {
        return null;
    }
}
