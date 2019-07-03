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
  content: "
  ![Buffalo Chicken Sandwiches](  https://www.thecookierookie.com/wp-content/uploads/2015/09/buffalo-chicken-sandwiches-with-ranch-fried-pickles-6-of-11-500x375.jpg
  )

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
  content: '
  ![Chipotle Black Bean and Rice Stew](https://www.camelliabrand.com/static/wp-content/uploads/2015/07/ccc-chipotle-black-bean-soup-720x400.jpg)

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
  content: '
  ![Chorizo Meatloaf](http://muybuenocookbook.com/wp-content/uploads/2014/01/Chorizo-and-Chipotle-Meatloaf1.jpg
  )
  
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
  content: '![Shoyu-based chicken broth ramen](https://pbs.twimg.com/media/DvZQrF5UYAA8yuv?format=jpg&name=small)

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
  name:  'Crab salad',
  content: '
  ![crab salad](https://champagne-tastes.com/wp-content/uploads/2017/08/king-crab6-small-1-1.jpg)

  ##### In a medium bowl, combine:

  - 1 pound **lump crabmeat**
  - 1 stalk **celery**, diced
  - 4 teaspoons fresh **chives**, finely sliced
  - 1 teaspoon fresh **tarragon** leaves, minced
  - 70 grams (~1/3 cup) **mayonnaise**
  - 40 grams (~3 tablespoons) **sour cream**
  - 1 tablespoon **lemon** juice
  - 1 teaspoon **Colman\'s mustard** powder mustard
  - Kosher salt and freshly ground black pepper

  Serve immediately, or refrigerate up to two days, with:

  ***Whole wheat crackers**',
  duration: 30,
  before_activity_id: nil,
  after_activity_id: nil,
})

