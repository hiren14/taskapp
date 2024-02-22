import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
// import { TaskController } from './task/task.controller';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [TaskModule, AuthModule,
  PassportModule.register({defaultStrategy:"jwt"}),
  JwtModule.registerAsync({

  }),
  MongooseModule.forFeature([{name:'User',schema:UserSchema}])
  ],
   controllers: [AuthController],
 providers:[AuthService]
})
export class AppModule {}
