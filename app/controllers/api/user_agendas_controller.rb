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

    # @mins_per_day = @agenda.hours_per_day * 60
    # select all activities that match categories
    @category_id = Category.where(name: params[:categories]).pluck(:id)
    @activities = Activity.where(category_id: @category_id)

    # assign activities and date
    @recommended_activities = []
    for date in  @days do
        @mins_per_day = @agenda.hours_per_day * 60
        fetch_date(date)
    end

    @recommended_activities.each do |activity|
      UserActivity.create!(
        activity_id: activity[:activity_id],
        date: activity[:date],
        user_agenda_id: @agenda.id,
        completeness: false
        )
    end
  end

  def fetch_date(date)
  # while @mins_per_day > 0
    @unpicked_activities = @activities[@recommended_activities.length, @activities.length]
     for activity in @unpicked_activities do
      if activity.duration <= @mins_per_day
         @recommended_activities.push(
          {activity_id:activity.id,
           date:date
          })
         @mins_per_day -= activity.duration
         if @mins_per_day <= 0
         break
        end
      end
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
