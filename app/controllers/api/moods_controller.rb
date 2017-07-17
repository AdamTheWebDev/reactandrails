module Api
  class MoodsController < ApplicationController
    before_action :set_mood, only: [:update, :destroy]

    def index
      render json: Mood.all
    end
    def create
      mood = Mood.new(mood_params)
      if mood.save
        render json: mood
      else
        render nothing: true, status: :bad_request
      end
    end
    def update
     if @mood.update(mood_params)
       render json: @mood
     else
       render nothing: true, status: :unprocessable_entity
     end
   end
    def search
      query = params[:query]
      moods = Mood.where('input_url LIKE ? OR status LIKE ? OR output LIKE ?',
                       "%#{query}%", "%#{query}%", "%#{query}%")
      render json: moods
    end

  private

  def mood_params
    params.require(:mood).permit(:input_url, :status, :output)
  end
  def set_mood
     @mood = Mood.find(params[:id])
   end
  

end
