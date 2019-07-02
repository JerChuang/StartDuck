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
  name:  'Buffalo Chicken Sandwiches',
  content: "# Buffalo Chicken Sandwiches

  Prep time - 10 minutes
  
  Cook time - 20 minutes
  
  ## Ingredients:
  
   * 2 lb of chicken breasts
   * some bread product to put the sandwich on (I used onion rolls)
   * three cloves of garlic
   * about a cup of Frank's Hot Sauce
   * 1/2 of a red onion
   * 2-3 celery stalks
   * 8 oz. of cream cheese
   * blue cheese crumbles
   * a little paprika and/or cumin
   * salt
   * pepper
  
  ## Directions:
  
   * mince garlic, chop onion finely, and dice the celery and put over low heat
     with some olive oil, stirring often
   * while the veggies are cooking a little (not really sauteing or browning
     hopefully), cube the chicken breast.  Heat through in a large pan.
   * after the chicken is cooking, add the hot sauce and spices to the sauce,
     and stir through
   * when the chicken is about cooked, turn off the heat on the sauce and add the
     cream cheese and stir through
   * when all of the cream cheese is blended, and the chicken is done, pour the
     sauce over the chicken and stir
   * cook for another few minutes to blend the flavors a bit
   * toast the bread if you want, and spoon the chicken mixture over the bread
     and top with blue cheese crumbles",
  duration: 30,
  before_activity_id: nil,
  after_activity_id: nil,
})

