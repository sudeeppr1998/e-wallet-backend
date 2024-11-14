import { Body, Controller, Post } from '@nestjs/common';
import { UserDocsService } from './user-docs.service';
import { CreateUserDocDto } from './dto/create-user-doc.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDoc } from './entity/user-doc.entity';

@Controller('user-docs')
export class UserDocsController {
  constructor(private readonly userDocsService: UserDocsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user document' })
  @ApiResponse({ status: 201, description: 'The document has been created.', type: UserDoc })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createUserDocDto: CreateUserDocDto): Promise<UserDoc> {
    return this.userDocsService.create(createUserDocDto);
  }
}
