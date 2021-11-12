import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    cats: string[] = ['😸', '😹', '😺', '😻'];

    @Get()
    findAll(): string {
        return this.cats.join(',');
    }

    @Get(':id')
    get(@Param('id') id: string): string {
        const numId = parseInt(id);
        if (isNaN(numId) || numId < 0 || this.cats.length <= numId) {
            throw new NotFoundException()
        }
        return this.cats[numId];
    }
}
