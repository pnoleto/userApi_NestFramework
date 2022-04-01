import { AuthService, JwtAuthGuard, LocalAuthGuard, RolesGuard, } from '../../services';
import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PublicAccess, Roles } from '../../decorators';
import { ConfigService } from '@nestjs/config';
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
  public async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @Post('refreshToken')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'Example of endpoint description' })
  public async refreshToken(@Request() req: any): Promise<{ access_token: string; }> {
   
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
