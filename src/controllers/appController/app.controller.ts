import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard, LocalAuthGuard } from '../../services';
import { AuthService } from '../../services';
import { Role } from '../../enums/role.enum';
import { Roles } from '../../decorators';

@Controller()
export class AppController {
  constructor(private authService: AuthService) { }

  @Post('auth/login') @UseGuards(LocalAuthGuard)
  async login(@Request() req: any): Promise<{ access_token: string; }> {
    return this.authService.login(req.user);
  }

  @Get('profile') @UseGuards(JwtAuthGuard) @Roles(Role.Admin)
  public profile(@Request() req: any): any {
    return req.user;
  }
}
