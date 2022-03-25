import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService, JwtAuthGuard, LocalAuthGuard, RolesGuard } from '../../services';
import { Roles } from '../../decorators';
import { Role } from '../../enums';

@Controller()
export class AppController {
  constructor(private authService: AuthService) { }

  @Post('auth/login')
  @UseGuards(LocalAuthGuard)
  public async login(@Request() req: any): Promise<{ access_token: string; }> {
    return this.authService.login(req.user);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.User)
  public profile(@Request() req: any): any {
    return req.user;
  }
}
