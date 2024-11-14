import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDoc } from './entity/user-doc.entity';
import { CreateUserDocDto } from './dto/create-user-doc.dto';
@Injectable()
export class UserDocsService {
  constructor(
    @InjectRepository(UserDoc)
    private userDocsRepository: Repository<UserDoc>,
  ) {}

  async create(createUserDocDto: CreateUserDocDto): Promise<UserDoc> {
    const userDoc = this.userDocsRepository.create(createUserDocDto);
    return await this.userDocsRepository.save(userDoc);
  }
}
