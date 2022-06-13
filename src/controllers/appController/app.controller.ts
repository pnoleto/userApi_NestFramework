import {
  AuthService,
  JwtAuthGuard,
  JwtRefreshTokenGuard,
  LocalAuthGuard,
  RolesGuard,
} from '../../services';
import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../../decorators';
import { Role } from '../../enums';

@ApiTags('auth')
@Controller('auth')
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiOkResponse({ description: 'Example of endpoint description' })
  public login(@Request() req: any): {
    access_token: string;
    refresh_token: string;
  } {
    return this.authService.login(req.user);
  }

  @Post('refreshToken')
  @UseGuards(JwtRefreshTokenGuard)
  @ApiOkResponse({ description: 'Example of endpoint description' })
  public refreshToken(@Request() req: any): { access_token: string } {
    console.log(req.user);
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
