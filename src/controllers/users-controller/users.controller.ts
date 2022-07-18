import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
  Put,
  Query,
  Delete,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import {
  UserResourceActions,
  JwtAuthGuard,
  JwtRefreshTokenGuard,
  LocalAuthGuard,
  ResourceGuard,
  Actions,
  User,
  UserEntity,
} from '@userApi/domain';
import { AuthService, UsersService } from '@userApi/infra';

@Controller('')
@ApiBearerAuth('jwt')
export class UsersController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('auth/login')
  @UseGuards(LocalAuthGuard)
  @ApiOkResponse({
    description: 'Example of endpoint description',
  })
  public login(@Request() req: any): {
    access_token: string;
    refresh_token: string;
  } {
    return this.authService.generateTokenFromLogin(req.user);
  }

  @Post('auth/refreshToken')
  @UseGuards(JwtRefreshTokenGuard)
  @ApiOkResponse({ description: 'Example of endpoint description' })
  public refreshToken(@Request() req: any): { access_token: string } {
    return this.authService.generateTokenFromRefreshToken(req.user);
  }

  @Get('auth/userInfo')
  @Actions(UserResourceActions.GET_USER_INFO)
  @UseGuards(JwtAuthGuard, ResourceGuard)
  @ApiOkResponse({ description: 'Example of endpoint description' })
  public profile(@Request() req: any): User {
    return req.user;
  }

  @Post('users')
  @Actions(UserResourceActions.POST_USER)
  @UseGuards(JwtAuthGuard, ResourceGuard)
  @ApiOkResponse({ description: 'Example of endpoint description' })
  public Post(@Body() newUser: User): Promise<UserEntity> {
    return this.usersService.save(newUser);
  }

  @Put('users')
  @Actions(UserResourceActions.POST_USER)
  @UseGuards(JwtAuthGuard, ResourceGuard)
  @ApiOkResponse({ description: 'Example of endpoint description' })
  public Put(
    @Query('userId') userId: number,
    @Body() newUser: User,
  ): Promise<UserEntity> {
    return this.usersService.update(userId, newUser);
  }

  @Delete('users')
  @Actions(UserResourceActions.DELETE_USER)
  @UseGuards(JwtAuthGuard, ResourceGuard)
  @ApiOkResponse({ description: 'Example of endpoint description' })
  public Delete(@Query('userId') userId: number): Promise<UserEntity> {
    return this.usersService.delete(userId);
  }
}
