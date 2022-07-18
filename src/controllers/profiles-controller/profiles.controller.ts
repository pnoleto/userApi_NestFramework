import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Profile } from '@userApi/domain';
import { ProfilesService } from '@userApi/infra';

@Controller('profiles')
export class ProfilesController {
  constructor(private ProfilesService: ProfilesService) {}

  @Get('')
  @ApiOkResponse({
    description: 'Example of endpoint description',
  })
  public Index() {
    return true;
  }

  @Post('')
  @ApiOkResponse({
    description: 'Example of endpoint description',
  })
  public save(@Body() profile: Profile) {
    return this.ProfilesService.save(profile);
  }

  @Put('')
  @ApiOkResponse({
    description: 'Example of endpoint description',
  })
  public update(@Query('profileId') profileId: number, @Body() newProfile: Profile) {
    return this.ProfilesService.update(profileId, newProfile);
  }

  @Delete('')
  @ApiOkResponse({
    description: 'Example of endpoint description',
  })
  public delete(@Query('profileId') profileId: number) {
    return this.ProfilesService.delete(profileId);
  }
}
