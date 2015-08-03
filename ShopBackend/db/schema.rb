# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150731150533) do

  create_table "orders", force: :cascade do |t|
    t.string   "order_token", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "orders_products", force: :cascade do |t|
    t.integer "product_id"
    t.integer "order_id"
  end

  add_index "orders_products", ["order_id"], name: "index_orders_products_on_order_id"
  add_index "orders_products", ["product_id"], name: "index_orders_products_on_product_id"

  create_table "products", force: :cascade do |t|
    t.string   "name"
    t.string   "image_url_file_name"
    t.string   "image_url_content_type"
    t.integer  "image_url_file_size"
    t.datetime "image_url_updated_at"
    t.decimal  "price"
    t.integer  "user_id"
    t.string   "overview"
    t.text     "specification"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

end
