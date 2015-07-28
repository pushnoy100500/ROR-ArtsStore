# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Product.create(name: 'Picture #1', image_url: 'dummy-icon.png', price: 2.50, user_id: 1, 
				overview: 'quick overview of the current picture', 
				specification: 'dummy specification that is supposed to take more space than it is required')
Product.create(name: 'Picture #2', image_url: 'dummy-icon.png', price: 4.53, user_id: 1, 
				overview: 'quick overview of the current picture', 
				specification: 'dummy specification that is supposed to take more space than it is required')
Product.create(name: 'Picture #3', image_url: 'dummy-icon.png', price: 1.20, user_id: 1, 
				overview: 'quick overview of the current picture', 
				specification: 'dummy specification that is supposed to take more space than it is required')
Product.create(name: 'Picture #4', image_url: 'dummy-icon.png', price: 32.2, user_id: 1, 
				overview: 'quick overview of the current picture', 
				specification: 'dummy specification that is supposed to take more space than it is required')
Product.create(name: 'Picture #5', image_url: 'dummy-icon.png', price: 50, user_id: 1, 
				overview: 'quick overview of the current picture', 
				specification: 'dummy specification that is supposed to take more space than it is required')