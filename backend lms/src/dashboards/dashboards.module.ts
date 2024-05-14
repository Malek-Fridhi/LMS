import { Module } from '@nestjs/common';
import { DashboardsService } from './dashboards.service';
import { DashboardsController } from './dashboards.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DashboardsController],
  providers: [DashboardsService,PrismaService],
})
export class DashboardsModule {}
