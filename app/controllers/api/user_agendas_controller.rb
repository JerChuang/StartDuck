class Api::UserAgendasController < ApplicationController
  def create
    # insert agenda data into database and find user's id by the user's email
    @agenda = UserAgenda.new(agenda_params)
    @user = User.find_by(email:params['email'])
    @user_id = @user.id
    @agenda.user_id = @user_id
    @agenda.save
    # list all dates as an array
    @days = (@agenda.start_date..@agenda.end_date).map(&:to_s)

    @mins_per_day = @agenda.hours_per_day * 60

    # select all activities that match categories
    @category_id = Category.where(name: params[:categories]).pluck(:id)
    @activities = Activity.where(category_id: @category_id)

    recommended_activities = []
    for date in @days do
      while @mins_per_day > 0
        for  activity in @activities do
          if activity.duration <= @mins_per_day
             recommended_activities.push(
              {activity_id:activity.id,
               date:date
              })
             @mins_per_day -= activity.duration
          end
        end
      end
    end


    byebug
    @activities.each do |activity|
      UserActivity.create!(
        activity: activity,
        user_agenda: @agenda
        )
    end
  end

private
  def agenda_params
    params.require(:user_agenda).permit(
        :start_date,
        :end_date,
        :hours_per_day
    )
  end

end
