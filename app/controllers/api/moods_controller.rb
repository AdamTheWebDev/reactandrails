module Api
  class MoodsController < ApplicationController
    def index
      render json: Mood.all
    end
  end
end
