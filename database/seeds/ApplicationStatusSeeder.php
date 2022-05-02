<?php

use Illuminate\Database\Seeder;

class ApplicationStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('application_statuses')->insert(array(
            array(
                'name' => 'NEW_APP',
                'class' => 'warning',
            ),
            array(
                'name' => 'APPROVED_BY_SUPPLIER',
                'class' => 'primary',
            ),
            array(
                'name' => 'APPROVED_BY_CURVE',
                'class' => 'success',
            ),
            array(
                'name' => 'REJECTED_BY_SUPPLIER',
                'class' => 'info',
            ),
            array(
                'name' => 'REJECTED_BY_CURVE',
                'class' => 'danger',
            ),

        ));
    }
}
