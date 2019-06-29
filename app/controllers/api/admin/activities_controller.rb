class Api::Admin::ActivitiesController < ApplicationController
    def index
        @activities = Activity.all

        render :json => {
            activities: @activities
        }
    end


end
