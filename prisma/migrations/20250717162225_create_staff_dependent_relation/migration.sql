-- AddForeignKey
ALTER TABLE "preRequisite" ADD CONSTRAINT "preRequisite_mod_code_fkey" FOREIGN KEY ("mod_code") REFERENCES "module"("mod_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "preRequisite" ADD CONSTRAINT "preRequisite_requisite_fkey" FOREIGN KEY ("requisite") REFERENCES "module"("mod_code") ON DELETE RESTRICT ON UPDATE CASCADE;
