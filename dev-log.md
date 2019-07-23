BH

6/14
##To Do
  rename siblings to users

  modify model to include role
  kindWords and niceDeeds should include status pending/approved

  finish login Authorization

6/20
  MainContainer should include child's milestones etc.
  allow for signup
  (last 10 min from GlobeTrotter 4)

6/21
update controllers
so that we can get a user's niceDeeds, kindWords and milestones on load..
add actions/reducers/state/props needed for this to happen


##6/23
-fix Login -DONE
-review react router
-review components/Login.js  

##6/26
-signup form
  --> add form and corresponding redux actions

##6/30
-modify NavBar to match bootstrap NavBar
  --> upon start should have: login/signup
  --> if user exists, show user card, and links to milestones, kindwords and niceDeeds
  --> each of these should allow: CRUD actions input form, display of all elements, update and delete(only administrator?)
  in category
  -->niceDeeds and kindWords will be pending until approved by administrator

##7/3
-modify UserCard to include Card from react-bootstrap      DONE
  --> import card from 'react-bootstrap'
  --> replace <div> img, etc.
-create input form for niceDeeds
  --> create drop-down menu for the user_id, the child who did the niceDeed
  --> add status to niceDeeds and kindWords. for this phase: default to 'approved'

-look into semantic UI

##7/8
- once loggedIn, allow for:
Milestones, KindWords, niceDeeds
in KindWords:
  --> displaying all kindWords.
  --> adding a record to kindWords.
  --> del kindWords.

##7/15
  add to redux store
  clear form
  url change

##7/16
  allow an update of a milestone, after the page show.
  --> make sure milestone is in store
  --> populate form with milestone
  --> save updates to the record

  layout user's card with all necessary buttons, for milestones, kindWords and niceDeeds


##7/18
<Button variant="outline-secondary">My Milestones</Button>
<Button variant="outline-secondary">My Nice Deeds</Button>
<Button variant="outline-secondary">My Kind Words</Button>


##7/19
create components for the displays below the picture!!!!!

##7/20
-fix twin's birthdate DONE
-resize userCard, it is too wide

create a component for milestone display that will include the buttons/links
for viewing all milestones and adding a new milestone.

create similar components for kindWords and niceDeeds.

##7/21
build components:
editKindWordsFormWrapper DONE
newKindWordsFormWrapper - DONE
KindWordCard,-DONE
KindWordForm - DONE
MyKindWords, - DONE

build actions and reducers:
kindWordForm - DONE
myKindWords - DONE

change to_who to who - DONE
create a drop down for who

##7/22
create a options drop down for who
ensure that all is functioning well:
  form updates,
  can save form,
  can update entry
  can delete entry

  remove heading from kindWord options

enlarge text input area



##QUESTIONS TO TC:
  -in components/users did not allow a <div> in the return. why?
  const Users = props => {
    const UserCards = props.users.length > 0 ?
    props.users.map(u => <UserCard user={u} key={u.id}/>) :
    null

    return (
      UserCards
    )
  }
  -should I keep old migration files?
  -how to remove the login form component once user is already logged in
  - picture issues. some don't show.
  - how to minimize them?
