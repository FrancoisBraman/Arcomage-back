-- Verify arcomage:init on pg

BEGIN;

-- XXX Add verifications here.
SELECT "id", "type", "stock","color", "logo", "resource_generator","generator quantity"
FROM "resource" WHERE false;



SELECT "id","name","cost","image","effect","rarity" ,"resource_id"
FROM "card" WHERE false;

ROLLBACK;
