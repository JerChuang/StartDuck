class Api::Admin::ActivitiesController < ApplicationController
    def index
        @activities = Activity.all

        render :json => {
            activities: @activities
        }
    end
    
    def show
        @activity = Activity.find params[:id]
        
        render :json => {
            activity: @activity
        }
    end

    def destroy
        @activity = Activity.find params[:id]
        @activity.destroy
    end
    
	def create
		# byebug
		# @category_id = Category.where(name: params[:categories]).pluck(:id)
		@activity = Activity.create!(
			category_id: params[:category],
			name: params[:name],
			content: params[:content],
			duration: params[:duration]
			)
    end

    def update
        @activity = Activity.find params[:id]
        @activity.update(	
            category_id: params[:category],
            name: params[:name],
            content: params[:content],
            duration: params[:duration]
            ) 
    end

    # private

    # def actvity_params
    #     params.require(:activity).permit(
    #       :name,
    #       :content,
	# 	  :duration,
	# 	)
    # end

end
