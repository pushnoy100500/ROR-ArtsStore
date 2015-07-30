class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.attachment :image_url
      t.decimal :price
      t.integer :user_id
      t.string :overview
      t.text :specification

      t.timestamps null: false
    end
  end
end
