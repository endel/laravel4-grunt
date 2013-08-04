<?php

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;

class DatabaseResetCommand extends Command {

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'db:reset';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Drop, re-migrate and seed the database.';

	/**
	 * Create a new command instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * Execute the console command.
	 *
	 * @return void
	 */
	public function fire()
	{
		$tables = Schema::connection('mysql')->getConnection()->select("SHOW TABLES");

		foreach($tables as $data) {
			$table = array_values((array) $data)[0];
			Schema::dropIfExists($table);
		}

		$this->call('migrate:install', array());
		$this->call('migrate', array());
		$this->call('db:seed', array());
	}

	/**
	 * Get the console command arguments.
	 *
	 * @return array
	 */
	protected function getArguments()
	{
		return array(
			array('example', InputArgument::OPTIONAL, 'An example argument.'),
		);
	}

	/**
	 * Get the console command options.
	 *
	 * @return array
	 */
	protected function getOptions()
	{
		return array(
			array('example', null, InputOption::VALUE_OPTIONAL, 'An example option.', null),
		);
	}

}

