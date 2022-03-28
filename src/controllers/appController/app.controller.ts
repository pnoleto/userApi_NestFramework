import { AuthService, JwtAuthGuard, LocalAuthGuard, RolesGuard } from '../../services';
import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Roles } from '../../decorators';
import { Role } from '../../enums';

@Controller()
export class AppController {
  constructor(
    private configService: ConfigService,
    private authService: AuthService) {
  }

  @Post('auth/login')
  @UseGuards(LocalAuthGuard)
  public async login(@Request() req: any): Promise<{ access_token: string; }> {
    return this.authService.login(req.user);
  }

  @Get('profile')
  @Roles(Role.Admin, Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  public profile(@Request() req: any): any {
    return req.user;
  }
}
