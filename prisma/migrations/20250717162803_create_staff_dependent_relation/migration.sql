-- AddForeignKey
ALTER TABLE "studModPerformance" ADD CONSTRAINT "stud_mod_performance_adm_no_fk" FOREIGN KEY ("adm_no") REFERENCES "student"("adm_no") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studModPerformance" ADD CONSTRAINT "stud_mod_performance_mod_registered_fk" FOREIGN KEY ("mod_registered") REFERENCES "module"("mod_code") ON DELETE RESTRICT ON UPDATE CASCADE;
