-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vote_Qoute" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "qouteId" INTEGER NOT NULL,
    CONSTRAINT "Vote_Qoute_qouteId_fkey" FOREIGN KEY ("qouteId") REFERENCES "Qoute" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Vote_Qoute" ("id", "qouteId", "userId") SELECT "id", "qouteId", "userId" FROM "Vote_Qoute";
DROP TABLE "Vote_Qoute";
ALTER TABLE "new_Vote_Qoute" RENAME TO "Vote_Qoute";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
