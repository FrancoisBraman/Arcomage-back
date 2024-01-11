-- Revert arcomage:init from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE "card", "resource";

COMMIT;