cat2.activities.create!({
  name:  'Brussels Sprouts',
  content: 'This recipe is based on [Food Network\'s publication](http://www.foodnetwork.com/recipes/fried-brussels-sprouts-with-walnuts-and-capers-recipe/index.html) of Michael Symon\'s recipe for the Brussel\'s sprouts he serves at [Lolita](http://lolitarestaurant.com/) in Cleveland, OH.

  ![Deep fried Brussels sprouts](https://keviniscooking.com/wp-content/uploads/2014/07/Honey-Balsamic-Roasted-Brussels-Sprouts-square.jpg)

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

  - Kosher salt and freshly ground black pepper',
  duration: 30,
  before_activity_id: nil,
  after_activity_id: nil,
})

cat2.activities.create!({
  name:  'Greek salad',
  content: "![Greek salad](https://www.jessicagavin.com/wp-content/uploads/2018/02/greek-salad-2-1200-500x500.jpg)

  [Source](http://www.foodnetwork.com/recipes/ina-garten/greek-salad-recipe.html)

  Vinaigrette
  -----------

  In a small bowl, whisk together:

  - 3 cloves garlic, minced
  - 1 teaspoon dried oregano
  - 1/2 teaspoon Dijon mustard
  - 1/4 cup good red wine vinegar
  - 1 teaspoon kosher salt
  - 1/2 teaspoon freshly ground black pepper

  While whisking, slowly add to make an emulsion:

  - 1/2 cup good olive oil

  Salad
  -----

  In a large bowl, combine and toss lightly:

  - 1 hothouse cucumber, unpeeled, seeded, and sliced 1/4-inch thick
  - 1 red bell pepper, large-diced
  - 1 yellow bell pepper, large-diced
  - 1 pint cherry or grape tomatoes, halved
  - 1/2 red onion, sliced in half-rounds
  - 1/2 pound feta cheese block, 1/2-inch diced
  - 1/2 pound feta cheese, crumbled
  - 1/2 cup kalamata olives, pitted
  - Vinaigrette

  Set aside for 30 minutes to allow the flavors to blend. Serve at room temperature.",
  duration: 60,
  before_activity_id: nil,
  after_activity_id: nil,
})

cat2.activities.create!({
  name:  'Chicken and dumplings',
  content: '
  ![Chicken and dumplings](https://spicysouthernkitchen.com/wp-content/uploads/chicken-and-dumplings-3.jpg)
  
  Season and dredge both sides:

  - 4 chicken thighs
  - Salt and pepper
  - 1/2 cup all-purpose flour

  In two batches, brown chicken on both sides and remove to a clean plate:

  - Chicken
  - 2 tablespoons butter
  - 2 tablespoons olive oil

  In the same pot, saute over medium-low heat (about 3-4 minutes):

  - 1/2 cup carrots, diced
  - 1/2 cup celery, diced
  - 1 whole medium onion, diced

  Add to combine, cover and simmer for 20 minutes:

  - Chicken
  - 1/2 teaspoon ground thyme
  - 1/4 teaspoon turmeric
  - 6 cups low sodium chicken broth [cut sauce in half?]
  - 1/2 cup apple cider [cut sauce in half?]

  While chicken is simmering, make the dough for the dumplings by sifting together all dry ingredients, adding  half-and-half, and stirring gently to combine. Set aside.

  [cut dumpling quantity in half?]

  - 1-1/2 cup all-purpose flour
  - 1/2 cup yellow cornmeal [Ashley doesn\'t like the corn meal]
  - 1 tablespoon baking powder
  - 1 teaspoon kosher salt
  - 1 1/2 cup half-and-half

  Remove chicken from pot and shred it. Add to combine, then simmer for 15 minutes:

  - Shredded chicken, skins discarded
  - 1/2 cup heavy cream [cut sauce in half?]
  - Dumpling dough, roughly formed into tablespoon-sized balls
  - 2 tablespoons fresh parsley, minced
  - Kosher salt

  Allow to sit for 10 minutes before serving.',
  duration: 60,
  before_activity_id: nil,
  after_activity_id: nil,
})



activity1 = cat1.activities.create!({
  name:  'Awesome Japanese',
  content: "# Contents

- [Awesome Japanese](#awesome-japanese)
    - [Beginner Guide](#beginner-guide)
    - [Textbook](#textbook)
    - [Course](#course)
    - [Hiragana & Katakana](#hiragana-and-katakana)
    - [Kanji](#kanji)
    - [Vocabulary](#vocabulary)
    - [Grammar](#grammar)
    - [Reading](#reading)
    - [Listening](#listening)
    - [Community](#community)
    - [Video](#video)
    - [Dictionary](#dictionary)
  - [Software](#software)

## Beginner Guide

**__New to Japanese?__** Start here!

1. All beginners should start with one of the guides below (one of the top two are the best in my personal opinion).

  * [Starter's Guide](https://www.reddit.com/r/LearnJapanese/wiki/index/startersguide) - from /r/learnjapanese subreddit.
  * [DJT guide](https://djtguide.neocities.org/guide.html) - A well-written guide
  * [All Japanese All The Time (Overview/Timeline)](https://www.youtube.com/watch?v=9PdPOxiWWuU) - For people willing to completely immerse themselves in Japanese.
  * [Japanese Walkthrough](http://japaneselevelup.com/japanese-quest-walkthrough/) - A visual learning guide.
  * [Nukemarine's Suggested Guide for Beginners](https://forum.koohii.com/thread-5110.html) - A roadmap aimed at people involved in a career where one can only spare 1 to 2 hours a day for study.
  * [Grammar Guide to Japanese](http://www.guidetojapanese.org/learn/grammar) - By Tae Kim (this is a work in progress/not yet complete).

2. A summary of the guides is basically this:  first, learn hiragana and katakana using the links in [Hiragana/Katkana](#hiragana-and-katakana) section further down this page.  The Tofugu links is a good starting place.

3. Next is grammar/vocabulary.  You can either use a structured textbook or a more free-form online grammar guide like Tae-Kim.  Either one works, try one or both and stick with the one you like the best.

  For vocabulary, three nice options are [Wanikani](https://www.wanikani.com/), [Memrise](https://www.memrise.com/), or [Anki](https://djtguide.neocities.org/anki.html).  If you go with the Anki route, consider [using this deck](https://docs.google.com/document/d/1zyyuiWkiz2IF2CCROeJebl8mgRdHBqNfS5D7MFjDTzE/edit), which is the same as the deck in the above link, but with the front and back flipped around to display sentences on the front rather than single words, as this will force you to learn words in context.

  For translation, try to avoid Google Translate.  Instead pick another one from the [Dictionary](#dictionary) list.

4. That's it.  There are many, many paths to learning Japanese.  The most important thing is to choose the one you enjoy.  If you don't enjoy your study, you won't succeed, so keep searching until you find the resource or study method that you enjoy.  Look through all the resources below, ask someone if you need help, and good luck.

## Textbook

*Textbooks provides you with a structured learning material.*",
  duration: 30,
  before_activity_id: nil,
  after_activity_id: nil,
})

activity2 = cat1.activities.create!({
  name:  'Hiragana & Katakana',
  content: '# Hiragana and Katakana

*Alphabet of Japanese language.*

* Hiragana
  * [Tofugu for Hiragana](https://www.tofugu.com/japanese/learn-hiragana/) - Hiragana lesson.
  * [Learn Hiragana in 1 Hour](https://youtu.be/6p9Il_j0zjc) - Hiragana video lesson.
  * [Hiragana Practice Sheet](http://japanese-lesson.com/resources/pdf/characters/hiragana_writing_practice_sheets.pdf) - Print and practice.
  * [Listening Game for Hiragana](http://www.digitaldialects.com/Japanese/Hiragana.htm) - Flash based Hiragana game.
* Katakana
  * [Tofugu for Katakana](https://www.tofugu.com/japanese/learn-katakana/) - Katakana lesson.
  * [Learn Katakana in 1 Hour](https://youtu.be/s6DKRgtVLGA) - Katakana video lesson.
  * [Listening Game for Katakana](http://www.digitaldialects.com/Japanese/Katakana.htm) - Flash based Katakana game.
  * [Katakana Practice Sheet](http://japanese-lesson.com/resources/pdf/characters/katakana_writing_practice_sheets.pdf) - Print and practice.
* App
  * [Hiragana and Katakana](https://itunes.apple.com/us/app/hiragana-and-katakana-complete-basics-of-japanese/id385817288?mt=8) - iOS Hiragana and Katakana learning app:iphone:
  * [Kana Dojo](https://play.google.com/store/apps/details?id=com.fastbreakapps.kanadojo&hl=en) - Android Hiragana and Katakana learning app:iphone:
* Anki Deck
  * [Hiragana + Katakana w/ Audio & Stroke Order](https://ankiweb.net/shared/info/1632090287) - :card_index:

## Kanji

* [Hacking Kanji](https://nihongoshark.com/learn-kanji/) - Guide: 2,200 Kanji in 97 Days.
* [Kanji Koohii](https://kanji.koohii.com/) - Help you complete the kanji learning method called Remembering the Kanji.
* [Kanji Damage](http://www.kanjidamage.com/introduction) - A Kanji learning method.
* [Wakikani](https://www.wanikani.com/) - Kanji learning platform.:moneybag:
* Anki Deck
  * [DJT Anki Guide](https://djtguide.neocities.org/anki.html) - A guide for downloading/customizing Anki with a link to the popular 6k/2k deck
  * [Kodansha kanji learners course with vocabulary](https://ankiweb.net/shared/info/779483253) - :card_index:This deck is meant to be used together with the Kodansha Kanji Learners Course book (KLC).
  * [Official KanjiDamage deck](https://ankiweb.net/shared/info/748570187) - :card_index:This is the ultimate deck to learn Kanji with the KanjiDamage method.
  * [All in One Kanji Deck (Heisigs RTK Order, 6th ed.)](https://ankiweb.net/shared/info/1862058740) - :card_index:Based on Heisigs Remember the Kanji 6th ed. book.

## Vocabulary

* [Anki](https://apps.ankiweb.net/) - Popular flashcard based software.:iphone::computer:
  * [Anki User Manual](https://apps.ankiweb.net/docs/manual.html)
  * [How to use Anki to Learn Japanese](https://youtu.be/dPVpsX9ZPWE) - Anki video tutorial.
  * [Nayrs Core 5000](https://www.reddit.com/r/LearnJapanese/comments/4itr0d/updated_nayrs_core_5k_anki_deck/) - :card_index:Designed around an i+1 approach where learners are exposed to more than they know.
  * [Japanese Core 2000/6000 A](https://docs.google.com/document/d/1zyyuiWkiz2IF2CCROeJebl8mgRdHBqNfS5D7MFjDTzE/edit) | [B](https://djtguide.neocities.org/anki.html) - :card_index:Popular Anki Japanese Deck Core 2k/6k
  * [Japanese 10K WK Breakdown](https://mega.nz/#!AdRjlZoL!FZoz3f3jq4oFUvwa59-AN3yKuQn-mFuIgNDftHtJ8n0) - :card_index:Core 10K vocabularies, broken down by WaniKani kanji.
* [Memrise](https://www.memrise.com/) - Popular online/app flashcard platform.
',
  duration: 60,
  before_activity_id: nil,
  after_activity_id: nil,
})

activity3 = cat1.activities.create!({
  name:  'Grammar and Reading',
  content: '# Grammar

* [Japanese Grammar Guide](http://www.guidetojapanese.org/learn/grammar) - By Tae Kim.  A complete guide to Japanese grammar from knowing nothing to advanced topics.:iphone:
  * [Supplement Grammar List](http://aryailia.blogspot.my/2017/05/supplements-to-tae-kims-guide-to.html) by Araia to the Japanese Grammar Guide. Targeted towards intermediate and advanced learners.
* [Imabi](http://www.imabi.net/) - A grammar website like Tae Kim, but made by a linguist.  Has many great, in-depth explanations, but some may find them almost too in-depth.
* [Visualize Japanese Grammar](https://www2.gwu.edu/~eall/vjg/vjghomepage/vjghome.htm) - links to 66 animations of various grammatical structures in Japanese and 12 downloadable appendices.
* [JGram](http://www.jgram.org/) - The Japanese Grammar Database.
* [Maggie Sensei](http://maggiesensei.com/) - Conversational Grammar.
* :book:Amazon:moneybag:
  * [A Dictionary of Basic Japanese Grammar](http://a.co/fMGHlG2) - Popular Japanese grammar dictionary series.:baby:
  * [A Dictionary of Intermediate Japanese Grammar](http://amzn.to/2txGg9H) - :man:
  * [A Dictionary of Advanced Japanese Grammar](http://amzn.to/2u1pLVg) - :older_man:
* [Dictionary of Japanese Grammar](https://dojgdeck.neocities.org/) - :card_index:The DoJG deck allows you to review the contents of the Dictionary of Japanese Grammar through Anki

## Reading

* [NHK Easy News](http://www3.nhk.or.jp/news/easy/) - News for elementary, middle school, and foreigners with audio and video.:baby:
* [Japanese Folktales](http://www.e-hon.jp/ehon_jp/index1.htm) - Japanese folktales with drawings and audio.:jp:
* [Hukumusume Fairy Tale Collection](http://hukumusume.com/douwa/) - A website where you can read and hear traditional folk tales, legends and fairy tales - from Japan and all around the world - read aloud for you in Japanese.:jp:
* [Kyoko Shinbun](http://kyoko-np.net/index.html) - Fake Japanese News(similar to The Onion), podcast available.:iphone::jp::older_man:
* [用例.jp](http://yourei.jp/) - Search engine for Japanese sample sentences.:jp:
* [Japanese in Anime & Manga](http://anime-manga.jp/) - Learn Japanese from anime and manga.
* [Satori Reader](https://www.satorireader.com/) - Japanese reading and listening practice, first two chapters of each article is free.:moneybag:
* [Keio University Reading Materials Bank](http://language.tiu.ac.jp/materials/jpn/index.html) - The site is mostly in Japanese, but follow the 1-stars for the easiest reading materials. Its great because there is an English glossary integrated into the articles.',
  duration: 120,
  before_activity_id: nil,
  after_activity_id: nil,
})

activity4 = cat1.activities.create!({
  name:  'Listening',
  content: '# Listening

* [SuperNative](https://supernative.tv/) - Trains you to hear, read, and speak Japanese using over 10,000 bite-sized clips from TV and movies. :warning: Only Chrome browser supports voice recognition practice.
* [Delvin](http://delvinlanguage.com) - Practice Japanese listening and reading with authentic Japanese video.
* [mykikitori](http://mykikitori.com/index.html) - Practice your Japanese learning skill.
* Podcast
  * [Learn Japanese Pod](https://learnjapanesepod.com/) - Japanese language learning podcast.
  * [JapanesePod101](https://www.japanesepod101.com/) - Japanese language learning podcast with multiple levels and web platform.
  * [News in Slow Japanese](http://newsinslowjapanese.com/) - Listen Japanese News in slow speed.:moneybag:
  * [NHK News Podcast](http://www.nhk.or.jp/podcasts/) - Three podcasts available: Japanese news:older_man:, English news, and Easy Japanese.
  * [Bilingual News](http://bilingualnews.libsyn.com/) - Bilingual English and Japanese news podcast. Casual and unedited colloquial language learning experience through a weekly review of relevant news topics.:older_man:

## Community

* [/r/learnjapanese](https://www.reddit.com/r/LearnJapanese/) - Learn Japanese subreddit.:iphone:
* [Kanji Koohii Forum](https://forum.koohii.com/) - Forum which covers all aspects of Japanese learning.
* [Lang-8](http://lang-8.com/) - A language learning platform where native speakers correct what you write.:iphone:
* [Discord](https://discordapp.com/) - Popular chatroom platform.:iphone::computer:
  * [English-Japanese Language Exchange](https://discord.gg/NJJCYVD) - Highly active English/Japanese discord chat server.
  * [日本語と英語](https://discord.gg/0eIsYvFQul270V1L) - Another popular English/Japanese discord chat server.
  * [Reddit Masterlist](https://www.reddit.com/r/languagelearning/comments/5m5426/discord_language_learning_servers_masterlist/) A list on Reddit of all the language Discord servers.  Scroll down to the East Asian Languages section for Japanese servers.
* [HelloTalk](https://www.hellotalk.com/) - Popular language exchange app.:iphone:
',
  duration: 120,
  before_activity_id: nil,
  after_activity_id: nil,
})

activity5 = cat1.activities.create!({
  name:  'Japanese Learning Resources',
  content: '# Video

* YouTube
  * [Nihongo no Mori](https://www.youtube.com/channel/UCVx6RFaEAg46xfAsD2zz16w) - JLPT test-oriented YouTube channel.
  * [Dogen](https://www.youtube.com/channel/UCSX0NhNdBA-ZnEFkYFzdw4A) - Japanese phonetic lessons YouTube channel.
    * [Dogens Patreon Lessons](https://www.patreon.com/dogen/overview) - A course that covers many different aspects of Japanese phonetics, like pitch accent and vowel placement.:moneybag:
  * [Game Grammar](https://www.youtube.com/channel/UC8UqIZlupjIQ3vxcAOEoNug) - Teach you Japanese by playing video games YouTube channel.
  * [JapanesePod101](https://www.youtube.com/channel/UC0ox9NuTHYeRys63yZpBFuA) - Popular Japanese podcasts YouTube channel.
* News
  * [BBC News in Japanese](https://www.youtube.com/channel/UCCcey5CP5GDZeom987gqTdg) BBC News in Japanese langauge YouTube channel.
  * [Asahi News](https://www.youtube.com/user/ANNnewsCH) - Asahi News YouTube channel.
  * [Asahi News Live](https://www.youtube.com/watch?v=Fu2etwHzcvw) - 24/7 Asahi News Live YouTube stream.
  * [Fuji News Network](http://www.fnn-news.com/) - FNN live and vod.
  * [News24](http://www.news24.jp/) - News24 Channel live and vod.
  * [Weather News Live](https://www.youtube.com/watch?v=kfTq_A9nBM0) - 24/7 Japanese Weather Channel Live stream.
* Stream
  * [QVC Japan](http://qvc.jp/cont/live/Main?sc_initcmp=icpc_TOP_Left-Menu_005) - QVC Japan Shopping Channel Live stream. :warning:Flash required.
  * [Keylabo](http://www.keylabo.com/watch-tv-online-for-free/) - Free Japanese TV Live stream listing.:warning:Some channels may not work, and 3rd party streaming service.
  * [Abema TV](https://abema.tv/) - Live Japanese TV stream.:iphone::japan:
  * [GYAO!](https://gyao.yahoo.co.jp/) - Japanese TV programs on demand.:iphone::japan:
  * [FRESH!](https://freshlive.tv/) - Japanese streamer platform.:iphone:
  * [NicoNico](http://www.nicovideo.jp/) - Japanese streamer platform.:iphone:
  * [DaiWEEB](https://www.daiweeb.org/) - Japanese anime with both Japanese and English subtitles.

## Dictionary

* Web
  * [Jisho](http://jisho.org/) - Gold standard online Japanese dictionary platform.
  * [Tangorin Japanese Dictionary](http://tangorin.com/) - Tangorin is an online Japanese-English dictionary with example sentences and many features to help you learn the Japanese language.
  * [Weblio](http://www.weblio.jp/) - Japan popular dictionary website without en<->jp, jp<->jp, and more.:jp:
  * [Google Translate](https://translate.google.com/) - Supports voice and image translation, mobile app supports offline translation.:iphone:
* Software
  * [Houhou](http://houhou-srs.com/) - the dictionary doubles as a learning tool.:computer:
  * [Takoboto](https://play.google.com/store/apps/details?id=jp.takoboto) - Android Japanese dictionary app, also has web and computer based version.:iphone::computer:
  * [imiwa?](http://www.imiwaapp.com/) - iOS Japanese dictionary app.:iphone:
  * [Tagaini Jisho](https://www.tagaini.net/) - Open-source Japanese dictionary and kanji lookup tool for Windows, MacOS X and Linux.
## Software

* Computer
  * [Human Japanese](http://www.humanjapanese.com) - Popular Japanese learning program.:iphone::computer::moneybag:
  * [Google Japanese Input](https://www.google.co.jp/ime/) - Google Japanese Input, available on windows, mac, and android.:computer::iphone:
  * [How to Install Japanese Keyboard on Everything](https://www.tofugu.com/japanese/how-to-install-japanese-keyboard/) - Guide by Tofugu.
* Browser Extension:satellite:
  * Firefox
    * [Rikaichamp](https://addons.mozilla.org/en-US/firefox/addon/rikaichamp/) - Japanese to English/German/French/Russian dictionary. Just hover the mouse on top of a word, and a popup appears. This add-on is more competible with latest Firefox version and comes with dictionaries files.
  * Chrome
    * [Yomichan](https://chrome.google.com/webstore/detail/yomichan/ogmnaimimemjmbakcfefmnahgdfhfami) - Yomichan turns your browser into a tool for building Japanese language literacy by helping you to decipher texts which would be otherwise too difficult tackle.
    * [rikaigu](https://chrome.google.com/webstore/detail/rikaigu/gmgccdlimakdipjjogccblkaoipdklcb) - Rikaikun enhanced. Translate Japanese by hovering over words.
    * [IPA furigana](https://chrome.google.com/webstore/detail/ipa-furigana/jnnbgnfnncobhklficfkdnclohaklifi) - Looks up the readings for kanji words and inserts them as furigana.
    * [ReadNihon](https://chrome.google.com/webstore/detail/readnihon/gpbdeemekjaigcjldahhmckkfbkmebfd) - ReadNihon generates website Furigana by JLPT level. It also allows you to save known words that are ignored from Furigana conversion.
  * Safari
    * [Safarikai](https://ashchan.github.io/safarikai/) - Rikaichans Safari extension version.
    ',
  duration: 30,
  before_activity_id: nil,
  after_activity_id: nil,
})

activity6 = cat1.activities.create!({
  name:  'Japanese pitch accent resources',
  content: '# Table Of Contents

- [Videos](#videos)
- [Books](#books)
  - [Dictionaries](#dictionaries)
  - [Textbooks](#textbooks)
- [Sites](#sites)
  - [Online dictionaries](#online-dictionaries)
  - [Other](#other)
- [Apps](#apps)
  - [iOS](#ios)
  - [Android](#android)
  - [Anki+](#anki)
- [Other](#other)
  - [Other dictionaries](#other-dictionaries)
  - [EPWING viewers, etc.](#epwing-viewers-etc)
  - [Genki](#genki)
  - [Shadowing](#shadowing)

<!-- Generated by https://github.com/ekalinin/github-markdown-toc -->

## Videos

- [Japanese Phonetics course by Dogen](https://www.patreon.com/dogen)
- [Japanese Pronunciation for Communication by WasedaX](https://courses.edx.org/courses/course-v1:WasedaX+JPC111x+3T2016/course/)
- [Video/Audio introduction to Tokyo pitch accent](http://nihongo.hum.tmu.ac.jp/mic-j/accent/index.html)

## Books

### Dictionaries
- [新明解 accent dictionary](https://www.amazon.co.jp/%E6%96%B0%E6%98%8E%E8%A7%A3%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%82%A2%E3%82%AF%E3%82%BB%E3%83%B3%E3%83%88%E8%BE%9E%E5%85%B8-%E7%AC%AC2%E7%89%88-CD%E4%BB%98%E3%81%8D-%E9%87%91%E7%94%B0%E4%B8%80-%E6%98%A5%E5%BD%A6/dp/4385136726/)
- [NHK pronunciation dictionary](https://www.amazon.co.jp/NHK-%E6%97%A5%E6%9C%AC%E8%AA%9E%E7%99%BA%E9%9F%B3%E3%82%A2%E3%82%AF%E3%82%BB%E3%83%B3%E3%83%88%E6%96%B0%E8%BE%9E%E5%85%B8/dp/4140113456/)

### Textbooks
- [日本語アクセント入門](https://www.amazon.co.jp/%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%82%A2%E3%82%AF%E3%82%BB%E3%83%B3%E3%83%88%E5%85%A5%E9%96%80-%E6%9D%BE%E6%A3%AE-%E6%99%B6%E5%AD%90/dp/4385365318/)
- [The Sounds of Japanese](https://www.amazon.co.jp/Sounds-Japanese-Audio-CD-CD-ROM/dp/0521617545/)


## Sites

### Online dictionaries

- [Prosody tutor Suzuki-kun](http://www.gavo.t.u-tokyo.ac.jp/ojad/eng/phrasing/index)
- [日本語教育用アクセント辞典](http://accent.u-biq.org/)
- [Wadoku](https://www.wadoku.de/) ([github+database](https://github.com/WaDoku/WaDokuJT-Data))
- [Weblio](https://www.weblio.jp/)
- [Wiktionary](https://en.wiktionary.org/)
- [Forvo](https://forvo.com/) (no accent marks but has a voice recording for almost every word)

### Other
- [Jisho-OJAD chrome extention](https://chrome.google.com/webstore/detail/jisho-ojad/dpaojegkimhndjkkgiaookhckojbmakd) ([github](https://github.com/itayperl/jisho-ojad))
- [日本語標準アクセントの概要](http://www5a.biglobe.ne.jp/accent/accent.htm)

## Apps

### iOS

- [新明解国語](https://itunes.apple.com/cn/app/%E6%96%B0%E6%98%8E%E8%A7%A3%E5%9B%BD%E8%AA%9E%E8%BE%9E%E5%85%B8-%E7%AC%AC%E4%B8%83%E7%89%88-%E7%99%BA%E9%9F%B3%E9%9F%B3%E5%A3%B0%E4%BB%98%E3%81%8D/id946807615?mt=8) - PA marks, voice recordings
- [大辞林](https://itunes.apple.com/cn/app/%E5%A4%A7%E8%BE%9E%E6%9E%97/id299029654?mt=8) - PA marks
- [例解学習国語辞典](https://itunes.apple.com/jp/app/%E4%BE%8B%E8%A7%A3%E5%AD%A6%E7%BF%92%E5%9B%BD%E8%AA%9E%E8%BE%9E%E5%85%B8-%E7%AC%AC%E4%B9%9D%E7%89%88-%E6%BC%A2%E6%A4%9C%E9%81%8E%E5%8E%BB%E5%95%8F%E3%83%89%E3%83%AA%E3%83%AB/id615900736?mt=8) - High tone in bold
- [Jaccent](https://itunes.apple.com/us/app/jaccent-japanese-accent-dict/id1252200087?mt=8)

### Android

- [Aedict](http://aedict.eu/) ([github](https://github.com/mvysny/aedict/))
- [Jsho](https://play.google.com/store/apps/details?id=ric.Jsho)

### Anki+

- [Anki pitch accent extention](https://ankiweb.net/shared/info/932119536) ([github+database](https://github.com/javdejong/nhk-pronunciation))
- [WaniKani pitch info userscript](https://community.wanikani.com/t/userscript-wanikani-pitch-info/)
- [Memrise pitch accent course](https://www.memrise.com/course/272235/japanese-pitch-accent-1-introduction/)

## Other

### Other dictionaries

- Apple built-in dictionary - スーパー大辞林
- 大辞林 EPWING
- ＮＨＫ 日本語発音アクセント辞典 EPWING
- 新明解国語辞典 第五版 EPWING

### EPWING viewers, etc.

- [GoldenDict](http://goldendict.org/)
- [qolibri](http://qolibri.osdn.jp/)
- [EPWING definitions on kindle](https://github.com/olety/epwing2kindle)

### Genki

- [Genki 1 visual tone guide](http://genki.japantimes.co.jp/site/reso/dl/onchou/Oncho_genki1.ver2.pdf)
- [Genki 2 visual tone guide](http://genki.japantimes.co.jp/site/reso/dl/onchou/Oncho_genki2.ver2.pdf)

### Shadowing

- [１日１０分の発音練習](https://www.amazon.co.jp/dp/4874242863/ref=cm_sw_r_cp_ep_dp_FHrwzb2MC2N2T)
- [Shadowing Lets Speak Japanese Intermediate to Advanced Edition](https://www.amazon.com/dp/4874244955/)
- [Shadowing Lets Speak Japanese Beginner to Intermediate Edition](https://www.amazon.com/dp/4874243541/)
',
  duration: 60,
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



