-- Deploy arcomage:init to pg

BEGIN;

DROP TABLE IF EXISTS "resource", "card";

DROP TYPE IF EXISTS "special_enum", "rarity_enum";

CREATE TYPE "special_enum" AS ENUM ('none', 'playagain', 'drawDiscardPlayagain', 'undiscardable');

CREATE TYPE "rarity_enum" AS ENUM ('common', 'rare', 'super-rare');

CREATE TABLE "resource" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "type" TEXT NOT NULL,
    "stock" SMALLINT DEFAULT (5),
    "color" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "resource_generator" TEXT NOT NULL,
    "generator_quantity" SMALLINT DEFAULT (2),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "card" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
	"desc" TEXT NOT NULL,
    "cost" INT NOT NULL,
    "image" TEXT NOT NULL,
	"special" special_enum NOT NULL,
    "effect" TEXT NOT NULL,
    "rarity" rarity_enum NOT NULL,
    "resource_id" INT NOT NULL REFERENCES "resource"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

COMMIT;
