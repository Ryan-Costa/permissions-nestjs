import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from 'bcrypt';
import { CaslAbilityService } from 'src/casl/casl-ability/casl-ability.service';
import { Prisma } from '@prisma/client';
import { accessibleBy } from '@casl/prisma';

@Injectable()
export class UsersService {
  constructor(
    private prismaService: PrismaService,
    private abilityService: CaslAbilityService,
  ) {}

  create(createUserDto: CreateUserDto) {
    const ability = this.abilityService.ability;

    if (!ability.can('create', 'User')) {
      throw new Error('Unauthorized');
    }

    return this.prismaService.user.create({
      data: {
        ...createUserDto,
        password: bcrypt.hashSync(createUserDto.password, 10),
        permissions: createUserDto.permissions as Prisma.InputJsonValue,
      },
    });
  }

  findAll() {
    const ability = this.abilityService.ability;

    if (!ability.can('read', 'User')) {
      throw new Error('Unauthorized');
    }

    return this.prismaService.user.findMany({
      where: {
        AND: [accessibleBy(ability, 'read').User],
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: { id },
      data: {
        ...updateUserDto,
        permissions: updateUserDto.permissions as Prisma.InputJsonValue,
      },
    });
  }

  remove(id: string) {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
