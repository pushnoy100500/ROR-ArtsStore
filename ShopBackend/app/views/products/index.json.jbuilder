json.array!(@products) do |product|
  json.extract! product, :id, :name, :image_url, :price, :user_id, :overview, :specification
  json.url product_url(product, format: :json)
end
