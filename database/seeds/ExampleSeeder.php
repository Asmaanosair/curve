<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class ExampleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        $faker = Faker::create();
//        $statuses = DB::table('status')->get();
//        $statusIds = array();
//        foreach($statuses as $status){
//            array_push($statusIds, $status->id);
//        }
//        for($i=0; $i<25; $i++){
//            DB::table('example')->insert([
//                'name'         => $faker->sentence(4,true),
//                'description'       => $faker->paragraph(3,true),
//                'status_id'     => $statusIds[random_int(0,count($statusIds) - 1)],
//            ]);
//        }
//       \App\ApplicationStatus::insert(array(
//            array(
//                'name' => 'Financial',
//                'href' => '/financial',
//                'icon' => 'cil-list',
//                'slug' => 'link',
//                'menu_id' => '1',
//                'sequence' => '37',
//            ),
//
//
//        ));
//        $branch=DB::table('menus')->where('name','Financial')->first()->id;



        DB::table('menu_role')->insert(array(
            array(
                'role_name' => 'client-branch',
                'menus_id' =>3,
            ),
            array(
                'role_name' => 'client-branch',
                'menus_id' =>64,
            ),
            array(
                'role_name' => 'client-branch',
                'menus_id' =>508,
            ),
            array(
                'role_name' => 'client-branch',
                'menus_id' =>2,
            ),
            array(
                'role_name' => 'client-branch',
                'menus_id' =>509,
            ),
            array(
                'role_name' => 'client-branch',
                'menus_id' =>510,
            ),
        ));

    }
}
