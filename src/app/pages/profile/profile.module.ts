import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { AuthGuard } from 'src/app/shared/services/auth-guard';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    NavbarModule,
    CardModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
  exports: [ProfileComponent],
})
export class DashboardModule {}
