import { AuthService, JwtAuthGuard, LocalAuthGuard, RolesGuard, } from '../../services';
import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { Roles } from '../../decorators';
import { Role } from '../../enums';

@ApiTags('auth')
@Controller('auth')
export class AppController {
  constructor(
    private configService: ConfigService,
    private authService: AuthService) {
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiOkResponse({ description: 'Example of endpoint description' })
  public login(@Request() req: any): { access_token: string; refresh_token: string; } {
    return this.authService.login(req.user);
  }

  @Post('refreshToken')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'Example of endpoint description' })
  public refreshToken(@Request() req: any): { access_token: string; } {
    return this.authService.generateTokenFromRefreshToken(req.user);
  }

  @Get('profile')
  @Roles(Role.Admin, Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOkResponse({ description: 'Example of endpoint description' })
  public profile(@Request() req: any): any {
    return req.user;
  }
}
