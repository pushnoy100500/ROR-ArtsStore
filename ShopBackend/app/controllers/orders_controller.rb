class OrdersController < ApplicationController
	def create
		@order = Order.new(order_token: random_token)
		logger.debug(params)
		params[:cart].each do |item|
			@order.products << Product.find(item[:id])
		end		
		
		respond_to do |format|
      		if @order.save
		      # format.html { redirect_to @product, notice: 'Product was successfully created.' }
		        format.json { render :show, status: :created }
      		else
		      #  format.html { render :new }
		        format.json { render json: @order.errors, status: :unprocessable_entity }
      		end
   		end
	end

	private


	
	def random_token
		('A'..'z').to_a.shuffle[0,32].join
	end
end
#random token generation
#('A'..'z').to_a.shuffle[0,32].join
