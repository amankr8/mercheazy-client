import { Component } from '@angular/core';
import { User } from '../../interface/user';
import { UserService } from '../../service/user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  user: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getLoginUser().subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
