class Api::UsersController < ApplicationController
  def show
    @completed_activities = User.find_by(email:params['email']).user_activities.where(completeness: true)
    render :json => {
      completed: @completed_activities
    }
  end
end
