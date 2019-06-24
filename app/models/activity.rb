class Activity < ApplicationRecord
  has_one :user_activities
  belongs_to :category
end
