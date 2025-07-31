import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WodService } from './wod.service';
import { CreateWodDto } from './dto/create-wod.dto';
import { UpdateWodDto } from './dto/update-wod.dto';

@Controller('wods')
export class WodController {

    constructor(private readonly wodService: WodService) { }

    @Post()
    create(@Body() createWodDto: CreateWodDto) {
        return this.wodService.create(createWodDto);
    }

    @Get()
    getAll() {
        return this.wodService.getAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.wodService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateWodDto: UpdateWodDto) {
        await this.wodService.update(id, updateWodDto);
        return this.wodService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.wodService.remove(id);
    }
}