cat2.activities.create!({
  name:  'Chipotle Black Bean and Rice Stew',
  content: '# Chipotle Black Bean and Rice Stew

  Tags: vegetarian, tried
  
  [Likely origin](http://www.grouprecipes.com/427/chipotle-black-bean-and-rice-stew.html)
  
  
  ## Ingredients
  
   * 1 cup white rice
   * 2 (15 ounce) cans black beans
   * 1 cup frozen white corn kernels
   * 1 (32 ounce) carton vegetable stock
   * 2 Knorr Chipotle Bouillon cubes (or 1-2 well-minced canned chipotle peppers)
   * 1 (15 ounce) can diced tomatoes
   * 1 (8 ounce) can tomato sauce
   * 2 celery ribs, chopped
   * 1 cup sweet white onion or white, minced
   * 3 cloves garlic, chopped
   * 2 tsp chili powder
   * 1 tsp ground coriander
   * 1 1/2 tsp cumin
   * 1 bay leaf
   * 2 tbsp olive oil
  
  
  ## Directions
  
   1. Put a large pot over medium heat.
   1. Put in olive oil and saute your bay leaf, celery, onions, and garlic for
      about 4 minutes.
   1. Crumble up your chipotle cubes into the pot and add corn as well as 2 cans
      of undrained black beans.
   1. Add chili powder, cumin, and coriander. Stir this well.
   1. Add in tomato sauce, tomatoes and stock.
   1. Cover the pot and bring to high-heat and a boil.
   1. Now add rice and bring back to a boil again. Then lower heat, cover, and
      let simmer until the rice is tender.',
  duration: 60,
  before_activity_id: nil,
  after_activity_id: nil,
})

cat2.activities.create!({
  name:  'Chorizo Meatloaf',
  content: '# Chorizo Meatloaf

  ## Meatloaf
  
   - ~1 lb ground beef
   - ~0.5 lb chorizo out of casing
   - carrot, food processor
   - garlic
   - medium onion (save 1/4 for glaze)
   - 1 poblano chile, food processor
   - salt, pepper
   - 1/2 tsp cumin
   - 1 chipotle chile in adobo sauce, blended
   - a little cilantro
   - egg
   - a little cayenne pepper
   - a little worcestershire
   - smoked paprika
  
  ## Glaze
  
  Blend all of these
  
   - 1 chipotle chile in adobo sauce
   - 1 can of tomatoes
   - juice of 1 lime
   - 1/2 teaspoon ground allspice
   - 2 cloves garlic
   - serrano chili
  
  Bake in oven at 350 degrees until cooked
  
  Green onion garnish
  
  ## Notes
  
  Flavor is good but was too spicy. Even with not adding the Chipotle chile to the meat. ',
  duration: 120,
  before_activity_id: nil,
  after_activity_id: nil,
})

cat2.activities.create!({
  name:  'Shoyu-based chicken broth ramen',
  content: '# Shoyu-based chicken broth ramen

  *Version 0.2.0*
  
  ![Shoyu-based chicken broth ramen](https://pbs.twimg.com/media/DvZQrF5UYAA8yuv?format=jpg&name=small)
  
  ## Chicken broth
  
  ### Dashi
  
  1. Put Konbu in 1L water for 30 minutes.
  1. Put Niboshi and boil with low heat until the water is boiling.
  1. Take Konbu off.
  1. Removing a scum, keep boiling water for 10 minutes.
  
  ### Chicken broth
  
  1. For now, using [POPLA International Torigara Stock Paste](https://www.popla.com/new-products/torigara-stock-paste).
  
  > NOTE: This step will be replaced with a real chicken process in a future version.
  
  ## Flavored egg
  
  ### Half-boiled egg
  
  1. Put eggs in a refrigerator for a while.
  1. Take eggs into boiled water for exactly 7 minutes.
  1. Take eggs off and put in cold water.
  
  ### Flavoring
  
  1. Mix Dashi soup 20 ml, Shoyu 40 ml, Mirin 40 ml and put in a Ziplock.
  1. Put the half-boiled egg in the Ziplock.
  1. Put the Ziplock bag in a refrigerator at least for 30 minutes.
  
  > NOTE: **DO NOT** keep eggs in Ziplock with soup longer than a few hours, or these eggs would be too much flavor.
  
  ## Sauce
  
  ### Shoyu sauce
  
  1. Put Shoyu 100 ml, Mirin 100 ml, Sake 25 ml, Konbu, Niboshi into a pan.
  1. Boil it until it has bubbles.
  1. Take Konbu and Niboshi off.
  1. Put sauce into a bowl.
  
  ### Flavored oil
  
  1. Put canola oil, Niboshi, Konbu, Katsuobushi, and chopped white part of green onions into a pan.
  1. Fry them until green onions turn to brown.
  1. Filter oil with a net into a bowl.
  
  ## Chashu
  
  1. Put water 300 ml, Sake 150 ml, sliced gingers, sliced garlic, green part of green onions into a pot.
  1. Put chopped pork libs 200 g to the pot.
  1. Boil it with high heat until water is boiling.
  1. Reduce heat to mid-level and boil it for 10 minutes.
  1. Put a lid on a pot and boil it for 10 minutes.
  1. Stop the heat and keep it for 30 minutes.
  1. Put Shoyu sauce and pork libs into a Ziplock.
  1. Put the Ziplock bag in a refrigerator at least for 30 minutes.
  
  > NOTE: It would be better to keep it in a refrigerator for more extended hours, can be overnight.
  
  ## Greens
  
  1. Boil enough water with small amount of salt in a pot.
  1. Put spinach into the pot and boil for 1.5 minutes.
  1. Take spinach out and put in cold water.
  1. Drain water and cut them in small chunks.
  
  ## Noodles
  
  1. Mix 70 ml cold water with 2g of salt, 20 ml boiled water with 2 g of baking soda.
  1. Mix it with bread flour 250 g and make a dough.
  1. Cut it and make noodles about 70 cm long.
  
  To run these steps, I was using [Philips HR2371/05 Compact Pasta Maker](https://amzn.to/2CBEhJt). This machine produces relatively thick noodles with out-of-box configuration, which requires for about 4 minutes boiling.
  
  ## Ramen
  
  1. Put Dashi in a bowl 300 ml, and dissolve chicken broth paste 3 ml.
  1. Put Shoyu sauce and flavored oil.
  1. Put cooked noodles
  1. Put a flavored egg.
  1. Put a few sliced Chashu.
  1. Put a chink of spinach.
  1. Taste and fun.',
  duration: 60,
  before_activity_id: nil,
  after_activity_id: nil,
})

cat2.activities.create!({
  name:  'Chipotle Black Bean and Rice Stew',
  content: `Crab salad
  ==========
  <img src="http://i.imgur.com/JcilzHb.jpg" alt="Crab salad" width="50%" />
  In a medium bowl, combine:
  
  - 1 pound **lump crabmeat**
  - 1 stalk **celery**, diced
  - 4 teaspoons fresh **chives**, finely sliced
  - 1 teaspoon fresh **tarragon** leaves, minced
  - 70 grams (~1/3 cup) **mayonnaise**
  - 40 grams (~3 tablespoons) **sour cream**
  - 1 tablespoon **lemon** juice
  - 1 teaspoon **Colman's mustard** powder mustard
  - Kosher salt and freshly ground black pepper
  
  Serve immediately, or refrigerate up to two days, with:
  
  ***Whole wheat crackers**`,
  duration: 30,
  before_activity_id: nil,
  after_activity_id: nil,
})

cat2.activities.create!({
  name:  'Brussels Sprouts',
  content: `Brussels Sprouts
  ================
  
  > This recipe is based on [Food Network's publication](http://www.foodnetwork.com/recipes/fried-brussels-sprouts-with-walnuts-and-capers-recipe/index.html) of Michael Symon's recipe for the Brussel's sprouts he serves at [Lolita](http://lolitarestaurant.com/) in Cleveland, OH.
  
  ![Deep fried Brussels sprouts](http://i.imgur.com/vc7WhP2.jpg)
  
  Pour enough oil into a medium pot so that the oil comes 3 inches up the sides. Heat the oil to 350 degrees.
  
  - Canola oil, for deep-frying
  
  Whisk together in a bowl large enough to toss all of the Brussels sprouts:
  
  - 1 clove garlic, minced
  - 4 salt-packed anchovy fillets, rinsed, filleted and minced
  - 1 serrano chile, seeded and minced
  - 1/4 cup red wine vinegar
  - 1 tablespoon honey
  - 2 scallions, white and green parts, thinly sliced on the bias
  - 1/4 cup walnut pieces, toasted and coarsely chopped
  - 1/2 cup extra-virgin olive oil
  
  Working in batches, deep-fry the Brussels sprouts until the edges begin to curl and brown, about 3 minutes.
  
  - 1 pound Brussels sprouts, trimmed and quartered lengthwise
  
  To the last batch, add and stand back (the capers will pop and sputter!):
  
  - 2 cups loosely packed flat-leaf parsley leaves
  - 2 tablespoons salt-packed capers, rinsed and patted dry
  
  When the color of the parsley becomes a deeper, more saturated shade of green, about 30 seconds to 1 minute, remove the contents of the pot with a skimmer and place directly in the bowl of dressing. Toss to coat. Season to taste.
  
  - Kosher salt and freshly ground black pepper`,
  duration: 60,
  before_activity_id: nil,
  after_activity_id: nil,
})

# cat2.activities.create!({
#   name:  'Chipotle Black Bean and Rice Stew',
#   content: `# Chipotle Black Bean and Rice Stew

#   `,
#   duration: 60,
#   before_activity_id: nil,
#   after_activity_id: nil,
# })

# cat2.activities.create!({
#   name:  'Chipotle Black Bean and Rice Stew',
#   content: `# Chipotle Black Bean and Rice Stew

#   `,
#   duration: 60,
#   before_activity_id: nil,
#   after_activity_id: nil,
# })

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


