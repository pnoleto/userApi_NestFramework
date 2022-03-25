import { Module } from '@nestjs/common';
import { PublicAccess } from './public-access.decorator';

@Module({
    imports: [],
    exports: [PublicAccess],
})
export class PublicAccessDecoratorModule { }
