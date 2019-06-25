class UserAgenda < ApplicationRecord
  belongs_to :user
  has_many :user_activities
  has_many :activities, through: :user_activities
end
