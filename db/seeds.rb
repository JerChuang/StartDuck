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


activitybaking = cat2.activities.create!({
  name:  'Baking 101',
  content: 'Welcome to Japanese 101. There\'s no content yet :)',
  duration: 30,
  before_activity_id: nil,
  after_activity_id: nil,
})

activity1 = cat1.activities.create!({
  name:  'Welcome',
  content: "# react-markdown

  Renders Markdown as pure React components.
  
  [![npm version](https://img.shields.io/npm/v/react-markdown.svg?style=flat-square)](https://www.npmjs.com/package/react-markdown)[![Build Status](https://img.shields.io/travis/rexxars/react-markdown/master.svg?style=flat-square)](https://travis-ci.org/rexxars/react-markdown)
  
  Demo available at https://rexxars.github.io/react-markdown/
  
  ---
  
  react-markdown is proudly sponsored by
  

  
  ---
  
  ## Installing
  
  ```
  npm install --save react-markdown
  ```
  
  ## Basic usage
  
  ```js
  const React = require('react')
  const ReactDOM = require('react-dom')
  const ReactMarkdown = require('react-markdown')
  
  const input = '# This is a header\n\nAnd this is a paragraph'
  
  ReactDOM.render(<ReactMarkdown source={input} />, document.getElementById('container'))
  ```",
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

activity4 = cat1.activities.create!({
  name:  'Class 4 Japanese',
  content: 'How to Bake',
  duration: 120,
  before_activity_id: nil,
  after_activity_id: nil,
})

activity5 = cat1.activities.create!({
  name:  'Class 5 Japanese',
  content: 'How to Bake',
  duration: 30,
  before_activity_id: nil,
  after_activity_id: nil,
})

activity6 = cat1.activities.create!({
  name:  'This is the sixth lesson of Japanese',
  content: 'How to Bake',
  duration: 60,
  before_activity_id: nil,
  after_activity_id: nil,
})

activity7 = cat1.activities.create!({
  name:  'Is this needed for Japanese learning?',
  content: 'How to Bake',
  duration: 30,
  before_activity_id: nil,
  after_activity_id: nil,
})

activity8 = cat1.activities.create!({
  name:  'Katagana Japanese',
  content: 'How to Bake',
  duration: 60,
  before_activity_id: nil,
  after_activity_id: nil,
})

activity9 = cat1.activities.create!({
  name:  'Japanese 101',
  content: 'How to Bake',
  duration: 120,
  before_activity_id: nil,
  after_activity_id: nil,
})

activity10 = cat1.activities.create!({
  name:  'Hiragana Japanese',
  content: 'How to Bake',
  duration: 30,
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

activity = agenda.user_activities.create!({
  activity: activity4,
  date: DateTime.new(2019, 6, 22),
  completeness: false,
})

activity = agenda.user_activities.create!({
  activity: activity5,
  date: DateTime.new(2019, 6, 22),
  completeness: false,
})

activity = agenda.user_activities.create!({
  activity: activity6,
  date: DateTime.new(2019, 6, 22),
  completeness: false,
})

activity = agenda.user_activities.create!({
  activity: activity7,
  date: DateTime.new(2019, 6, 22),
  completeness: false,
})

activity = agenda.user_activities.create!({
  activity: activity8,
  date: DateTime.new(2019, 6, 22),
  completeness: true,
})
activity = agenda.user_activities.create!({
  activity: activity9,
  date: DateTime.new(2019, 6, 22),
  completeness: true,
})
activity = agenda.user_activities.create!({
  activity: activity10,
  date: DateTime.new(2019, 6, 22),
  completeness: false,
})


