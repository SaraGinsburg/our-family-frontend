BH

6/14
##To Do
  rename siblings to users
  The full list of things to rename are:

      table name
      foreign key column names in associations (model_id columns)
      model file name in app/models/
      class name in app/models/model.rb
      associations in other models (has_one/has_many)
      controller file name in app/controllers/
      class name in app/controllers/models_controller.rb
      folder name in app/views/
      resource route in config/routes.rb
      fixture file name in test/fixtures/
      references to the model in associated fixtures in test/fixtures/
      unit test file name in test/unit/
      class name in test/unit/model_test.rb
      controller test file name in test/functional/
      class name in test/functional/models_controller_test.rb
      find/replace the class name anywhere in your code
       you can use your IDE (RadRails/RubyMine) to help.

  modify model to include role
  kindWords and niceDeeds should include status pending/approved

  finish login Authorization
