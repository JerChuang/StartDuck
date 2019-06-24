class Activity < ApplicationRecord
  has_one :user_activity
  belongs_to :category
end
