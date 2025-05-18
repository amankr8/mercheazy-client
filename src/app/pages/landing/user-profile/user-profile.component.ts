import { Component } from '@angular/core';
import { User } from '../../../interface/user';
import { UserService } from '../../../service/user/user.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  user: User | null = null;
  loading = false;
  showConfirmationModal = false;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    readonly router: Router
  ) {}

  ngOnInit() {
    this.userService.getLoginUser().subscribe({
      next: (res) => {
        this.user = res;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }

  deleteAccount() {
    this.userService.deleteLoginUser().subscribe({
      next: () => {
        this.showConfirmationModal = false;
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        this.snackBar.open('Account was deleted successfully!', 'Close', {
          duration: 3000,
        });
      },
      error: (err) => {
        console.error(err);
        this.snackBar.open('Failed to delete account', 'Close', {
          duration: 3000,
        });
      },
    });
  }
}
