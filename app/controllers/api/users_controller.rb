class Api::UsersController < ApplicationController
  def create
    user = User.create(:email => params['email'])
  end

  def show
    @completed_activities = User.find_by(email:params['email']).user_activities.where(completeness: true)
    @activities = @completed_activities.select('user_activities.*, activities.*').joins("INNER JOIN activities ON user_activities.activity_id = activities.id")
    @categories = @completed_activities.map {|user_activity|user_activity.activity.category}.uniq

    render :json => {
      activities: @activities,
      categories: @categories
    }
  end
end
