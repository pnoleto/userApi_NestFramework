import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  Role,
  JwtAuthGuard,
  JwtRefreshTokenGuard,
  LocalAuthGuard,
  RolesGuard,
  Roles,
} from '@userApi/domain';
import { AuthService } from '@userApi/infra';

@ApiTags('auth')
@ApiBearerAuth('JWT')
@Controller('auth')
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiOkResponse({
    description: 'Example of endpoint description',
  })
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
