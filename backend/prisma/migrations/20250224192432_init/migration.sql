/*
  Warnings:

  - You are about to alter the column `preference` on the `UserPreference` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `Entrance` MODIFY `roomId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `UserPreference` MODIFY `preference` ENUM('fastest', 'scenic', 'accessible') NOT NULL;
