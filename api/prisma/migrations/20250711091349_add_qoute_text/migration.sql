/*
  Warnings:

  - You are about to drop the column `qoute` on the `Qoute` table. All the data in the column will be lost.
  - Added the required column `text` to the `Qoute` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Qoute" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL
);
INSERT INTO "new_Qoute" ("id") SELECT "id" FROM "Qoute";
DROP TABLE "Qoute";
ALTER TABLE "new_Qoute" RENAME TO "Qoute";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
