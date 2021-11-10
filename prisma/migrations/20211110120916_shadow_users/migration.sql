-- CreateTable
CREATE TABLE "UserShadow" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255),
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserShadow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserShadow_email_key" ON "UserShadow"("email");
