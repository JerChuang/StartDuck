# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Data ..."

# Helper functions
def open_asset(file_name)
    File.open(Rails.root.join('db', file_name))
  end

  # Only run on development (local) instances not on production, etc.
  # unless Rails.env.development?
  #   puts "Development seeds only (for now)!"
  #   exit 0
  # end

  # Let's do this ...

  ## USERS
User.destroy_all

user = User.create! ({
  first_name: 'bob',
  last_name: 'Dee',
  email: 'bob@Dee.com',
  password: "123"
})


## CATEGORIES

puts "Finding or Creating Categories ..."
Category.destroy_all

cat1 = Category.find_or_create_by! name: 'Japanese'
cat2 = Category.find_or_create_by! name: 'Cooking'
cat3 = Category.find_or_create_by! name: 'Coding'

## ACTIVITIES

puts "Re-creating Activities ..."

Activity.destroy_all

activity1 = cat1.activities.create!({
  name:  'Welcome',
  content: 'Welcome to Japanese 101. There\'s no content yet :)',
  duration: 30,
  before_activity_id: nil,
  after_activity_id: nil,
})

activity2 = cat1.activities.create!({
  name:  'Introduction',
  content: 'Welcome to Japanese 101. There\'s no introduction either :)',
  duration: 60,
  before_activity_id: nil,
  after_activity_id: nil,
})

activity3 = cat1.activities.create!({
  name:  'Life as a Japanese Speaker',
  content: 'Building Content',
  duration: 120,
  before_activity_id: nil,
  after_activity_id: nil,
})

cat2.activities.create!({
  name:  'Cooking 101',
  content: 'How to Bake',
  duration: 120,
  before_activity_id: nil,
  after_activity_id: nil,
})

cat2.activities.create!({
  name:  'Cooking 102',
  content: 'How to Bake',
  duration: 120,
  before_activity_id: nil,
  after_activity_id: nil,
})

cat2.activities.create!({
  name:  'Cooking 103',
  content: 'How to Bake',
  duration: 120,
  before_activity_id: nil,
  after_activity_id: nil,
})

## User Agenda


puts "Generating user agenda ... "
UserAgenda.destroy_all

agenda = user.user_agendas.create!({
  start_date: DateTime.new(2019, 6, 22),
  end_date: DateTime.new(2019, 8, 22),
  hours_per_day: 3,
})

## User Activities


puts "Generating user activities ... "
UserActivity.destroy_all

activity = agenda.user_activities.create!({
  activity: activity1,
  date: DateTime.new(2019, 6, 22),
  completeness: false,
})

activity = agenda.user_activities.create!({
  activity: activity2,
  date: DateTime.new(2019, 6, 22),
  completeness: true,
})

activity = agenda.user_activities.create!({
  activity: activity3,
  date: DateTime.new(2019, 6, 22),
  completeness: false,
})


