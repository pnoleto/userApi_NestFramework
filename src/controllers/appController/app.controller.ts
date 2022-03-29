import { AuthService, JwtAuthGuard, LocalAuthGuard, RolesGuard } from '../../services';
import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { PublicAccess, Roles } from '../../decorators';
import { ConfigService } from '@nestjs/config';
import { Role } from '../../enums';

@Controller()
export class AppController {
  constructor(
    private configService: ConfigService,
    private authService: AuthService) {
  }

  @Post('auth/login')
  @UseGuards(LocalAuthGuard)
  public async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @Post('auth/refreshToken')
  @PublicAccess()
  public async refreshToken(@Body() body: any): Promise<{ access_token: string; }> {
    return this.authService.generateTokenFromRefreshToken(body.refresh_token);
  }

  @Get('profile')
  @Roles(Role.Admin, Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  public profile(@Request() req: any): any {
    return req.user;
  }
}
