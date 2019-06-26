class Api::UserActivitiesController < ApplicationController
  def index
    @user_agenda = User.find_by(email:params['email']).user_agendas.last
    @user_activities = @user_agenda.user_activities.where(date: params['date'])

    # @activities = @user_activities.joins("INNER JOIN activities ON user_activities.activity_id = activities.id")
    @activities = @user_activities.map{|user_activity|user_activity.activity}
    @categories = @user_activities.map {|user_activity|user_activity.activity.category.name}.uniq
  
    render :json => {
      activities: @activities,
      categories: @categories
    }
  end
  
  def show
    @user_agenda = User.find_by(email:params['email']).user_agendas.last
    @user_activities = @user_agenda.user_activities.where(date: params['date'])
    @activities = @user_activities.map{|user_activity|user_activity.activity}
    @categories = @user_activities.map {|user_activity|user_activity.activity.category.name}.uniq
    render :json => {
      activities: @activities,
      categories: @categories
    }
  end

end
