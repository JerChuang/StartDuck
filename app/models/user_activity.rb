class UserActivity < ApplicationRecord
  belongs_to :user_agenda
  belongs_to :activity
end
 