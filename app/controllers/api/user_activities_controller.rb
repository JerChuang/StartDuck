class Api::UserActivitiesController < ApplicationController
  def index
    @user_agenda = User.find_by(email:params['email']).user_agendas.last
    @user_activities = @user_agenda.user_activities.where(date: params['date'])
    @agenda_dates = (@user_agenda.start_date...@user_agenda.end_date+1).map(&:to_s)
    @activities = @user_activities.select('user_activities.*, activities.*').joins("INNER JOIN activities ON user_activities.activity_id = activities.id")
    # @activities = @user_activities.map{|user_activity|user_activity.activity}
    @categories = @user_activities.map {|user_activity|user_activity.activity.category.name}.uniq
   

    render :json => {
      activities: @activities,
      categories: @categories,
      agenda: @agenda_dates,
    }
  end

  def show
    @user_agenda = User.find_by(email:params['email']).user_agendas.last
    @user_activities = @user_agenda.user_activities.where(date: params['date'])
    @activities = @user_activities.select('user_activities.*, activities.*').joins("INNER JOIN activities ON user_activities.activity_id = activities.id")
    @categories = @user_activities.map {|user_activity|user_activity.activity.category.name}.uniq
   
    render :json => {
      activities: @activities,
      categories: @categories,  
    }
  end

  def update
    @user_agenda = User.find_by(email:params['email']).user_agendas.last
    @user_agenda.user_activities.where(activity_id:params["id"]).update(completeness:params['completeness'])
  end
end
