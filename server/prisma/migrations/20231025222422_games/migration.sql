-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "sport" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "captain" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "current" INTEGER DEFAULT 0,
    "price" INTEGER NOT NULL,
    "picture" TEXT,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
