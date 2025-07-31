import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameWodToWods1700000000000 implements MigrationInterface {
    name = 'RenameWodToWods1700000000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Rename the table from 'wod' to 'wods'
        await queryRunner.query(`ALTER TABLE "wod" RENAME TO "wods"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Revert the table name back to 'wod'
        await queryRunner.query(`ALTER TABLE "wods" RENAME TO "wod"`);
    }
} 