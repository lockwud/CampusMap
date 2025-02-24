/*
  Warnings:

  - Added the required column `updatedAt` to the `Entrance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `floorId` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `UserPreference` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Entrance` DROP FOREIGN KEY `Entrance_buildingId_fkey`;

-- DropForeignKey
ALTER TABLE `Entrance` DROP FOREIGN KEY `Entrance_roomId_fkey`;

-- DropForeignKey
ALTER TABLE `Room` DROP FOREIGN KEY `Room_buildingId_fkey`;

-- DropForeignKey
ALTER TABLE `RoomNeighbor` DROP FOREIGN KEY `RoomNeighbor_roomId_fkey`;

-- DropForeignKey
ALTER TABLE `RoomNeighbor` DROP FOREIGN KEY `RoomNeighbor_toRoomId_fkey`;

-- DropIndex
DROP INDEX `Entrance_buildingId_fkey` ON `Entrance`;

-- DropIndex
DROP INDEX `Entrance_roomId_fkey` ON `Entrance`;

-- DropIndex
DROP INDEX `Room_buildingId_fkey` ON `Room`;

-- DropIndex
DROP INDEX `RoomNeighbor_roomId_fkey` ON `RoomNeighbor`;

-- DropIndex
DROP INDEX `RoomNeighbor_toRoomId_fkey` ON `RoomNeighbor`;

-- AlterTable
ALTER TABLE `Building` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Entrance` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Room` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `floorId` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `UserPreference` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `Floor` (
    `id` VARCHAR(191) NOT NULL,
    `number` INTEGER NOT NULL,
    `buildingId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserLocation` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `lat` DOUBLE NOT NULL,
    `lng` DOUBLE NOT NULL,
    `buildingId` VARCHAR(191) NULL,
    `roomId` VARCHAR(191) NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `UserLocation_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Floor` ADD CONSTRAINT `Floor_buildingId_fkey` FOREIGN KEY (`buildingId`) REFERENCES `Building`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_buildingId_fkey` FOREIGN KEY (`buildingId`) REFERENCES `Building`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_floorId_fkey` FOREIGN KEY (`floorId`) REFERENCES `Floor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomNeighbor` ADD CONSTRAINT `RoomNeighbor_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomNeighbor` ADD CONSTRAINT `RoomNeighbor_toRoomId_fkey` FOREIGN KEY (`toRoomId`) REFERENCES `Room`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Entrance` ADD CONSTRAINT `Entrance_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Entrance` ADD CONSTRAINT `Entrance_buildingId_fkey` FOREIGN KEY (`buildingId`) REFERENCES `Building`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
