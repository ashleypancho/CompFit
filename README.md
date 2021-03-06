#CompFit

##How To Set Up Dev Environment

1. Clone the repository
2. cd into the directory of the cloned repo and run `vagrant up`
3. Run `vagrant --reload provision`
4. run `vagrant ssh`
5. To add the SQL file as the database, run `mysql -uroot -p compfit < compfitmockdata.sql`	
6. run `sudo a2enmod rewrite`
7. edit /etc/apache2/apache2.conf so that this section:

	```
	<Directory /var/www/>
	Options Indexes FollowSymLinks
	AllowOverride None
	Require all granted
	```

	Looks like this:


	```
	<Directory /var/www/>
	Options Indexes FollowSymLinks
	AllowOverride All
	Require all granted
	```
8. then restart apache by running `sudo service apache2 restart`

##How to Run the Server
1. SSH into the vagrant box
2. Run `cd /var/www/html/app`
3. Run `gulp`
4. In the browser, navigate to `http://localhost:8080/`
5. Edit files
6. Ctrl-C to stop server
7. Run `gulp` to start again to see edits

##Building the App
Building the app creates static files, so webpack-dev-server does not have to be running.
You will build the server to run the API calls. As of now, you cannot make API calls without building.

1. Run `cd /var/www/html/app`
2. Run `gulp build`
3. In the browser, navigate to `http://localhost:9000/`

##Make API calls
For now, when making api calls, you want to go to `/api/endpoint`
