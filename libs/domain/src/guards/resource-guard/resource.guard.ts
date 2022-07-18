import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ACTIONS_KEY } from '../../decorators';
import { UserResourceActions } from '../../enums';

@Injectable()
export class ResourceGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  public canActivate(context: ExecutionContext): boolean {
    const requiredResourcesActions = this.reflector.getAllAndOverride<
      UserResourceActions[]
    >(ACTIONS_KEY, [context.getHandler(), context.getClass()]);

    if (!requiredResourcesActions) return true;

    const { user } = context.switchToHttp().getRequest();

    return requiredResourcesActions.some((resource) =>
      user.resources?.includes(resource),
    );
  }
}
