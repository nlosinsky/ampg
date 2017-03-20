import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
    constructor(){
    }

    login(user, token: string): void {
        localStorage.setItem('coursesUser', JSON.stringify(user));
        localStorage.setItem('coursesToken', token);

        console.log('User has logged in!')
    }

    logout(): void {
        localStorage.removeItem('coursesUser');
        localStorage.removeItem('coursesToken');

        console.log('User has logged out!')
    }

    isAuthenticated(): boolean {
        return Boolean(localStorage.getItem('coursesUser') && localStorage.getItem('coursesToken'));
    }

    getUserInfo() {
        return localStorage.getItem('coursesUser');
    }
}